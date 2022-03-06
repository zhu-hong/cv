import WindiCSS from 'vite-plugin-windicss'

const { defineConfig } = require("vite");

export default defineConfig({
  plugins: [
    WindiCSS(),
  ],
})