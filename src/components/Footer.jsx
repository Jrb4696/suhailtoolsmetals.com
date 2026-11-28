import { company, footer, mapSearch } from '../content/site';

// The footer: the logo and lede, the link columns, the contact lines, then the legal row (footer-columns).
// The photograph close above it was taken out at the client's request; the quote section is the page's last ask.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer closing" id="contact" aria-label="Site footer">
      <div className="wrap">
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
