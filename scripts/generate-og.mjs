import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a3278"/>
      <stop offset="60%" stop-color="#132761"/>
      <stop offset="100%" stop-color="#0f1f4f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.88" cy="0.22" r="0.55">
      <stop offset="0%" stop-color="#f57a2c" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#f57a2c" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Decorative rings -->
  <circle cx="1020" cy="150" r="110" fill="none" stroke="#f57a2c" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="1020" cy="150" r="78" fill="#f57a2c"/>
  <circle cx="1020" cy="150" r="38" fill="#132761"/>

  <!-- Brand mark (same SVG as site header) -->
  <g transform="translate(80, 84) scale(1.25)">
    <g fill="#ffffff">
      <path d="M14 18c0-4 3-7 7-7s7 3 7 7v10h-7c-4 0-7-3-7-7v-3z" opacity="0.95"/>
      <path d="M36 36c0 4 3 7 7 7s7-3 7-7V26h-7c-4 0-7 3-7 7v3z" opacity="0.95"/>
      <path d="M22 36h10v10H22z" opacity="0.85"/>
      <path d="M32 18h10v10H32z" opacity="0.85"/>
    </g>
  </g>
  <text x="180" y="124" font-family="Arial Black, Helvetica, sans-serif" font-size="36" fill="#ffffff" font-weight="900">YuTu</text>
  <text x="182" y="154" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" opacity="0.8" letter-spacing="1">Staff Solutions</text>

  <!-- Kicker -->
  <rect x="80" y="220" width="56" height="6" fill="#f57a2c"/>
  <text x="148" y="232" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#f57a2c" font-weight="700" letter-spacing="2">DEIN NEBENJOB · REGIONAL · FLEXIBEL</text>

  <!-- Main headline -->
  <text x="80" y="320" font-family="Arial Black, Helvetica, sans-serif" font-size="84" fill="#ffffff" font-weight="900" letter-spacing="-1">Nebenjob</text>
  <text x="80" y="400" font-family="Arial Black, Helvetica, sans-serif" font-size="84" fill="#ffffff" font-weight="900" letter-spacing="-1">gesucht?</text>

  <!-- Subline -->
  <text x="80" y="455" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#ffffff" opacity="0.9">Schnell · Flexibel · Ohne Lebenslauf</text>

  <!-- Benefit chips (uniform size) -->
  <g transform="translate(80, 490)">
    <rect x="0" y="0" width="180" height="44" rx="22" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <circle cx="90" cy="22" r="5" fill="#f57a2c" transform="translate(-52,0)"/>
    <text x="90" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" font-weight="600" transform="translate(8,0)">Gastronomie</text>

    <rect x="200" y="0" width="180" height="44" rx="22" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <circle cx="290" cy="22" r="5" fill="#f57a2c" transform="translate(-44,0)"/>
    <text x="290" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" font-weight="600" transform="translate(8,0)">Reinigung</text>

    <rect x="400" y="0" width="180" height="44" rx="22" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <circle cx="490" cy="22" r="5" fill="#f57a2c" transform="translate(-30,0)"/>
    <text x="490" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" font-weight="600" transform="translate(8,0)">Event</text>

    <rect x="600" y="0" width="180" height="44" rx="22" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <circle cx="690" cy="22" r="5" fill="#f57a2c" transform="translate(-40,0)"/>
    <text x="690" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" font-weight="600" transform="translate(8,0)">Security</text>
  </g>

  <!-- CTA Button -->
  <g filter="url(#shadow)" transform="translate(820, 470)">
    <rect width="300" height="80" rx="40" fill="#f57a2c"/>
    <text x="150" y="52" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="26" fill="#ffffff" font-weight="900" letter-spacing="1">JETZT BEWERBEN</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(resolve(root, 'public/images/og.jpg'));

console.log('✓ og.jpg generated (1200x630)');
