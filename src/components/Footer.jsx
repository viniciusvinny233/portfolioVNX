import { useLang } from "../contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLang();
  return (
    <footer className="border-t border-[#ffffff08] py-8 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-secondary text-[13px]">
          © {new Date().getFullYear()} Marcos Vinicius Pinheiro Rodrigues
        </p>
        <p className="text-secondary/50 text-[12px]">
          {lang === "en"
            ? "Built with React · Vite · Tailwind CSS · Framer Motion"
            : "Desenvolvido com React · Vite · Tailwind CSS · Framer Motion"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
