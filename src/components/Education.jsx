import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const Education = () => {
  const { lang } = useLang();
  const t = content[lang].education;

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

      <div className="mt-10 flex flex-col gap-6">

        {/* Education â€” full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1530] border border-[#ffffff0f] rounded-2xl p-6"
        >
          <h3 className="text-[#915EFF] font-bold text-[13px] uppercase tracking-widest mb-5">
            {t.educationLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.degrees.map((d, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#ffffff04] rounded-xl border border-[#ffffff08]">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#915EFF15] border border-[#915EFF30] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#915EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-white font-bold text-[15px]">{d.school}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      d.status === "In Progress" || d.status === "Em andamento"
                        ? "bg-[#915EFF20] text-[#915EFF] border border-[#915EFF30]"
                        : "bg-[#81C78420] text-[#81C784] border border-[#81C78430]"
                    }`}>
                      {d.status}
                    </span>
                  </div>
                  <p className="text-secondary text-[13px] leading-snug">{d.degree}</p>
                  <p className="text-secondary/50 text-[11px] mt-0.5">{d.fullName}</p>
                  <p className="text-[#915EFF] text-[12px] font-medium mt-1">{d.period}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications + Languages â€” 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1a1530] border border-[#ffffff0f] rounded-2xl p-6"
          >
            <h3 className="text-[#4FC3F7] font-bold text-[13px] uppercase tracking-widest mb-5">
              {t.certificationsLabel}
            </h3>
            <div className="flex flex-col gap-2.5">
              {t.certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#4FC3F7] mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/>
                    </svg>
                  </span>
                  <p className="text-secondary text-[13px] leading-snug">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a1530] border border-[#ffffff0f] rounded-2xl p-6"
          >
            <h3 className="text-[#81C784] font-bold text-[13px] uppercase tracking-widest mb-5">
              {t.languagesLabel}
            </h3>
            <div className="flex flex-col gap-4">
              {t.languages.map((l, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-white font-semibold text-[15px]">{l.name}</span>
                  <span className="text-[12px] font-semibold text-secondary bg-[#ffffff08] border border-[#ffffff10] px-3 py-1 rounded-full">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

