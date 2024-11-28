import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    //Load the env variables that are prefixed with VITE_
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    return {
        server: {
            host: 'localhost',
            hmr: {
                protocol: 'wss',
                host: env.VITE_APP_URL,
            },
        },
        plugins: [
            laravel({
                input: 'resources/js/app.tsx',
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
            }),
            react(),
        ],
        optimizeDeps: {
            exclude: ['@electric-sql/pglite'],
        },
        worker: {
            format: 'es',
        },
    };
});
