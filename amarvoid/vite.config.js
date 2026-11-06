import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on any host or sub-folder (Vercel, Netlify, GitHub Pages, cPanel)
export default defineConfig({ plugins: [react()], base: './' })
