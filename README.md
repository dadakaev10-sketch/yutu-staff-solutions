# YuTu Staff Solutions — Landing Page

Conversion-optimierte Bewerber-Landing-Page mit Netlify Forms (inkl. File-Upload).

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS
- React Hook Form + Zod Validation
- Netlify Forms (Bewerbungen + Datei-Upload, kein eigenes Backend nötig)

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build
npm run preview    # Build-Preview lokal
```

> Hinweis: Das Formular funktioniert erst nach Netlify-Deploy (Forms werden beim Build von Netlify erkannt). Lokal: Submit klappt nicht — Felder validieren aber korrekt.

## Deploy (Netlify)

1. Repo in Netlify importieren (https://app.netlify.com/start) → GitHub → dieses Repo auswählen.
2. Build-Settings werden aus `netlify.toml` gelesen — einfach bestätigen.
3. Nach Deploy: **Site settings → Forms → Form notifications** → E-Mail(s) hinzufügen.
4. Bewerbungen + Uploads landen unter **Forms → bewerbung** im Netlify-Dashboard.

### Bilder nachreichen

Bilder in `public/images/` ablegen (siehe [public/images/README.md](public/images/README.md)), commit + push — Netlify deployed automatisch.

## Projektstruktur

```
src/
  App.tsx
  main.tsx
  index.css
  components/
    Hero.tsx
    Benefits.tsx
    Einsatzbereiche.tsx
    FinalCTA.tsx
    ApplicationForm.tsx
    Footer.tsx
    Logo.tsx
    ui/
      Button.tsx
      Input.tsx
public/
  favicon.svg
  images/          # Markenbilder hier
index.html         # enthält Netlify Form Discovery
netlify.toml       # Build + Redirects
```
