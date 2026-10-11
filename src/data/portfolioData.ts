import type { ProjectItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "yugeen",
  role: "Software & Game Developer",
  tagline: "Разработка игр, мобильных приложений и высокопроизводительных веб-сервисов.",
  status: "Открыт для предложений & проектов",
  telegram: "https://t.me/yugeen",
  instagram: "https://instagram.com/yugeen",
  github: "https://github.com/yugeen",
  bio: [
    "Универсальный разработчик с опытом в системном программировании, геймдеве, мобильных приложениях и современном вебе.",
    "Пишу на C++, C# и TypeScript. Занимаюсь как созданием игровых механик и клиентских приложений, так и проектированием масштабируемых веб-платформ и сетевых сервисов. Ценю чистую архитектуру, оптимизацию и отзывчивый UX."
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: "netmorph",
    title: "NetMorph",
    tagline: "Сетевой анализатор протоколов & LLM Studio",
    description: "Комплексная среда для инспекции, валидации и трансформации сетевых дампов. Оснащена встроенным Monaco Editor, системой пайплайн-валидации пакетов и коннекторами к локальным моделям Ollama.",
    highlights: [
      "Интерактивный редактор протоколов с Monaco Editor и проверкой типов в реальном времени",
      "Пайплайн валидации сетевых пакетов и генерация тестовых дампов",
      "Оптимизированный рендеринг тяжелых дампов с нулевым лагом интерфейса"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor", "Ollama API"],
    demoUrl: "https://github.com/yugeen/NetMorph",
    githubUrl: "https://github.com/yugeen/NetMorph",
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
      "Быстрый отзывчивый интерфейс без избыточных сторонних зависимостей"
    ],
    techStack: ["JavaScript", "HTML5", "Modern CSS", "REST API", "Responsive UI"],
    demoUrl: "https://github.com/yugeen/Courier-Manager",
    githubUrl: "https://github.com/yugeen/Courier-Manager",
    status: "Completed"
  },
  {
    id: "game-engine-core",
    title: "Game Systems & Core Logic",
    tagline: "Игровые механики, физика и десктопные сервисы",
    description: "Разработка игровой логики, систем взаимодействия сущностей, симуляции физики и графических конвейеров на C++ и C#.",
    highlights: [
      "Оптимизированный менеджмент памяти, циклы обновления (Game Loop) и обработка коллизий",
      "Архитектура ECS (Entity Component System) для масштабируемых симуляций",
      "Кроссплатформенная сборка и интеграция шейдеров / ассетов"
    ],
    techStack: ["C++", "C#", ".NET", "GameDev", "Algorithms & Math", "Multi-threading"],
    githubUrl: "https://github.com/yugeen",
    status: "Core Dev"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Языки программирования",
    iconName: "Code2",
    skills: ["C++", "C#", "Python", "TypeScript", "JavaScript", "SQL", "HTML5 / CSS3"]
  },
  {
    category: "GameDev & Десктоп",
    iconName: "Gamepad2",
    skills: ["Game Engines", ".NET / C#", "Game Physics", "ECS Architecture", "Math & 3D Math", "Desktop Apps"]
  },
  {
    category: "Мобильная разработка",
    iconName: "Smartphone",
    skills: ["Mobile Apps", "React Native", "Cross-Platform UI", "Android", "Mobile Architecture"]
  },
  {
    category: "Web & Frontend",
    iconName: "Layout",
    skills: ["React 19", "Vite", "TypeScript", "Modern Vanilla CSS", "Zustand", "Monaco Editor"]
  },
  {
    category: "Бэкенд & Сети",
    iconName: "Server",
    skills: ["Node.js", "REST APIs", "WebSocket", "Network Protocols", "Microservices", "Data Pipelines"]
  },
  {
    category: "Инструменты & DevOps",
    iconName: "Terminal",
    skills: ["Git & GitHub", "Docker", "Linux / VPS", "Nginx", "CI/CD Pipelines", "VS Code / IDEs"]
  }
];
