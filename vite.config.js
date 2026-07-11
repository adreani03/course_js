import { defineConfig } from 'vite';

export default defineConfig({
    base: '/course_js/',
    build: {
        outDir: 'docs', // Le dice a Vite que guarde el build en 'docs' en lugar de 'dist'
    }
})
