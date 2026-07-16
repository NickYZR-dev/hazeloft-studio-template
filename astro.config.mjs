import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import icon from 'astro-icon'

export default defineConfig({
  // Preview-urile Hazeloft Studio rulează pe host-uri efemere *.vercel.run —
  // fără allowedHosts, Vite blochează cererile proxy-ului ("Blocked request").
  server: { allowedHosts: ['.vercel.run'] },
  integrations: [UnoCSS(), icon()],
})
