import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { CompactProjectCard } from './components/CompactProjectCard';
import { SkillsKeypad } from './components/SkillsKeypad';
import { ProjectModal } from './components/ProjectModal';
import { GithubIcon } from './components/icons/GithubIcon';
import type { ProjectItem } from './types';
import {
  socialLinks,
  projectsContent,
  uiText,
} from './data/portfolioData';
import type { Language } from './data/portfolioData';
import {
  Send,
  Sparkles,
  ArrowRight,
  Code2,
  ExternalLink,
} from 'lucide-react';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('yugeen-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('yugeen-lang') as Language;
    return saved === 'ru' ? 'ru' : 'en';
  });
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai'>('all');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('yugeen-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('yugeen-lang', language);
  }, [language]);

  // Cinematic Scroll Reveal Observer with instant mobile fallback
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
    };

    // On mobile screens, reveal all sections immediately
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      revealAll();
      return;
    }

    // Safety timeout: ensure everything reveals even if observer is throttled by browser
    const timer = setTimeout(revealAll, 900);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '100px 0px 100px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [language, activeFilter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
  };

  const t = uiText[language];
  const allProjects = projectsContent[language];
  const featuredProjects = allProjects.filter((p) => p.featured);
  const archiveProjects = allProjects.filter((p) => !p.featured);

  const filteredArchive = archiveProjects.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <div className="portfolio-app-root">
      {/* Background Ambient Layers */}
      <div className="ambient-radial-glow top-left" />
      <div className="ambient-radial-glow center-right" />
      <div className="site-fine-noise" />

      {/* Floating Top Navbar */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        language={language}
        setLanguage={setLanguage}
        onNavigate={scrollToSection}
      />

      <main className="content-container">
        {/* HERO SECTION */}
        <section className="hero-studio-section">
          <div className="hero-status-row">
            <div className="hero-status-pill">
              <span className="live-status-dot" />
              <span className="status-label">{t.status}</span>
            </div>
            <div className="hero-schematik-badge">
              <span>PCB SPEC: FR-4 REV 3.1</span>
              <span>•</span>
              <span>MOSCOW GMT+3</span>
            </div>
          </div>

          <h1 className="hero-main-heading">
            <span className="greeting-sub">{t.heroGreeting}</span>{' '}
            <span className="hero-name-highlight">{t.heroName}</span>
          </h1>

          <p className="hero-role-lead">
            {t.heroRole}
          </p>

          <p className="hero-bio-paragraph">
            {t.heroBio}
          </p>

          <div className="hero-action-buttons">
            <button onClick={() => scrollToSection('featured-deck')} className="hero-primary-btn">
              <span>{t.featuredHeader}</span>
              <ArrowRight size={15} />
            </button>
            <button onClick={() => scrollToSection('keypad-deck')} className="hero-secondary-btn">
              <Code2 size={15} />
              <span>{t.keypadHeader}</span>
            </button>
            <button onClick={() => scrollToSection('contact-deck')} className="hero-ghost-btn">
              <span>{t.navContact}</span>
            </button>
          </div>
        </section>

        {/* SECTION 1: FEATURED PROJECTS (Bento 2x2 with PCB Traces Routing) */}
        <section id="featured-deck" className="content-section scroll-reveal">
          <div className="section-header-row">
            <div>
              <span className="section-tag-eyebrow">{t.featuredSubheader}</span>
              <h2 className="section-title">{t.featuredHeader}</h2>
            </div>
            <p className="section-subtitle-text">
              {language === 'ru'
                ? 'Ключевые системные утилиты, веб-приложения и платформы'
                : 'Flagship system tools, web IDEs and intelligent workspaces'}
            </p>
          </div>

          <div className="pcb-routing-stage">
            {/* Subtle PCB Traces SVG layer */}
            <svg className="pcb-traces-svg-layer" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 40 -10 L 40 25 L 220 25 L 250 55 L 480 55 L 510 25 L 960 25" className="pcb-trace-path" />
              <path d="M 470 180 L 500 210 L 530 210 L 560 240" className="pcb-trace-path" />
              <path d="M 470 200 L 495 225 L 535 225 L 560 250" className="pcb-trace-path" />
              <path d="M 470 220 L 490 240 L 540 240 L 560 260" className="pcb-trace-path" />
              <path d="M 20 480 L 150 480 L 190 520 L 800 520 L 840 480 L 980 480" className="pcb-trace-path" />
              
              <circle cx="220" cy="25" r="3.5" className="pcb-via-pad" />
              <circle cx="510" cy="25" r="3.5" className="pcb-via-pad" />
              <circle cx="470" cy="180" r="3" className="pcb-via-pad" />
              <circle cx="560" cy="240" r="3" className="pcb-via-pad" />
              <circle cx="190" cy="520" r="3.5" className="pcb-via-pad" />
              <circle cx="800" cy="520" r="3.5" className="pcb-via-pad" />

              <text x="255" y="50" className="pcb-silkscreen-text">[BUS_D0..D7]</text>
              <text x="500" y="205" className="pcb-silkscreen-text">[API_SYNC]</text>
              <text x="200" y="515" className="pcb-silkscreen-text">[GND_PLANE_01]</text>
              <text x="760" y="515" className="pcb-silkscreen-text">[+3.3V_RAIL]</text>
            </svg>

            <div className="featured-bento-grid">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  language={language}
                  onOpenDetails={setActiveProject}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE SKILLS KEYPAD */}
        <section id="keypad-deck" className="content-section scroll-reveal">
          <div className="section-header-row">
            <div>
              <span className="section-tag-eyebrow">{t.keypadSubheader}</span>
              <h2 className="section-title">{t.keypadHeader}</h2>
            </div>
          </div>

          <SkillsKeypad language={language} />
        </section>

        {/* SECTION 3: ARCHIVE & OTHER PROJECTS */}
        <section id="archive-deck" className="content-section scroll-reveal">
          <div className="section-header-row">
            <div>
              <span className="section-tag-eyebrow">{t.archiveSubheader}</span>
              <h2 className="section-title">{t.archiveHeader}</h2>
            </div>

            {/* Category Filter Pills (All, Web, AI) */}
            <div className="archive-filter-tabs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`filter-tab ${activeFilter === 'web' ? 'active' : ''}`}
              >
                {t.filterWeb}
              </button>
              <button
                onClick={() => setActiveFilter('ai')}
                className={`filter-tab ${activeFilter === 'ai' ? 'active' : ''}`}
              >
                {t.filterAi}
              </button>
            </div>
          </div>

          <div className="archive-cards-grid">
            {filteredArchive.map((project) => (
              <CompactProjectCard
                key={project.id}
                project={project}
                language={language}
              />
            ))}
          </div>

          {/* Subtle Archive Footer Note */}
          <p className="archive-footer-note">
            + {t.archiveFooterNote}
          </p>
        </section>

        {/* SECTION 4: GET IN TOUCH / CONTACT DOCK */}
        <section id="contact-deck" className="content-section contact-section scroll-reveal">
          <div className="contact-studio-card">
            <div className="contact-sparkle-pill">
              <Sparkles size={13} />
              <span>{language === 'ru' ? 'КОЛЛАБОРАЦИЯ' : 'COLLABORATION'}</span>
            </div>

            <h2 className="contact-heading">{t.contactHeader}</h2>
            <p className="contact-description">{t.contactSubtitle}</p>

            <div className="contact-channels-grid uniform-channels">
              {/* Telegram Card */}
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link-btn primary-tg uniform-item"
              >
                <Send size={18} />
                <span>{t.telegramBtn}</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>

              {/* GitHub Card */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link-btn uniform-item"
              >
                <GithubIcon size={18} />
                <span>{t.githubBtn}</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="studio-footer">
        <p className="footer-copy-text">{t.rightsText}</p>
      </footer>

      {/* Project Details Modal (Only for 4 Featured Projects) */}
      <ProjectModal
        project={activeProject}
        language={language}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
