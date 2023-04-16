import {
  apeperia,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  lambda,
  git,
  figma,
  flappy,
  podcast,
  docker,
  hotmart,
  meta,
  starbucks,
  tivit,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "tech",
    title: "Habilidades",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Frontend",
    icon: web,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Desenvolvedor Flutter",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Social Media Designer",
    company_name: "Hotmart",
    icon: hotmart,
    iconBg: "#383E56",
    date: "Março 2020 - Janeiro 2021",
    points: [
      "Por algum tempo, atuei como designer de produtos digitais, desenvolvendo flyers, banners, logotipos, entre outros.",
      "Está experiência me proporcionou conhecimentos valiosos em design de interface e experiência do usuário (UI/UX), que foram extremamente importantes para o início da minha carreira como desenvolvedor.",
      "Competências: Adobe Photoshop · Figma",
    ],
  },
  {
    title: "Desenvolvedor Full Stack Júnior",
    company_name: "TIVIT",
    icon: tivit,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2021 - Junho 2022",
    points: [
      "Aos 16 anos, entrei na TIVIT como menor aprendiz e vivenciei uma jornada de aceleração de carreira como desenvolvedor, na qual me ensinaram todos os princípios básicos de programação.",
      "Após aprender o necessário, fui incluído em uma equipe completa de desenvolvimento e atuei como desenvolvedor Full Stack.",
      "Competências: JavaScript · React.js · TypeScript · Node.js · JQuery · HTML5 · HTML · CSS · GitHub · SASS · Bootstrap",
    ],
  },
  {
    title: "Desenvolvedor de software",
    company_name: "Lambda3",
    icon: lambda,
    iconBg: "#383E56",
    date: "Junho 2022 - Abril 2023",
    points: [
      "Após a TIVIT adquirir a Lambda3, todas as equipes de desenvolvimento foram transferidas para a Lambda3. Atuei como desenvolvedor Full Stack em um projeto mobile, trabalhando tanto no Front-end quanto no Back-end, além de desenvolver o design de diversas telas do projeto.",
      "A principal linguagem utilizada no projeto foi Dart (Flutter).",
      "Competências: Flutter · JavaScript · MySQL · C# · HTML5 · HTML · CSS · GitHub · Dart · Scrum · JIRA · Windows Azure · Adobe Photoshop",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Possui grande facilidade e capacidade de absorver novos conhecimentos e tecnologia. Um profissional que prima pela excelência e devido a esse objetivo, sempre está buscando novos conhecimentos para se aperfeiçoar.",
    name: "Renan Moraes",
    designation: "Full Stack Developer Sênior | Flutter | Mobile",
    company: "TIVIT",
    image:
      "https://media.licdn.com/dms/image/C5603AQF1Lcxt-xSWhw/profile-displayphoto-shrink_100_100/0/1517229658924?e=1687392000&v=beta&t=6w9APDk3A0tG9GoiJJTBw0NNDlqB3pisdMO3XbI2aSs",
  },
  {
    testimonial:
      "Vinícius é muito dedicado, responsável e tem uma grande vontade de aprender! Ele é muito proativo e sempre está disposto a ajudar os outros, além de ter um excelente trabalho em equipe. Além disso, ele é muito criativo e tem uma grande capacidade de resolver problemas. Ele é uma ótima adição para qualquer equipe.",
    name: "Niuslene Sales",
    designation: "Analista de Testes Sênior | TIVIT",
    company: "TIVIT",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHvBkM45ciNVg/profile-displayphoto-shrink_100_100/0/1674013643676?e=1687392000&v=beta&t=dD1DE6aHYtn7754XRcRHOKCZdzUhnK20aij_70WL_Vk",
  },
  {
    testimonial:
      "Atuei com o Marcos no projeto de uma grande empresa agrícola, onde ele sempre se colocou à disposição do time atuando em diversas demandas que disponibilizaram fazer entregas pontuais e com qualidade para o projeto.",
    name: "Marcos Lopes",
    designation: "Analista de Sistemas Pleno na TIVIT",
    company: "TIVIT",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFBThywauO01Q/profile-displayphoto-shrink_100_100/0/1659384091376?e=1687392000&v=beta&t=eVkNJ5HJr698u3WhuN1M1P-gUJXiIXAerFEtxc7VIKo",
  },
  {
    testimonial:
      "Atuei com o Marcos em um grande projeto de um cliente no ramo agrícola/fertilizantes, o Marcos foi muito empenhado nas tarefas em que foram delegadas além de sempre antecipar suas entregas com uma qualidade superior, além do esperado.",
    name: "Rodrigo Barbeiro",
    designation: "Analista de Business Intelligence",
    company: "TIVIT",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFeDhM4NKOCyg/profile-displayphoto-shrink_100_100/0/1582057703302?e=1687392000&v=beta&t=GyxYFR1p3_nDNpU-UgBN2O4GcX_EX4M0GLbMihKypAE",
  },
  {
    testimonial:
      "Tive a experiência gratificante de trabalhar com o Marcos em um projeto de desenvolvimento mobile utilizando Flutter, onde ele demonstrou excelentes habilidades tanto em UX design quanto na criação da estrutura frontend. Suas contribuições foram essenciais para o sucesso do projeto.",
    name: "Maitê Savicius",
    designation: "Engenheira de Software",
    company: "Class Solutions",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFmWKzco9srkA/profile-displayphoto-shrink_100_100/0/1675256591829?e=1687392000&v=beta&t=wU9z3gQAPKgqVMOybZlo8B4M5HKX9xmrOjYVBh3qPwA",
  },
];

const projects = [
  {
    name: "PodCast",
    description:
      "Criei um site de podcasts, reproduzindo a estrutura e as funcionalidades de um portal dedicado à hospedagem e reprodução de conteúdo em áudio, oferecendo aos usuários uma experiência agradável e intuitiva.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: podcast,
    source_code_link: "https://podcast-viniciusvinny233.vercel.app/",
  },
  {
    name: "Flappy Bird",
    description:
      "Desenvolvi um clone web completo do  Flappy Bird, recriando o famoso jogo casual de habilidade, no qual o jogador controla um pássaro que deve atravessar obstáculos, proporcionando diversão e desafio.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: flappy,
    source_code_link: "https://viniciusvinny233.github.io/flappy-bird/",
  },
  {
    name: "Apeperia",
    description:
      "Desenvolvi um site focado no aprendizado das normas de acessibilidade e SEO, visando aprimorar a experiência do usuário e otimizar a visibilidade nos mecanismos de busca, combinando boas práticas e técnicas modernas.",
    tags: [
      {
        name: "sass",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: apeperia,
    source_code_link: "https://viniciusvinny233.github.io/acessibilidade/",
  },
];

export { services, technologies, experiences, testimonials, projects };
