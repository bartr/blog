import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'bartr.dev',
    // You can also allow all hosts with:
    // host: true,
    // Or allow multiple hosts:
    // host: '0.0.0.0',
    // strictPort: true,
    // port: 5173,
    // hmr: { host: 'bartr.dev' },
    // cors: true,
  },
});
