# Hazeloft Studio Template

The official Hazeloft starter template: [Astro 7](https://astro.build),
[UnoCSS](https://unocss.dev) (`presetWind4`), [astro-icon](https://github.com/natemoo-re/astro-icon),
and the **Hazeloft design system** (system font, 100–1000 color scale, component recipes —
see `uno.config.ts` and `AGENTS.md`).

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally, before deploying  |

## Structure

```
src/
├─ layouts/
│  └─ Layout.astro   # base HTML shell (fonts + design system surface)
└─ pages/
   └─ index.astro    # home page
```

Dependency versions are **pinned** and installs are locked with `package-lock.json` —
Hazeloft Studio relies on this for deterministic sandbox builds.
