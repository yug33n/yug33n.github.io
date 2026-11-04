import type { ProjectItem } from '../types';

export type Language = 'ru' | 'en';

export const socialLinks = {
  telegram: "https://t.me/dim0kkk",
  instagram: "https://instagram.com/yug3en",
  github: "https://github.com/yug33n",
};

export const personalInfo = {
  name: "Митя (yug33n)",
  role: "Software Developer",
  tagline: "Engineering desktop software, mobile services, games & modern web.",
  status: "Available for contracts & projects",
  telegram: socialLinks.telegram,
  instagram: socialLinks.instagram,
  github: socialLinks.github,
};

export const personalInfoData: Record<Language, {
  name: string;
  role: string;
  experienceBadge: string;
  tagline: string;
  status: string;
  bio: string[];
}> = {
  ru: {
    name: "Митя (yug33n)",
    role: "Software Developer",
    experienceBadge: "3 года опыта",
    tagline: "Разработка десктопных решений, мобильных сервисов и современного веба.",
    status: "Открыт для предложений & проектов",
    bio: [
      "Привет! Я Митя (в сети известен как yug33n). Занимаюсь разработкой софта уже более 3 лет: от системных утилит на C# и .NET 10 до интерактивных веб-сервисов на React 19 и архитектур с локальными LLM.",
      "Люблю продуманные технические решения, высокую производительность и чистый, отзывчивый интерфейс. Разрабатываю проекты с нуля: от логики работы с процессами и API до готового пользовательского продукта."
    ]
  },
  en: {
    name: "Mitya (yug33n)",
    role: "Software Developer",
    experienceBadge: "3+ Years of Experience",
    tagline: "Engineering desktop software, mobile services & modern web.",
    status: "Available for contracts & projects",
    bio: [
      "Hi! I'm Mitya (known online as yug33n). I've been engineering software for over 3 years: spanning native Windows system tools in C# & .NET 10, reactive web apps on React 19, and local LLM workflows.",
      "Focused on solid architectural decisions, low resource consumption, and intuitive user experiences. Crafting products from low-level OS mechanics up to refined, modern interfaces."
    ]
  }
};

export const projectsContent: Record<Language, ProjectItem[]> = {
  ru: [
    // 4 Featured Projects
    {
      id: "wintime",
      featured: true,
      title: "WinTime",
      tagline: "Трекер экранного времени и продуктивности для Windows",
      description: "Системное приложение в трее Windows: отслеживает активные процессы, окна, вкладки браузеров и проекты. 100% данных хранятся локально в SQLite — полный контроль и приватность.",
      highlights: [
        "Мониторинг активных вкладок браузера, проектов в IDE и игровых процессов",
        "Лимиты экранного времени с мягкими уведомлениями",
        "Анализ ритмов сна через системный лог событий Windows и плавающий мини-виджет",
        "Геймификация продуктивности: уровни XP и тепловая карта активности"
      ],
      techStack: [".NET 10", "C#", "SQLite", "Windows APIs", "Fluent UI"],
      githubUrl: "https://github.com/yug33n/WinTime",
      downloadUrl: "https://github.com/yug33n/WinTime/releases/tag/v3.0.0",
      image: "/projects/wintime-ru.webp",
      isPrivate: false,
      category: "csharp",
      status: "Desktop Utility"
    },
    {
      id: "lucidtune",
      featured: true,
      title: "LucidTune",
      tagline: "Плавающий Dynamic Island медиа-виджет для Windows 10/11",
      description: "Легковесный кастомизируемый оверлей-виджет в стиле Dynamic Island. Отображает обложки треков, таймлайн и элементы управления поверх любых окон и полноэкранных игр с эффектом матового стекла.",
      highlights: [
        "Интеграция с Windows Media (SMTC): автосинхронизация со Spotify, Яндекс Музыкой, VK, YouTube",
        "Эстетичный Frosted Glass оверлей с плавной анимацией сворачивания",
        "Глобальные хоткеи, минимальное потребление памяти (< 25 МБ) и нулевой инпут-лаг"
      ],
      techStack: [".NET 9", "C#", "WPF", "XAML", "Windows SMTC", "Win32 APIs"],
      image: "/projects/lucidtune.webp",
      isPrivate: true,
      category: "csharp",
      status: "Desktop Overlay"
    },
    {
      id: "pipeflow",
      featured: true,
      title: "PipeFlow",
      tagline: "Визуальный симулятор архитектуры процессора и веб-IDE",
      description: "Интерактивная обучающая среда и веб-IDE, вдохновленная классической архитектурой фон Неймана. Пользователь проектирует алгоритмы из ассемблероподобных инструкций (ISA-9), визуализируя перемещение данных по шинам и регистрам в реальном времени.",
      highlights: [
        "Визуализация архитектуры процессора: регистры, память RAM, шины данных и очереди",
        "Собственная система команд ISA-9 с ветвлением и условиями",
        "Drag & Drop редактор инструкций, пошаговый отладчик с регулировкой частоты тактов"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "dnd-kit", "Web IDE"],
      image: "/projects/pipeflow.webp",
      isPrivate: true,
      category: "web",
      status: "Web Game & IDE"
    },
    {
      id: "nexora",
      featured: true,
      title: "Nexora",
      tagline: "Интеллектуальное пространство заметок и базы знаний с AI",
      description: "Современная модульная среда для ведения заметок и командных баз знаний с акцентом на эстетику, приватность и скорость. Локальное хранение файлов, интерактивный граф связей между мыслями, совместные рабочие пространства и локальный AI-ассистент для быстрого поиска инсайтов и структурирования контента.",
      highlights: [
        "Интерактивный граф связей между заметками и концепциями в реальном времени",
        "Встроенный интеллектуальный AI-ассистент для анализа и быстрого синтеза идей",
        "Коллаборативные пространства и приватное локальное хранение заметок"
      ],
      techStack: ["React", "TypeScript", "Python", "SQLite", "Local AI / LLM"],
      githubUrl: "https://github.com/yug33n/Nexora",
      image: "/projects/nexora-card.webp",
      isPrivate: false,
      category: "ai",
      status: "Workspace & AI"
    },

    // 4 Other Archive Projects
    {
      id: "notiva",
      title: "Notiva",
      tagline: "Интеллектуальная база знаний и учебный ассистент (PWA)",
      description: "Клиент-серверное приложение для студентов и исследователей. Автоматически преобразует учебные материалы и PDF-документы в структурированные базы знаний, Anki-карточки и проверочные квизы.",
      highlights: [
        "Парсинг PDF и автоматическое структурирование лекций",
        "Генерация флеш-карточек для интервального повторения",
        "PWA-архитектура с поддержкой автономной работы"
      ],
      techStack: ["TypeScript", "React", "PWA", "Node.js", "PDF Parsing"],
      isPrivate: true,
      category: "web",
      status: "Web & PWA"
    },
    {
      id: "aetheria-chronicles",
      title: "Aetheria Chronicles",
      tagline: "Интерактивная текстовая CRPG на базе локальных LLM",
      description: "Ролевая игра в фэнтезийном мире, где роль гейм-мастера берет на себя локальная нейросеть через Ollama. Мир процедурно адаптируется к решениям игрока без облачных платных подписок.",
      highlights: [
        "Генерация сюжета и диалогов локальной нейросетью на лету",
        "Ролевая система: характеристики, инвентарь, броски проверок",
        "Автономная работа без отправки данных во внешние облака"
      ],
      techStack: ["TypeScript", "Python", "Ollama API", "Local LLMs", "CRPG"],
      isPrivate: true,
      category: "ai",
      status: "AI Game"
    },
    {
      id: "kintask",
      title: "KinTask",
      tagline: "Умный Telegram-бот для совместных заметок и задач с AI",
      description: "Современный многопользовательский Telegram-сервис для совместного ведения списков, заметок, фильмов и командных задач с интеллектуальной сортировкой и AI-помощником.",
      highlights: [
        "Синхронизация списков и заметок между участниками диалога в реальном времени",
        "Интеллектуальная категоризация записей и напоминания",
        "Асинхронный быстрый бэкенд на Python и aiogram с БД SQLite"
      ],
      techStack: ["Python", "aiogram 3", "SQLite", "FastAPI", "AI / LLM"],
      isPrivate: true,
      category: "ai",
      status: "Telegram Service"
    },
    {
      id: "netmorph",
      title: "NetMorph",
      tagline: "Сетевой анализатор протоколов & LLM Studio",
      description: "Среда для инспекции, валидации и трансформации сетевых дампов со встроенным Monaco Editor, валидатором пакетов и интеграцией с локальными LLM.",
      highlights: [
        "Инспектор протоколов на базе Monaco Editor с подсветкой типов",
        "Коннектор к локальным моделям для расшифровки дампов",
        "Высокая производительность рендеринга больших объемов данных"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor"],
      isPrivate: true,
      category: "web",
      status: "Network Studio"
    }
  ],
  en: [
    // 4 Featured Projects
    {
      id: "wintime",
      featured: true,
      title: "WinTime",
      tagline: "Windows screen time & productivity tracker",
      description: "Quiet Windows system tray application: tracks active processes, window titles, browser tabs, and projects. 100% of data is stored locally in SQLite with total privacy.",
      highlights: [
        "Deep monitoring for browser tabs, IDE projects, and game sessions",
        "Customizable daily screen time goals with gentle notifications",
        "Sleep rhythm insights via Windows Event Log and floating desktop micro-widget",
        "Gamified productivity: XP levels, quests, and activity heatmap"
      ],
      techStack: [".NET 10", "C#", "SQLite", "Windows APIs", "Fluent UI"],
      githubUrl: "https://github.com/yug33n/WinTime",
      downloadUrl: "https://github.com/yug33n/WinTime/releases/tag/v3.0.0",
      image: "/projects/wintime-en.webp",
      isPrivate: false,
      category: "csharp",
      status: "Desktop Utility"
    },
    {
      id: "lucidtune",
      featured: true,
      title: "LucidTune",
      tagline: "Floating Dynamic Island media overlay for Windows 10/11",
      description: "Ultra-lightweight desktop overlay widget inspired by Dynamic Island. Brings live track metadata, artwork, progress bar, and player controls above windows and games with frosted glass styling.",
      highlights: [
        "Windows Media (SMTC) integration: syncs with Spotify, Yandex Music, YouTube, VK",
        "Frosted glass aesthetic with smooth collapse animations",
        "Global hotkeys, low memory footprint (< 25 MB), and zero input latency"
      ],
      techStack: [".NET 9", "C#", "WPF", "XAML", "Windows SMTC", "Win32 APIs"],
      image: "/projects/lucidtune.webp",
      isPrivate: true,
      category: "csharp",
      status: "Desktop Overlay"
    },
    {
      id: "pipeflow",
      featured: true,
      title: "PipeFlow",
      tagline: "Visual CPU architecture simulator & puzzle Web IDE",
      description: "Interactive learning environment and web IDE inspired by classic von Neumann architecture. Users construct algorithms using an assembly-like instruction set (ISA-9), animating registers and data buses in real time.",
      highlights: [
        "Real-time CPU visualization: registers, RAM floor, data buses, and queues",
        "Complete ISA-9 instruction set with conditional branching",
        "Drag & Drop instruction editor with variable clock speed debugger"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "dnd-kit", "Web IDE"],
      image: "/projects/pipeflow.webp",
      isPrivate: true,
      category: "web",
      status: "Web Game & IDE"
    },
    {
      id: "nexora",
      featured: true,
      title: "Nexora",
      tagline: "Next-gen intelligent note workspace & AI knowledge base",
      description: "Modern modular environment for personal notes and collaborative team knowledge bases, built with a focus on aesthetics, privacy, and speed. Features local-first file storage, interactive concept graph, shared team spaces, and a local AI copilot for instant synthesis and structuring.",
      highlights: [
        "Interactive real-time graph visualization connecting ideas and notes",
        "Embedded AI copilot for summarizing and extracting knowledge",
        "Collaborative workspaces with strict local data preservation"
      ],
      techStack: ["React", "TypeScript", "Python", "SQLite", "Local AI / LLM"],
      githubUrl: "https://github.com/yug33n/Nexora",
      image: "/projects/nexora-card.webp",
      isPrivate: false,
      category: "ai",
      status: "Workspace & AI"
    },

    // 4 Other Archive Projects
    {
      id: "notiva",
      title: "Notiva",
      tagline: "Intelligent study knowledge base & assistant (PWA)",
      description: "Cross-platform app transforming study notes and PDF documents into structured knowledge cards, spaced repetition flashcards, and quizzes.",
      highlights: [
        "PDF ingestion and automated lecture structuring",
        "Active recall flashcard generation for exam prep",
        "PWA offline-ready architecture"
      ],
      techStack: ["TypeScript", "React", "PWA", "Node.js", "PDF Parsing"],
      isPrivate: true,
      category: "web",
      status: "Web & PWA"
    },
    {
      id: "aetheria-chronicles",
      title: "Aetheria Chronicles",
      tagline: "Interactive text-based CRPG powered by local LLMs",
      description: "Dark fantasy role-playing adventure where a local neural model via Ollama acts as a procedural Game Master adapting dynamically to player choices.",
      highlights: [
        "Procedural narrative and dialogs generated by local LLMs",
        "CRPG depth: attributes, inventory checks, consequential choices",
        "100% private operation with zero cloud API dependencies"
      ],
      techStack: ["TypeScript", "Python", "Ollama API", "Local LLMs", "CRPG"],
      isPrivate: true,
      category: "ai",
      status: "AI Game"
    },
    {
      id: "kintask",
      title: "KinTask",
      tagline: "Smart Telegram bot for collaborative task & note management",
      description: "Real-time Telegram collaborative service for managing shared notes, watchlists, and task boards with automated AI categorization.",
      highlights: [
        "Real-time list sync between chat members with fast commands",
        "Smart AI categorization and contextual reminders",
        "High-performance asynchronous backend in Python & aiogram 3"
      ],
      techStack: ["Python", "aiogram 3", "SQLite", "FastAPI", "AI / LLM"],
      isPrivate: true,
      category: "ai",
      status: "Telegram Service"
    },
    {
      id: "netmorph",
      title: "NetMorph",
      tagline: "Network protocol analyzer & LLM Studio",
      description: "Studio for inspecting and transforming network dumps with Monaco Editor, packet validation pipeline, and local LLM connectors.",
      highlights: [
        "Monaco Editor protocol inspector with real-time type diagnostics",
        "Connectors to local models for automated dump interpretation",
        "Zero-latency rendering of heavy packet traces"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor"],
      isPrivate: true,
      category: "web",
      status: "Network Studio"
    }
  ]
};

export interface KeypadSkill {
  id: string;
  keyLabel: string;
  name: string;
  category: 'langs' | 'desktop' | 'web' | 'ai' | 'tools';
  color: string;
  descriptionRu: string;
  descriptionEn: string;
  relatedProjects: string[];
}

export const keypadSkillsData: KeypadSkill[] = [
  {
    id: "csharp",
    keyLabel: "C#",
    name: "C# & .NET",
    category: "desktop",
    color: "#a855f7",
    descriptionRu: "Основной язык для разработки высокопроизводительного Windows-софта, системных служб и архитектурных решений.",
    descriptionEn: "Core language for high-performance Windows software, background services, and native desktop systems.",
    relatedProjects: ["WinTime", "LucidTune"]
  },
  {
    id: "cpp",
    keyLabel: "C++",
    name: "C++ / Win32",
    category: "langs",
    color: "#3b82f6",
    descriptionRu: "Низкоуровневая разработка, работа с Win32 API, системными хуками и оптимизация ресурсоемких модулей.",
    descriptionEn: "Low-level engineering, Win32 APIs, system hooks, and resource-sensitive optimizations.",
    relatedProjects: ["WinTime", "LucidTune"]
  },
  {
    id: "ts",
    keyLabel: "TS",
    name: "TypeScript",
    category: "web",
    color: "#38bdf8",
    descriptionRu: "Строгая типизация, построение масштабируемых веб-приложений, IDE и клиентских архитектур.",
    descriptionEn: "Strict typing, building scalable web platforms, IDE interfaces, and robust client architectures.",
    relatedProjects: ["PipeFlow", "Nexora", "Notiva", "NetMorph"]
  },
  {
    id: "react",
    keyLabel: "React",
    name: "React 19",
    category: "web",
    color: "#06b6d4",
    descriptionRu: "Современные реактивные интерфейсы, кастомные хуки, виртуализация и анимации с 60fps.",
    descriptionEn: "Modern reactive interfaces, state architecture, component virtualization, and smooth 60fps UI.",
    relatedProjects: ["PipeFlow", "Nexora", "NetMorph"]
  },
  {
    id: "python",
    keyLabel: "Py",
    name: "Python 3",
    category: "langs",
    color: "#eab308",
    descriptionRu: "Асинхронные микросервисы (FastAPI, aiogram 3), скрипты обработки данных и интеграция с LLM.",
    descriptionEn: "Asynchronous microservices (FastAPI, aiogram 3), automation pipelines, and LLM orchestration.",
    relatedProjects: ["KinTask", "Nexora", "Aetheria Chronicles"]
  },
  {
    id: "ollama",
    keyLabel: "AI",
    name: "Local LLM & Ollama",
    category: "ai",
    color: "#10b981",
    descriptionRu: "Запуск локальных моделей, промпт-инжиниринг, извлечение знаний и автономные агенты.",
    descriptionEn: "Local model deployment, prompt engineering, structured knowledge extraction, and autonomous agents.",
    relatedProjects: ["Nexora", "Aetheria Chronicles", "NetMorph"]
  },
  {
    id: "sqlite",
    keyLabel: "SQL",
    name: "SQLite & Relational DB",
    category: "desktop",
    color: "#64748b",
    descriptionRu: "Локальные БД без накладных расходов, индексы, миграции данных и быстрые транзакции.",
    descriptionEn: "Embedded local-first databases, performant indexes, data migrations, and atomic operations.",
    relatedProjects: ["WinTime", "Nexora", "KinTask"]
  },
  {
    id: "wpf",
    keyLabel: "WPF",
    name: "WPF & XAML",
    category: "desktop",
    color: "#8b5cf6",
    descriptionRu: "Разработка нативных Windows GUI, оверлеев поверх окон, кастомных стилей и шаблонов элементов управления.",
    descriptionEn: "Native Windows GUI engineering, floating window overlays, hardware-accelerated XAML visuals.",
    relatedProjects: ["LucidTune", "WinTime"]
  },
  {
    id: "docker",
    keyLabel: "Dock",
    name: "Docker & Linux",
    category: "tools",
    color: "#0284c7",
    descriptionRu: "Контейнеризация сервисов, развертывание на VPS, настройка Nginx и работа в среде Linux.",
    descriptionEn: "Service containerization, VPS deployment, Nginx configuration, and headless Linux workflows.",
    relatedProjects: ["KinTask", "Nexora"]
  },
  {
    id: "git",
    keyLabel: "Git",
    name: "Git & CI/CD",
    category: "tools",
    color: "#f97316",
    descriptionRu: "Ветвление, код-ревью, автоматизация релизов и деплой через GitHub Actions.",
    descriptionEn: "Feature branching, pull requests, automated release builds, and GitHub Actions CI/CD.",
    relatedProjects: ["Все проекты", "All Projects"]
  },
  {
    id: "postgres",
    keyLabel: "PG",
    name: "PostgreSQL",
    category: "desktop",
    color: "#336791",
    descriptionRu: "Реляционные базы данных, проектирование схем, транзакции, индексы и оптимизация SQL-запросов.",
    descriptionEn: "Relational database schema design, ACID transactions, indexing, and SQL optimization.",
    relatedProjects: ["Nexora", "KinTask"]
  },
  {
    id: "unity",
    keyLabel: "Unity",
    name: "Unity Engine",
    category: "langs",
    color: "#ffffff",
    descriptionRu: "Разработка 3D-механик, физики взаимодействия, скриптов на C# и левел-дизайн.",
    descriptionEn: "3D puzzle mechanics, game physics, interactive C# scripts, and atmospheric level design.",
    relatedProjects: ["Unremembered"]
  }
];

export const uiText: Record<Language, {
  status: string;
  experiencePill: string;
  heroGreeting: string;
  heroName: string;
  heroRole: string;
  heroBio: string;
  navProjects: string;
  navSkills: string;
  navContact: string;
  featuredHeader: string;
  featuredSubheader: string;
  archiveHeader: string;
  archiveSubheader: string;
  archiveFooterNote: string;
  keypadHeader: string;
  keypadSubheader: string;
  keypadHint: string;
  contactHeader: string;
  contactSubtitle: string;
  telegramBtn: string;
  instagramBtn: string;
  githubBtn: string;
  privateBadge: string;
  openSourceBadge: string;
  viewRepoBtn: string;
  filterAll: string;
  filterCsharp: string;
  filterWeb: string;
  filterAi: string;
  detailsModalTitle: string;
  closeBtn: string;
  rightsText: string;
}> = {
  ru: {
    status: "ДОСТУПЕН ДЛЯ ПРОЕКТОВ",
    experiencePill: "Frontend / Backend",
    heroGreeting: "Привет, я",
    heroName: "Митя (yug33n)",
    heroRole: "Универсальный разработчик",
    heroBio: "Разрабатываю десктопные решения, мобильные сервисы и современный веб. Frontend и Backend разработка: чистая архитектура, высокая отзывчивость и продуманный UX.",
    navProjects: "Проекты",
    navSkills: "Стек",
    navContact: "Связаться",
    featuredHeader: "Избранные работы",
    featuredSubheader: "FEATURED PROJECTS",
    archiveHeader: "Другие разработки",
    archiveSubheader: "PROJECT ARCHIVE",
    archiveFooterNote: "и многое другое в приватных репозиториях и пет-проектах",
    keypadHeader: "Интерактивный стек",
    keypadSubheader: "INTERACTIVE SKILLS PAD",
    keypadHint: "Нажимай клавиши на макропаде мышкой или на клавиатуре ПК",
    contactHeader: "Свяжитесь со мной",
    contactSubtitle: "Открыт к интересным предложениям, совместным проектам и разработке софта. Напишите мне в удобный мессенджер:",
    telegramBtn: "Написать в Telegram",
    instagramBtn: "Instagram",
    githubBtn: "GitHub",
    privateBadge: "Приват",
    openSourceBadge: "Open Source",
    viewRepoBtn: "Репозиторий",
    filterAll: "Все",
    filterCsharp: "C# / .NET",
    filterWeb: "React / Web",
    filterAi: "AI / LLM",
    detailsModalTitle: "Детали проекта",
    closeBtn: "Закрыть",
    rightsText: "yug33n • 2026"
  },
  en: {
    status: "AVAILABLE FOR PROJECTS",
    experiencePill: "Frontend / Backend",
    heroGreeting: "Hi, I am",
    heroName: "Mitya (yug33n)",
    heroRole: "Versatile Software Engineer",
    heroBio: "Engineering desktop software, mobile services & modern web platforms. Frontend and Backend development: solid architecture, responsive performance, and refined UX.",
    navProjects: "Projects",
    navSkills: "Stack",
    navContact: "Contact",
    featuredHeader: "Featured Works",
    featuredSubheader: "FEATURED PROJECTS",
    archiveHeader: "More Projects",
    archiveSubheader: "PROJECT ARCHIVE",
    archiveFooterNote: "and much more in private repositories & experiments",
    keypadHeader: "Interactive Stack",
    keypadSubheader: "INTERACTIVE SKILLS PAD",
    keypadHint: "Click keys on the macropad or press matching keys on your keyboard",
    contactHeader: "Get In Touch",
    contactSubtitle: "Open for interesting opportunities, software contracts, and collaborative builds. Reach out directly:",
    telegramBtn: "Message on Telegram",
    instagramBtn: "Instagram",
    githubBtn: "GitHub",
    privateBadge: "Private",
    openSourceBadge: "Open Source",
    viewRepoBtn: "Repository",
    filterAll: "All",
    filterCsharp: "C# / .NET",
    filterWeb: "React / Web",
    filterAi: "AI / LLM",
    detailsModalTitle: "Project Details",
    closeBtn: "Close",
    rightsText: "yug33n • 2026"
  }
};
