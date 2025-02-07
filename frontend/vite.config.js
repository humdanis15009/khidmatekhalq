import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl', 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl', 'localhost.crt')),
    },
    port: 5173, 
  },
});
