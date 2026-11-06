# Amarvoid website (React + Vite)

## Run locally
    npm install
    npm run dev

## Before going live
1. Set your real email in `src/App.jsx` (`EMAIL`).
2. Replace the copy in `src/App.jsx` with your real services and details.
3. Update the title and description in `index.html`.

## Build
    npm run build      # creates the dist/ folder

`vite.config.js` uses `base: './'`, so dist/ works on any host or sub-folder.

## Host it
- **Vercel / Netlify (easiest):** push this folder to GitHub, import the repo. Build command `npm run build`, output directory `dist`. Add your domain in the dashboard.
- **GitHub Pages:** upload dist/ contents to a `gh-pages` branch (or use the `gh-pages` npm package).
- **cPanel / any shared host:** upload everything inside dist/ to `public_html`.

The page is a single page with anchor links, so no server redirect rules are needed.
The contact form opens the visitor's email app. For a form that sends directly to your inbox, connect a service such as Formspree or EmailJS.
