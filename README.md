# FitZone Frontend Demo

FitZone is a frontend-only gym and fitness demo built with React, React Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- React
- React Router v6
- Tailwind CSS
- Framer Motion
- Vite

## Features

- Dark, energetic visual style with red accents
- Fully mobile responsive layout (mobile-first with tablet and desktop breakpoints)
- Sticky navbar with scroll state and hamburger menu
- Smooth page transitions and reveal animations
- Complete pages:
  - Home
  - About
  - Programs
  - Trainers
  - Membership
  - Gallery with lightbox
  - Contact
- Demo form handling without backend:
  - Contact submissions are saved to `localStorage` key `fitzoneContactLeads`
  - Membership submissions are saved to `localStorage` key `fitzoneMembershipLeads`

## Project Structure

```text
fitZone-demo2/
  frontend/
    package.json
    tailwind.config.js
    postcss.config.js
    src/
      App.jsx
      main.jsx
      index.css
      components/
      pages/
      data/siteData.js
```

## Prerequisites

- Node.js 18+
- npm 9+

## Run Locally

```bash
cd frontend
npm install
npm run dev
```

App URL: `http://localhost:5173`

## Production Build

```bash
cd frontend
npm run build
npm run preview
```

## Deploy to Vercel

This repository keeps the app in `frontend/`. A root `vercel.json` is included so Vercel installs and builds from the correct folder.

If your Vercel project was created before this config:

1. Keep project root as the repository root (do not set Root Directory to `frontend`).
2. Clear any custom Build Command/Install Command in Vercel settings, or redeploy so `vercel.json` values are used.
3. Trigger a new deployment.

The config used:

- Install command: `cd frontend && npm install`
- Build command: `cd frontend && npm run build`
- Output directory: `frontend/dist`
- SPA rewrite to support React Router routes.

## Demo Notes

- No backend is required.
- To reset demo submissions, clear browser local storage for this site.
