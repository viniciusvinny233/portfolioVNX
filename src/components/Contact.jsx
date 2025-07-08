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
        className="flex w-full xl:h-[700px] md:h-[800px] h-[600px] justify-center "
      >
        <EarthCanvas />
      </div>
  );
};

export default SectionWrapper(Contact, "contact");