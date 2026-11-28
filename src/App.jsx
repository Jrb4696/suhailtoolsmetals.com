import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Milestones from './sections/Milestones';
import Process from './sections/Process';
import Safety from './sections/Safety';
import Video from './sections/Video';
import Equipment from './sections/Equipment';
import Quote from './sections/Quote';

/*
  type: service (site-kind other)
  deal: hero framed, nav (logo left), footer-columns (the close-photo band was removed at the client's request),
        buttons solid, mark: the client's own logo; palette from the logo (stone ground, bronze #9e6a2c);
        type literata (Literata / Figtree)
  moments: picture-develops (#projects, the photograph beside the current jobs), word-highlight (#safety)
  The client asked for even gaps over one-section-per-screen: every section after the hero is as tall as its content,
  with one padding above and below, and the sections alternate white and cream from the hero (page.css). The order is the page.
*/
export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Milestones />
        <Safety />
        <Video />
        <Equipment />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
