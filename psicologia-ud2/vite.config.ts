import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({root:'source',base:'./',publicDir:'../public',plugins:[react()],build:{outDir:'../dist',emptyOutDir:true}});
