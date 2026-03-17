# FitZone Workspace

The complete full-stack FitZone app is in [fitzone](fitzone).

## Quick Start (No Path Errors)

From workspace root:

```bash
npm install
npm run install:all
npm run dev
```

What this runs:

- API: [fitzone/server](fitzone/server) on `http://localhost:5000`
- Client: [fitzone/client](fitzone/client) on `http://localhost:5173`

## Mobile Responsiveness

The website is mobile-first and responsive with:

- Sticky navbar with animated hamburger drawer on small screens
- Responsive grids (`md`, `lg`, `xl`) across programs, trainers, stats, pricing, gallery
- Scaled typography and adaptive paddings for mobile, tablet, and desktop
- Touch-friendly buttons and form controls

## Detailed Setup

For full environment setup and endpoint details, see [fitzone/README.md](fitzone/README.md).
