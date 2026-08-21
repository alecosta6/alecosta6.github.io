/**
 * ACADEMIC PERSONAL WEBSITE JAVASCRIPT
 * Author: Alessio Costa
 * Features: Dark/Light Mode, KaTeX Auto-render, Notes Filtering, Mobile Menu, ScrollSpy
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Setup Theme (Dark / Light Mode)
  initTheme();

  // 3. Setup KaTeX Auto-Rendering
  initKaTeX();

  // 4. Setup Notes Filter
  initNotesFilter();

  // 5. Setup Mobile Menu
  initMobileMenu();

  // 6. Setup Active Navigation on Scroll
  initScrollSpy();

  // 7. Update Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/**
 * Theme Management with localStorage & OS Preference
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved theme or fallback to system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Re-trigger icon creation if needed
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }
}

/**
 * KaTeX Mathematical Formula Auto-Rendering
 */
function initKaTeX() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  } else {
    // If KaTeX CDN loads slightly after DOMContentLoaded, retry once
    window.addEventListener('load', () => {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
      }
    });
  }
}

/**
 * Filter Notes by Category
 */
function initNotesFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const noteCards = document.querySelectorAll('.note-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      noteCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category === 'all') {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/**
 * ScrollSpy for Active Navigation Link
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * Handle Contact Form Submission
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const mailtoUrl = `mailto:s351050@studenti.polito.it?cc=alessiocosta2006@gmail.com&subject=${encodeURIComponent(
    `[Website Contact] ${subject}`
  )}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\nMessage:\n${message}`
  )}`;

  window.location.href = mailtoUrl;
}
