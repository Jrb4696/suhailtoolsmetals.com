import { company, mainAction, nav, services } from '../content/site';

// The logo on the left; the words and the main action together on the right (page.css).
// system.js turns it into the phone sheet and handles the Services panel; add no handlers here.
export default function Header() {
  const [first, ...rest] = nav;
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top">
          <picture>
            <source media="(max-width: 399px)" srcSet="/brand/favicon.svg" width="48" height="48" />
            <img src="/brand/logo-horizontal.svg" alt={company.name} width="938" height="226" />
          </picture>
        </a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a className="nav__link" href={first.href}>
              {first.label}{' '}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                {services.items.map((s) => (
                  <a className="menu-card span-4" href={`#${s.key}`} key={s.key}>
                    <div className="panel">
                      <img className="frame__img" src={s.photo.src.replace(/\.webp$/, '-400.webp')} width="400" height="533" alt="" loading="lazy" />
                    </div>
                    <span className="t-card">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {rest.map((item) => (
            <div className="nav__item" key={item.href}>
              <a className="nav__link" href={item.href}>{item.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={mainAction.href}>{mainAction.label}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
