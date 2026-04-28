import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";

const parseBold = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="text-white font-semibold">{part}</strong>
      : part
  );
};

const PersonalCard = ({ project, t, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    className="bg-[#1a1530] border border-[#ffffff0f] hover:border-[#915EFF40] rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
  >
    {/* Image / Emoji placeholder */}
    <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#1a1530] to-[#0f0a1e] flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF15] to-[#2a1f5e]" />
      <div className="w-full h-full flex items-center justify-center">
        <span className="relative z-10 text-[58px] opacity-40 select-none">{project.emoji}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1a1530] to-transparent" />
      {/* Type badge */}
      <span className="absolute top-3 left-3 text-[11px] font-bold text-[#915EFF] bg-[#1a1530] border border-[#915EFF30] px-2 py-0.5 rounded-full z-10">
        {project.type}
      </span>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col p-6">
      <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
      <p className="text-[#915EFF] text-[12px] font-medium mt-1 mb-3">{project.stack}</p>
      <p className="text-secondary text-[13px] leading-relaxed flex-1">
        {parseBold(project.description)}
      </p>

      {/* Link */}
      <div className="mt-5">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#915EFF] hover:text-white transition-colors"
        >
          {project.link.includes("github") ? t.codeLabel : t.visitLabel} →
        </a>
      </div>
    </div>
  </motion.div>
);

const CompanyCard = ({ project, t, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    className="bg-[#1a1530] border border-[#ffffff0f] hover:border-[#915EFF40] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
  >
    {/* Header */}
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-[#ffffff15] flex-shrink-0">
        <img src={project.icon} alt={project.company} className="w-10 h-10 object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-[17px] leading-tight">{project.name}</h3>
        <div className="flex gap-1 mt-1 flex-wrap">
          {project.platform.map((p) => (
            <span key={p} className="text-[10px] font-bold text-secondary bg-[#ffffff08] border border-[#ffffff10] px-2 py-0.5 rounded-full">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>

    <p className="text-secondary text-[13px] leading-relaxed">{project.description}</p>

    {/* Metrics */}
    <div className="flex gap-3 flex-wrap">
      {project.metrics.map((m, i) => (
        <div key={i} className="flex flex-col items-center px-3 py-2 bg-[#915EFF10] border border-[#915EFF20] rounded-xl">
          <span className="text-white font-black text-[16px] leading-tight">{m.value}</span>
          <span className="text-secondary text-[10px] font-medium mt-0.5">{m.label}</span>
        </div>
      ))}
    </div>

    {/* Store links */}
    <div className="flex gap-3 pt-2 border-t border-[#ffffff08]">
      {project.storeLinks.appStore !== "#" && (
        <a href={project.storeLinks.appStore} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 text-[12px] font-semibold text-secondary hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {t.appStoreLabel}
        </a>
      )}
      {project.storeLinks.playStore !== "#" && (
        <a href={project.storeLinks.playStore} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 text-[12px] font-semibold text-secondary hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.97c.21.1.44.12.66.08l12.85-12.04L13 8.38zm.99-21.99L16.03 12 13.7 14.3l-9.53-12.32zM20.16 10.36l-2.71-1.57-3.09 2.91 3.07 2.88 2.73-1.58c.78-.45.78-1.19 0-1.64zM4.17 1.98l8.85 11.39L3.84 2.06z"/>
          </svg>
          {t.playStoreLabel}
        </a>
      )}
      {project.storeLinks.appStore === "#" && project.storeLinks.playStore === "#" && (
        <span className="text-[11px] text-secondary/40 italic">Store links coming soon</span>
      )}
    </div>
  </motion.div>
);

const Works = () => {
  const { lang } = useLang();
  const t = content[lang].projects;

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

      {/* Personal projects */}
      <div className="mt-10">
        <h3 className="text-[#915EFF] font-bold text-[13px] uppercase tracking-widest mb-5">
          {t.personalLabel}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.personalProjects.map((proj, i) => (
            <PersonalCard key={i} project={proj} t={t} index={i} />
          ))}
        </div>
      </div>

      {/* Company projects */}
      <div className="mt-12">
        <h3 className="text-[#915EFF] font-bold text-[13px] uppercase tracking-widest mb-5">
          {t.companyLabel}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.companyProjects.map((proj, i) => (
            <CompanyCard key={i} project={proj} t={t} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

