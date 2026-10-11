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
    { id: 1, type: 'system', text: 'Grymik OS v2.4 (x86_64-pc-linux-gnu)' },
    { id: 2, type: 'system', text: 'Type "help" or click suggestions below.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
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
          { id: Date.now() + 1, type: 'output', text: '1. NetMorph — Network Protocol Inspector & LLM Studio' },
          { id: Date.now() + 2, type: 'output', text: '2. Courier-Manager — Logistics delivery router & dispatch' },
          { id: Date.now() + 3, type: 'output', text: '3. Telemetry Monitor — Microservice health agent' }
        );
        break;
      case 'stack':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'Core: React 19, TypeScript, Vite, Node.js, Docker, Nginx, Zustand, Linux',
        });
        break;
      case 'contact':
        newLines.push(
          { id: Date.now() + 1, type: 'output', text: `Telegram: ${personalInfo.telegram}` },
          { id: Date.now() + 2, type: 'output', text: `Email: ${personalInfo.email}` }
        );
        break;
      case 'hire':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'Status: AVAILABLE for interesting engineering contracts & teams.',
        });
        break;
      case 'whoami':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          text: 'guest@grymik-station: session authenticated.',
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
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot close" />
          <span className="terminal-dot min" />
          <span className="terminal-dot max" />
        </div>
        <span>terminal@grymik:~</span>
        <div style={{ display: 'flex', gap: '0.3rem' }}>
          {['stack', 'projects', 'hire'].map((btn) => (
            <button
              key={btn}
              onClick={() => executeCommand(btn)}
              className="cli-btn"
              style={{ padding: '0.1rem 0.4rem', fontSize: '0.7rem' }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="terminal-body">
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
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
