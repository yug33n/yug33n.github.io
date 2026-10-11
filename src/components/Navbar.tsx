import { useState, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  onOpenTerminal?: () => void;
}

export const Navbar = ({ currentTheme, setTheme, onOpenTerminal }: NavbarProps) => {
  const [timeStr, setTimeStr] = useState('');
  const [ping] = useState(Math.floor(Math.random() * 12) + 16);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="top-navbar">
      <a href="#" className="nav-brand">
        <span className="brand-badge">G</span>
        <span>grymik.dev</span>
      </a>

      {/* Live System Telemetry */}
      <div className="nav-telemetry">
        <div className="telemetry-item">
          <span className="live-indicator" />
          <span>STATUS: ONLINE</span>
        </div>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div className="telemetry-item">
          <span>TIME: {timeStr || '23:44:00'} (UTC+3)</span>
        </div>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div className="telemetry-item">
          <span>LATENCY: {ping}ms</span>
        </div>
      </div>

      {/* Controls: Theme Switcher & Contact */}
      <div className="nav-controls">
        <div className="theme-switcher" title="Сменить акцентную тему">
          <button
            onClick={() => setTheme('indigo')}
            className={`theme-dot indigo ${currentTheme === 'indigo' ? 'active' : ''}`}
            aria-label="Тема Indigo"
          />
          <button
            onClick={() => setTheme('emerald')}
            className={`theme-dot emerald ${currentTheme === 'emerald' ? 'active' : ''}`}
            aria-label="Тема Emerald"
          />
          <button
            onClick={() => setTheme('cyan')}
            className={`theme-dot cyan ${currentTheme === 'cyan' ? 'active' : ''}`}
            aria-label="Тема Cyan"
          />
          <button
            onClick={() => setTheme('amber')}
            className={`theme-dot amber ${currentTheme === 'amber' ? 'active' : ''}`}
            aria-label="Тема Amber"
          />
        </div>

        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            className="btn-interactive"
            title="Открыть встроенный терминал"
            style={{ padding: '0.35rem 0.65rem' }}
          >
            <Terminal size={14} />
          </button>
        )}

        <a
          href={personalInfo.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-interactive"
          style={{ background: 'var(--accent-subtle)', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
        >
          <Send size={13} />
          <span>Связаться</span>
        </a>
      </div>
    </header>
  );
};
