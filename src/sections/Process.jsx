import Photo from '../components/Photo';
import { process } from '../content/site';

// steps: three open cards, a number, a verb and an object, one line and a photograph of the step.
export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="process-h">{process.title} <span className="muted">{process.titleMuted}</span></h2>
        </div>
        <div className="grid grid--top">
          {process.steps.map((s, i) => (
            <article className="card card--row card--open span-4" key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.line}</p>
              <div className="panel">
                <Photo className="frame__img" src={s.photo.src} alt={s.photo.alt} sizes="(max-width: 639px) 100vw, (max-width: 1279px) 33vw, 410px" loading="lazy" subject={s.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
