import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

// Used by scripts/prerender.mjs at build time: the components render once to plain HTML,
// so the shipped page is static (fast, indexable) and needs no React in the browser.
export function render() {
  return renderToStaticMarkup(<App />);
}
