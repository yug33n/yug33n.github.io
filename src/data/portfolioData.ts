import type { ProjectItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "yugeen",
  role: "Software Developer",
  tagline: "Разработка десктопных приложений, мобильных сервисов, игр и современного веба.",
  status: "Открыт для предложений & проектов",
  telegram: "https://t.me/dim0kkk",
  instagram: "https://instagram.com/yug3en",
  github: "https://github.com/grymik0",
  bio: [
    "Универсальный разработчик с разносторонним опытом: от системных Windows-приложений на C# и .NET 10 до нарративных 3D-игр на Unity и систем на базе локальных LLM.",
    "Пишу на C#, C++, TypeScript и Python. Создаю софт, который уважает приватность пользователей, и интерактивные веб-сервисы с продуманным UX. Люблю глубокие технические задачи: трекинг системных процессов, интеграцию локальных нейросетей и разработку игровых механик."
  ]
};

export const projectsData: ProjectItem[] = [
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
    githubUrl: "https://github.com/grymik0/WinTime",
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
    githubUrl: "https://github.com/grymik0/Notiva",
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
    githubUrl: "https://github.com/grymik0/aetheria-chronicles",
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
    githubUrl: "https://github.com/grymik0/NetMorph",
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
    githubUrl: "https://github.com/grymik0/Unremembered",
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
    githubUrl: "https://github.com/grymik0/Resonance",
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
    githubUrl: "https://github.com/grymik0/Courier-Manager",
    status: "Web Game"
  }
];

export const skillCategories: SkillCategory[] = [
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
];
