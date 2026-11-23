import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The design system ships as plain files in /public/assets, so the built bundle goes to /_app
// to keep the two apart in dist/.
export default defineConfig({
  plugins: [react()],
  build: { assetsDir: '_app' },
});
