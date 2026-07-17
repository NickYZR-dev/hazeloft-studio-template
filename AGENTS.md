# Hazeloft Studio project

This project is built with **Astro 7 + UnoCSS (presetWind4) + astro-icon**, on top of the
**Hazeloft design system**. Follow the rules below when adding or editing files.

## Stack rules

- Astro 7's compiler is STRICT: every HTML tag must be closed and correctly nested —
  invalid markup is a build error, not a warning.
- Dependency versions in `package.json` are PINNED. Never change them. Only ADD new,
  real npm packages when genuinely needed (e.g. an extra `@iconify-json/<set>`).
- `uno.css`, `virtual:*`, and `astro:*` are virtual modules, NOT npm packages.
- Icons: `import { Icon } from 'astro-icon/components'`, then `<Icon name="lucide:menu" />`.
  Preinstalled sets: `lucide`, `mdi`, `simple-icons`.
- Typography uses the DEFAULT system font stack (via `font-sans`/`font-mono` in `uno.config.ts`) — no custom/web fonts. Do not add `@fontsource` or other font packages.
- Do not touch `server.allowedHosts` in `astro.config.mjs` — the live preview needs it.

## Hazeloft design system

Tokens live in `uno.config.ts` and are used as normal utility classes.

**Color scale** — every palette (gray, blue, red, amber, green, teal, purple, pink) runs
100–1000 and the step encodes intent: 100 bg · 200 hover bg · 300 active bg · 400 border ·
500 hover border · 600 active border · 700 solid fill · 800 fill hover · 900 secondary
text · 1000 primary text. `bg-background-100` is the page/card surface, `bg-background-200`
only for subtle separation. `gray-alpha-*` (translucent) for borders/dividers/overlays.
Blue = links/focus/info, red = errors, amber = warnings, green = success.

**Typography shortcuts** — `heading-72…heading-14` (semibold, tight tracking),
`copy-24…copy-13` (body), `label-20…label-12` (single-line UI text), `button-16/14/12`,
plus `-mono` variants. Use these instead of raw text-*/leading-* combos; `copy-14`/`label-14`
cover most text.

**Component recipes** — `btn-primary`, `btn-secondary`, `btn-tertiary`, `btn-error`,
`input-base`, `focus-ring`. Radius family: `rounded-sm` (6px, controls/cards),
`rounded-md` (12px, menus/modals), `rounded-lg` (16px, fullscreen); one family per view.
Shadows: `shadow-card`, `shadow-popover`, `shadow-modal`.

**Layout rhythm** — 4px spacing scale; 8px inside a group (`gap-2`), 16px between groups
(`gap-4`), 32–40px between sections; cards use 24px padding (`p-6`); center content in a
`max-w-[1200px]` column. Mobile-first, no horizontal overflow.

**Voice** — Title Case for labels/buttons/titles; sentence case for body/helper text.
Actions are verb + noun ("Deploy Project"), never bare "Confirm"/"OK". Keep WCAG AA
contrast (4.5:1 body text) and never signal state with color alone.

## Project layout

- Pages → `src/pages/*.astro` (each file is a route; `index.astro` is `/`).
- Reusable pieces → `src/components/*.astro` (one component per file).
- Shared shells → `src/layouts/*.astro` (pages import `Layout.astro`).

## Development

Dev server (for agents working outside Hazeloft Studio): `astro dev --background`,
managed with `astro dev stop` / `astro dev status` / `astro dev logs`.
Docs: https://docs.astro.build
