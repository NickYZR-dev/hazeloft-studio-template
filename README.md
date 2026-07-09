# Hazeloft Studio Template

The official Hazeloft starter template, built with [Astro](https://astro.build) and [UnoCSS](https://unocss.dev).

## Getting started

```bash
bun install
bun run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `bun run dev`     | Start the local dev server                   |
| `bun run build`   | Build the production site to `./dist/`       |
| `bun run preview` | Preview the build locally, before deploying  |

## Stack

- **[Astro](https://astro.build)** — static-first web framework
- **[UnoCSS](https://unocss.dev)** — atomic CSS engine (`presetWind4`)
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** — inline SVG icons

## Structure

```
src/
├─ layouts/
│  └─ Layout.astro   # base HTML shell
└─ pages/
   └─ index.astro    # home page
```

Edit `src/pages/index.astro` to get started.
