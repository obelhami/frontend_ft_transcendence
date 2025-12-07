import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req: any, res: any, next: any) => {
          console.log('Request URL:', req.url);
          // Serve index.html for all non-asset requests
          if (req.url && !req.url.includes('.') && !req.url.startsWith('/@') && !req.url.startsWith('/node_modules')) {
            console.log('Redirecting to index.html');
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})