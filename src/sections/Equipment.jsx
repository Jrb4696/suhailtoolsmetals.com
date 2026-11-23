import Photo from '../components/Photo';
import { equipment } from '../content/site';

export default function Equipment() {
  return (
    <section className="section" id="equipment" aria-labelledby="equipment-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="equipment-h">{equipment.title}</h2>
          <p>{equipment.lead}</p>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-4">
            {equipment.items.map((item) => (
              <li key={item}><span className="rows__name">{item}</span></li>
            ))}
          </ul>
          {equipment.photos.map((ph) => (
            <figure className="frame frame--photo frame--portrait span-4" key={ph.src}>
              <Photo className="frame__img" src={ph.src} alt={ph.alt} sizes="(max-width: 1023px) 50vw, 410px" loading="lazy" subject="equipment" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
