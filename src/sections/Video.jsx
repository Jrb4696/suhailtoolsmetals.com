import { videos } from '../content/site';

// The clips as a peek list: the list left, one player right (on a laptop the heading and list centre beside it, split-mid in page.css); hovering, focusing or tapping a row shows its clip.
// preload="none": nothing downloads until the visitor presses play.
export default function Video() {
  return (
    <section className="section" id="video" aria-labelledby="video-h">
      <div className="wrap split-mid">
        <div className="section-head">
          <h2 id="video-h">{videos.title}</h2>
          <p>{videos.lead}</p>
        </div>
        <div className="grid grid--top fill" data-peek>
          <ul className="rows span-5">
            {videos.items.map((v) => (
              <li data-peek-to={v.key} tabIndex={0} key={v.key}>
                <span className="rows__name">{v.name}</span>
                <p>{v.line}</p>
              </li>
            ))}
          </ul>
          <div className="frame frame--photo frame--fill player span-6 start-7 split-mid__media">
            {videos.items.map((v, i) => (
              <video
                className="frame__img"
                key={v.key}
                data-peek-for={v.key}
                hidden={i > 0}
                controls
                muted
                playsInline
                preload="none"
                poster={v.poster}
                aria-label={`${v.name}: ${v.line}`}
              >
                <source src={v.src} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
