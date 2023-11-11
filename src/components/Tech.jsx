import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Tilt from "react-tilt";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import javascriptIcon from "/src/assets/tech/javascript.png";
import htmlIcon from "/src/assets/tech/html.png";
import cssIcon from "/src/assets/tech/css.png";
import reactIcon from "/src/assets/tech/reactjs.png";
import typescriptIcon from "/src/assets/tech/typescript.png";
import bootstrapIcon from "/src/assets/tech/bootstrap.svg";
import jqueryIcon from "/src/assets/tech/jquery.png";
import sassIcon from "/src/assets/tech/sass.png";
import nodejsIcon from "/src/assets/tech/nodejs.png";
import figmaIcon from "/src/assets/tech/figma.png";
import wordPressIcon from "/src/assets/tech/wordpress.png";
import azureIcon from "/src/assets/tech/azure.svg";
import jiraIcon from "/src/assets/tech/jira.svg";
import photoshopIcon from "/src/assets/tech/photoshop.svg";
import dartIcon from "/src/assets/tech/dart.svg";
import flutterIcon from "/src/assets/tech/flutter.svg";
import elementorIcon from "/src/assets/tech/elementor.svg";
import sqlIcon from "/src/assets/tech/sql.svg";
import nextIcon from "/src/assets/tech/nextjs.png";
import firebaseIcon from "/src/assets/tech/firebase.png";


const skills = [
  {
    category: "Front-end",
    items: [
      {
        name: "HTML",
        icon: htmlIcon,
        nivel: "Senior",
        level: 90,
      },
      {
        name: "CSS",
        icon: cssIcon,
        nivel: "Senior",
        level: 80,
      },
      {
        name: "JavaScript",
        icon: javascriptIcon,
        nivel: "Senior",
        level: 80,
      },
      {
        name: "ReactJS",
        icon: reactIcon,
        nivel: "Pleno",
        level: 60,
      },
      {
        name: "Typescript",
        icon: typescriptIcon,
        nivel: "Pleno",
        level: 30,
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
        nivel: "Pleno",
        level: 60,
      },
      {
        name: "jQuery",
        icon: jqueryIcon,
        nivel: "Pleno",
        level: 40,
      },
      {
        name: "SASS",
        icon: sassIcon,
        nivel: "Pleno",
        level: 65,
      },
    ],
  },
  {
    category: "Back-end",
    items: [
      {
        name: "NodeJS",
        icon: nodejsIcon,
        nivel: "Pleno",
        level: 55,
      },
      {
        name: "NextJS",
        icon: nextIcon,
        nivel: "Pleno",
        level: 55,
      },
      {
        name: "Firebase",
        icon: firebaseIcon,
        nivel: "Pleno",
        level: 55,
      },
      {
        name: "MySQL",
        icon: sqlIcon,
        nivel: "Junior",
        level: 35,
      },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      {
        name: "Figma",
        icon: figmaIcon,
        nivel: "Pleno",
        level: 30,
      },
      {
        name: "WordPress",
        icon: wordPressIcon,
        nivel: "Senior",
        level: 90,
      },
      {
        name: "Elementor",
        icon: elementorIcon,
        nivel: "Senior",
        level: 90,
      },
      {
        name: "Photoshop",
        icon: photoshopIcon,
        nivel: "Senior",
        level: 90,
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        name: "React Native",
        icon: reactIcon,
        nivel: "Junior",
        level: 90,
      },
      {
        name: "Flutter",
        icon: flutterIcon,
        nivel: "Senior",
        level: 90,
      },
    ],
  },
];

const ProgressBar = ({ level }) => {
  const width = 130;

  return (
    <div
      className="relative bg-gray-300 h-3 rounded-md"
      style={{ width: `${width}px` }}
    >
      <div
        className="absolute left-0 bg-green-500 rounded-md"
        style={{ width: `${(level / 100) * width}px`, height: "100%" }}
      ></div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <Tilt className="w-[150px] md:w-[250px] sm:w-[250px]">
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <div className="bg-tertiary rounded-[20px] p-6 md:w-[250px] sm:w-[250px] w-full flex flex-col items-center">
        <h3 className="text-[20px] font-bold">{skill.name}</h3>
        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
        <div className="mt-2">
          <span className={styles.sectionSubTextTech}>{skill.nivel}</span>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Linguagens e Ferramentas.</p>
        <h2 className={styles.sectionHeadText}>Habilidades.</h2>
      </motion.div>

      <div className="mt-20">
        {skills.map((skillCategory, index) => {
          return (
            <div key={index} className="mb-14">
              <h3 className="text-[24px] font-bold text-white mb-7">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-7">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
