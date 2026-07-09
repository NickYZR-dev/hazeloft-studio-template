import { defineConfig, presetWind4, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Geist:400,500,600',
        mono: 'Geist Mono:400,500',
      },
    }),
  ],
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
  },
})
