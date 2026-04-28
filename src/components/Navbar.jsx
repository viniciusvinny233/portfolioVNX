import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { content } from "../constants/content";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const { lang, setLang } = useLang();
  const t = content[lang].nav;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 px-6 sm:px-16 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-[#050816]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="text-white text-[18px] font-bold">
            VNX
            <span className="text-secondary font-normal ml-1 hidden md:inline">| Portfolio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {t.links.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`text-[14px] font-medium transition-colors duration-200 ${
                  active === nav.title ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls — desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center bg-[#1a1530] rounded-full p-1 border border-[#ffffff15]">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all duration-200 ${
                lang === "en" ? "bg-[#915EFF] text-white shadow" : "text-secondary hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all duration-200 ${
                lang === "pt" ? "bg-[#915EFF] text-white shadow" : "text-secondary hover:text-white"
              }`}
            >
              PT
            </button>
          </div>

          {/* Download CV — single smart button */}
          <a
            href={t.downloadPDF}
            download
            className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4fe0] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.download}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center bg-[#1a1530] rounded-full p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === "en" ? "bg-[#915EFF] text-white" : "text-secondary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === "pt" ? "bg-[#915EFF] text-white" : "text-secondary"
              }`}
            >
              PT
            </button>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle((v) => !v)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-[68px] right-4 bg-[#1a1530] border border-[#ffffff15] rounded-2xl p-6 min-w-[200px] shadow-2xl"
              >
                <ul className="flex flex-col gap-4 mb-4">
                  {t.links.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        onClick={() => { setToggle(false); setActive(nav.title); }}
                        className="text-secondary hover:text-white text-[15px] font-medium transition-colors"
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#ffffff10]">
                  <a
                    href={t.downloadPDF}
                    download
                    className="flex items-center gap-2 text-[13px] font-semibold text-[#915EFF] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {t.download}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
