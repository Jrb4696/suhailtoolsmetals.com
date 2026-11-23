import Arrow from '../components/Arrow';
import Photo from '../components/Photo';
import { hero, mainAction } from '../content/site';

// The framed hero: one big rounded photograph across the wrap, with the words in a panel cut out of its
// top left corner and an angled card cut into its lower right corner (page.css, "the framed hero").
// On a tablet and a phone the words sit above the photograph and the card stays in its corner.
// It enters once on load (data-enter): the words rise, the photograph uncovers.
export default function Hero() {
  return (
    <section className="hero hero--frame" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text hero-frame">
          <div className="hero-frame__media hero__media">
            <Photo
              className="frame__img"
              src={hero.photo.src}
              alt={hero.photo.alt}
              sizes="(max-width: 1439px) 100vw, 1376px"
              style={{ objectPosition: hero.photo.pos }}
              fetchPriority="high"
              subject="demolition"
            />
          </div>

          <div className="hero-frame__tab hero__text">
            <h1 id="hero-h">{hero.title}</h1>
            <div className="hero-frame__row">
              <div className="hero-frame__inset">
                <Photo src={hero.inset.src} alt={hero.inset.alt} sizes="128px" subject="crane lift" />
              </div>
              <div className="hero-frame__copy">
                <p className="hero__lead">{hero.lead}</p>
                <div className="btn-row">
                  <a className="btn btn--primary" href={mainAction.href}>{mainAction.label}<Arrow /></a>
                  <a className="btn btn--secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
                </div>
              </div>
            </div>
          </div>

          <a className="hero-card" href={hero.card.href}>
            <span className="hero-card__shape">
              <Photo className="frame__img" src={hero.card.photo.src} alt={hero.card.photo.alt} sizes="320px" subject="demolition" />
            </span>
            <span className="hero-card__label">
              {hero.card.label}
              <span className="hero-card__go" aria-hidden="true">
                <svg viewBox="0 0 12 12"><path d="M3.5 8.5l5-5M4.5 3.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
