import { socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { Send, Globe, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar = ({ currentTheme, setTheme, language, setLanguage, onNavigate }: NavbarProps) => {
  const isDark = currentTheme === 'dark';

  return (
    <header className="modern-glass-navbar">
      <div className="nav-brand-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="brand-avatar">Y</span>
        <div className="brand-info">
          <span className="brand-name">yug33n.dev</span>
          <span className="brand-badge-mk">MK-III</span>
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
        {/* Dark / Light Theme Toggle Button */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="theme-mode-btn"
          aria-label="Toggle theme"
          title={language === 'ru' ? (isDark ? 'Включить светлую тему' : 'Включить тёмную тему') : (isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme')}
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
          <span>{isDark ? (language === 'ru' ? 'СВЕТЛАЯ' : 'LIGHT') : (language === 'ru' ? 'ТЁМНАЯ' : 'DARK')}</span>
        </button>

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
          <span className="contact-cta-label-full">{language === 'ru' ? 'Связаться' : 'Get in touch'}</span>
          <span className="contact-cta-label-short">{language === 'ru' ? 'Связь' : 'Contact'}</span>
        </a>
      </div>
    </header>
  );
};
