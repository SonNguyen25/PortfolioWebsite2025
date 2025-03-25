import { lazy } from "react";
import "./App.scss";
// import EarthCanvas from "./canvas/earth/Earth";

const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Intro = lazy(() => import("./components/intro/Intro"));
const Parallax = lazy(() => import("./components/parallax/Parallax"));
const About = lazy(() => import("./components/about/About"));
const Experiences = lazy(() => import("./components/experiences/Experiences"));
const Contact = lazy(() => import("./components/contact/Contact"));
const StarsCanvas = lazy(()=>import('./canvas/stars/Stars'));

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section id="About">
        <div className="experiences-container">
          <About />
          <StarsCanvas />
        </div>
      </section>
      <section id="Experiences">
        <Parallax type="experiences" />
      </section>
      <section>
        <div className="experiences-container">
          <Experiences />
          <StarsCanvas />
        </div>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <div className="experiences-container">
          <Portfolio />
          <StarsCanvas />
        </div>
      </section>
      <section id="Contact">
        <div className="experiences-container">
          <Contact />
          <StarsCanvas />
        </div>
      </section>
      <div id="Footer">
        <div className="experiences-container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
