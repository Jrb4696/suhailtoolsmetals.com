// Build step 3 of 3 (npm run build): pour the rendered components into dist/index.html.
// - the page's HTML goes straight into <body> (header, main, footer: the shell the design system expects)
// - the React bundle is dropped (the page is static); its CSS link stays
// - the design system's scripts load at the end of <body>, as plain files from /assets
// - old addresses (/services, /contact ...) are sent to their section
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { render } = await import(pathToFileURL(join(root, '.ssr/entry-server.js')).href);
const { legacyRoutes } = await import(pathToFileURL(join(root, 'src/content/site.js')).href);

const file = join(root, 'dist/index.html');
let html = readFileSync(file, 'utf8');

const redirect = `<script>(function(){var m=${JSON.stringify(legacyRoutes)};var p=location.pathname.replace(/\\/+$/,'')||'/';if(m[p])location.replace('/'+m[p]);else if(p!=='/'&&p!=='/index.html')location.replace('/');})()</script>`;
const kit = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js']
  .map((src) => `<script type="module" src="${src}"></script>`).join('\n');

// React 19 hoists a <link rel="preload"> for every eager image to the top of its output. Keep only the
// hero photograph's (fetchpriority high) and move it into <head>; the rest load as the page needs them.
let page = render();
const preloads = page.match(/<link rel="preload" as="image"[^>]*\/>/g) || [];
for (const l of preloads) page = page.replace(l, '');
const heroPreload = preloads.find((l) => /fetchPriority="high"/i.test(l))?.replace('fetchPriority', 'fetchpriority') || '';

html = html
  .replace(/\s*<script type="module"[^>]*src="\/_app\/[^"]+\.js"><\/script>/, '')
  .replace('<head>', `<head>\n${redirect}`)
  .replace('</head>', `${heroPreload}\n</head>`)
  .replace('<div id="root"></div>', `${page}\n${kit}`);

if (html.includes('id="root"')) throw new Error('prerender: <div id="root"></div> not found in dist/index.html');
writeFileSync(file, html);
for (const f of readdirSync(join(root, 'dist/_app'))) if (f.endsWith('.js')) rmSync(join(root, 'dist/_app', f));
rmSync(join(root, '.ssr'), { recursive: true, force: true });
console.log('prerender: dist/index.html written as static HTML');
