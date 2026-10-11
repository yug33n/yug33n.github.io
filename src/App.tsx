import { useState, useEffect } from 'react';
import { Send, Mail, Check } from 'lucide-react';
import { SpotlightOverlay } from './components/SpotlightOverlay';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillsGrid } from './components/SkillsGrid';
import { personalInfo, projectsData, experienceData, skillCategories } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'experience', 'skills', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <SpotlightOverlay />

      <div className="layout-container">
        {/* Left Sticky Sidebar */}
        <Sidebar activeSection={activeSection} />

        {/* Right Scrollable Content Feed */}
        <main className="content-feed">
          {/* ABOUT SECTION */}
          <section id="about" className="section-block" style={{ scrollMarginTop: '5rem' }}>
            <h2 className="section-title">О себе</h2>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: 1.7 }}>
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                  {paragraph}
                </p>
              ))}
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>2+</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Года активной разработки</p>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>100%</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TypeScript & Чистая архитектура</p>
                </div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-indigo)' }}>SPA / SSR</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>React, Node & Docker</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="section-block" style={{ scrollMarginTop: '5rem' }}>
            <h2 className="section-title">Ключевые проекты</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="section-block" style={{ scrollMarginTop: '5rem' }}>
            <h2 className="section-title">Опыт работы</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experienceData.map((item) => (
                <ExperienceCard key={item.id} experience={item} />
              ))}
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="section-block" style={{ scrollMarginTop: '5rem' }}>
            <h2 className="section-title">Стек технологий</h2>
            <SkillsGrid categories={skillCategories} />
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="section-block" style={{ scrollMarginTop: '5rem' }}>
            <h2 className="section-title">Связаться</h2>
            <div className="contact-cta">
              <h3>Давайте создадим что-то крутое вместе</h3>
              <p>
                Я открыт к обсуждению новых проектов, сотрудничеству или интересным инженерным задачам. Напишите мне в Telegram или отправьте письмо на почту.
              </p>
              <div className="contact-actions">
                <a
                  href={personalInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Send size={16} />
                  <span>Написать в Telegram</span>
                </a>
                <button onClick={handleCopyEmail} className="btn-secondary">
                  {copiedEmail ? <Check size={16} color="#34d399" /> : <Mail size={16} />}
                  <span>{copiedEmail ? 'Почта скопирована!' : 'Скопировать Email'}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-dim)', fontSize: '0.8rem', lineHeight: 1.6 }}>
            <p>
              Разработано в эстетике <strong>Linear</strong> & <strong>Brittany Chiang</strong>. Построено на React 19, TypeScript и Vite. Оптимизировано для быстрой статической загрузки (CDN) и развертывания на VPS через Docker + Nginx.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
