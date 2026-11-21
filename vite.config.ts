import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Security baseline for static hosting. GitHub Pages cannot send response headers, so the policy
// is delivered as a <meta> tag (frame-ancestors and report-uri are ignored in meta by browsers).
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "worker-src 'self' blob:",
].join('; ')

const securityMeta = (): Plugin => ({
  name: 'security-meta',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) =>
      html.replace(
        /(<meta charset="UTF-8" \/>)/i,
        `$1\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />\n    <meta name="referrer" content="no-referrer" />`,
      ),
  },
})

export default defineConfig({
  base: process.env.VITE_BASE ?? '/TavernaProject/',
  plugins: [vue(), securityMeta()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
