import {
  lucas,
  pablo,
  maite,
  rodrigo,
  marcos,
  renan,
  niu,
  apeperia,
  bitcent,
  mobile,
  backend,
  creator,
  fruta,
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
  maeztra,
  starbucks,
  tivit,
  tesla,
  porto,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  porto,
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
];

const services = [
  {
    title: "Desenvolvedor Frontend",
    icon: web,
  },
  {
    title: "Desenvolvedor React.js",
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
    name: "Git",
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
    title: "Desenvolvedor Front-end Pleno",
    company_name: "Porto",
    icon: porto,
    iconBg: "#E6DEDD",
    date: "Julho 2023 - Atual",
    points: [
      "Engajamento na amplificação da presença digital da Porto Seguro, integrando tecnologias de ponta e inovações estratégicas para impulsionar a visibilidade online e o engajamento do cliente.",
      "Colaboração técnica em projetos-chave, empregando um arsenal de skills em React.js, JavaScript, HTML5, CSS.",
      "Parceria estratégica, traduzindo as visões e objetivos da Porto Seguro em iniciativas digitais tangíveis que geram valor mensurável.",
      "Competências: React.js · JavaScript · HTML5 · HTML · CSS · Web design · Desenvolvimento de front-end · Bootstrap · Adobe Photoshop",
    ],
  },
  {
    title: "Social Media Designer",
    company_name: "Hotmart",
    icon: hotmart,
    iconBg: "#383E56",
    date: "Março 2020 - Janeiro 2021",
    points: [
      "Desempenho chave no período de transição após a aquisição da Lambda3 pela TIVIT.",
      "Expertise como Desenvolvedor Full Stack em um projeto mobile abrangente.",
      "Proficiência em Dart (Flutter), liderando o design e desenvolvimento de diversas telas.",
      "Competências: Flutter · JavaScript · MySQL · HTML5 · HTML · CSS · C# · API REST · GitHub · Desenvolvimento de front-end · Dart · Scrum · JIRA · Windows Azure · Adobe Photoshop",
    ],
  },

  {
    title: "Desenvolvedor Full Stack",
    company_name: "TIVIT",
    icon: tivit,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2021 - Junho 2022",
    points: [
      "Evolução rápida de Junior aprendiz a Desenvolvedor Full Stack.",
      "Imersão completa nos princípios fundamentais da programação.",
      "Contribuição ativa em uma equipe completa de desenvolvimento.",
      "Competências: React.js · JavaScript · TypeScript · Node.js · JQuery · HTML5 · HTML · CSS · API REST · GitHub · Desenvolvimento de front-end · SASS · Bootstrap",
    ],
  },
  {
    title: "Social Media Designer",
    company_name: "Hotmart",
    icon: hotmart,
    iconBg: "#383E56",
    date: "Março 2020 - Janeiro 2021",
    points: [
      "Desenvolvimento de materiais visuais diversos, incluindo flyers, banners e logotipos.",
      "Aquisição de competências valiosas em UI/UX.",
      "Base sólida em design que contribuiu significativamente para minha transição para o desenvolvimento.",
      "Competências: Adobe Photoshop · Figma",
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
    image: renan,
  },
  {
    testimonial:
      "Vinícius é muito dedicado, responsável e tem uma grande vontade de aprender! Ele é muito proativo e sempre está disposto a ajudar os outros, além de ter um excelente trabalho em equipe. Além disso, ele é muito criativo e tem uma grande capacidade de resolver problemas.",
    name: "Niuslene Sales",
    designation: "Analista de Testes Sênior | TIVIT",
    company: "TIVIT",
    image: niu,
  },
  {
    testimonial:
      "Atuei com o Marcos no projeto de uma grande empresa agrícola, onde ele sempre se colocou à disposição do time atuando em diversas demandas que disponibilizaram fazer entregas pontuais e com qualidade para o projeto.",
    name: "Marcos Lopes",
    designation: "Analista de Sistemas Pleno na TIVIT",
    company: "TIVIT",
    image: marcos,
  },
  {
    testimonial:
      "Atuei com o Marcos em um grande projeto de um cliente no ramo agrícola/fertilizantes, o Marcos foi muito empenhado nas tarefas em que foram delegadas além de sempre antecipar suas entregas com uma qualidade superior, além do esperado.",
    name: "Rodrigo Barbeiro",
    designation: "Analista de Business Intelligence",
    company: "TIVIT",
    image: rodrigo,
  },
  {
    testimonial:
      "Tive a experiência gratificante de trabalhar com o Marcos em um projeto de desenvolvimento mobile utilizando Flutter, onde ele demonstrou excelentes habilidades tanto em UX design quanto na criação da estrutura frontend. Suas contribuições foram essenciais para o sucesso do projeto.",
    name: "Maitê Savicius",
    designation: "Engenheira de Software",
    company: "Class Solutions",
    image: maite,
  },
  {
    testimonial:
      "É um prazer recomendar o Marcos pelo seu profissionalismo exemplar, capacidade extraordinária e dedicação excepcional em tudo que faz. Seu conhecimento profissional e habilidades técnicas são impressionantes.",
    name: "Pablo Galvão Cabugueira",
    designation: "Desenvolvedor Front-end",
    company: "FIAP",
    image: pablo,
  },
  {
    testimonial:
      "Tive a experiência gratificante de trabalhar com o Marcos em um projeto de desenvolvimento mobile utilizando Flutter, onde ele demonstrou excelentes habilidades tanto em UX design quanto na criação da estrutura frontend. Suas contribuições foram essenciais para o sucesso do projeto.",
    name: "Lucas da Costa",
    designation: "Analista de Sistemas",
    company: "Amper",
    image: lucas,
  },
];

const projects = [
  {
    name: "Bitcent",
    description:
      "O Bitcent é um excelente site permite que os usuários controlem suas finanças, monitorem suas despesas. A interface é intuitiva e responsiva, proporcionando uma experiência de usuário excepcional e bem desenvolvida.",
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
    image: bitcent,
    source_code_link: "https://github.com/viniciusvinny233",
  },
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
    source_code_link: "https://github.com/viniciusvinny233",
  },
  {
    name: "Hoobank",
    description:
      "O projeto HooBank é uma aplicação projetada para oferecer uma experiência intuitiva e moderna. Reimagina como as interações bancárias digitais podem ser simplificadas, mantendo a segurança e a funcionalidade no centro do design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: flappy,
    source_code_link: "https://github.com/viniciusvinny233",
  },
  {
    name: "Maeztra",
    description:
      "O Maeztra é uma plataforma de comércio eletrônico robusta e eficaz que fornece aos usuários uma experiência de compra sem igual. A navegação suave, a interface amigável e os recursos avançados de filtragem permitem que os clientes encontrem exatamente o que procuram em questão de segundos.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: maeztra,
    source_code_link: "https://github.com/viniciusvinny233",
  },
  {
    name: "Fruta & Fruto",
    description:
      "Fruta & Fruto é um rico site de receitas centrado em frutas, oferecendo aos usuários uma experiência culinária única e prazerosa. Com uma interface intuitiva, permite aos amantes de comida pesquisar e filtrar receitas por fruta, tempo de preparo e mais. Transforma a jornada culinária em uma atividade fácil e gratificante.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fruta,
    source_code_link: "https://github.com/viniciusvinny233",
  },
  {
    name: "Apeperia",
    description:
      "A Apeperia é uma startup inovadora que oferece soluções eficientes e acessíveis de sites e aplicativos para pequenas e médias empresas. Com uma abordagem centrada no usuário, a Apeperia permite que as empresas se digitalizem com facilidade, ajudando-as a competir e crescer no mercado digital.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: apeperia,
    source_code_link: "https://github.com/viniciusvinny233",
  },
];

export { services, technologies, experiences, testimonials, projects };
