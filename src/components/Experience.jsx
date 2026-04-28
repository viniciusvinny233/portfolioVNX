import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const ExperienceCard = ({ entry, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative bg-[#1a1530] border-l-[3px] border-l-[#915EFF] ring-1 ring-[#ffffff18] hover:ring-[#915EFF55] rounded-2xl p-7 transition-all duration-300"
  >
    {/* Top row */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-[#ffffff15]">
        <img src={entry.icon} alt={entry.company} className="w-10 h-10 object-contain" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-white font-bold text-[20px] leading-tight">{entry.title}</h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="text-[#4FC3F7] font-semibold text-[15px]">{entry.company}</span>
              <span className="text-[11px] font-semibold text-secondary bg-[#ffffff08] border border-[#ffffff12] px-2 py-0.5 rounded-full">
                {entry.type}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1">
            <span className="text-secondary text-[13px] font-medium whitespace-nowrap">{entry.date}</span>
            <span className="text-secondary/60 text-[12px] flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {entry.location}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Bullet points */}
    <ul className="mt-5 flex flex-col gap-3 border-t border-[#ffffff08] pt-5">
      {entry.bullets.map((bullet, j) => (
        <li key={j} className="flex items-start gap-3">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#915EFF] flex-shrink-0" />
          <span className="text-secondary text-[14px] leading-[1.75]">{bullet}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const { lang } = useLang();
  const t = content[lang].experience;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[19px] text-[15px] text-secondary uppercase tracking-wider">{t.subtitle}</p>
        <h2 className="text-white font-black md:text-[68px] sm:text-[56px] xs:text-[44px] text-[32px]">
          {t.title}
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-5">
        {t.entries.map((entry, i) => (
          <ExperienceCard key={i} entry={entry} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
