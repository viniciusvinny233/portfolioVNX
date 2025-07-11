import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tilt from 'react-parallax-tilt';

import marcosVinicius from "/src/assets/marcosVinicius.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-[620px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingXName} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Marcos Vinicius</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Sou desenvolvedor de softwares e fascinado <br className="sm:block hidden" />
            por tecnologia desde a infância.
          </p>
        </div>

        <Tilt className="md:block hidden absolute inset-0 top-[100px] left-[820px] max-w-xl ${styles.paddingXName} flex flex-row items-start gap-5">
        </Tilt>

      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;