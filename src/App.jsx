import { HashRouter } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/Footer";
import GalaxyBackground from "./components/GalaxyBackground";

const App = () => {
  return (
    <HashRouter>
      <div
        className="relative"
        style={{
          background:
            "radial-gradient(ellipse at 18% 22%, rgba(145,94,255,0.10) 0%, transparent 52%), " +
            "radial-gradient(ellipse at 82% 78%, rgba(79,195,247,0.06) 0%, transparent 48%), " +
            "#020410",
        }}
      >
        <GalaxyBackground />
        <div className="relative" style={{ zIndex: 2 }}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
