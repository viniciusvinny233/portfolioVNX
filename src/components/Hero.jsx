import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";
import marcosPhoto from "../assets/marcosVinicius.jpg";

const Hero = () => {
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section className="relative w-full min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full pt-28 pb-28 flex flex-col lg:flex-row items-center gap-16">

        {/* Left content */}
        <div className="flex-1 flex flex-col">
          {/* Accent line + greeting */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#915EFF]" />
            <span className="text-secondary text-[14px] sm:text-[15px] font-medium uppercase tracking-widest">
              {t.greeting}
            </span>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-black text-white text-[48px] xs:text-[54px] sm:text-[68px] lg:text-[78px] leading-[1.05] tracking-tight"
          >
            {t.name}
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-2"
          >
            <span className="text-[#915EFF] text-[20px] xs:text-[22px] sm:text-[28px] font-bold">
              {t.role}
            </span>
            <p className="text-secondary text-[14px] sm:text-[17px] mt-1 font-medium">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-5 text-secondary text-[14px] sm:text-[16px] leading-relaxed max-w-[500px]"
          >
            {t.description}
          </motion.p>

          {/* Metrics chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mt-7"
          >
            {t.metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-3 py-2 bg-[#1a1530] border border-[#915EFF30] rounded-xl min-w-0"
              >
                <span className="text-white font-black text-[16px] sm:text-[18px] leading-tight whitespace-nowrap">
                  {m.value}
                </span>
                <span className="text-secondary text-[10px] sm:text-[11px] font-medium mt-0.5 whitespace-nowrap">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4fe0] text-white font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 rounded-full transition-all duration-200"
            >
              {t.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#connect"
              className="text-secondary hover:text-white text-[14px] sm:text-[15px] font-medium transition-colors underline underline-offset-4"
            >
              {lang === "en" ? "Get in touch" : "Entre em contato"}
            </a>
          </motion.div>
        </div>

        {/* Right — photo card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="relative w-[260px]">
            {/* Corner accent TL */}
            <div className="absolute -top-3 -left-3 w-12 h-[2px] bg-[#915EFF]" />
            <div className="absolute -top-3 -left-3 w-[2px] h-12 bg-[#915EFF]" />
            {/* Corner accent BR */}
            <div className="absolute -bottom-3 -right-3 w-12 h-[2px] bg-[#915EFF]" />
            <div className="absolute -bottom-3 -right-3 w-[2px] h-12 bg-[#915EFF]" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-[#915EFF] blur-[50px] opacity-12" />
            {/* Photo */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#915EFF25]">
              <img
                src={marcosPhoto}
                alt="Marcos Vinicius"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#020410]/60 to-transparent" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator — kept clear of CTA with pb-28 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-secondary/50 text-[10px] font-medium uppercase tracking-[0.2em] group-hover:text-secondary/80 transition-colors">
            {lang === "en" ? "Scroll" : "Rolar"}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-secondary/30 flex justify-center items-start pt-1.5 group-hover:border-secondary/60 transition-colors"
          >
            <div className="w-1 h-1 rounded-full bg-secondary/50" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
