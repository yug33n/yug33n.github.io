import { useState, useEffect } from 'react';
import { Send, Sparkles, Terminal as TerminalIcon, FolderGit2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsGrid } from './components/SkillsGrid';
import { GithubIcon } from './components/icons/GithubIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';
import {
  socialLinks,
  projectsContent,
  skillCategoriesData,
  uiText,
} from './data/portfolioData';
import type { Language } from './data/portfolioData';

export function App() {
  const [currentTheme, setCurrentTheme] = useState('indigo');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('yugeen-lang') as Language;
    return saved === 'ru' ? 'ru' : 'en'; // Defaults to English as requested
  });
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('yugeen-lang', language);
  }, [language]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = uiText[language];
  const projects = projectsContent[language];
  const skills = skillCategoriesData[language];

  return (
    <>
      <div className="cyber-grid-background" />
      <div
        className="mouse-spotlight"
        style={
          {
            '--mouse-x': `${mousePos.x}px`,
            '--mouse-y': `${mousePos.y}px`,
          } as React.CSSProperties
        }
      />

      <div className="app-wrapper">
        {/* Top Navbar with Theme Picker, Telemetry & Language Toggle */}
        <Navbar
          currentTheme={currentTheme}
          setTheme={setCurrentTheme}
          language={language}
          setLanguage={setLanguage}
          onOpenTerminal={() => scrollToSection('terminal-deck')}
        />

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-pill">
            <Sparkles size={14} />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="hero-title">
            {t.heroTitlePrefix}{' '}
            <span className="hero-title-gradient">{t.heroTitleGradient}</span>
          </h1>

          <p className="hero-subtitle">
            {t.heroSubtitle}
          </p>

          {/* Quick CLI Prompt Bar */}
          <div className="cli-bar">
            <span className="cli-prompt">$ yugeen --run</span>
            <button onClick={() => scrollToSection('projects-deck')} className="cli-btn">
              &gt; {t.cliProjects}
            </button>
            <button onClick={() => scrollToSection('skills-deck')} className="cli-btn">
              &gt; {t.cliStack}
            </button>
            <button onClick={() => scrollToSection('terminal-deck')} className="cli-btn">
              &gt; {t.cliConsole}
            </button>
            <button onClick={() => scrollToSection('contact-deck')} className="cli-btn">
              &gt; {t.cliContact}
            </button>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects-deck" style={{ scrollMarginTop: '6rem', marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FolderGit2 size={22} color="var(--accent-primary)" />
              <span>{t.projectsHeader}</span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {t.projectsSubheader}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} repoButtonLabel={t.repoBtn} />
            ))}
          </div>
        </section>

        {/* INTERACTIVE CONSOLE / TERMINAL DECK */}
        <section id="terminal-deck" style={{ scrollMarginTop: '6rem', marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <TerminalIcon size={20} color="var(--accent-primary)" />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                {t.consoleHeader}
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {t.consoleSubheader}
            </span>
          </div>

          <div className="bento-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
              {t.consoleDescription}
            </p>
            <InteractiveTerminal language={language} />
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills-deck" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {t.stackHeader}
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {t.stackSubheader}
            </span>
          </div>

          <SkillsGrid categories={skills} />
        </section>

        {/* CONTACT & CTA */}
        <section id="contact-deck" style={{ scrollMarginTop: '6rem' }}>
          <div className="bento-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', alignItems: 'center', gap: '1.25rem', background: 'linear-gradient(180deg, rgba(13, 16, 24, 0.9) 0%, rgba(20, 25, 38, 0.95) 100%)' }}>
            <span className="hero-pill">
              <Sparkles size={13} />
              <span>{t.contactBadge}</span>
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              {t.contactHeader}
            </h2>

            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', fontSize: '0.98rem', lineHeight: 1.6 }}>
              {t.contactSubtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive"
                style={{
                  background: 'var(--text-main)',
                  color: '#07080b',
                  fontWeight: 700,
                  padding: '0.75rem 1.6rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                }}
              >
                <Send size={16} />
                <span>{t.telegramBtn}</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive"
                style={{
                  padding: '0.75rem 1.6rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  borderColor: 'rgba(236, 72, 153, 0.3)',
                  background: 'rgba(236, 72, 153, 0.08)',
                  color: '#f472b6',
                }}
              >
                <InstagramIcon size={16} />
                <span>{t.instagramBtn}</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive"
                style={{ padding: '0.75rem 1.6rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}
              >
                <GithubIcon size={16} />
                <span>{t.githubBtn}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
          <div>
            © {new Date().getFullYear()} {t.footerRights}
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              Telegram
            </a>
            <span>•</span>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
