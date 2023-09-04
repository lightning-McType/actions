// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/dist/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		setupFiles: './src/setupTests.js',
		environment: 'jsdom',
	},
});
