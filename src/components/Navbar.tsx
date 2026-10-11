import { useState, useEffect } from 'react';
import { Terminal, Send, Globe } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenTerminal?: () => void;
}

export const Navbar = ({ currentTheme, setTheme, language, setLanguage, onOpenTerminal }: NavbarProps) => {
  const [timeStr, setTimeStr] = useState('');
  const [ping] = useState(Math.floor(Math.random() * 10) + 18);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString(language === 'ru' ? 'ru-RU' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <header className="top-navbar">
      <a href="#" className="nav-brand">
        <span className="brand-badge">Y</span>
        <span>yugeen</span>
      </a>

      {/* Live System Telemetry */}
      <div className="nav-telemetry">
        <div className="telemetry-item">
          <span className="live-indicator" />
          <span>STATUS: ONLINE</span>
        </div>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div className="telemetry-item">
          <span>TIME: {timeStr || '00:45:00'} (UTC+3)</span>
        </div>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div className="telemetry-item">
          <span>LATENCY: {ping}ms</span>
        </div>
      </div>

      {/* Controls: Theme Switcher, Terminal, Language Toggle & Contact */}
      <div className="nav-controls">
        <div className="theme-switcher" title={language === 'ru' ? 'Сменить акцентную тему' : 'Switch accent color'}>
          <button
            onClick={() => setTheme('indigo')}
            className={`theme-dot indigo ${currentTheme === 'indigo' ? 'active' : ''}`}
            aria-label="Indigo theme"
          />
          <button
            onClick={() => setTheme('emerald')}
            className={`theme-dot emerald ${currentTheme === 'emerald' ? 'active' : ''}`}
            aria-label="Emerald theme"
          />
          <button
            onClick={() => setTheme('cyan')}
            className={`theme-dot cyan ${currentTheme === 'cyan' ? 'active' : ''}`}
            aria-label="Cyan theme"
          />
          <button
            onClick={() => setTheme('amber')}
            className={`theme-dot amber ${currentTheme === 'amber' ? 'active' : ''}`}
            aria-label="Amber theme"
          />
        </div>

        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            className="btn-interactive nav-terminal-btn"
            title={language === 'ru' ? 'Открыть консоль' : 'Open console'}
            style={{ padding: '0.35rem 0.65rem' }}
          >
            <Terminal size={14} />
          </button>
        )}

        {/* Language Switcher Toggle */}
        <button
          onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          className="btn-interactive nav-lang-btn"
          title={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
          style={{
            padding: '0.35rem 0.65rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
          }}
        >
          <Globe size={13} color="var(--accent-secondary)" />
          <span>{language === 'ru' ? 'EN' : 'RU'}</span>
        </button>

        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-interactive nav-contact-btn"
          style={{ background: 'var(--accent-subtle)', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
        >
          <Send size={13} />
          <span className="nav-contact-text">{language === 'ru' ? 'Связаться' : 'Contact'}</span>
        </a>
      </div>
    </header>
  );
};
