import { Send } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  activeSection?: string;
}

export const Sidebar = ({ activeSection = 'about' }: SidebarProps) => {
  const navLinks = [
    { id: 'projects-deck', label: 'Проекты' },
    { id: 'terminal-deck', label: 'Консоль' },
    { id: 'skills-deck', label: 'Стек' },
    { id: 'contact-deck', label: 'Контакты' },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="status-badge">
          <span className="status-dot" />
          <span>{personalInfo.status}</span>
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0.6rem' }}>
          {personalInfo.name}
        </h1>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          {personalInfo.role}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', maxWidth: '340px', lineHeight: 1.6 }}>
          {personalInfo.tagline}
        </p>

        <nav className="nav-menu" aria-label="Разделы">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="nav-indicator" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="social-links">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title="GitHub"
          aria-label="GitHub Profile"
        >
          <GithubIcon size={18} />
        </a>
        <a
          href={personalInfo.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title="Telegram"
          aria-label="Telegram Profile"
        >
          <Send size={18} />
        </a>
        <a
          href={personalInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title="Instagram"
          aria-label="Instagram Profile"
        >
          <InstagramIcon size={18} />
        </a>
      </div>
    </aside>
  );
};
