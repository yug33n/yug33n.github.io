import type { ProjectItem, SkillCategory } from '../types';

export type Language = 'ru' | 'en';

export const socialLinks = {
  telegram: "https://t.me/dim0kkk",
  instagram: "https://instagram.com/yug3en",
  github: "https://github.com/yug33n",
};

export const personalInfo = {
  name: "yugeen",
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
  tagline: string;
  status: string;
  bio: string[];
}> = {
  ru: {
    name: "yugeen",
    role: "Software Developer",
    tagline: "Разработка десктопных приложений, мобильных сервисов, игр и современного веба.",
    status: "Открыт для предложений & проектов",
    bio: [
      "Универсальный разработчик с разносторонним опытом: от системных Windows-приложений на C# и .NET 10 до нарративных 3D-игр на Unity и систем на базе локальных LLM.",
      "Пишу на C#, C++, TypeScript и Python. Создаю софт, который уважает приватность пользователей, и интерактивные веб-сервисы с продуманным UX. Люблю глубокие технические задачи: трекинг системных процессов, интеграцию локальных нейросетей и разработку игровых механик."
    ]
  },
  en: {
    name: "yugeen",
    role: "Software Developer",
    tagline: "Engineering desktop software, mobile services, games & modern web.",
    status: "Available for contracts & projects",
    bio: [
      "Versatile software engineer with multidisciplinary experience: from privacy-first Windows desktop utilities in C# & .NET 10 to narrative 3D Unity games and local LLM workflows.",
      "Proficient in C#, C++, TypeScript, and Python. I craft software that respects user privacy and high-performance web platforms with refined UX. Driven by deep engineering challenges: process tracking, local AI models, and game logic."
    ]
  }
};

export const projectsContent: Record<Language, ProjectItem[]> = {
  ru: [
    {
      id: "wintime",
      title: "WinTime",
      tagline: "Privacy-first трекер экранного времени и продуктивности для Windows",
      description: "Тихое приложение в системном трее Windows: детально отслеживает активные процессы, вкладки браузеров (Chrome, Edge, Opera) и проекты без замедления системы. 100% данных хранятся локально в SQLite — никакой телеметрии, облаков и учетных записей.",
      highlights: [
        "Глубокий мониторинг вкладок браузера, открытых проектов в IDE и авто-распознавание игр (Steam/Epic)",
        "Цели и лимиты экранного времени с мягкими уведомлениями или авто-закрытием процессов",
        "Анализ ритмов сна через системный лог событий Windows и плавающий рабочий виджет (Micro-Mode)",
        "Геймификация продуктивности: уровни XP, квесты и 20-недельная тепловая карта активности"
      ],
      techStack: [".NET 10", "C#", "SQLite", "Windows APIs", "Fluent UI", "System Tray Service"],
      githubUrl: "https://github.com/yug33n/WinTime",
      status: "Featured App"
    },
    {
      id: "notiva",
      title: "Notiva",
      tagline: "Интеллектуальная база знаний и учебный ассистент (PWA)",
      description: "Кроссплатформенное клиент-серверное веб-приложение для студентов и исследователей. Принимает учебные материалы (конспекты, PDF-учебники, аудио лекций) и автоматически трансформирует их в структурированную базу знаний, флеш-карточки Anki и интерактивные квизы.",
      highlights: [
        "Мультимодальный импорт учебных материалов: парсинг PDF, структурирование заметок и аудио",
        "Автоматическая генерация флеш-карточек для интервального повторения (Active Recall)",
        "Интерактивные проверочные квизы с мгновенной верификацией ответов",
        "PWA-архитектура: автономная работа оффлайн и установка на любое устройство"
      ],
      techStack: ["TypeScript", "React", "PWA", "Node.js", "AI Knowledge Base", "PDF Parsing"],
      githubUrl: "https://github.com/yug33n/Notiva",
      status: "Web & PWA"
    },
    {
      id: "aetheria-chronicles",
      title: "Aetheria Chronicles",
      tagline: "Интерактивная текстовая CRPG на базе локальных LLM (Ollama)",
      description: "Ролевая игра в мрачном фэнтезийном мире, где в роли гейм-мастера выступает локальная нейросеть через Ollama. Мир динамически адаптируется под любые нестандартные действия игрока, обеспечивая полную свободу выбора и процедурный сюжет.",
      highlights: [
        "Органическое повествование: сюжет и диалоги генерируются локальной нейросетью в реальном времени",
        "Классические CRPG механики: характеристики персонажа, инвентарь и влияние решений на мир",
        "100% приватность и автономность без использования внешних платных облачных API"
      ],
      techStack: ["TypeScript / Python", "Ollama API", "Local LLMs", "CRPG Mechanics", "Procedural Story"],
      githubUrl: "https://github.com/yug33n/aetheria-chronicles",
      status: "AI Game"
    },
    {
      id: "netmorph",
      title: "NetMorph",
      tagline: "Сетевой анализатор протоколов & LLM Studio",
      description: "Комплексная среда для инспекции, валидации и трансформации сетевых дампов. Оснащена встроенным Monaco Editor, системой пайплайн-валидации пакетов и коннекторами к локальным моделям Ollama для интерпретации протоколов.",
      highlights: [
        "Интерактивный редактор протоколов с Monaco Editor и проверкой типов в реальном времени",
        "Пайплайн валидации сетевых пакетов и генерация тестовых дампов",
        "Оптимизированный рендеринг тяжелых дампов с нулевым лагом интерфейса"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor", "Ollama API"],
      githubUrl: "https://github.com/yug33n/NetMorph",
      status: "Active"
    },
    {
      id: "unremembered",
      title: "Unremembered",
      tagline: "Атмосферная 3D головоломка про забытые воспоминания",
      description: "Нарративная приключенческая игра на движке Unity. Игрок решает пространственные и логические загадки, шаг за шагом возвращая комнате и предметам их первоначальный облик через фрагменты утерянных воспоминаний.",
      highlights: [
        "Оригинальные механики восстановления окружения и предметов по воспоминаниям",
        "Глубокая атмосфера, динамическое освещение и внимание к окружению",
        "Чистая компонентная архитектура на C# и интерактивное физическое взаимодействие"
      ],
      techStack: ["Unity", "C#", "3D Puzzles", "Game Physics", "Level Design", "Atmospheric Audio"],
      githubUrl: "https://github.com/yug33n/Unremembered",
      status: "Unity Game"
    },
    {
      id: "resonance",
      title: "Resonance",
      tagline: "Минималистичный и быстрый аудиоплеер на C# (.NET)",
      description: "Десктопный музыкальный плеер для локальной фонотеки. Сфокусирован на чистом звучании, мгновенном отклике интерфейса и минимальном потреблении оперативной памяти.",
      highlights: [
        "Легковесный аудиодвижок с поддержкой популярных аудиоформатов",
        "Удобная организация очередей воспроизведения и кастомных плейлистов",
        "Чистый современный интерфейс без рекламы и фоновых процессов"
      ],
      techStack: ["C#", ".NET", "Desktop Audio", "Low Memory Footprint", "XAML / Modern UI"],
      githubUrl: "https://github.com/yug33n/Resonance",
      status: "Desktop"
    },
    {
      id: "courier-manager",
      title: "Курьер-Менеджер: Пробей Очередь!",
      tagline: "Аркадная веб-игра про работу пункта выдачи заказов",
      description: "Динамичная игра про управление логистическим пунктом (ПВЗ). Сортируй коробки с движущейся конвейерной ленты, выдавай правильные посылки клиентам на скорость и удерживай комбо-множители.",
      highlights: [
        "Реактивный игровой процесс с механикой выдачи с ленты и комбо-таймингами",
        "Система прогрессии: магазин улучшений, смена смен и режим «Хардкор-час»",
        "Интеграция с Yandex Games SDK, звуковыми эффектами и таблицей рекордов"
      ],
      techStack: ["JavaScript", "HTML5", "Modern CSS", "Game Loop", "Yandex Games SDK", "Web Audio"],
      githubUrl: "https://github.com/yug33n/Courier-Manager",
      status: "Web Game"
    }
  ],
  en: [
    {
      id: "wintime",
      title: "WinTime",
      tagline: "Privacy-first Windows screen time & productivity tracker",
      description: "Runs quietly in your Windows system tray, tracking foreground window activity, process uptime, detailed browser tabs (Chrome, Edge, Opera), and projects without slowing down your system. 100% of your data stays in a local SQLite database — zero cloud sync, zero telemetry.",
      highlights: [
        "Deep monitoring for browser tabs, code editors, and automated gaming mode detection (Steam/Epic)",
        "Daily time limits & goals with periodic reminders or automated process closure warnings",
        "Sleep & daily rhythm analysis via Windows Event Log system power events and a floating desktop widget (Micro-Mode)",
        "Productivity gamification: XP levels, daily quests, and a 20-week GitHub-style activity heatmap"
      ],
      techStack: [".NET 10", "C#", "SQLite", "Windows APIs", "Fluent UI", "System Tray Service"],
      githubUrl: "https://github.com/yug33n/WinTime",
      status: "Featured App"
    },
    {
      id: "notiva",
      title: "Notiva",
      tagline: "Intelligent knowledge base & study assistant (PWA)",
      description: "Cross-platform client-server web app for students and academic professionals. It ingests study materials (notes, PDF textbooks, lecture audio recordings) and automatically transforms them into structured knowledge bases, Anki-style active recall flashcards, and interactive quizzes.",
      highlights: [
        "Multimodal material ingestion: PDF parsing, lecture note structuring, and audio processing",
        "Automated generation of active recall flashcards and spaced repetition decks",
        "Interactive self-assessment quizzes with automated response verification",
        "PWA architecture: fully functional offline with instant install on any device"
      ],
      techStack: ["TypeScript", "React", "PWA", "Node.js", "AI Knowledge Base", "PDF Parsing"],
      githubUrl: "https://github.com/yug33n/Notiva",
      status: "Web & PWA"
    },
    {
      id: "aetheria-chronicles",
      title: "Aetheria Chronicles",
      tagline: "Interactive text-based CRPG powered by local LLMs (Ollama)",
      description: "Text-based role-playing game set in a dark fantasy universe, powered by local LLMs via Ollama acting as a dynamic Game Master. The game adapts dynamically to your every action, ensuring absolute freedom of choice and organic procedural storytelling.",
      highlights: [
        "Organic storytelling: narrative and dialogue generated on the fly by local neural models",
        "Classic CRPG depth: character attributes, inventory management, skill checks, and consequential choices",
        "100% private and autonomous operation with zero reliance on paid cloud APIs"
      ],
      techStack: ["TypeScript / Python", "Ollama API", "Local LLMs", "CRPG Mechanics", "Procedural Story"],
      githubUrl: "https://github.com/yug33n/aetheria-chronicles",
      status: "AI Game"
    },
    {
      id: "netmorph",
      title: "NetMorph",
      tagline: "Network protocol analyzer & LLM Studio",
      description: "Comprehensive environment for inspecting, transforming, and validating network dumps. Features an embedded Monaco Editor, packet pipeline validation, and native connectors to local Ollama models for automated protocol interpretation.",
      highlights: [
        "Interactive protocol editor with Monaco Editor and real-time type checking",
        "Network packet validation pipeline and synthetic test dump generation",
        "Optimized rendering engine for massive dumps with zero UI stutter"
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Zustand", "Monaco Editor", "Ollama API"],
      githubUrl: "https://github.com/yug33n/NetMorph",
      status: "Active"
    },
    {
      id: "unremembered",
      title: "Unremembered",
      tagline: "Atmospheric 3D memory restoration puzzle game",
      description: "Narrative adventure puzzle game crafted in Unity. Players navigate surreal memory spaces, solving spatial and environmental puzzles to piece together lost fragments and restore the room to its original state.",
      highlights: [
        "Unique room restoration mechanics guided by environmental storytelling",
        "Immersive atmosphere, custom lighting shaders, and meticulous physics interaction",
        "Clean component architecture in C# with responsive event triggers and sound design"
      ],
      techStack: ["Unity", "C#", "3D Puzzles", "Game Physics", "Level Design", "Atmospheric Audio"],
      githubUrl: "https://github.com/yug33n/Unremembered",
      status: "Unity Game"
    },
    {
      id: "resonance",
      title: "Resonance",
      tagline: "Minimalist, high-performance desktop audio player in C# (.NET)",
      description: "Native desktop music player for local audio libraries. Focused on pristine audio playback, instant startup, clean ergonomics, and an ultra-low memory footprint.",
      highlights: [
        "Lightweight audio engine supporting lossless and standard audio formats",
        "Seamless queue management, custom playlists, and instant track indexing",
        "Clean modern UI without ads, bloatware, or background telemetry"
      ],
      techStack: ["C#", ".NET", "Desktop Audio", "Low Memory Footprint", "XAML / Modern UI"],
      githubUrl: "https://github.com/yug33n/Resonance",
      status: "Desktop"
    },
    {
      id: "courier-manager",
      title: "Courier Manager: Clear the Queue!",
      tagline: "Fast-paced parcel logistics dispatch web game",
      description: "Action logistics game set in a bustling parcel delivery point. Sort incoming packages on a moving conveyor belt, match delivery orders, serve waiting customers before timer runs out, and survive rush hour shifts.",
      highlights: [
        "Engaging conveyor dispatch mechanics with combo multipliers and timing precision",
        "Progression loop: upgrade shop, shifting difficulty levels, and rush hour challenges",
        "Yandex Games SDK integration, web audio sound effects, and global leaderboards"
      ],
      techStack: ["JavaScript", "HTML5", "Modern CSS", "Game Loop", "Yandex Games SDK", "Web Audio"],
      githubUrl: "https://github.com/yug33n/Courier-Manager",
      status: "Web Game"
    }
  ]
};

export const skillCategoriesData: Record<Language, SkillCategory[]> = {
  ru: [
    {
      category: "Языки программирования",
      iconName: "Code2",
      skills: ["C#", "C++", "TypeScript", "JavaScript", "Python", "SQL", "HTML5 / CSS3"]
    },
    {
      category: "Десктоп & .NET",
      iconName: "Cpu",
      skills: [".NET 10 / C#", "WinTime App", "SQLite", "Windows APIs", "System Tray Services", "Desktop Audio"]
    },
    {
      category: "ИИ & Локальные LLM",
      iconName: "Server",
      skills: ["Ollama API", "Local LLMs", "Prompt Engineering", "CRPG Game Master", "AI Knowledge Extraction"]
    },
    {
      category: "GameDev & Интерактив",
      iconName: "Gamepad2",
      skills: ["Unity (C#)", "3D Puzzles", "Game Physics", "Web Games", "Yandex Games SDK", "Procedural Narrative"]
    },
    {
      category: "Web & Frontend",
      iconName: "Layout",
      skills: ["React 19", "TypeScript", "Vite", "PWA Architecture", "Zustand", "Monaco Editor", "Modern CSS"]
    },
    {
      category: "Инструменты & DevOps",
      iconName: "Terminal",
      skills: ["Git & GitHub", "Docker", "Linux / VPS", "Nginx", "CI/CD", "VS Code / Visual Studio"]
    }
  ],
  en: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: ["C#", "C++", "TypeScript", "JavaScript", "Python", "SQL", "HTML5 / CSS3"]
    },
    {
      category: "Desktop & .NET",
      iconName: "Cpu",
      skills: [".NET 10 / C#", "WinTime App", "SQLite", "Windows APIs", "System Tray Services", "Desktop Audio"]
    },
    {
      category: "AI & Local LLMs",
      iconName: "Server",
      skills: ["Ollama API", "Local LLMs", "Prompt Engineering", "CRPG Game Master", "AI Knowledge Extraction"]
    },
    {
      category: "GameDev & Interactive",
      iconName: "Gamepad2",
      skills: ["Unity (C#)", "3D Puzzles", "Game Physics", "Web Games", "Yandex Games SDK", "Procedural Narrative"]
    },
    {
      category: "Web & Frontend",
      iconName: "Layout",
      skills: ["React 19", "TypeScript", "Vite", "PWA Architecture", "Zustand", "Monaco Editor", "Modern CSS"]
    },
    {
      category: "DevOps & Tooling",
      iconName: "Terminal",
      skills: ["Git & GitHub", "Docker", "Linux / VPS", "Nginx", "CI/CD", "VS Code / Visual Studio"]
    }
  ]
};

export const uiText: Record<Language, {
  status: string;
  contactBtn: string;
  heroBadge: string;
  heroTitlePrefix: string;
  heroTitleGradient: string;
  heroSubtitle: string;
  cliProjects: string;
  cliStack: string;
  cliConsole: string;
  cliContact: string;
  projectsHeader: string;
  projectsSubheader: string;
  consoleHeader: string;
  consoleSubheader: string;
  consoleDescription: string;
  stackHeader: string;
  stackSubheader: string;
  contactBadge: string;
  contactHeader: string;
  contactSubtitle: string;
  telegramBtn: string;
  instagramBtn: string;
  githubBtn: string;
  repoBtn: string;
  footerRights: string;
}> = {
  ru: {
    status: "STATUS: ONLINE",
    contactBtn: "Связаться",
    heroBadge: "VERSATILE SOFTWARE ENGINEER",
    heroTitlePrefix: "Универсальный разработчик:",
    heroTitleGradient: "десктоп, мобильные сервисы и веб",
    heroSubtitle: "Привет, я yugeen. Разрабатываю десктопные решения и системные утилиты на C++ и C#, кроссплатформенные мобильные приложения и современные веб-платформы на React и TypeScript. От системной логики до отзывчивых интерфейсов.",
    cliProjects: "проекты",
    cliStack: "стек",
    cliConsole: "консоль",
    cliContact: "контакты",
    projectsHeader: "Проекты & Разработки",
    projectsSubheader: "FEATURED WORKS",
    consoleHeader: "Интерактивная консоль",
    consoleSubheader: "CLI PLAYGROUND",
    consoleDescription: "Быстрый терминальный доступ: вводите команды или нажимайте подсказки в шапке консоли:",
    stackHeader: "Технологический стек",
    stackSubheader: "MULTI-PLATFORM STACK",
    contactBadge: "LET'S BUILD SOMETHING GREAT",
    contactHeader: "Свяжитесь со мной",
    contactSubtitle: "Открыт к предложениям по разработке десктопного ПО, мобильных приложений, веб-сервисов или совместным проектам. Напишите мне в Telegram или Instagram:",
    telegramBtn: "Написать в Telegram",
    instagramBtn: "Instagram",
    githubBtn: "GitHub",
    repoBtn: "Репозиторий",
    footerRights: "yugeen"
  },
  en: {
    status: "STATUS: ONLINE",
    contactBtn: "Contact",
    heroBadge: "VERSATILE SOFTWARE ENGINEER",
    heroTitlePrefix: "Versatile Software Engineer:",
    heroTitleGradient: "Desktop, Mobile Services & Fast Web",
    heroSubtitle: "Hi, I'm yugeen. I engineer desktop solutions & system utilities in C++ and C#, cross-platform mobile applications, and high-performance web platforms with React & TypeScript. From low-level logic to responsive interfaces.",
    cliProjects: "projects",
    cliStack: "stack",
    cliConsole: "console",
    cliContact: "contact",
    projectsHeader: "Featured Projects & Lab",
    projectsSubheader: "FEATURED WORKS",
    consoleHeader: "Interactive Console",
    consoleSubheader: "CLI PLAYGROUND",
    consoleDescription: "Quick terminal access: enter commands or click suggestion pills in the header:",
    stackHeader: "Technology Stack",
    stackSubheader: "MULTI-PLATFORM STACK",
    contactBadge: "LET'S BUILD SOMETHING GREAT",
    contactHeader: "Get In Touch",
    contactSubtitle: "Open for desktop software development, mobile apps, web systems, and collaborative engineering projects. Reach out via Telegram or Instagram:",
    telegramBtn: "Message on Telegram",
    instagramBtn: "Instagram",
    githubBtn: "GitHub",
    repoBtn: "Repository",
    footerRights: "yugeen"
  }
};
