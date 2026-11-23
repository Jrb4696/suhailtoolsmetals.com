"""
Make the web photographs from the originals in media-originals/.

    python3 scripts/prepare-photos.py

For each entry below it writes public/photos/<name>.webp (full size, at most 1280px on its long side;
the hero 1600) plus <name>-240, -400 and -640.webp where the original is wider, strips EXIF and
location data, and records the sizes in src/content/photo-sizes.json, which <Photo> reads for
srcset, width and height. To add a photograph: put it in media-originals/, add a line here, run this,
then use '/photos/<name>.webp' in src/content/site.js. Needs Pillow (pip3 install Pillow).
"""
import json
from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True  # one phone original ends a few bytes short
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / 'media-originals', ROOT / 'public' / 'photos'

PHOTOS = {
    'hero/media_1.jpeg': 'excavator-brick-building',
    'gallery/media_7.jpeg': 'demolition-orange-building',
    'gallery/media_4.jpeg': 'machine-lift-chain-block',
    'projects/media_2.jpeg': 'crane-scrap-yard',
    'infrastructure/media_2.jpeg': 'excavator-tearing-wall',
    'gallery/media_3.jpeg': 'excavator-rubble',
    'gallery/media_1.jpeg': 'roof-truss-dismantling',
    'infrastructure/media_5.jpeg': 'steel-frame-dismantling',
    'projects/media_3.jpeg': 'machinery-loading-truck',
    'infrastructure/media_1.jpeg': 'gas-cutting',
    'projects/media_5.jpeg': 'cleared-site',
    'gallery/media_2.jpeg': 'breaker-on-roof',
    'infrastructure/media_3.jpeg': 'excavator-on-site',
    'gallery/media_6.jpeg': 'site-debris',
    'gallery/media_11.jpg': 'excavator-pulling-building',
}
# Extra cuts of an original under another name: (source, name, crop box as fractions left, top, right,
# bottom, long-side cap, small widths). The homepage frame is wide, so it gets a landscape cut of the
# 3024x4032 hero original; the crane original has black bars above and below, cropped off.
CUTS = [
    ('hero/media_1.jpeg', 'excavator-brick-building-wide', (0, .22, 1, .86), 2000, (640, 1024, 1440)),
    ('projects/media_1.jpeg', 'crane-lifting-structure', (0, .09, 1, .9), 1280, (240, 400)),
]
BIG = set()  # names allowed up to 1600px; none needed now
SMALL = (240, 400, 640)

OUT.mkdir(parents=True, exist_ok=True)
for old in OUT.glob('*.jpg'):
    old.unlink()

sizes = {}
jobs = [(src, name, None, 1600 if name in BIG else 1280, SMALL) for src, name in PHOTOS.items()] + CUTS
for src, name, box, cap, small in jobs:
    im = ImageOps.exif_transpose(Image.open(SRC / src)).convert('RGB')
    if box:
        im = im.crop((round(box[0] * im.width), round(box[1] * im.height), round(box[2] * im.width), round(box[3] * im.height)))
    im.thumbnail((cap, cap), Image.LANCZOS)
    im.save(OUT / f'{name}.webp', 'WEBP', quality=60, method=6)
    widths = []
    for w in small:
        if im.width > w * 1.15:
            s = im.copy()
            s.thumbnail((w, 10000), Image.LANCZOS)
            s.save(OUT / f'{name}-{w}.webp', 'WEBP', quality=64, method=6)
            widths.append(w)
    sizes[f'/photos/{name}.webp'] = {'w': im.width, 'h': im.height, 'small': widths}
    print(f'{name}: {im.width}x{im.height}, small {widths}')

(ROOT / 'src' / 'content' / 'photo-sizes.json').write_text(json.dumps(sizes, indent=1) + '\n')
