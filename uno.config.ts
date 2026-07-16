import { defineConfig, presetWind4 } from 'unocss'

// Hazeloft Design System — tokens.
// Scale semantics (every non-background color runs 100–1000):
//   100 default background · 200 hover background · 300 active background
//   400 default border     · 500 hover border     · 600 active border
//   700 solid fill (high contrast) · 800 solid fill hover
//   900 secondary text/icons      · 1000 primary text/icons
// `background-100` is the page/card surface, `background-200` is a secondary
// surface for subtle separation only. `gray-alpha-*` is translucent (layers on
// any surface — borders, dividers, overlays); solid `gray-*` is for text/fills.
export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
  ],
  theme: {
    font: {
      sans: "'Geist Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
      mono: "'Geist Mono Variable', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    // Hazeloft radius family: sm for everyday surfaces/controls, md for menus
    // and modals, lg for fullscreen surfaces. Keep ONE radius family per view.
    radius: {
      sm: '6px',
      md: '12px',
      lg: '16px',
    },
    shadow: {
      card: '0 2px 2px rgba(0, 0, 0, 0.04)',
      popover:
        '0 1px 1px rgba(0, 0, 0, 0.02), 0 4px 8px -4px rgba(0, 0, 0, 0.04), 0 16px 24px -8px rgba(0, 0, 0, 0.06)',
      modal:
        '0 1px 1px rgba(0, 0, 0, 0.02), 0 8px 16px -4px rgba(0, 0, 0, 0.04), 0 24px 32px -8px rgba(0, 0, 0, 0.06)',
    },
    colors: {
      background: {
        100: '#ffffff',
        200: '#fafafa',
      },
      gray: {
        100: '#f2f2f2',
        200: '#ebebeb',
        300: '#e6e6e6',
        400: '#eaeaea',
        500: '#c9c9c9',
        600: '#a8a8a8',
        700: '#8f8f8f',
        800: '#7d7d7d',
        900: '#4d4d4d',
        1000: '#171717',
        alpha: {
          100: '#0000000d',
          200: '#00000015',
          300: '#0000001a',
          400: '#00000014',
          500: '#00000036',
          600: '#0000003d',
          700: '#00000070',
          800: '#00000082',
          900: '#000000b3',
          1000: '#000000e8',
        },
      },
      blue: {
        100: '#f0f7ff',
        200: '#e9f4ff',
        300: '#dfefff',
        400: '#cae7ff',
        500: '#94ccff',
        600: '#48aeff',
        700: '#006bff',
        800: '#0059ec',
        900: '#005ff2',
        1000: '#002359',
      },
      red: {
        100: '#ffeeef',
        200: '#ffe8ea',
        300: '#ffe3e4',
        400: '#ffd7d6',
        500: '#ffb1b3',
        600: '#ff676d',
        700: '#fc0035',
        800: '#ea001d',
        900: '#d8001b',
        1000: '#47000c',
      },
      amber: {
        100: '#fff6de',
        200: '#fff4cf',
        300: '#fff1c1',
        400: '#ffdc73',
        500: '#ffc543',
        600: '#ffa600',
        700: '#ffae00',
        800: '#ff9300',
        900: '#aa4d00',
        1000: '#561900',
      },
      green: {
        100: '#ecfdec',
        200: '#e5fce7',
        300: '#d3fad1',
        400: '#b9f5bc',
        500: '#82eb8d',
        600: '#4ce15e',
        700: '#28a948',
        800: '#279141',
        900: '#107d32',
        1000: '#003a00',
      },
      teal: {
        100: '#defffb',
        200: '#ddfef6',
        300: '#ccf9f1',
        400: '#b1f7ec',
        500: '#52f0db',
        600: '#00e3c4',
        700: '#00ac96',
        800: '#00927f',
        900: '#007f70',
        1000: '#003f34',
      },
      purple: {
        100: '#faf0ff',
        200: '#f9f0ff',
        300: '#f6e8ff',
        400: '#f2d9ff',
        500: '#dfa7ff',
        600: '#c979ff',
        700: '#a000f8',
        800: '#8500d1',
        900: '#7d00cc',
        1000: '#2f004e',
      },
      pink: {
        100: '#ffe8f6',
        200: '#ffe8f3',
        300: '#ffdfeb',
        400: '#ffd3e1',
        500: '#fdb3cc',
        600: '#f97ea7',
        700: '#f22782',
        800: '#e4106e',
        900: '#c41562',
        1000: '#460523',
      },
    },
  },
  shortcuts: {
    // ——— Typography tokens (Hazeloft type scale) ———
    // Headings: semibold; letterSpacing tightens as size grows.
    'heading-72': 'font-sans font-semibold text-[72px] leading-[72px] tracking-[-4.32px]',
    'heading-64': 'font-sans font-semibold text-[64px] leading-[64px] tracking-[-3.84px]',
    'heading-56': 'font-sans font-semibold text-[56px] leading-[56px] tracking-[-3.36px]',
    'heading-48': 'font-sans font-semibold text-[48px] leading-[56px] tracking-[-2.88px]',
    'heading-40': 'font-sans font-semibold text-[40px] leading-[48px] tracking-[-2.4px]',
    'heading-32': 'font-sans font-semibold text-[32px] leading-[40px] tracking-[-1.28px]',
    'heading-24': 'font-sans font-semibold text-[24px] leading-[32px] tracking-[-0.96px]',
    'heading-20': 'font-sans font-semibold text-[20px] leading-[26px] tracking-[-0.4px]',
    'heading-16': 'font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.32px]',
    'heading-14': 'font-sans font-semibold text-[14px] leading-[20px] tracking-[-0.28px]',
    // Labels: single-line, scannable text (nav, form labels, table headers).
    'label-20': 'font-sans font-normal text-[20px] leading-[32px]',
    'label-18': 'font-sans font-normal text-[18px] leading-[20px]',
    'label-16': 'font-sans font-normal text-[16px] leading-[20px]',
    'label-14': 'font-sans font-normal text-[14px] leading-[20px]',
    'label-13': 'font-sans font-normal text-[13px] leading-[16px]',
    'label-12': 'font-sans font-normal text-[12px] leading-[16px]',
    'label-14-mono': 'font-mono font-normal text-[14px] leading-[20px]',
    'label-13-mono': 'font-mono font-normal text-[13px] leading-[20px]',
    'label-12-mono': 'font-mono font-normal text-[12px] leading-[16px]',
    // Copy: multi-line body text with taller line height.
    'copy-24': 'font-sans font-normal text-[24px] leading-[36px]',
    'copy-20': 'font-sans font-normal text-[20px] leading-[36px]',
    'copy-18': 'font-sans font-normal text-[18px] leading-[28px]',
    'copy-16': 'font-sans font-normal text-[16px] leading-[24px]',
    'copy-14': 'font-sans font-normal text-[14px] leading-[20px]',
    'copy-13': 'font-sans font-normal text-[13px] leading-[18px]',
    'copy-14-mono': 'font-mono font-normal text-[14px] leading-[20px]',
    'copy-13-mono': 'font-mono font-normal text-[13px] leading-[18px]',
    // Buttons: medium-weight labels for buttons and compact controls.
    'button-16': 'font-sans font-medium text-[16px] leading-[20px]',
    'button-14': 'font-sans font-medium text-[14px] leading-[20px]',
    'button-12': 'font-sans font-medium text-[12px] leading-[16px]',

    // ——— Focus ring: 2px gap in the surface color + 2px blue ring ———
    'focus-ring':
      'outline-none focus-visible:[box-shadow:0_0_0_2px_#ffffff,0_0_0_4px_#006bff]',

    // ——— Component recipes (medium 40px size) ———
    'btn-base':
      'inline-flex items-center justify-center gap-2 button-14 rounded-sm h-10 px-[10px] cursor-pointer transition-colors duration-150 focus-ring disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700',
    'btn-primary': 'btn-base bg-gray-1000 text-background-100 hover:bg-gray-900',
    'btn-secondary':
      'btn-base bg-background-100 text-gray-1000 border border-gray-alpha-400 hover:border-gray-alpha-500 active:border-gray-alpha-600',
    'btn-tertiary': 'btn-base bg-transparent text-gray-1000 hover:bg-gray-alpha-200 active:bg-gray-alpha-300',
    'btn-error': 'btn-base bg-red-800 text-white hover:bg-red-900',
    'input-base':
      'label-14 h-10 rounded-sm bg-background-100 text-gray-1000 border border-gray-alpha-400 px-3 placeholder:text-gray-700 hover:border-gray-alpha-500 focus:border-gray-alpha-600 focus-ring',
  },
})
