import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        server: {
            open: true,
        },
        build: {
            outDir: 'build',
        },
        plugins: [react({
            jsxRuntime: 'classic',
        })],
    };
});