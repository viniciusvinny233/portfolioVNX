import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const ExperienceCard = ({ entry, index, isLast }) => (
  <div className="flex gap-0 sm:gap-0">

    {/* LEFT — date column (desktop only) */}
    <div className="hidden sm:flex flex-col items-end w-[130px] flex-shrink-0 pt-[20px] pr-4">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="text-right"
      >
        {/* Split date into start / end for visual stacking */}
        {entry.date.split("–").map((part, i) => (
          <p key={i} className={`text-[12px] font-semibold leading-snug ${i === 0 ? "text-[#915EFF]" : "text-secondary/60"}`}>
            {part.trim()}
          </p>
        ))}
      </motion.div>
    </div>

    {/* CENTER — line + dot */}
    <div className="flex flex-col items-center flex-shrink-0 w-6 sm:w-8">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.1 }}
        className="mt-[20px] w-[14px] h-[14px] rounded-full border-2 border-[#915EFF] bg-[#020410] flex items-center justify-center flex-shrink-0 z-10"
      >
        <div className="w-[5px] h-[5px] rounded-full bg-[#915EFF]" />
      </motion.div>

      {/* Line below */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.25 }}
          style={{ transformOrigin: "top" }}
          className="flex-1 w-[1px] mt-1 bg-gradient-to-b from-[#915EFF50] to-[#915EFF08]"
        />
      )}
    </div>

    {/* RIGHT — card */}
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex-1 min-w-0 ml-3 sm:ml-4 bg-[#1a1530] ring-1 ring-[#ffffff18] hover:ring-[#915EFF55] rounded-2xl p-6 sm:p-7 transition-all duration-300 ${isLast ? "mb-0" : "mb-5"}`}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-[#ffffff15]">
          <img src={entry.icon} alt={entry.company} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] leading-tight">{entry.title}</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#4FC3F7] font-semibold text-[14px] sm:text-[15px]">{entry.company}</span>
              <span className="text-[11px] font-semibold text-secondary bg-[#ffffff08] border border-[#ffffff12] px-2 py-0.5 rounded-full">
                {entry.type}
              </span>
            </div>
            {/* Date — mobile only */}
            <div className="sm:hidden flex items-center gap-3 mt-0.5">
              <span className="text-[#915EFF] text-[12px] font-semibold">{entry.date}</span>
              <span className="text-secondary/50 text-[11px] flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {entry.location}
              </span>
            </div>
            {/* Location — desktop only */}
            <span className="hidden sm:flex items-center gap-1 text-secondary/50 text-[12px]">
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

  </div>
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

      <div className="mt-10">
        {t.entries.map((entry, i) => (
          <ExperienceCard
            key={i}
            entry={entry}
            index={i}
            isLast={i === t.entries.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
