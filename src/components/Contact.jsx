import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { git, github } from "../assets";
import { slideIn } from "../utils/motion";

import discord from "/src/assets/discord.png";
import linkedin from "/src/assets/linkedin.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2keiygq",
        "template_c2xrrxh",
        {
          form_name: form.name,
          to_name: "Marcos",
          from_email: form.email,
          to_email: "vnx.developerfs@gmail.com",
          message: form.message,
        },
        "9pvzUbBuV8F-1r_um"
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado. Eu entrarei em contato com você o mais breve possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Alguma coisa de errado aconteceu, entre em contato comigo pelo Linkedin.");
        }
      );
  };

  return (
    <div
      className={`flex w-full`}
    >
      {/*  <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>ENTRE EM CONTATO</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual é o seu email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sua mensagem</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="O que você quer falar ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            <div className="flex grid-row">
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
                onClick={() => window.open("https://github.com/viniciusvinny233", "_blank")}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-7 object-contain"
                />

              </div>
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
                onClick={() => window.open("https://www.linkedin.com/in/marcosvinicius-developer/", "_blank")}
              >
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="w-1/2 h-1/2 object-contain"
                />

              </div>
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open("https://www.discordapp.com/users/354444801917059073", "_blank")}
              >
                <img
                  src={discord}
                  alt="Discord"
                  id="iconContato"
                  className="w-10 h-1/2 object-contain"
                />

              </div>
            </div>
          </div>
        </form>
      </motion.div> */}

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[700px] md:h-[800px] h-[600px] w-full justify-center"
      >
        <EarthCanvas />
      </motion.div>
    </div >
  );
};

export default SectionWrapper(Contact, "contact");
