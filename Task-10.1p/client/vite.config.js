import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/subscribe': 'http://localhost:3000', // This will route API calls to the Express server
        },
    },
});
