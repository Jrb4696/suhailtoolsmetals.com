import Photo from '../components/Photo';
import { milestones } from '../content/site';

const spans = ['span-5', 'span-4', 'span-3'];

// Ten finished jobs from the company deck in two columns, then three photographs of the work.
// On a phone it is two screens (.g2m): the heading and the first five jobs, then the other five and the photographs.
export default function Milestones() {
  const half = Math.ceil(milestones.items.length / 2);
  const cols = [milestones.items.slice(0, half), milestones.items.slice(half)];
  const list = (col) => (
    <ul className="rows rows--tight">
      {col.map((m) => (
        <li key={m.job}>
          <span className="rows__name">{m.job}<small>{m.client}</small></span>
          <span className="rows__value">{m.year}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="section g2m" id="milestones" aria-labelledby="milestones-h">
      <div className="wrap ms">
        <div className="ms__a">
          <div className="section-head">
            <h2 id="milestones-h">{milestones.title}</h2>
          </div>
          {list(cols[0])}
        </div>
        <div className="ms__b">
          {list(cols[1])}
          <div className="grid strip">
            {milestones.photos.map((ph, i) => (
              <figure className={`frame frame--photo ${spans[i]}`} key={ph.src}>
                <Photo className="frame__img" src={ph.src} alt={ph.alt} sizes={i === 0 ? '(max-width: 639px) 100vw, 520px' : '(max-width: 639px) 50vw, 410px'} loading="lazy" subject="dismantling" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
