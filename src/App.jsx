import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Parallax from "./components/parallax/Parallax";
import Experiences from "./components/experiences/Experiences";
import About from "./components/about/About";
import StarsCanvas from "./canvas/stars/Stars";
import Contact from "./components/contact/Contact";
// import EarthCanvas from "./canvas/earth/Earth";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

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
