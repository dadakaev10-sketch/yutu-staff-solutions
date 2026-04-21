import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#132761"/>
      <stop offset="100%" stop-color="#0f1f4f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.25" r="0.6">
      <stop offset="0%" stop-color="#f57a2c" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#f57a2c" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Orange accent circle -->
  <circle cx="1020" cy="160" r="90" fill="#f57a2c" opacity="0.85"/>
  <circle cx="1020" cy="160" r="44" fill="#132761"/>

  <!-- Brand mark -->
  <g transform="translate(80, 120)">
    <rect width="72" height="72" rx="16" fill="#f57a2c"/>
    <text x="36" y="52" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="40" fill="#ffffff" font-weight="900">Y</text>
  </g>

  <!-- Main headline -->
  <text x="80" y="320" font-family="Arial Black, Helvetica, sans-serif" font-size="108" fill="#ffffff" font-weight="900" letter-spacing="-2">YUTU</text>
  <text x="80" y="400" font-family="Arial Black, Helvetica, sans-serif" font-size="56" fill="#ffffff" font-weight="900" opacity="0.95" letter-spacing="1">STAFF SOLUTIONS</text>

  <!-- Sub headline with orange bar -->
  <rect x="80" y="450" width="60" height="6" fill="#f57a2c"/>
  <text x="80" y="510" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#f57a2c" font-weight="700">Nebenjob gesucht?</text>
  <text x="80" y="560" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#ffffff" opacity="0.85">Schnell · Flexibel · Ohne Lebenslauf</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(resolve(root, 'public/images/og.jpg'));

console.log('✓ og.jpg generated (1200x630)');
