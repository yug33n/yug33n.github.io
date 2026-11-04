import { socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { Send, Globe } from 'lucide-react';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar = ({ currentTheme, setTheme, language, setLanguage, onNavigate }: NavbarProps) => {
  return (
    <header className="modern-glass-navbar">
      <div className="nav-brand-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="brand-avatar">Y</span>
        <div className="brand-info">
          <span className="brand-name">yug33n</span>
          <span className="brand-status-dot" title="Online" />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links-menu">
        <button onClick={() => onNavigate('featured-deck')} className="nav-link-btn">
          {language === 'ru' ? 'Проекты' : 'Projects'}
        </button>
        <button onClick={() => onNavigate('keypad-deck')} className="nav-link-btn">
          {language === 'ru' ? 'Стек' : 'Stack'}
        </button>
        <button onClick={() => onNavigate('archive-deck')} className="nav-link-btn">
          {language === 'ru' ? 'Архив' : 'Archive'}
        </button>
        <button onClick={() => onNavigate('contact-deck')} className="nav-link-btn">
          {language === 'ru' ? 'Контакты' : 'Contact'}
        </button>
      </nav>

      {/* Action Controls */}
      <div className="nav-right-controls">
        {/* Subtle Theme Selector */}
        <div className="theme-pills-row" title={language === 'ru' ? 'Сменить акцент' : 'Accent theme'}>
          <button
            onClick={() => setTheme('amber')}
            className={`theme-dot amber ${currentTheme === 'amber' ? 'active' : ''}`}
            aria-label="Amber accent"
          />
          <button
            onClick={() => setTheme('indigo')}
            className={`theme-dot indigo ${currentTheme === 'indigo' ? 'active' : ''}`}
            aria-label="Indigo accent"
          />
          <button
            onClick={() => setTheme('emerald')}
            className={`theme-dot emerald ${currentTheme === 'emerald' ? 'active' : ''}`}
            aria-label="Emerald accent"
          />
          <button
            onClick={() => setTheme('cyan')}
            className={`theme-dot cyan ${currentTheme === 'cyan' ? 'active' : ''}`}
            aria-label="Cyan accent"
          />
        </div>

        {/* Language Pill */}
        <button
          onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          className="lang-pill-btn"
          aria-label="Toggle language"
        >
          <Globe size={13} />
          <span>{language.toUpperCase()}</span>
        </button>

        {/* Quick Contact Primary Button */}
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-contact-cta"
        >
          <Send size={13} />
          <span>{language === 'ru' ? 'Связаться' : 'Get in touch'}</span>
        </a>
      </div>
    </header>
  );
};
