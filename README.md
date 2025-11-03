# Ulwe Prime Estates (Ulwe Real Estate)

Professional, minimal real-estate site built with React + Vite + Tailwind — focused on Ulwe, Navi Mumbai.

## What this project contains
- Clean UI components for listings, property cards, contact form and pages.
- Category pages: Flats (rent / sale), Shops, Offices.
- Contact form with basic validation and success state.
- Utilities and UI primitives under `src/components/ui`.

## Quick start (development)
1. Install dependencies
   - npm install

2. Start development server
   - npm run dev

3. Open the site
   - http://localhost:5173 (or the port reported by Vite)

## Build & Production
- Build: `npm run build`
- Preview production build: `npm run preview`

## Project structure
- src/
  - components/        UI components (PropertyCard, Hero, Navigation, ContactForm, etc.)
  - pages/             Page routes (Index, About, Services, FlatsRent, FlatsSale, Shops, Offices, Contact)
  - assets/            Static images used by the app
  - main.tsx, App.tsx, styles

## Replaced/cleaned AI assets
This repository was audited to remove unwanted references and image files labeled with "loveable". Originals were moved to a backup folder created at the project root (folder name: `backup-loveable-<timestamp>`). Inspect that backup before deleting.

## Notes & next steps
- If any images are missing after cleanup, add real assets into `src/assets` or update image imports to public/ or Unsplash URLs.
- Add environment config or real API endpoints for listings when available.
- Improve accessibility, tests and SEO meta tags before production.

## Contributing
- Create a branch, add tests, open a PR. Keep commits focused and descriptive.

## License
- Add an appropriate license file (MIT recommended) or replace with your preferred license.
