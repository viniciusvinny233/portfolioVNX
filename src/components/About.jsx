import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const PillarCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="flex-1 min-w-[240px] bg-[#1d1836] border border-[#ffffff0a] rounded-2xl p-7 hover:border-[#915EFF40] transition-all duration-300"
  >
    <span className="text-4xl">{icon}</span>
    <h3 className="text-white font-bold text-[18px] mt-4 mb-2">{title}</h3>
    <p className="text-secondary text-[14px] leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  const { lang } = useLang();
  const t = content[lang].about;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[19px] text-[15px] text-secondary uppercase tracking-wider">
          {t.subtitle}
        </p>
        <h2 className="text-white font-black md:text-[68px] sm:text-[56px] xs:text-[44px] text-[32px]">
          {t.title}
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[1.8]"
      >
        {t.description}
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-5">
        {t.pillars.map((p, i) => (
          <PillarCard key={i} index={i} {...p} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

