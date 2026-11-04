import { useState, useEffect, useCallback } from 'react';
import { keypadSkillsData, type KeypadSkill } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { Sparkles, Terminal, Layers } from 'lucide-react';

interface SkillsKeypadProps {
  language: Language;
}

// Crisp Vector Logos for Keycaps
const SkillKeycapIcon = ({ skillId, color }: { skillId: string; color: string }) => {
  switch (skillId) {
    case 'csharp':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M10 9a3 3 0 1 0 0 6" />
          <path d="M14 9l1 6M17 9l1 6M13.5 11h5M13 14h5" />
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 9a3 3 0 1 0 0 6" />
          <path d="M14 12h3M15.5 10.5v3M19 12h2M20 11v2" />
        </svg>
      );
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 8h6M10 8v8M14 14.5c.5.9 1.5 1.5 2.7 1.5 1.5 0 2.3-.8 2.3-1.8 0-2.4-4-1.6-4-4 0-.9.8-1.7 2.1-1.7 1 0 1.9.5 2.4 1.3" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill={color} />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-3.3 0-5 1.2-5 3.5V8h5v1H5C2.8 9 2 11.2 2 13.5S3 18 5.5 18H7v-2.5c0-1.7 1.3-3 3-3h5c1.4 0 2.5-1.1 2.5-2.5V5.5C17.5 3.2 15.3 2 12 2z" />
          <path d="M12 22c3.3 0 5-1.2 5-3.5V16h-5v-1h7c2.2 0 3-2.2 3-4.5S21 6 18.5 6H17v2.5c0 1.7-1.3 3-3 3H9c-1.4 0-2.5 1.1-2.5 2.5v4.5C6.5 20.8 8.7 22 12 22z" />
          <circle cx="9" cy="5" r="0.8" fill={color} />
          <circle cx="15" cy="19" r="0.8" fill={color} />
        </svg>
      );
    case 'ollama':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 1 5 5v1a4 4 0 0 1 3 3.9v3.2a4 4 0 0 1-2.2 3.5L16 22H8l-1.8-3.4A4 4 0 0 1 4 15.1v-3.2A4 4 0 0 1 7 8V7a5 5 0 0 1 5-5z" />
          <circle cx="9" cy="12" r="1.2" fill={color} />
          <circle cx="15" cy="12" r="1.2" fill={color} />
        </svg>
      );
    case 'sqlite':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case 'wpf':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
          <path d="M2 13a7 7 0 0 0 13 4 8 8 0 0 0 7-5c0-.5-.5-1-1-1-1.5 0-3 .5-4 1.5A9.5 9.5 0 0 0 2 13z" />
          <rect x="5" y="9" width="2" height="2" />
          <rect x="8" y="9" width="2" height="2" />
          <rect x="11" y="9" width="2" height="2" />
          <rect x="8" y="6" width="2" height="2" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <path d="M6 8.5v7M8.5 7.5l7 2.5" />
        </svg>
      );
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v10c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5V6" />
          <path d="M5 11c0 1.8 3.1 3 7 3s7-1.2 7-3" />
          <path d="M12 14v5" />
        </svg>
      );
    case 'unity':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <path d="M12 2v9M4 6.5l8 4.5M20 6.5l-8 4.5" />
        </svg>
      );
    default:
      return <Terminal size={18} color={color} />;
  }
};

let sharedAudioCtx: AudioContext | null = null;
const playKeyClick = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
      sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    const ctx = sharedAudioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // AudioContext muted/unsupported
  }
};

export const SkillsKeypad = ({ language }: SkillsKeypadProps) => {
  const [selectedSkill, setSelectedSkill] = useState<KeypadSkill>(keypadSkillsData[0]);
  const [pressedKeyId, setPressedKeyId] = useState<string | null>(null);
  const [bongoPaw, setBongoPaw] = useState<'left' | 'right'>('left');

  const triggerKey = useCallback((skill: KeypadSkill) => {
    setSelectedSkill(skill);
    setPressedKeyId(skill.id);
    setBongoPaw((prev) => (prev === 'left' ? 'right' : 'left'));

    // Sound effect using Web Audio API synthesis (soft subtle mechanical click)
    playKeyClick();

    setTimeout(() => {
      setPressedKeyId((curr) => (curr === skill.id ? null : curr));
    }, 180);
  }, []);

  // Listen to keyboard presses on desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing when user is in input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const keyChar = e.key.toUpperCase();
      const match = keypadSkillsData.find(
        (s) => s.keyLabel.toUpperCase() === keyChar || s.keyLabel[0]?.toUpperCase() === keyChar
      );

      if (match) {
        triggerKey(match);
      } else {
        const randIndex = Math.floor(Math.random() * keypadSkillsData.length);
        const randomSkill = keypadSkillsData[randIndex];
        if (randomSkill) triggerKey(randomSkill);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerKey]);

  return (
    <div className="skills-keypad-container">
      {/* Top Bongo Mascot */}
      <div className="bongo-mascot-wrapper">
        <svg
          viewBox="0 0 160 90"
          className="bongo-cat-svg"
          aria-hidden="true"
        >
          {/* Head & Ears */}
          <path
            d="M 30,70 Q 30,30 50,22 L 60,6 Q 70,16 80,18 Q 90,16 100,6 L 110,22 Q 130,30 130,70 Z"
            fill="#ffffff"
            stroke="#18181b"
            strokeWidth="3.5"
          />
          {/* Inner ears */}
          <path d="M 54,20 L 62,11 L 68,18 Z" fill="#fda4af" />
          <path d="M 106,20 L 98,11 L 92,18 Z" fill="#fda4af" />
          {/* Eyes (Happy squint) */}
          <path d="M 52,38 Q 60,33 68,38" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M 92,38 Q 100,33 108,38" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          {/* Cheeks */}
          <ellipse cx="48" cy="48" rx="5" ry="3" fill="#fbcfe8" opacity="0.8" />
          <ellipse cx="112" cy="48" rx="5" ry="3" fill="#fbcfe8" opacity="0.8" />
          {/* Cute Mouth */}
          <path d="M 74,45 Q 80,48 86,45" fill="none" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />

          {/* Left Paw */}
          <g className={`bongo-paw left-paw ${bongoPaw === 'left' ? 'paw-down' : 'paw-up'}`}>
            <path
              d="M 38,58 Q 30,68 45,74 Q 56,76 56,66 Q 56,58 44,58 Z"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="3"
            />
          </g>

          {/* Right Paw */}
          <g className={`bongo-paw right-paw ${bongoPaw === 'right' ? 'paw-down' : 'paw-up'}`}>
            <path
              d="M 122,58 Q 130,68 115,74 Q 104,76 104,66 Q 104,58 116,58 Z"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>

      <div className="keypad-layout-grid">
        {/* LEFT: 3D Isometric Keypad */}
        <div className="macropad-isometric-stage">
          <div className="macropad-deck-base">
            <div className="macropad-keys-grid">
              {keypadSkillsData.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;
                const isPressed = pressedKeyId === skill.id;

                return (
                  <button
                    key={skill.id}
                    onClick={() => triggerKey(skill)}
                    className={`keycap-btn ${isSelected ? 'key-selected' : ''} ${isPressed ? 'key-pressed' : ''}`}
                    style={
                      {
                        '--key-accent': skill.color,
                      } as React.CSSProperties
                    }
                    title={`${skill.name} (${skill.keyLabel})`}
                  >
                    <span className="keycap-top">
                      <span className="keycap-icon-stage">
                        <SkillKeycapIcon skillId={skill.id} color={skill.color} />
                      </span>
                      <span className="keycap-text">{skill.keyLabel}</span>
                    </span>
                    <span className="keycap-side-front" />
                    <span className="keycap-side-right" />
                  </button>
                );
              })}
            </div>
          </div>
          <p className="macropad-hint-note">
            <Sparkles size={13} />
            {language === 'ru'
              ? 'Нажимай клавиши мышкой или печатай на физической клавиатуре'
              : 'Click keys or type on your physical keyboard to trigger'}
          </p>
        </div>

        {/* RIGHT: High-tech Skill HUD Display */}
        <div className="skill-hud-card">
          <div className="hud-header">
            <div className="hud-badge-group">
              <span className="hud-icon-badge" style={{ backgroundColor: `${selectedSkill.color}20`, color: selectedSkill.color }}>
                <SkillKeycapIcon skillId={selectedSkill.id} color={selectedSkill.color} />
              </span>
              <span className="hud-title">{selectedSkill.name}</span>
            </div>
            <span className="hud-key-indicator" style={{ borderColor: selectedSkill.color, color: selectedSkill.color }}>
              KEY: {selectedSkill.keyLabel}
            </span>
          </div>

          <p className="hud-description">
            {language === 'ru' ? selectedSkill.descriptionRu : selectedSkill.descriptionEn}
          </p>

          <div className="hud-meta-section">
            <div className="hud-meta-label">
              <Layers size={13} />
              <span>{language === 'ru' ? 'Используется в проектах' : 'Applied In Projects'}</span>
            </div>
            <div className="hud-projects-tags">
              {selectedSkill.relatedProjects.map((proj, idx) => (
                <span key={idx} className="hud-proj-pill">
                  {proj}
                </span>
              ))}
            </div>
          </div>

          <div className="hud-footer-accent" style={{ background: `linear-gradient(90deg, ${selectedSkill.color}, transparent)` }} />
        </div>
      </div>
    </div>
  );
};
