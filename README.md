# Manguissa en Afrique — React + Tailwind

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

- `src/pages/` — Home, Circuits, Gallery, About, Contact (one component per route)
- `src/components/` — Navbar, Footer, Hero, TourCard, StatItem
- `src/data/circuits.js` — all circuit/tour content in one place
- `src/context/CircuitContext.jsx` — carries the selected circuit from a "Réserver" button on the Circuits page into the Contact form's dropdown
- `src/hooks/useCountUp.js` — scroll-triggered count-up animation used by the About page stats
- `tailwind.config.js` — brand colors: `navy`, `navydeep`, `gold`, `golddark`, `sand`, `bg`
- `public/images/` — all photos + logo.png. Routes reference them as `/images/filename.jpg`

## Still needed from the client

- `public/images/panoramic-route.jpg` — no photo was provided yet for the Route Panoramique circuit; it currently falls back to a gold/navy gradient placeholder.
- `public/images/hero.mp4` — the hero section is wired for a looping background video (`autoplay muted loop`). Drop an .mp4 in `public/images/` with that exact filename and it'll appear automatically; until then it falls back to the gradient + a Kruger poster frame.

## Routing

Uses `react-router-dom` with `HashRouter` (URLs look like `/#/circuits`) so the build can be deployed to any static host (Netlify, S3, GitHub Pages, etc.) without server-side route configuration.
