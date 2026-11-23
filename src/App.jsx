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
  deal: hero split, nav-split, close-photo, footer-columns, rhythm surface-pairs (#video),
        buttons solid, mark: the client's own logo; palette from the logo (stone ground, bronze #9e6a2c);
        type literata (Literata / Figtree)
  moments: picture-develops (#projects, the photograph beside the current jobs), word-highlight (#safety)
  Every section is one or two screens at 1440x900; the order is the page.
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
