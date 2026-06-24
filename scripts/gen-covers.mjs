// Generates on-brand SVG project cover cards into public/images/.
// Palette: accent #c2a4ff, background #0b080c, text #eae5ec.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 820;

const projects = [
  {
    out: "project-cover-1.svg",
    num: "01",
    title: "Servio",
    category: "Full-Stack · AI",
    tags: ["React", "Flutter", "Node.js", "XGBoost", "NLP"],
    glow: { x: 0.82, y: 0.18, c: "#c2a4ff" },
  },
  {
    out: "project-cover-2.svg",
    num: "02",
    title: "Book Store",
    category: "Full-Stack · E-Commerce",
    tags: ["Java J2EE", "PHP", "JavaScript", "CSS"],
    glow: { x: 0.2, y: 0.22, c: "#a4c8ff" },
  },
  {
    out: "project-cover-3.svg",
    num: "03",
    title: "Supermarket System",
    category: "Data · Dashboards",
    tags: ["R", "Shiny", "ggplot2", "QR Code"],
    glow: { x: 0.8, y: 0.8, c: "#c2a4ff" },
  },
  {
    out: "project-cover-4.svg",
    num: "04",
    title: "Arcade Center DB",
    category: "Database",
    tags: ["Oracle SQL", "PL/SQL"],
    glow: { x: 0.25, y: 0.78, c: "#b4a4ff" },
  },
];

const FONT =
  "'Geist','Segoe UI',system-ui,-apple-system,Helvetica,Arial,sans-serif";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function chip(text, x, y) {
  const w = 22 + text.length * 11.5;
  return `
    <g transform="translate(${x},${y})">
      <rect width="${w.toFixed(1)}" height="40" rx="20" fill="rgba(234,229,236,0.04)" stroke="rgba(194,164,255,0.28)"/>
      <text x="${(w / 2).toFixed(1)}" y="26" font-family="${FONT}" font-size="17"
        fill="#cfc6d6" text-anchor="middle" letter-spacing="0.3">${esc(text)}</text>
    </g>`;
}

function cover(p) {
  // big faint index number sits opposite the glow so they don't overlap
  const numY = p.glow.y > 0.5 ? 260 : H - 70;
  const titleSize = p.title.length > 16 ? 84 : 104;
  const titleY = 360;

  let tx = 80;
  const chips = p.tags
    .map((t) => {
      const g = chip(t, tx, H - 110);
      tx += 22 + t.length * 11.5 + 16;
      return g;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(
    p.title
  )} project cover">
  <defs>
    <radialGradient id="glow" cx="${p.glow.x}" cy="${p.glow.y}" r="0.75">
      <stop offset="0%" stop-color="${p.glow.c}" stop-opacity="0.30"/>
      <stop offset="45%" stop-color="${p.glow.c}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${p.glow.c}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#120d14"/>
      <stop offset="100%" stop-color="#0b080c"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="rgba(234,229,236,0.035)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="6" y="6" width="${W - 12}" height="${H - 12}" rx="22" fill="none" stroke="rgba(194,164,255,0.16)"/>

  <text x="${W - 70}" y="${numY}" font-family="${FONT}" font-weight="700"
    font-size="300" fill="rgba(194,164,255,0.07)" text-anchor="end">${p.num}</text>

  <text x="80" y="160" font-family="${FONT}" font-size="22" letter-spacing="3"
    fill="#c2a4ff">${esc(p.category.toUpperCase())}</text>

  <text x="78" y="${titleY}" font-family="${FONT}" font-weight="600" font-size="${titleSize}"
    fill="#eae5ec">${esc(p.title)}</text>

  <line x1="82" y1="${H - 160}" x2="220" y2="${H - 160}" stroke="#c2a4ff" stroke-width="3"/>
  ${chips}
</svg>`;
}

for (const p of projects) {
  writeFileSync(join(outDir, p.out), cover(p), "utf8");
  console.log("wrote", p.out);
}
