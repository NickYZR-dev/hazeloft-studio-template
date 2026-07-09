import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import icon from 'astro-icon';

export default defineConfig({
  integrations: [
  UnoCSS(), 
  icon({svgoOptions: { multipass: true, plugins: [ {name: "preset-default", params: { overrides: { inlineStyles: { onlyMatchedOnce: false, }, removeDoctype: false, } } } ] } })],
});