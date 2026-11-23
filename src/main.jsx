import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import App from './App';
import { legacyRoutes } from './content/site';
import './styles/page.css';

// Old page addresses (/services, /contact ...) land on the matching section of the one page.
const path = location.pathname.replace(/\/+$/, '') || '/';
const target = legacyRoutes[path];
if (target) history.replaceState(null, '', `/${target}`);
else if (path !== '/') history.replaceState(null, '', '/');

// Render synchronously: the kit's scripts below read the finished page once, on load.
const root = createRoot(document.getElementById('root'));
flushSync(() => root.render(<App />));

// The design system's behaviour (nav sheet, peek list, forms, hover layer, hero entrance, moments).
// Loaded after the first render and in this order; they live in /public/assets as plain files.
for (const src of ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js']) {
  const s = document.createElement('script');
  s.type = 'module';
  s.src = src;
  s.async = false;
  document.body.appendChild(s);
}

if (target) requestAnimationFrame(() => document.querySelector(target)?.scrollIntoView());
