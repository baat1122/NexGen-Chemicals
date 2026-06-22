import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        productDetail: resolve(__dirname, 'product-detail.html'),
        about: resolve(__dirname, 'about.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        seeds: resolve(__dirname, 'seeds.html'),
        crops: resolve(__dirname, 'crops.html')
      }
    }
  }
});
