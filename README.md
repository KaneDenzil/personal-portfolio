# personal-portfolio

The source for my personal portfolio site — a single-page React app with an
animated starfield background, a filterable skills grid, and a contact form.

Built with **React 18**, **Vite 5**, and **Tailwind CSS 4**. Deployed on GitHub Pages.

## Tech stack

- **React 18** + **Vite 5** — UI and build tooling
- **Tailwind CSS 4** — styling
- **lucide-react** — icons
- **Radix UI** — toast primitives
- **react-hook-form** + **Web3Forms** — contact form handling and delivery
- **react-router-dom** — routing (home page and a 404 route)
- **GitHub Pages** — hosting, published with the `gh-pages` package

## Sections

The main page is a single scrolling route (`src/pages/Home.jsx`) made up of:

- **Hero** — intro and a call to action
- **About** — background, focus areas, and CV download (PDF or DOCX)
- **Skills** — filterable grid by category
- **Contact** — contact details, social links, and a working contact form

## Running locally

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/KaneDenzil/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish to GitHub Pages |

## Deployment

The site is served from the `gh-pages` branch at
https://kanedenzil.github.io/personal-portfolio/. Run `npm run deploy` to build
to `dist/` and publish it to that branch. Pushing to `master` does not deploy.
