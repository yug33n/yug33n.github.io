import { useState, useEffect, useCallback } from 'react';
import { keypadSkillsData, type KeypadSkill } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { Sparkles, Terminal, Layers } from 'lucide-react';

interface SkillsKeypadProps {
  language: Language;
}

export const SkillsKeypad = ({ language }: SkillsKeypadProps) => {
  const [selectedSkill, setSelectedSkill] = useState<KeypadSkill>(keypadSkillsData[0]);
  const [pressedKeyId, setPressedKeyId] = useState<string | null>(null);
  const [bongoPaw, setBongoPaw] = useState<'left' | 'right' | 'both'>('left');

  const triggerKey = useCallback((skill: KeypadSkill) => {
    setSelectedSkill(skill);
    setPressedKeyId(skill.id);
    setBongoPaw((prev) => (prev === 'left' ? 'right' : 'left'));

    // Sound effect using Web Audio API synthesis (soft subtle mechanical click)
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
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
      }
    } catch {
      // AudioContext muted/unsupported, no problem
    }

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
      // Find matching skill by label or character
      const match = keypadSkillsData.find(
        (s) => s.keyLabel.toUpperCase() === keyChar || s.keyLabel[0]?.toUpperCase() === keyChar
      );

      if (match) {
        triggerKey(match);
      } else {
        // Default random hit on any key press for playful engagement
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
                      <span className="keycap-text">{skill.keyLabel}</span>
                      <span className="keycap-dot" style={{ backgroundColor: skill.color }} />
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
                <Terminal size={15} />
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
