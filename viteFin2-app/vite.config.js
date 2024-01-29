import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [react()],
  server: {
    port: 8080,
    hot: true
  }
})
//   added root: path.resolve(__dirname, 'src'),
//   resolve: {
//     alias: {
//       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//     }
//   },
//   server: {
//     port: 8080,
//     hot: true
//   }
// }

