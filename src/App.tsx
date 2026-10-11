import { useState, useEffect } from 'react';
import { Send, Mail, Check, ExternalLink, Sparkles, Terminal as TerminalIcon, FolderGit2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { PacketStreamSimulator } from './components/PacketStreamSimulator';
import { DeliveryRouteWidget } from './components/DeliveryRouteWidget';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { CodePhilosophyCard } from './components/CodePhilosophyCard';
import { SkillsGrid } from './components/SkillsGrid';
import { ExperienceCard } from './components/ExperienceCard';
import { GithubIcon } from './components/icons/GithubIcon';
import { personalInfo, experienceData, skillCategories } from './data/portfolioData';

export function App() {
  const [currentTheme, setCurrentTheme] = useState('indigo');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
        {/* Top Floating Navbar with Live Telemetry & Theme Switcher */}
        <Navbar
          currentTheme={currentTheme}
          setTheme={setCurrentTheme}
          onOpenTerminal={() => scrollToSection('terminal-deck')}
        />

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-pill">
            <Sparkles size={14} />
            <span>SOFTWARE CRAFT & FULLSTACK ARCHITECTURE</span>
          </div>

          <h1 className="hero-title">
            Инженерия интерфейсов и{' '}
            <span className="hero-title-gradient">быстрых сервисов</span>
          </h1>

          <p className="hero-subtitle">
            Привет, я <strong style={{ color: 'var(--text-main)' }}>Grymik</strong>. Проектирую производительные веб-приложения на React 19, строю сетевые утилиты и микросервисы, ориентированные на максимальную скорость и чистую архитектуру.
          </p>

          {/* Quick CLI Prompt Bar */}
          <div className="cli-bar">
            <span className="cli-prompt">$ grymik --inspect</span>
            <button onClick={() => scrollToSection('flagship-deck')} className="cli-btn">
              &gt; projects
            </button>
            <button onClick={() => scrollToSection('skills-deck')} className="cli-btn">
              &gt; stack
            </button>
            <button onClick={() => scrollToSection('terminal-deck')} className="cli-btn">
              &gt; terminal
            </button>
            <button onClick={() => scrollToSection('contact-deck')} className="cli-btn">
              &gt; contact
            </button>
          </div>
        </section>

        {/* BENTO GRID (Flagship Projects & Interactive Modules) */}
        <section id="flagship-deck" style={{ scrollMarginTop: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FolderGit2 size={20} color="var(--accent-primary)" />
              <span>Флагманские проекты & Лаборатория</span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              LIVE DECK 01
            </span>
          </div>

          <div className="bento-grid">
            {/* Card 1: NetMorph (Flagship with Live Protocol Streamer) */}
            <div className="bento-card col-span-8">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>NetMorph</h3>
                    <span className="tag-badge" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-primary)' }}>
                      Flagship
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                    Сетевой анализатор протоколов & LLM Studio
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href="https://github.com/grymik0/NetMorph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive"
                  >
                    <GithubIcon size={14} />
                    <span>Репозиторий</span>
                  </a>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.8rem', lineHeight: 1.6 }}>
                Среда для инспекции и трансформации сетевых дампов. Оснащена встроенным Monaco Editor, системой пайплайн-валидации и коннекторами к локальным моделям Ollama для автоматической интерпретации протоколов.
              </p>

              {/* Interactive Packet Inspector */}
              <PacketStreamSimulator />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.75rem' }}>
                {['React 19', 'TypeScript', 'Vite', 'Zustand', 'Monaco Editor', 'Ollama API'].map((t) => (
                  <span key={t} className="tag-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Code Philosophy & Standards */}
            <div className="bento-card col-span-4">
              <CodePhilosophyCard />
            </div>

            {/* Card 3: Courier-Manager with Interactive Route Dispatch */}
            <div className="bento-card col-span-6">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Courier Manager</h3>
                    <span className="tag-badge" style={{ color: '#34d399' }}>
                      Production
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                    Движок логистики и маршрутизации
                  </p>
                </div>

                <a
                  href="https://github.com/grymik0/Courier-Manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive"
                >
                  <GithubIcon size={14} />
                  <span>Код</span>
                </a>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.7rem', lineHeight: 1.6 }}>
                Система динамического распределения доставок с аналитикой в реальном времени. Полностью автономная легкая сборка с нулевым оверхедом по сторонним зависимостям.
              </p>

              <DeliveryRouteWidget />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1rem' }}>
                {['JavaScript', 'HTML5', 'Modern CSS', 'REST API', 'Routing SLA'].map((t) => (
                  <span key={t} className="tag-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4: Interactive Terminal Sandbox */}
            <div id="terminal-deck" className="bento-card col-span-6" style={{ scrollMarginTop: '6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TerminalIcon size={18} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Интерактивная консоль</h3>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Interactive Sandbox
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Введите команду или нажмите быстрые подсказки для получения детальной информации о стеке и контактах:
              </p>

              <InteractiveTerminal />
            </div>
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills-deck" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Технологический арсенал
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              CORE CAPABILITIES
            </span>
          </div>

          <SkillsGrid categories={skillCategories} />
        </section>

        {/* EXPERIENCE & DEV LOG */}
        <section id="experience-deck" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Инженерный опыт & Майлстоуны
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              JOURNEY
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experienceData.map((item) => (
              <ExperienceCard key={item.id} experience={item} />
            ))}
          </div>
        </section>

        {/* CONTACT & CTA */}
        <section id="contact-deck" style={{ scrollMarginTop: '6rem' }}>
          <div className="bento-card" style={{ padding: '3rem 2rem', textAlign: 'center', alignItems: 'center', gap: '1.2rem', background: 'linear-gradient(180deg, rgba(13, 16, 24, 0.9) 0%, rgba(20, 25, 38, 0.95) 100%)' }}>
            <span className="hero-pill">
              <Mail size={13} />
              <span>LET'S BUILD TOGETHER</span>
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Есть идея или проект для разработки?
            </h2>

            <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Открыт для интересных задач, разработки сервисов и совместных проектов. Напишите мне напрямую в Telegram или скопируйте email для связи.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive"
                style={{
                  background: 'var(--text-main)',
                  color: '#07080b',
                  fontWeight: 700,
                  padding: '0.65rem 1.4rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <Send size={16} />
                <span>Написать в Telegram</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-interactive"
                style={{ padding: '0.65rem 1.4rem', borderRadius: 'var(--radius-md)' }}
              >
                {copiedEmail ? <Check size={16} color="#34d399" /> : <Mail size={16} />}
                <span>{copiedEmail ? 'Почта скопирована!' : 'Скопировать Email'}</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive"
                style={{ padding: '0.65rem 1.4rem', borderRadius: 'var(--radius-md)' }}
              >
                <GithubIcon size={16} />
                <span>GitHub Профиль</span>
              </a>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-dim)', fontSize: '0.78rem' }}>
          <div>
            © {new Date().getFullYear()} Grymik. Built with React 19, TypeScript & Vite.
          </div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <span>Architecture: Cyber Bento</span>
            <span>•</span>
            <span>Zero Runtime CSS Framework</span>
            <span>•</span>
            <a
              href="https://github.com/grymik0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
            >
              Open Source <ExternalLink size={11} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
