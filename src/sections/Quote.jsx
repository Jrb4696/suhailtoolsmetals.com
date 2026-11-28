import { useState } from 'react';
import { company, mainAction, quote, services } from '../content/site';
import { citiesOf, states, territories } from '../content/places';

// booking-form: the kit's form recipe. system.js validates on submit, shows each error under its field,
// and posts to data-endpoint when one is set. Until then the form opens the visitor's mail app.
// The site: a state, then a city in that state (the city list follows the state), the service, and an optional note.
// City and service each end on Other, which opens a box to write it in.
const fields = [
  { id: 'name', label: 'Name', type: 'text', auto: 'name', error: 'Write the name we should ask for.' },
  { id: 'company', label: 'Company', type: 'text', auto: 'organization', error: 'Write your company or organisation.' },
  { id: 'email', label: 'Email', type: 'email', auto: 'email', mode: 'email', error: 'Write an email address with an @, like name@company.in.' },
  { id: 'phone', label: 'Phone', type: 'tel', auto: 'tel', mode: 'tel', error: 'Write a phone number we can call.' },
];

export default function Quote() {
  const [place, setPlace] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('');
  const cities = citiesOf(place);
  const t = quote.site;
  return (
    <section className="section g2m" id="quote" aria-labelledby="quote-h">
      <div className="wrap grid grid--top">
        <div className="span-5 stack-6 quote__text">
          <div className="section-head">
            <h2 id="quote-h">{quote.title}</h2>
            <p>{quote.lead}</p>
          </div>
          <div className="stack-4">
            <p className="t-label">{quote.whoLabel}</p>
            <ul className="rows rows--who">
              {quote.who.map((w) => <li key={w}><span className="rows__name">{w}</span></li>)}
            </ul>
          </div>
          <p>Or call {company.director} on <a className="link" href={company.phoneHref}>{company.phone}</a>.</p>
        </div>

        <div className="span-6 start-7 quote__panel">
          <form
            className="form"
            action={`mailto:${company.email}`}
            method="post"
            encType="text/plain"
            data-endpoint={company.formEndpoint}
            data-sent={quote.sent}
            noValidate
          >
            {fields.map((f) => (
              <div className="field" key={f.id}>
                <label htmlFor={`f-${f.id}`}>{f.label}</label>
                <input id={`f-${f.id}`} name={f.id} type={f.type} autoComplete={f.auto} inputMode={f.mode} required aria-describedby={`f-${f.id}-err`} />
                <p className="field__error" id={`f-${f.id}-err`} hidden>{f.error}</p>
              </div>
            ))}

            <div className="field">
              <label htmlFor="f-state">{t.state}</label>
              <select id="f-state" name="state" autoComplete="address-level1" required aria-describedby="f-state-err"
                value={place} onChange={(e) => { setPlace(e.target.value); setCity(''); }}>
                <option value="" disabled>Choose a state</option>
                <optgroup label="States">
                  {states.map((s) => <option key={s.name}>{s.name}</option>)}
                </optgroup>
                <optgroup label="Union territories">
                  {territories.map((s) => <option key={s.name}>{s.name}</option>)}
                </optgroup>
              </select>
              <p className="field__error" id="f-state-err" hidden>Choose the state the site is in.</p>
            </div>
            <div className="field">
              <label htmlFor="f-city">{t.city}</label>
              {/* one element throughout (system.js holds it from page load); a new state empties the choice */}
              <select id="f-city" name="city" autoComplete="address-level2" required aria-describedby="f-city-err"
                value={city} onChange={(e) => setCity(e.target.value)} disabled={!place}>
                <option value="" disabled>{place ? 'Choose a city' : t.cityWait}</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
                {place && <option value="Other">{t.cityOther}</option>}
              </select>
              <p className="field__error" id="f-city-err" hidden>Choose the city or town, or Other if it is not listed.</p>
            </div>
            {/* Other: a box to name the town. It is always in the page (system.js reads the fields once, on load),
                hidden and disabled until Other is chosen, so it is checked only then */}
            <div className="field field--full" hidden={city !== 'Other'}>
              <label htmlFor="f-city-other">{t.cityOtherLabel}</label>
              <input id="f-city-other" name="city_other" type="text" autoComplete="address-level2" required disabled={city !== 'Other'} aria-describedby="f-city-other-err" />
              <p className="field__error" id="f-city-other-err" hidden>Write the town or city the site is in.</p>
            </div>

            <div className="field field--full">
              <label htmlFor="f-service">{t.service}</label>
              <select id="f-service" name="service" required aria-describedby="f-service-err" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="" disabled>{t.serviceChoose}</option>
                {services.items.map((s) => <option key={s.key}>{s.name}</option>)}
                <option value="Other">{t.serviceOther}</option>
              </select>
              <p className="field__error" id="f-service-err" hidden>Choose the service, or Other to write your own.</p>
            </div>
            <div className="field field--full" hidden={service !== 'Other'}>
              <label htmlFor="f-service-other">{t.serviceOtherLabel}</label>
              <input id="f-service-other" name="service_other" type="text" placeholder={t.serviceOtherPlaceholder} required disabled={service !== 'Other'} aria-describedby="f-service-other-err" />
              <p className="field__error" id="f-service-other-err" hidden>Write the service you need.</p>
            </div>
            <div className="field field--full">
              <label htmlFor="f-details">{t.details} <span className="muted field__hint">{t.detailsHint}</span></label>
              <textarea id="f-details" name="details" rows={3} placeholder={t.detailsPlaceholder} />
            </div>

            <div className="btn-row"><button className="btn btn--primary" type="submit">{mainAction.label}</button></div>
            <p className="form__status" role="status" data-form-status />
            <p className="t-small muted">{quote.reply}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
