import { safety } from '../content/site';

// The statement moment (word-highlight): the words turn to ink one by one as they cross the screen.
export default function Safety() {
  return (
    <section className="section statement" id="safety" data-moment="word-highlight" aria-label={safety.label}>
      <div className="wrap">
        <p className="t-label">{safety.label}</p>
        <p className="mo-wh__text">{safety.before}<strong>{safety.strong}</strong>{safety.after}</p>
      </div>
    </section>
  );
}
