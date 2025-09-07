import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/magenta-biccasm/',
  build: {
    // 1. Optional: raise warning limit if your app is OK being larger
    chunkSizeWarningLimit: 1000, // kB

    // 2. Optional: tell Rollup how to split large dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: put React-related libs in one chunk
          react: ['react', 'react-dom'],
          // Example: split charting libs or other heavy deps
          // charting: ['chart.js', 'd3'],
        },
      },
    },
  },
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/magenta-biccasm/',
// })
