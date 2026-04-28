import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const categoryColors = [
  { border: "border-[#915EFF]", dimBorder: "border-[#915EFF30]", accent: "text-[#915EFF]", bg: "bg-[#915EFF15]", dimBg: "bg-[#915EFF08]" },
  { border: "border-[#4FC3F7]", dimBorder: "border-[#4FC3F730]", accent: "text-[#4FC3F7]", bg: "bg-[#4FC3F715]", dimBg: "bg-[#4FC3F708]" },
  { border: "border-[#81C784]", dimBorder: "border-[#81C78430]", accent: "text-[#81C784]", bg: "bg-[#81C78415]", dimBg: "bg-[#81C78408]" },
  { border: "border-[#FFB74D]", dimBorder: "border-[#FFB74D30]", accent: "text-[#FFB74D]", bg: "bg-[#FFB74D15]", dimBg: "bg-[#FFB74D08]" },
];

const Skills = () => {
  const { lang } = useLang();
  const t = content[lang].skills;

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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {t.categories.map((cat, i) => {
          const c = categoryColors[i % categoryColors.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-[#1a1530] border ${c.dimBorder} rounded-2xl p-6`}
            >
              <h3 className={`font-bold text-[15px] mb-4 uppercase tracking-wider ${c.accent}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, j) =>
                  tag.primary ? (
                    <span
                      key={j}
                      className={`text-[13px] font-bold px-3 py-1 rounded-full border ${c.border} ${c.bg} ${c.accent}`}
                    >
                      {tag.name}
                    </span>
                  ) : (
                    <span
                      key={j}
                      className={`text-[13px] font-medium px-3 py-1 rounded-full border ${c.dimBorder} ${c.dimBg} text-white/60`}
                    >
                      {tag.name}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");

