import { company, mainAction, quote } from '../content/site';

// booking-form: the kit's form recipe. system.js validates on submit, shows each error under its field,
// and posts to data-endpoint when one is set. Until then the form opens the visitor's mail app.
const fields = [
  { id: 'name', label: 'Name', type: 'text', auto: 'name', error: 'Write the name we should ask for.' },
  { id: 'company', label: 'Company', type: 'text', auto: 'organization', error: 'Write your company or organisation.' },
  { id: 'email', label: 'Email', type: 'email', auto: 'email', mode: 'email', error: 'Write an email address with an @, like name@company.in.' },
  { id: 'phone', label: 'Phone', type: 'tel', auto: 'tel', mode: 'tel', error: 'Write a phone number we can call.' },
];

export default function Quote() {
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
              <div className={f.full ? 'field field--full' : 'field'} key={f.id}>
                <label htmlFor={`f-${f.id}`}>{f.label}</label>
                <input id={`f-${f.id}`} name={f.id} type={f.type} autoComplete={f.auto} inputMode={f.mode} required aria-describedby={`f-${f.id}-err`} />
                <p className="field__error" id={`f-${f.id}-err`} hidden>{f.error}</p>
              </div>
            ))}
            <div className="field field--full">
              <label htmlFor="f-scope">The site and what needs to go</label>
              <textarea id="f-scope" name="scope" rows={3} required aria-describedby="f-scope-err" />
              <p className="field__error" id="f-scope-err" hidden>Write where the site is and what we should demolish, dismantle or buy.</p>
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
