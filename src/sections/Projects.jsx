import Photo from '../components/Photo';
import { currentProjects } from '../content/site';

// The jobs on site now, each with its client's logo on the ground beside it (the name beside it says who, so the logo is alt=""), beside one photograph that develops as it comes on screen (the picture-develops moment).
export default function Projects() {
  return (
    <section className="section g2m" id="projects" aria-labelledby="projects-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="projects-h">{currentProjects.title}</h2>
            <p>{currentProjects.lead}</p>
          </div>
          <ul className="rows rows--tight rows--logos">
            {currentProjects.items.map((p) => (
              <li key={p.job}>
                <span className="rows__name rows__name--logo">
                  <span className="client-logo"><img src={p.logo} alt="" width={p.logoSize[0]} height={p.logoSize[1]} style={{ '--lw': p.logoSize[0], '--lh': p.logoSize[1] }} loading="lazy" decoding="async" /></span>
                  <span>{p.job}<small>{p.client}</small></span>
                </span>
                <span className="rows__value">{p.place}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="develop span-6 start-7" data-moment="picture-develops">
          <Photo src={currentProjects.photo.src} alt={currentProjects.photo.alt} sizes="(max-width: 639px) 540px, (max-width: 1023px) 40vw, 628px" loading="lazy" subject="demolition" />
        </figure>
      </div>
    </section>
  );
}
