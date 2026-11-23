import sizesMap from '../content/photo-sizes.json';

// A client photograph in WebP. scripts/prepare-photos.py makes each one at full size plus 400px and
// 640px copies and records the sizes in photo-sizes.json; this adds srcset, width and height from it.
// `sizes` says how wide the picture is drawn, so the browser fetches the smallest file that is sharp.
export default function Photo({ src, alt, sizes = '(max-width: 1023px) 100vw, 628px', subject, ...rest }) {
  const s = sizesMap[src];
  const srcSet = s?.small?.length
    ? [...s.small.map((w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`), `${src} ${s.w}w`].join(', ')
    : undefined;
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={s?.w}
      height={s?.h}
      alt={alt}
      decoding="async"
      data-source="client"
      data-subject={subject}
      {...rest}
    />
  );
}
