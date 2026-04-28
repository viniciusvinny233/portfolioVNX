import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useLang } from "../contexts/LanguageContext";
import { content, testimonials } from "../constants/content";

const TestimonialCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="bg-[#1d1836] border border-[#ffffff0a] hover:border-[#915EFF30] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
  >
    {/* Quote icon */}
    <div className="text-[#915EFF] text-[40px] leading-none font-serif select-none">"</div>

    {/* Testimonial text */}
    <p className="text-secondary text-[14px] leading-[1.75] flex-1 -mt-3">
      {item.testimonial}
    </p>

    {/* Person */}
    <div className="flex items-center gap-3 pt-4 border-t border-[#ffffff08]">
      <img
        src={item.image}
        alt={item.name}
        className="w-11 h-11 rounded-full object-cover border-2 border-[#915EFF30]"
      />
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-[14px] truncate">{item.name}</p>
        <p className="text-secondary text-[12px] truncate">{item.designation}</p>
        <p className="text-[#915EFF] text-[12px] font-medium truncate">{item.company}</p>
      </div>
      <a
        href={item.linkedin}
        target="_blank"
        rel="noreferrer"
        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005885] flex items-center justify-center transition-colors"
        title="View on LinkedIn"
      >
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { lang } = useLang();
  const t = content[lang].testimonials;

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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {testimonials.map((item, i) => (
          <TestimonialCard key={i} item={item} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");

