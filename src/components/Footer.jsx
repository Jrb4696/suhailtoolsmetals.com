import Arrow from './Arrow';
import Photo from './Photo';
import { close, company, footer, mainAction, mapSearch } from '../content/site';

// footer.closing: row 1 the dealt close (close-photo), row 2 the dealt footer (footer-columns).
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">{close.title}</h2>
              <p className="t-lead">{close.line}</p>
            </div>
            <a className="btn btn--primary" href={mainAction.href}>{mainAction.label}<Arrow /></a>
          </div>
          <div className="close__media">
            <Photo src={close.photo.src} alt={close.photo.alt} sizes="(max-width: 1279px) 100vw, 1280px" style={{ '--pos': close.photo.pos }} loading="lazy" subject="demolition site" />
          </div>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__logo" href="#top">
                <img src="/brand/logo-stacked.svg" alt={company.name} width="372" height="382" loading="lazy" />
              </a>
              <p className="footer__lede">{footer.lede}</p>
            </div>
            {footer.columns.map((col) => (
              <div className="span-2 footer__col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
                </ul>
              </div>
            ))}
            <div className="span-4 footer__col">
              <h3>Contact</h3>
              <ul>
                {[company.office, company.yard].map((p) => (
                  <li key={p.label}>
                    <a href={mapSearch(p)} target="_blank" rel="noreferrer">{p.label}: {p.street}, {p.district}</a>
                  </li>
                ))}
                <li><a href={company.phoneHref}>{company.director}: {company.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {year} {company.name}</span>
            <div className="socials">
              <a href={company.instagram} target="_blank" rel="noreferrer" aria-label="Suhail Tools and Metals on Instagram">
                <img src="/assets/icons/instagram.svg" alt="" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
