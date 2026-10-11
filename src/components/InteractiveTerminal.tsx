import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

interface HistoryLine {
  id: number;
  type: 'input' | 'output' | 'system';
  text: string;
}

export const InteractiveTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: 1, type: 'system', text: 'Yugeen Console v2.4 (x86_64-station)' },
    { id: 2, type: 'system', text: 'Type "help" or click suggestion pills below.' },
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
          text: 'Available: projects, stack, contact, hire, whoami, clear',
        });
        break;
      case 'projects':
        newLines.push(
          { id: Date.now() + 1, type: 'output', text: '1. WinTime — Privacy-first Windows screen tracker (.NET 10, C#, SQLite)' },
          { id: Date.now() + 2, type: 'output', text: '2. Notiva — AI knowledge base & active recall flashcards (PWA, React)' },
          { id: Date.now() + 3, type: 'output', text: '3. Aetheria Chronicles — Text CRPG powered by local LLMs (Ollama)' },
          { id: Date.now() + 4, type: 'output', text: '4. NetMorph — Network protocol inspector & LLM Studio (React, TS)' },
          { id: Date.now() + 5, type: 'output', text: '5. Unremembered — 3D memory restoration puzzle game (Unity, C#)' },
          { id: Date.now() + 6, type: 'output', text: '6. Resonance — Desktop audio player with custom audio engine (C#)' },
          { id: Date.now() + 7, type: 'output', text: '7. Courier-Manager — Arcade parcel dispatch web game (HTML5, JS)' }
        );
        if (shouldScrollWindow) {
          document.getElementById('projects-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'stack':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'Languages: C++, C#, Python, TypeScript, JavaScript | Domains: Desktop, Mobile, Web, Systems',
        });
        if (shouldScrollWindow) {
          document.getElementById('skills-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        newLines.push(
          { id: Date.now() + 1, type: 'output', text: `Telegram: ${personalInfo.telegram}` },
          { id: Date.now() + 2, type: 'output', text: `Instagram: ${personalInfo.instagram}` }
        );
        if (shouldScrollWindow) {
          document.getElementById('contact-deck')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'hire':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'Status: AVAILABLE for desktop solutions, mobile apps, and fullstack projects.',
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
          text: `Command not found: "${trimmed}". Type "help" for options.`,
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // User typing command inside console: DO NOT scroll the page
      executeCommand(inputVal, false);
    }
  };

  const handleNavPillClick = (target: string) => {
    // When clicking header pills: execute command in terminal AND smooth-scroll to section
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
        <span>terminal@yugeen:~</span>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => handleNavPillClick('projects')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title="Перейти к проектам"
          >
            projects
          </button>
          <button
            onClick={() => handleNavPillClick('stack')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title="Перейти к стеку"
          >
            stack
          </button>
          <button
            onClick={() => handleNavPillClick('contact')}
            className="cli-btn"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}
            title="Перейти к контактам"
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
            placeholder="type 'help'..."
            aria-label="Ввод команды в терминале"
          />
        </div>
      </div>
    </div>
  );
};
