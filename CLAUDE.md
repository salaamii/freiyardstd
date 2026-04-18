# CLAUDE.md
# Developer Profile
- **Role:** Frontend Developer
- **Goal:** Learning React while building this Beat Store.
- **Instruction:** Always explain the "why" and the logic behind React hooks/state before suggesting code changes. Do not just "fix" things; teach me the best practices.
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

No test suite is configured.

## Architecture

This is a beat-selling storefront (producer: DRKCHLD) built with React 19 + Vite.

**Data layer** — two static data files drive the UI:
- `src/BeatsData.js` — array of beat objects (`id`, `name`, `bpm`, `key`, `genre`, `price`, `composer`)
- `src/Licensedata.js` — array of license tier objects (`id`, `title`, `price`, `featured`, `format`, `streams`, `use`, `video`)

**Component tree** (`App.jsx` composes these top-to-bottom):
```
Navbar → Hero → BeatsPage → License → Footer → PlayerBar
```

- `BeatsPage` maps `beatsMeta` → `Beatcard` components (beats grid)
- `Licenses` maps `licenseData` → `licenseCard` components (pricing tiers)
- `PlayerBar` is a fixed bottom bar; currently hardcoded to `beatsMeta[0]` — no playback state wired up yet

**Styling** — plain CSS in `src/index.css` and `src/App.css`; no CSS framework. Font Awesome icons used via CDN (check `index.html`).

**No routing** — single-page, no React Router.
