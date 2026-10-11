import { useState } from 'react';
import { Send, Mail, Check, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar = ({ activeSection }: SidebarProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { id: 'about', label: 'О себе' },
    { id: 'projects', label: 'Проекты' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Стек & Навыки' },
    { id: 'contact', label: 'Связаться' },
  ];

  return (
    <aside className="sidebar">
      <div>
        {/* Status Pill */}
        <div className="status-badge">
          <span className="status-dot" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Name & Title */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0.6rem' }}>
          {personalInfo.name}
        </h1>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          {personalInfo.role}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', maxWidth: '340px', lineHeight: 1.6 }}>
          {personalInfo.tagline}
        </p>

        {/* Brittany Chiang style Navigation */}
        <nav className="nav-menu" aria-label="Разделы портфолио">
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

      {/* Social Links & Quick Contact */}
      <div>
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
          <button
            onClick={handleCopyEmail}
            className="social-btn"
            title={copiedEmail ? 'Email скопирован!' : 'Скопировать email'}
            aria-label="Скопировать email"
            style={{ cursor: 'pointer' }}
          >
            {copiedEmail ? <Check size={18} color="#34d399" /> : <Mail size={18} />}
          </button>
        </div>

        <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <span>Стек: React + Vite + TS</span>
          <span>•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
          >
            Репозиторий <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </aside>
  );
};
