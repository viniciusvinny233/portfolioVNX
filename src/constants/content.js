import {
  tokiomarine, brasilcard, porto, tivit,
  renan, niu, marcos, maite, pablo, lucas,
} from "../assets";

export const testimonials = [
  {
    testimonial:
      "Possui grande facilidade e capacidade de absorver novos conhecimentos e tecnologia. Um profissional que prima pela excelência e devido a esse objetivo, sempre está buscando novos conhecimentos para se aperfeiçoar.",
    name: "Renan Moraes",
    designation: "Full Stack Developer Sênior | Flutter | Mobile",
    company: "TIVIT",
    image: renan,
    linkedin: "https://www.linkedin.com/in/renan-moraes-440399104/",
  },
  {
    testimonial:
      "Vinícius é muito dedicado, responsável e tem uma grande vontade de aprender! Ele é muito proativo e sempre está disposto a ajudar os outros, além de ter um excelente trabalho em equipe. Além disso, ele é muito criativo e tem uma grande capacidade de resolver problemas.",
    name: "Niuslene Sales",
    designation: "Analista de Testes Sênior",
    company: "TIVIT",
    image: niu,
    linkedin: "https://www.linkedin.com/in/niuslene-sales-383b491a2/",
  },
  {
    testimonial:
      "Atuei com o Marcos no projeto de uma grande empresa agrícola, onde ele sempre se colocou à disposição do time atuando em diversas demandas que disponibilizaram fazer entregas pontuais e com qualidade para o projeto.",
    name: "Marcos Lopes",
    designation: "Analista de Sistemas Pleno",
    company: "TIVIT",
    image: marcos,
    linkedin: "https://www.linkedin.com/in/lopespmarcos/",
  },
  {
    testimonial:
      "Tive a experiência gratificante de trabalhar com o Marcos em um projeto de desenvolvimento mobile utilizando Flutter, onde ele demonstrou excelentes habilidades tanto em UX design quanto na criação da estrutura frontend. Suas contribuições foram essenciais para o sucesso do projeto.",
    name: "Maitê Savicius",
    designation: "Engenheira de Software",
    company: "Class Solutions",
    image: maite,
    linkedin: "https://www.linkedin.com/in/maite-savicius/",
  },
  {
    testimonial:
      "É um prazer recomendar o Marcos pelo seu profissionalismo exemplar, capacidade extraordinária e dedicação excepcional em tudo que faz. Seu conhecimento profissional e habilidades técnicas são impressionantes.",
    name: "Pablo Galvão Cabugueira",
    designation: "Desenvolvedor Front-end",
    company: "FIAP",
    image: pablo,
    linkedin: "https://www.linkedin.com/in/pablo-galvao-cabugueira/",
  },
  {
    testimonial:
      "Tive a experiência gratificante de trabalhar com o Marcos em um projeto de desenvolvimento mobile utilizando Flutter, onde ele demonstrou excelentes habilidades tanto em UX design quanto na criação da estrutura frontend. Suas contribuições foram essenciais para o sucesso do projeto.",
    name: "Lucas da Costa",
    designation: "Analista de Sistemas",
    company: "Amper",
    image: lucas,
    linkedin: "https://www.linkedin.com/in/lucas-da-costaa/",
  },
];

export const content = {
  en: {
    nav: {
      links: [
        { id: "about", title: "About" },
        { id: "experience", title: "Experience" },
        { id: "skills", title: "Skills" },
        { id: "projects", title: "Projects" },
        { id: "testimonials", title: "Testimonials" },
        { id: "connect", title: "Contact" },
      ],
      download: "Download CV",
      downloadPDF: "/curriculo_ENUS.pdf",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Marcos Vinicius",
      role: "Senior Mobile Engineer",
      subtitle: "Flutter & Dart · Fintech · Insurance",
      description:
        "Building apps used by millions. Specialized in Flutter for financial and insurance markets, with 6+ years delivering scalable, production-ready mobile solutions.",
      cta: "View My Work",
      metrics: [
        { value: "+1.2M", label: "Active Users" },
        { value: "15M+", label: "Downloads" },
        { value: "4.7⭐", label: "Store Rating" },
      ],
    },
    about: {
      subtitle: "Introduction",
      title: "Who I Am.",
      description:
        "Senior Mobile Engineer specialized in Flutter & Dart for the financial, banking and insurance markets. I work end-to-end — from architecture design to App Store and Google Play deployment — building products that balance technical robustness with business outcomes.",
      pillars: [
        {
          icon: "📱",
          title: "Mobile Engineering",
          description:
            "Expert in Flutter & Dart for iOS, Android and Web. Clean Architecture, MVVM, advanced state management (BLoC/Cubit/Riverpod) and end-to-end CI/CD delivery.",
        },
        {
          icon: "🏦",
          title: "Fintech & Insurance",
          description:
            "6+ years building mission-critical apps for financial and insurance markets — payments, credit pipelines, benefits marketplaces and fraud prevention.",
        },
        {
          icon: "🚀",
          title: "Product Engineer",
          description:
            "Beyond client work, I build and ship SaaS products from zero to market: Curto PRO and MitoIA — both live in production with real users.",
        },
      ],
    },
    experience: {
      subtitle: "What I've done so far",
      title: "Experience.",
      entries: [
        {
          title: "Mobile Engineer",
          company: "Tokio Marine",
          type: "Insurance",
          icon: tokiomarine,
          date: "Aug 2025 – Present",
          location: "São Paulo, SP",
          bullets: [
            "Leading Mobile development of the Flutter Super App — unified codebase for iOS, Android and Web with +1.2M users; architecture driven by Clean Architecture, MVVM and Flutter Modular, state management via BLoC and Cubit.",
            "Led the complete rebuild of the Payments section, implementing Pix, Boleto, Credit Card, Google Pay and Apple Pay flows (iOS, Android and Web) with native Swift integration for Apple Pay.",
            "Led the overhaul of Tokio Indica (Benefits Marketplace) integrating Localiza, Rappi, Hoteis.com and Sephora. Deployed an AI Agent (LLM) to manage store reviews, raising the app rating from 4.0 to 4.7 ⭐.",
          ],
        },
        {
          title: "Mobile Engineer",
          company: "Brasil Card",
          type: "Fintech / Digital Bank",
          icon: brasilcard,
          date: "Feb 2024 – Aug 2025",
          location: "São Paulo, SP",
          bullets: [
            "Developed and evolved the Flutter digital bank app (iOS/Android) — 10M+ downloads, 4.7⭐ App Store — delivering Pix, Boleto, Credit Card and Additional Card with Holder/Dependent hierarchy and real-time Core Banking integration.",
            "Engineered Empréstimo Ágil — a 100% digital personal credit pipeline: real-time CET/IOF calculator, dynamic contract generation (PDF Rendering) with digital signature and fraud validation via device fingerprint.",
            "State management with BLoC, Cubit and GetX; quality via Widget Testing, integration_test and Mocktail; CI/CD via CodeMagic; monitoring with Firebase Crashlytics.",
          ],
        },
        {
          title: "Frontend Developer",
          company: "Porto Seguro",
          type: "Insurance · Contract",
          icon: porto,
          date: "Jul 2023 – Dec 2023",
          location: "São Paulo, SP",
          bullets: [
            "Developed +20 high-conversion campaign SPAs in React.js and TypeScript, translating Figma prototypes into reactive interfaces reaching millions of Porto Seguro policyholders.",
            "Ran A/B Tests and monitored Retention and CTR metrics to iteratively optimize conversion journeys and reduce campaign churn.",
            "Global state with Zustand and Context API; standardized components in the corporate Design System; E2E test coverage with Cypress; deployments via CI/CD pipeline.",
          ],
        },
        {
          title: "Mobile & Frontend Engineer",
          company: "TIVIT",
          type: "IT Consulting",
          icon: tivit,
          date: "Oct 2020 – Jun 2023",
          location: "São Paulo, SP",
          bullets: [
            "Grew from Junior to Mid-level Engineer over 3 years at TIVIT (which incorporated Lambda3 in 2022), working on 5+ B2B Flutter apps (iOS/Android). Clean Architecture, SOLID, MVC via Flutter Modular; BLoC, Cubit, GetX, Provider, Riverpod; Scrum/Kanban.",
            "Key delivery: FMC Sales App with Offline-First architecture and bidirectional Delta Sync for field teams without connectivity, financial engine for Barter operations (volatile commodities) and real-time KPI/SIP dashboards.",
            "Quality via Golden Tests, Widget Testing, Flutter Test and Mocktail; web testing with Jest/RTL; REST APIs and Firebase integrations (Auth, Firestore, Cloud Functions).",
          ],
        },
      ],
    },
    skills: {
      subtitle: "What I work with",
      title: "Tech Stack.",
      categories: [
        {
          title: "Mobile",
          tags: [
            { name: "Flutter", primary: true },
            { name: "Dart", primary: true },
            { name: "Swift", primary: false },
            { name: "iOS & Android", primary: false },
            { name: "BLoC / Cubit", primary: false },
            { name: "Riverpod", primary: false },
            { name: "GetX", primary: false },
            { name: "Provider", primary: false },
            { name: "Flutter Modular", primary: false },
            { name: "CodeMagic", primary: false },
            { name: "Firebase Crashlytics", primary: false },
          ],
        },
        {
          title: "Web",
          tags: [
            { name: "React.js", primary: false },
            { name: "TypeScript", primary: true },
            { name: "JavaScript", primary: true },
            { name: "Next.js", primary: false },
            { name: "Zustand", primary: false },
            { name: "Context API", primary: false },
            { name: "Cypress", primary: false },
          ],
        },
        {
          title: "Architecture & Quality",
          tags: [
            { name: "Clean Architecture", primary: true },
            { name: "SOLID", primary: false },
            { name: "MVVM", primary: false },
            { name: "MVC", primary: false },
            { name: "REST APIs", primary: false },
            { name: "TDD", primary: false },
            { name: "Widget Testing", primary: false },
            { name: "Golden Tests", primary: false },
            { name: "Mocktail", primary: false },
            { name: "Jest / RTL", primary: false },
          ],
        },
        {
          title: "Cloud & Tools",
          tags: [
            { name: "Firebase", primary: true },
            { name: "Supabase", primary: false },
            { name: "Python", primary: false },
            { name: "FastAPI", primary: false },
            { name: "Redis", primary: false },
            { name: "Cloudflare", primary: false },
            { name: "Git", primary: false },
            { name: "GitHub Actions", primary: false },
            { name: "CI/CD", primary: false },
            { name: "Figma", primary: false },
            { name: "Scrum / Kanban", primary: false },
            { name: "Swagger", primary: false },
          ],
        },
      ],
    },
    projects: {
      subtitle: "My work",
      title: "Projects.",
      personalLabel: "SaaS & Personal",
      companyLabel: "Professional Work",
      visitLabel: "Visit",
      codeLabel: "Code",
      appStoreLabel: "App Store",
      playStoreLabel: "Play Store",
      personalProjects: [
        {
          name: "MitoIA",
          emoji: "🤖",
          type: "AI Engine",
          stack: "Python · Gemini 2.5 Flash · YouTube API · FastAPI · Supabase · Cloudflare",
          description:
            "AI engine for Fantasy Sports that processes **500+ videos/round** via **Gemini 2.5 Flash** + YouTube API with **10 parallel workers** (ThreadPoolExecutor), phonetic NLP normalization (**300+ mappings**), greedy lineup optimization engine and domain management via Cloudflare.",
          link: "https://mitoia.com.br",
          image: null,
        },
        {
          name: "Curto PRO",
          emoji: "⚽",
          type: "SaaS Platform",
          stack: "Python · FastAPI · React 18/TS · Chrome MV3 · Redis · Supabase · Cloudflare",
          description:
            "**SaaS platform** for Cartola FC analysis and lineup scaling. **Chrome MV3 extension** with OAuth interception, **FastAPI** with Circuit Breaker and Redis rate limiting, **React/TypeScript SPA** with own VPS infra, GitHub Actions CI/CD, payment gateway and Telegram bot.",
          link: "https://curtopro.com",
          image: null,
        },
        {
          name: "Bitcent",
          emoji: "💰",
          type: "Web App",
          stack: "React.js · TypeScript · Next.js",
          description:
            "Personal finance management web app. Track **expenses**, monitor **financial flows** and visualize spending patterns through an **intuitive and responsive** interface built with React.js, TypeScript and Next.js.",
          link: "https://github.com/viniciusvinny233/vnx-bitcent",
          image: null,
        },
      ],
      companyProjects: [
        {
          name: "Tokio Marine Super App",
          company: "Tokio Marine",
          icon: tokiomarine,
          platform: ["iOS", "Android", "Web"],
          description:
            "Flutter Super App — unified codebase for iOS, Android and Web. Complete payment flows (Pix, Boleto, Cards, Google Pay, Apple Pay), Benefits Marketplace and AI-powered store review management.",
          metrics: [
            { value: "+1.2M", label: "Active Users" },
            { value: "2M+", label: "Downloads" },
            { value: "4.7⭐", label: "Rating" },
          ],
          storeLinks: { appStore: "#", playStore: "#" },
        },
        {
          name: "Brasil Card",
          company: "Brasil Card",
          icon: brasilcard,
          platform: ["iOS", "Android"],
          description:
            "Digital bank Flutter app. Complete financial journeys: Pix, Boleto, Credit Card, Additional Cards and Empréstimo Ágil — 100% digital personal credit pipeline with real-time calculations.",
          metrics: [
            { value: "10M+", label: "Downloads" },
            { value: "4.7⭐", label: "App Store" },
            { value: "60K+", label: "Reviews" },
          ],
          storeLinks: { appStore: "#", playStore: "#" },
        },
      ],
    },
    testimonials: {
      subtitle: "What others say",
      title: "Testimonials.",
      linkedinLabel: "View on LinkedIn",
    },
    education: {
      subtitle: "My background",
      title: "Education & Languages.",
      educationLabel: "Education",
      certificationsLabel: "Certifications",
      languagesLabel: "Languages",
      degrees: [
        {
          degree: "Software Engineering — Full Stack & DevSecOps",
          school: "FIAP",
          fullName: "Faculdade de Informática e Administração Paulista",
          period: "2022 – 2026",
          status: "In Progress",
        },
        {
          degree: "Technical Degree in Accounting",
          school: "ETEC",
          fullName: "ETEC Prof. Camargo Aranha",
          period: "2020 – 2022",
          status: "Completed",
        },
      ],
      certifications: [
        "Top 12 NEXT FIAP (×2) — Best Projects of the Year",
        "Mobile Flutter Developer — 148h · XP Educação (2024)",
        "Front End React Developer — 148h · XP Educação (2024)",
        "React + Redux — 50h · Udemy (2023)",
        "Software Engineering — 100h · FIAP (2022)",
        "Full Stack Web Modern — 100h · Udemy (2022)",
        "Scrum Agility in your Project — 10h · Alura (2021)",
      ],
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    connect: {
      subtitle: "Get in touch",
      title: "Let's Connect.",
      description:
        "Open to new opportunities, collaborations or just a good conversation about tech. Reach out through any of the channels below.",
      links: [
        {
          label: "LinkedIn",
          value: "linkedin.com/in/vnxdeveloper",
          href: "https://linkedin.com/in/vnxdeveloper/",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          value: "github.com/viniciusvinny233",
          href: "https://github.com/viniciusvinny233",
          icon: "github",
        },
        {
          label: "Email",
          value: "viniciusvinny233@gmail.com",
          href: "mailto:viniciusvinny233@gmail.com",
          icon: "email",
        },
      ],
    },
  },

  pt: {
    nav: {
      links: [
        { id: "about", title: "Sobre" },
        { id: "experience", title: "Experiência" },
        { id: "skills", title: "Habilidades" },
        { id: "projects", title: "Projetos" },
        { id: "testimonials", title: "Depoimentos" },
        { id: "connect", title: "Contato" },
      ],
      download: "Baixar CV",
      downloadPDF: "/curriculo_PTBR.pdf",
    },
    hero: {
      greeting: "Olá, sou",
      name: "Marcos Vinicius",
      role: "Engenheiro Mobile Sênior",
      subtitle: "Flutter & Dart · Fintech · Seguros",
      description:
        "Construindo apps usados por milhões. Especializado em Flutter para os mercados financeiro e de seguros, com 6+ anos entregando soluções mobile escaláveis.",
      cta: "Meu Trabalho",
      metrics: [
        { value: "+1,2M", label: "Usuários Ativos" },
        { value: "15M+", label: "Downloads" },
        { value: "4,7⭐", label: "Nota nas Lojas" },
      ],
    },
    about: {
      subtitle: "Introdução",
      title: "Quem sou eu",
      description:
        "Engenheiro Mobile Sênior especializado em Flutter & Dart para os mercados financeiro, bancário e de seguros. Trabalho de ponta a ponta — do design de arquitetura ao deploy na App Store e Google Play — construindo produtos que equilibram robustez técnica com resultados de negócio.",
      pillars: [
        {
          icon: "📱",
          title: "Engenharia Mobile",
          description:
            "Especialista em Flutter & Dart para iOS, Android e Web. Clean Architecture, MVVM, gerenciamento de estado avançado (BLoC/Cubit/Riverpod) e entrega CI/CD completa.",
        },
        {
          icon: "🏦",
          title: "Fintech & Seguros",
          description:
            "6+ anos construindo apps críticos para os mercados financeiro e de seguros — pagamentos, esteiras de crédito, marketplaces de benefícios e prevenção a fraudes.",
        },
        {
          icon: "🚀",
          title: "Dono de Produto",
          description:
            "Além do trabalho corporativo, construo e lanço produtos SaaS do zero ao mercado: Curto PRO e MitoIA — ambos em produção com usuários reais.",
        },
      ],
    },
    experience: {
      subtitle: "O que eu fiz até agora",
      title: "Experiência",
      entries: [
        {
          title: "Engenheiro Mobile",
          company: "Tokio Marine",
          type: "Seguradora",
          icon: tokiomarine,
          date: "Ago 2025 – Presente",
          location: "São Paulo, SP",
          bullets: [
            "Lidero o desenvolvimento Mobile do Super App em Flutter — base de código única para iOS, Android e Web com +1,2M de usuários; arquitetura guiada por Clean Architecture, MVVM e Flutter Modular, gerenciamento de estado via BLoC e Cubit.",
            "Liderei a reconstrução completa da sessão de Pagamentos, implementando fluxos de Pix, Boleto, Cartão de Crédito, Google Pay e Apple Pay (iOS, Android e Web) com integração nativa em Swift para os métodos Apple.",
            "Liderei a reformulação do Tokio Indica (Marketplace de Benefícios) integrando Localiza, Rappi, Hoteis.com e Sephora. Implantei um Agente de IA (LLM) para gerenciar avaliações nas lojas, elevando a nota do App de 4.0 para 4,7 ⭐.",
          ],
        },
        {
          title: "Engenheiro Mobile",
          company: "Brasil Card",
          type: "Fintech / Banco Digital",
          icon: brasilcard,
          date: "Fev 2024 – Ago 2025",
          location: "São Paulo, SP",
          bullets: [
            "Desenvolvi e evolui o App Flutter do banco digital (iOS/Android) — 10M+ downloads, 4,7⭐ App Store — entregando jornadas financeiras críticas: Pix, Boleto, Cartão de Crédito e Cartão Adicional com hierarquia Titular/Dependente e integração em tempo real com o Core Bancário.",
            "Engenheirei o Empréstimo Ágil — digitalizando 100% da esteira de crédito pessoal: motor de cálculo CET/IOF em tempo real, geração dinâmica de contratos (PDF Rendering) com assinatura digital e validação de fraude por device fingerprint.",
            "Gerenciamento de estado com BLoC, Cubit e GetX; qualidade via Widget Testing, integration_test e Mocktail; CI/CD via CodeMagic; monitoramento com Firebase Crashlytics.",
          ],
        },
        {
          title: "Desenvolvedor Front-End",
          company: "Porto Seguro",
          type: "Seguradora · Contrato",
          icon: porto,
          date: "Jul 2023 – Dez 2023",
          location: "São Paulo, SP",
          bullets: [
            "Desenvolvi +20 SPAs de campanhas de alta conversão em React.js e TypeScript, traduzindo protótipos do Figma em interfaces reativas que alcançaram milhões de segurados da carteira Porto Seguro.",
            "Executei Testes A/B e monitorei métricas de Retenção e CTR para otimizar iterativamente as jornadas de conversão e reduzir churn nas campanhas.",
            "Estado global com Zustand e Context API; componentes padronizados no Design System corporativo; cobertura de testes E2E com Cypress; deploys via pipeline de CI/CD.",
          ],
        },
        {
          title: "Engenheiro Mobile & Front-End",
          company: "TIVIT",
          type: "Consultoria de TI",
          icon: tivit,
          date: "Out 2020 – Jun 2023",
          location: "São Paulo, SP",
          bullets: [
            "Evoluí de Desenvolvedor Júnior a Engenheiro Pleno ao longo de 3 anos na TIVIT (que incorporou a Lambda3 em 2022), atuando em 5+ projetos B2B com Apps Flutter (iOS/Android). Clean Architecture, SOLID, MVC via Flutter Modular; BLoC, Cubit, GetX, Provider, Riverpod; Scrum/Kanban.",
            "Principal entrega: App de Vendas da FMC com arquitetura Offline-First e Delta Sync bidirecional para equipes de campo sem conectividade, motor financeiro para operações de Barter (commodities voláteis) e dashboards de KPIs e SIP em tempo real.",
            "Qualidade via Golden Tests, Widget Testing, Flutter Test e Mocktail; testes web com Jest/RTL; integrações via REST APIs e Firebase (Auth, Firestore, Cloud Functions).",
          ],
        },
      ],
    },
    skills: {
      subtitle: "Com o que eu trabalho",
      title: "Stack Técnica",
      categories: [
        {
          title: "Mobile",
          tags: [
            { name: "Flutter", primary: true },
            { name: "Dart", primary: true },
            { name: "Swift", primary: false },
            { name: "iOS & Android", primary: false },
            { name: "BLoC / Cubit", primary: false },
            { name: "Riverpod", primary: false },
            { name: "GetX", primary: false },
            { name: "Provider", primary: false },
            { name: "Flutter Modular", primary: false },
            { name: "CodeMagic", primary: false },
            { name: "Firebase Crashlytics", primary: false },
          ],
        },
        {
          title: "Web",
          tags: [
            { name: "React.js", primary: true },
            { name: "TypeScript", primary: true },
            { name: "JavaScript", primary: true },
            { name: "Next.js", primary: false },
            { name: "Zustand", primary: false },
            { name: "Context API", primary: false },
            { name: "Cypress", primary: false },
          ],
        },
        {
          title: "Arquitetura & Qualidade",
          tags: [
            { name: "Clean Architecture", primary: false },
            { name: "SOLID", primary: false },
            { name: "MVVM", primary: false },
            { name: "MVC", primary: false },
            { name: "REST APIs", primary: false },
            { name: "TDD", primary: false },
            { name: "Widget Testing", primary: false },
            { name: "Golden Tests", primary: false },
            { name: "Mocktail", primary: false },
            { name: "Jest / RTL", primary: false },
          ],
        },
        {
          title: "Cloud & Ferramentas",
          tags: [
            { name: "Firebase", primary: false },
            { name: "Supabase", primary: false },
            { name: "Python", primary: false },
            { name: "FastAPI", primary: false },
            { name: "Redis", primary: false },
            { name: "Cloudflare", primary: false },
            { name: "Git", primary: false },
            { name: "GitHub Actions", primary: false },
            { name: "CI/CD", primary: false },
            { name: "Figma", primary: false },
            { name: "Scrum / Kanban", primary: false },
            { name: "Swagger", primary: false },
          ],
        },
      ],
    },
    projects: {
      subtitle: "Meu trabalho",
      title: "Projetos",
      personalLabel: "SaaS & Pessoais",
      companyLabel: "Projetos Profissionais",
      visitLabel: "Visitar",
      codeLabel: "Código",
      appStoreLabel: "App Store",
      playStoreLabel: "Play Store",
      personalProjects: [
        {
          name: "MitoIA",
          emoji: "🤖",
          type: "Motor de IA",
          stack: "Python · Gemini 2.5 Flash · YouTube API · FastAPI · Supabase · Cloudflare",
          description:
            "Motor de IA para Fantasy Sports que processa **500+ vídeos/rodada** via **Gemini 2.5 Flash** + YouTube API com **10 workers paralelos** (ThreadPoolExecutor), normalização NLP fonética (**300+ mapeamentos**), engine greedy de otimização de lineup e gestão de domínio via Cloudflare.",
          link: "https://mitoia.com.br",
          image: null,
        },
        {
          name: "Curto PRO",
          emoji: "⚽",
          type: "Plataforma SaaS",
          stack: "Python · FastAPI · React 18/TS · Chrome MV3 · Redis · Supabase · Cloudflare",
          description:
            "**Plataforma SaaS** de análise e escalação para o Cartola FC. **Extensão Chrome MV3** com interceptação OAuth, **FastAPI** com Circuit Breaker e rate limiting Redis, **SPA React/TypeScript** com infra VPS própria, GitHub Actions CI/CD, gateway de pagamento e bot Telegram.",
          link: "https://curtopro.com",
          image: null,
        },
        {
          name: "Bitcent",
          emoji: "💰",
          type: "App Web",
          stack: "React.js · TypeScript · Next.js",
          description:
            "Aplicação web de **controle financeiro pessoal**. Monitore **despesas**, acompanhe **fluxos financeiros** e visualize padrões de gastos através de uma interface **intuitiva e responsiva** construída com React.js, TypeScript e Next.js.",
          link: "https://github.com/viniciusvinny233/vnx-bitcent",
          image: null,
        },
      ],
      companyProjects: [
        {
          name: "Tokio Marine Super App",
          company: "Tokio Marine",
          icon: tokiomarine,
          platform: ["iOS", "Android", "Web"],
          description:
            "Super App Flutter com base de código única para iOS, Android e Web. Fluxos completos de pagamento (Pix, Boleto, Cartões, Google Pay, Apple Pay), Marketplace de Benefícios e gerenciamento de avaliações por IA.",
          metrics: [
            { value: "+1,2M", label: "Usuários Ativos" },
            { value: "2M+", label: "Downloads" },
            { value: "4,7⭐", label: "Nota" },
          ],
          storeLinks: { appStore: "#", playStore: "#" },
        },
        {
          name: "Brasil Card",
          company: "Brasil Card",
          icon: brasilcard,
          platform: ["iOS", "Android"],
          description:
            "App Flutter de banco digital. Jornadas financeiras completas: Pix, Boleto, Cartão de Crédito, Cartões Adicionais e Empréstimo Ágil — esteira de crédito 100% digital com cálculos em tempo real.",
          metrics: [
            { value: "10M+", label: "Downloads" },
            { value: "4,7⭐", label: "App Store" },
            { value: "60K+", label: "Avaliações" },
          ],
          storeLinks: { appStore: "#", playStore: "#" },
        },
      ],
    },
    testimonials: {
      subtitle: "O que dizem sobre mim",
      title: "Depoimentos",
      linkedinLabel: "Ver no LinkedIn",
    },
    education: {
      subtitle: "Minha formação",
      title: "Formação & Idiomas",
      educationLabel: "Formação",
      certificationsLabel: "Certificações",
      languagesLabel: "Idiomas",
      degrees: [
        {
          degree: "Engenharia de Software — Full Stack & DevSecOps",
          school: "FIAP",
          fullName: "Faculdade de Informática e Administração Paulista",
          period: "2022 – 2026",
          status: "Em andamento",
        },
        {
          degree: "Técnico em Contabilidade",
          school: "ETEC",
          fullName: "ETEC Prof. Camargo Aranha",
          period: "2020 – 2022",
          status: "Concluído",
        },
      ],
      certifications: [
        "Top 12 NEXT FIAP (×2) — Melhores Projetos do Ano",
        "Desenvolvedor Mobile Flutter — 148h · XP Educação (2024)",
        "Desenvolvedor Front End React — 148h · XP Educação (2024)",
        "React + Redux — 50h · Udemy (2023)",
        "Engenharia de Software — 100h · FIAP (2022)",
        "Full Stack Web Moderno — 100h · Udemy (2022)",
        "Scrum: Agilidade em seu projeto — 10h · Alura (2021)",
      ],
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado" },
        { name: "Espanhol", level: "Básico" },
      ],
    },
    connect: {
      subtitle: "Entre em contato",
      title: "Vamos Conversar",
      description:
        "Aberto a novas oportunidades, colaborações ou uma boa conversa sobre tecnologia. Me contate por qualquer um dos canais abaixo.",
      links: [
        {
          label: "LinkedIn",
          value: "linkedin.com/in/vnxdeveloper",
          href: "https://linkedin.com/in/vnxdeveloper/",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          value: "github.com/viniciusvinny233",
          href: "https://github.com/viniciusvinny233",
          icon: "github",
        },
        {
          label: "Email",
          value: "viniciusvinny233@gmail.com",
          href: "mailto:viniciusvinny233@gmail.com",
          icon: "email",
        },
      ],
    },
  },
};
