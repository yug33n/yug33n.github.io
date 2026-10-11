import type { ProjectItem, ExperienceItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Grymik",
  role: "Fullstack / Software Engineer",
  tagline: "Разрабатываю производительные веб-приложения, сетевые утилиты и масштабируемые серверные сервисы.",
  status: "Открыт для предложений & проектов",
  email: "grymik@example.com",
  telegram: "https://t.me/grymik",
  github: "https://github.com/grymik0",
  bio: [
    "Специализируюсь на создании современных интерактивных веб-приложений и надежных бэкенд-сервисов. Уделяю первостепенное внимание архитектуре, отзывчивости интерфейсов и чистоте кодовой базы.",
    "В разработке совмещаю строгую типизацию TypeScript, компонентный подход React и эффективную обработку данных. Люблю решать сложные инженерные задачи: от парсинга бинарных протоколов до проектирования удобных UI-систем."
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: "netmorph",
    title: "NetMorph",
    tagline: "Сетевой анализатор протоколов & Studio",
    description: "Комплексная среда для инспекции, валидации и трансформации сетевых дампов и протоколов с поддержкой интеграций LLM/Ollama и встроенным Monaco Editor.",
    highlights: [
      "Интерактивный редактор протоколов с Monaco Editor и проверкой типов в реальном времени",
      "Пайплайн валидации сетевых пакетов и генерации тестовых дампов",
      "Оптимизированный рендеринг тяжелых дампов с нулевым лагом интерфейса"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor", "Ollama API"],
    demoUrl: "https://github.com/grymik0/NetMorph",
    githubUrl: "https://github.com/grymik0/NetMorph",
    status: "Active"
  },
  {
    id: "courier-manager",
    title: "Courier Manager",
    tagline: "Платформа логистики и управления доставками",
    description: "Веб-сервис для распределения заказов курьерам, мониторинга статусов в реальном времени и оптимизации логистических маршрутов.",
    highlights: [
      "Динамическая фильтрация и распределение доставок между курьерами",
      "Адаптивный дашборд с аналитикой выполнения заказов",
      "Минималистичный быстрый интерфейс без сторонних тяжелых библиотек"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST API", "Responsive Design"],
    demoUrl: "https://github.com/grymik0/Courier-Manager",
    githubUrl: "https://github.com/grymik0/Courier-Manager",
    status: "Completed"
  },
  {
    id: "cloud-metrics-agent",
    title: "Telemetry & Pipeline Monitor",
    tagline: "Легковесный монитор метрик и микросервисов",
    description: "Распределенный агент для сбора системных метрик серверов (CPU, RAM, Network I/O) с визуализацией графиков и оповещениями в Telegram.",
    highlights: [
      "Потоковый сбор данных через WebSockets с низким оверхедом по памяти (< 25MB)",
      "Интуитивные дашборды с графиками и алертами критических порогов",
      "Контейнеризация через Docker и автоматический деплой через GitHub Actions"
    ],
    techStack: ["TypeScript", "Node.js", "Docker", "WebSockets", "Nginx", "Linux"],
    githubUrl: "https://github.com/grymik0",
    status: "Prototype"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Наст. время",
    role: "Fullstack Developer",
    company: "Инженерные веб-проекты & Open Source",
    description: "Проектирование и разработка клиентских SPA-приложений, построение пайплайнов обработки данных и интеграция сетевых протоколов. Оптимизация производительности и внедрение современных практик CI/CD.",
    skills: ["React", "TypeScript", "Vite", "Zustand", "Node.js", "Docker"]
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    role: "Frontend / Web Developer",
    company: "Продуктовая разработка",
    description: "Создание адаптивных клиентских интерфейсов, разработка дашбордов для управления логистикой и заказами, рефакторинг легаси-кода на современный стек.",
    skills: ["JavaScript", "CSS3 / Modern CSS", "REST API", "Git", "UI/UX Architecture"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Core",
    iconName: "Layout",
    skills: ["React 19", "TypeScript", "JavaScript (ESNext)", "Vite", "HTML5 / Semantic", "Vanilla CSS", "CSS Modules"]
  },
  {
    category: "State & Tools",
    iconName: "Cpu",
    skills: ["Zustand", "Monaco Editor", "Lucide", "Framer Motion", "REST APIs", "WebSocket"]
  },
  {
    category: "Backend & Systems",
    iconName: "Server",
    skills: ["Node.js", "Express", "Network Protocols", "API Design", "Ollama / LLM Pipelines"]
  },
  {
    category: "DevOps & Deployment",
    iconName: "Terminal",
    skills: ["Git & GitHub", "Docker", "Nginx", "Linux / VPS", "GitHub Pages", "Vercel / Cloudflare"]
  }
];
