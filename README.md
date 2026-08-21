# Academic Personal Website &bull; Alessio Costa 📐

Personal academic website designed for **Alessio Costa**, undergraduate student in **Mathematics for Engineering** at **Politecnico di Torino**.

---

## 🌟 Key Features

- 🏛️ **Academic & Clean Design:** Tailored for applied mathematics, engineering, and scientific computing.
- 📄 **Publications & Preprints Section:** Ready for bachelor's thesis, working papers, research reports, and arXiv articles.
- ✍️ **Mini-Blog / Mathematical Insights:** Area to publish short thoughts, derivations, and problem-solving articles in your free time.
- 📚 **Lecture Notes &amp; Other Material:** Filterable catalog with KaTeX formula previews and PDF downloads.
- 💼 **Curriculum Vitae Section:** Direct download button for `CV_Alessio_Costa.pdf`.
- 🌗 **Dark / Light Theme:** Instant toggle with automatic system preference detection and `localStorage` persistence.
- 🧮 **KaTeX Mathematical Typesetting:** Renders LaTeX formulas seamlessly.
- 📱 **Fully Responsive:** Smooth layout on mobile phones, tablets, and desktops.

---

## 🌐 How to Get Your Desired URL (`alecosta6.github.io` or `alessiocosta.it`)

### Option A: Free GitHub URL (`alecosta6.github.io`) &bull; 100% Free & Recommended
With your GitHub account **`alecosta6`**:
1. Create a repository named exactly: `alecosta6.github.io`
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial academic website for Alessio Costa"
   git branch -M main
   git remote add origin https://github.com/alecosta6/alecosta6.github.io.git
   git push -u origin main
   ```
3. Your website will instantly be live at: **`https://alecosta6.github.io`** (free forever, with HTTPS/SSL).

---

### Option B: Custom Domain (e.g. `alessiocosta.it`, `alessiocosta.me`, `alessiocosta.com`, `alessiocosta.dev`)
If you buy a domain (around 5-10€/year on Namecheap, Cloudflare, Porkbun, or Aruba):
1. Host the code for free on **GitHub Pages** (repository `alecosta6/alecosta6.github.io` or `personal-website`).
2. In GitHub Pages (or Vercel) Settings &rarr; **Custom Domain**, enter `alessiocosta.it` (or `.me` / `.com`).
3. Add a simple CNAME/A record in your domain provider's DNS panel.
4. Your website will be live directly at **`https://alessiocosta.it`** or your chosen domain!

---

## 📂 Project Structure

```
sito-personale/
├── index.html          # Main HTML structure with Publications, Notes, Blog, Projects, CV, Contacts
├── style.css           # Styling, Dark/Light theme, academic typography, mathematical grid
├── script.js           # Theme switcher, KaTeX rendering, notes filter, scrollspy, contact mailto
├── assets/
│   ├── docs/           # CV_Alessio_Costa.pdf, lecture notes PDFs, preprints
│   │   └── README.txt  # Quick guide on naming documents
│   └── img/            # Profile pictures or custom figures
└── README.md           # Documentation and domain setup guide
```

---

## 🚀 How to Run Locally

Simply double-click [index.html](file:///Users/ale/.gemini/antigravity/scratch/sito-personale/index.html) to open in your browser, or run:

```bash
cd /Users/ale/.gemini/antigravity/scratch/sito-personale
python3 -m http.server 8080
```
Then navigate to [http://localhost:8080](http://localhost:8080).
