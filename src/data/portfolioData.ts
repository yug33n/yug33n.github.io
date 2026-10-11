import type { ProjectItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "yugeen",
  role: "Software Developer",
  tagline: "Разработка десктопных приложений, мобильных сервисов и высокопроизводительного веба.",
  status: "Открыт для предложений & проектов",
  telegram: "https://t.me/dim0kkk",
  instagram: "https://instagram.com/yug3en",
  github: "https://github.com/grymik0",
  bio: [
    "Универсальный разработчик с опытом в системном программировании, десктопных решениях, мобильных приложениях и современном вебе.",
    "Пишу на C++, C# и TypeScript. Занимаюсь созданием десктопных и мобильных клиентских приложений, а также проектированием масштабируемых веб-платформ и сетевых сервисов. Ценю чистую архитектуру, оптимизацию и отзывчивый UX."
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
      "Быстрый отзывчивый интерфейс без избыточных сторонних зависимостей"
    ],
    techStack: ["JavaScript", "HTML5", "Modern CSS", "REST API", "Responsive UI"],
    githubUrl: "https://github.com/grymik0/Courier-Manager",
    status: "Completed"
  },
  {
    id: "desktop-core-tooling",
    title: "Desktop Core & System Tooling",
    tagline: "Системные утилиты, асинхронная логика и десктопные сервисы",
    description: "Разработка высокопроизводительной системной логики, фоновых служб и десктопных приложений на C++ и C#.",
    highlights: [
      "Оптимизированный менеджмент памяти и многопоточная обработка задач",
      "Модульная архитектура для расширяемых клиентских и консольных приложений",
      "Кроссплатформенная сборка и интеграция нативных системных API"
    ],
    techStack: ["C++", "C#", ".NET", "Desktop", "Algorithms & Math", "Multi-threading"],
    githubUrl: "https://github.com/grymik0",
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
    category: "Десктоп & Системное ПО",
    iconName: "Cpu",
    skills: [".NET / C#", "Desktop Apps", "System Tooling", "Algorithms & Math", "Multi-threading", "Native APIs"]
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
