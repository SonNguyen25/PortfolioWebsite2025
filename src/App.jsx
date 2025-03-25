import React, { lazy, Suspense } from "react";
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
const StarsCanvas = lazy(() => import("./canvas/stars/Stars"));

const CanvasLoader = () => (
  <div className="canvas-loader-container">
    <span className="canvas-loader"></span>
  </div>
);

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section id="About">
        <Suspense fallback={<CanvasLoader />}>
          <div className="experiences-container">
            <About />
            <StarsCanvas />
          </div>
        </Suspense>
      </section>

      <section id="Experiences">
        <Parallax type="experiences" />
      </section>
      <section>
        <Suspense fallback={<CanvasLoader />}>
          <div className="experiences-container">
            <Experiences />
            <StarsCanvas />
          </div>
        </Suspense>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Suspense fallback={<CanvasLoader />}>
          <div className="experiences-container">
            <Portfolio />
            <StarsCanvas />
          </div>
        </Suspense>
      </section>
      <section id="Contact">
        <Suspense fallback={<CanvasLoader />}>
          <div className="experiences-container">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
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
