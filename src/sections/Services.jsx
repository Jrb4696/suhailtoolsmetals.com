import Photo from '../components/Photo';
import { services } from '../content/site';

// services-list as a peek-list: the photograph changes to the row under the pointer, focus or tap (system.js).
// On a laptop and up the heading and list sit centred top to bottom beside the photograph (split-mid, page.css).
export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="wrap split-mid">
        <div className="section-head">
          <h2 id="services-h">{services.title}</h2>
          <p>{services.lead[0]} <br className="br-wide" />{services.lead[1]}</p>
        </div>
        <div className="grid grid--top fill" data-peek>
          <ul className="rows span-5">
            {services.items.map((s) => (
              <li id={s.key} data-peek-to={s.key} tabIndex={0} key={s.key}>
                <span className="rows__name">{s.name}</span>
                <p>{s.line}</p>
              </li>
            ))}
          </ul>
          <div className="frame frame--photo frame--fill span-6 start-7 split-mid__media">
            {services.items.map((s, i) => (
              <Photo
                className="frame__img"
                key={s.key}
                data-peek-for={s.key}
                src={s.photo.src}
                alt={s.photo.alt}
                hidden={i > 0}
                subject={s.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
