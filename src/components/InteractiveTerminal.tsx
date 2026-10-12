import { useState, useRef, useEffect } from 'react';
import { socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface HistoryLine {
  id: number;
  type: 'input' | 'output' | 'system';
  text: string;
}

interface InteractiveTerminalProps {
  language?: Language;
}

export const InteractiveTerminal = ({ language = 'en' }: InteractiveTerminalProps) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    {
      id: 1,
      type: 'system',
      text: language === 'ru' ? 'Консоль Yugeen v2.4 (x86_64-station)' : 'Yugeen Console v2.4 (x86_64-station)',
    },
    {
      id: 2,
      type: 'system',
      text: language === 'ru' ? 'Введите "help" или нажмите подсказки выше.' : 'Type "help" or click suggestion pills above.',
    },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ONLY internal terminal body, NEVER the browser window
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string, shouldScrollWindow: boolean = false) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: HistoryLine[] = [
      { id: Date.now(), type: 'input', text: `$ ${trimmed}` },
    ];

    switch (trimmed) {
      case 'help':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text:
            language === 'ru'
              ? 'Доступные команды: projects, stack, contact, hire, whoami, clear'
              : 'Available commands: projects, stack, contact, hire, whoami, clear',
        });
        break;
      case 'projects':
        newLines.push(
          {
            id: Date.now() + 1,
            type: 'output',
            text:
              language === 'ru'
                ? '1. WinTime — Privacy-first трекер времени для Windows (.NET 10, C#, SQLite)'
                : '1. WinTime — Privacy-first Windows screen tracker (.NET 10, C#, SQLite)',
          },
          {
            id: Date.now() + 2,
            type: 'output',
            text:
              language === 'ru'
                ? '2. PipeFlow — Визуальный симулятор архитектуры CPU и веб-IDE (React 19, TS)'
                : '2. PipeFlow — Visual CPU architecture simulator & puzzle Web IDE (React 19, TS)',
          },
          {
            id: Date.now() + 3,
            type: 'output',
            text:
              language === 'ru'
                ? '3. Notiva — База знаний и флеш-карточки активного вспоминания (PWA, React)'
                : '3. Notiva — AI study knowledge base & active recall flashcards (PWA, React)',
          },
          {
            id: Date.now() + 4,
            type: 'output',
            text:
              language === 'ru'
                ? '4. Aetheria Chronicles — Текстовая CRPG на локальных LLM (Ollama)'
                : '4. Aetheria Chronicles — Text CRPG powered by local LLMs (Ollama)',
          },
          {
            id: Date.now() + 5,
            type: 'output',
            text:
              language === 'ru'
                ? '5. NetMorph — Сетевой анализатор дампов & LLM Studio (React, TS)'
                : '5. NetMorph — Network protocol inspector & LLM Studio (React, TS)',
          },
          {
            id: Date.now() + 6,
            type: 'output',
            text:
              language === 'ru'
                ? '6. Unremembered — 3D головоломка про восстановление памяти (Unity, C#)'
                : '6. Unremembered — 3D memory restoration puzzle game (Unity, C#)',
          },
          {
            id: Date.now() + 7,
            type: 'output',
            text:
              language === 'ru'
                ? '7. Resonance — Быстрый десктопный аудиоплеер на C# (.NET)'
                : '7. Resonance — Desktop audio player with custom audio engine (C#)',
          },
          {
            id: Date.now() + 8,
            type: 'output',
            text:
              language === 'ru'
                ? '8. Курьер-Менеджер — Аркадная веб-игра про логистику ПВЗ (HTML5, JS)'
                : '8. Courier Manager — Action parcel dispatch web game (HTML5, JS)',
          }
        );
        if (shouldScrollWindow) {
          document.getElementById('projects-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'stack':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text:
            language === 'ru'
              ? 'Языки: C#, C++, TypeScript, JavaScript, Python | Сферы: Desktop, .NET, Unity, Web, AI'
              : 'Languages: C#, C++, TypeScript, JavaScript, Python | Domains: Desktop, .NET, Unity, Web, AI',
        });
        if (shouldScrollWindow) {
          document.getElementById('skills-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        newLines.push(
          { id: Date.now() + 1, type: 'output', text: `Telegram: ${socialLinks.telegram}` },
          { id: Date.now() + 2, type: 'output', text: `Instagram: ${socialLinks.instagram}` }
        );
        if (shouldScrollWindow) {
          document.getElementById('contact-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'hire':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text:
            language === 'ru'
              ? 'Статус: ДОСТУПЕН для десктопных решений, мобильных сервисов и fullstack разработки.'
              : 'Status: AVAILABLE for desktop software, mobile services, and fullstack engineering.',
        });
        break;
      case 'whoami':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'guest@yugeen-station: session authenticated [guest-mode].',
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text:
            language === 'ru'
              ? `Команда не найдена: "${trimmed}". Введите "help" для списка.`
              : `Command not found: "${trimmed}". Type "help" for options.`,
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal, false);
    }
  };

  const handleNavPillClick = (target: string) => {
    executeCommand(target, true);
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot close" />
          <span className="terminal-dot min" />
          <span className="terminal-dot max" />
        </div>
        <span className="terminal-title">terminal@yugeen:~</span>
        <div className="terminal-pills-wrap">
          <button
            onClick={() => handleNavPillClick('projects')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title={language === 'ru' ? 'Перейти к проектам' : 'Scroll to projects'}
          >
            projects
          </button>
          <button
            onClick={() => handleNavPillClick('stack')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title={language === 'ru' ? 'Перейти к стеку' : 'Scroll to stack'}
          >
            stack
          </button>
          <button
            onClick={() => handleNavPillClick('contact')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title={language === 'ru' ? 'Перейти к контактам' : 'Scroll to contacts'}
          >
            contact
          </button>
        </div>
      </div>

      <div className="terminal-body" ref={bodyRef}>
        {history.map((line) => (
          <div
            key={line.id}
            className="terminal-line"
            style={{
              color:
                line.type === 'input'
                  ? 'var(--accent-primary)'
                  : line.type === 'system'
                  ? 'var(--text-dim)'
                  : 'var(--text-main)',
            }}
          >
            {line.text}
          </div>
        ))}
        <div className="terminal-input-row">
          <span style={{ color: 'var(--accent-secondary)' }}>$</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={language === 'ru' ? "введите 'help'..." : "type 'help'..."}
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
};
