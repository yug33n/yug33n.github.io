import { useState, useEffect, useCallback, useId } from 'react';
import { keypadSkillsData, type KeypadSkill } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { Terminal, Layers } from 'lucide-react';

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
const playKeyClick = (pitch = 380, volume = 0.05) => {
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
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.35, ctx.currentTime + 0.045);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Audio muted/unsupported
  }
};

export const SkillsKeypad = ({ language }: SkillsKeypadProps) => {
  const [selectedSkill, setSelectedSkill] = useState<KeypadSkill>(keypadSkillsData[0]);
  const [pressedKeyId, setPressedKeyId] = useState<string | null>(null);
  const [bongoPaw, setBongoPaw] = useState<'left' | 'right'>('left');
  const [pressCount, setPressCount] = useState(1);
  const [knobAngle, setKnobAngle] = useState(45);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const ribbonGradientId = useId();
  const ribbonShadowId = useId();

  const triggerKey = useCallback((skill: KeypadSkill) => {
    setSelectedSkill(skill);
    setPressedKeyId(skill.id);
    setPressCount((c) => c + 1);
    setBongoPaw((prev) => (prev === 'left' ? 'right' : 'left'));

    // Sound effect with volume adjusted by knob
    if (isSoundOn) {
      const volMultiplier = Math.max(0.02, (knobAngle / 360) * 0.08);
      playKeyClick(skill.id === 'csharp' ? 440 : 360, volMultiplier);
    }

    setTimeout(() => {
      setPressedKeyId((curr) => (curr === skill.id ? null : curr));
    }, 180);
  }, [isSoundOn, knobAngle]);

  const rotateKnob = () => {
    const nextAngle = (knobAngle + 45) % 360;
    setKnobAngle(nextAngle);
    if (isSoundOn) {
      playKeyClick(560, 0.06);
    }
  };

  const toggleSound = () => {
    const nextState = !isSoundOn;
    setIsSoundOn(nextState);
    if (nextState) {
      playKeyClick(420, 0.06);
    }
  };

  // Keyboard listeners: maps numbers 1..9, 0, -, = AND letter grid QWER / ASDF / ZXCV AND Russian layout
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toLowerCase();

      // 1. Direct number mapping (1..9, 0, -, =)
      const numKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
      const numIdx = numKeys.indexOf(key);
      if (numIdx !== -1 && keypadSkillsData[numIdx]) {
        triggerKey(keypadSkillsData[numIdx]);
        return;
      }

      // 2. QWERTY 3x4 grid mapping (Row 1: q,w,e,r / Row 2: a,s,d,f / Row 3: z,x,c,v)
      const gridKeys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'];
      const gridIdx = gridKeys.indexOf(key);
      if (gridIdx !== -1 && keypadSkillsData[gridIdx]) {
        triggerKey(keypadSkillsData[gridIdx]);
        return;
      }

      // 3. Russian layout equivalent
      const ruGridKeys = ['й', 'ц', 'у', 'к', 'ф', 'ы', 'в', 'а', 'я', 'ч', 'с', 'м'];
      const ruIdx = ruGridKeys.indexOf(key);
      if (ruIdx !== -1 && keypadSkillsData[ruIdx]) {
        triggerKey(keypadSkillsData[ruIdx]);
        return;
      }

      // 4. Exact letter match by skill ID or keyLabel
      const matchedSkill = keypadSkillsData.find(
        (s) => s.keyLabel.toLowerCase() === key || s.id.toLowerCase() === key
      );
      if (matchedSkill) {
        triggerKey(matchedSkill);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerKey]);

  const knobPercent = Math.round((knobAngle / 360) * 100);

  return (
    <div className="skills-keypad-container">
      
      {/* 3D Isometric Keypad Stage */}
      <div className="keypad-layout-grid relative">
        
        {/* LEFT: 3D Isometric Deck with Real Volumetric Keycaps */}
        <div className="isometric-stage-column">
          
          {/* BONGO CAT MASCOT (Sitting directly on top of the 3D deck) */}
          <div className="bongo-mascot-wrapper">
            <svg viewBox="0 0 160 90" className="bongo-cat-svg" aria-hidden="true">
              <path
                d="M 30,70 Q 30,30 50,22 L 60,6 Q 70,16 80,18 Q 90,16 100,6 L 110,22 Q 130,30 130,70 Z"
                fill="#ffffff"
                stroke="#141414"
                strokeWidth="3.5"
              />
              <path d="M 54,20 L 62,11 L 68,18 Z" fill="#fda4af" stroke="#141414" strokeWidth="1.5" />
              <path d="M 106,20 L 98,11 L 92,18 Z" fill="#fda4af" stroke="#141414" strokeWidth="1.5" />
              <path d="M 52,38 Q 60,33 68,38" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
              <path d="M 92,38 Q 100,33 108,38" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="48" cy="48" rx="5" ry="3" fill="#fbcfe8" />
              <ellipse cx="112" cy="48" rx="5" ry="3" fill="#fbcfe8" />
              <path d="M 74,45 Q 80,48 86,45" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />

              {/* Left Paw */}
              <g className={`bongo-paw left-paw ${bongoPaw === 'left' ? 'paw-down' : 'paw-up'}`}>
                <path
                  d="M 38,58 Q 30,68 45,74 Q 56,76 56,66 Q 56,58 44,58 Z"
                  fill="#ffffff"
                  stroke="#141414"
                  strokeWidth="3"
                />
              </g>

              {/* Right Paw */}
              <g className={`bongo-paw right-paw ${bongoPaw === 'right' ? 'paw-down' : 'paw-up'}`}>
                <path
                  d="M 122,58 Q 130,68 115,74 Q 104,76 104,66 Q 104,58 116,58 Z"
                  fill="#ffffff"
                  stroke="#141414"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </div>

          {/* Heavy 3D Chassis Base */}
          <div className="isometric-deck-base">
            
            {/* 4 Brass Hardware Screws in corners */}
            <div className="brass-screw screw-tl" />
            <div className="brass-screw screw-tr" />
            <div className="brass-screw screw-bl" />
            <div className="brass-screw screw-br" />

            {/* J1:BUS Out Connector */}
            <div className="deck-bus-socket">
              <span className="socket-label">J1:BUS</span>
              <div className="socket-block" />
            </div>

            {/* Control Header on Deck */}
            <div className="deck-header-bar">
              <div className="deck-brand-pill">
                <span className="deck-brand-text">YG-MACROPAD <span className="text-red">01</span></span>
                <div className="deck-status-dots">
                  <span className="dot dot-green" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-red" />
                </div>
              </div>

              {/* Controls */}
              <div className="deck-controls-group">
                {/* SFX Toggle */}
                <div className="deck-control-unit" title={language === 'ru' ? 'Вкл/Выкл звука кликов' : 'Toggle SFX'}>
                  <span className="control-label">SFX</span>
                  <div className="toggle-plate-btn" onClick={toggleSound}>
                    <div className={`toggle-bat-lever ${isSoundOn ? '' : 'toggled'}`} />
                  </div>
                </div>

                {/* Rotary Knob */}
                <div className="deck-control-unit" title={language === 'ru' ? 'Повернуть регулятор' : 'Rotate encoder'}>
                  <span className="control-label">VOL</span>
                  <div
                    className="rotary-knob-dial"
                    style={{ transform: `rotate(${knobAngle}deg)` }}
                    onClick={rotateKnob}
                  >
                    <div className="rotary-marker" />
                  </div>
                </div>
              </div>
            </div>

            {/* Switch Plate with 12 Volumetric 3D Keycaps */}
            <div className="deck-switch-plate">
              <div className="keycaps-isometric-grid">
                {keypadSkillsData.map((skill, index) => {
                  const isSelected = selectedSkill.id === skill.id;
                  const isPressed = pressedKeyId === skill.id;
                  
                  // Style classes based on key type
                  let keycapThemeClass = 'keycap-cream';
                  if (index === 0 || index === 11) {
                    keycapThemeClass = 'keycap-red';
                  } else if (index === 3 || index === 7) {
                    keycapThemeClass = 'keycap-mod';
                  }

                  return (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => triggerKey(skill)}
                      className={`keycap-3d-btn ${keycapThemeClass} ${isSelected ? 'key-active' : ''} ${isPressed ? 'pressed' : ''}`}
                      title={`${skill.name} (${skill.keyLabel})`}
                    >
                      <div className="keycap-content">
                        <span className="keycap-sub-index">0{index + 1}</span>
                        <span className="keycap-main-icon">
                          <SkillKeycapIcon
                            skillId={skill.id}
                            color={isSelected ? '#FFFFFF' : (keycapThemeClass === 'keycap-red' ? '#FFFFFF' : skill.color)}
                          />
                        </span>
                        <span className="keycap-label-code">{skill.keyLabel}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Engraving */}
            <div className="deck-footer-engraving">
              <span>// PCB LAYOUT: CHERRY MX BROWN</span>
              <div className="deck-vent-slots">
                <span className="vent-slot" />
                <span className="vent-slot" />
                <span className="vent-slot" />
              </div>
            </div>

          </div>

          {/* Note removed per user request: "надпись в низу клавиатуры чуть залазиет под клавиатуру, просто убери ее" */}
        </div>

        {/* INTERCONNECT RIBBON CABLE (Шлейф данных между клавиатурой и CRT) */}
        <div className="interconnect-ribbon-cable" aria-hidden="true">
          <svg className="ribbon-cable-svg" viewBox="0 0 120 180">
            <defs>
              <linearGradient id={ribbonGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D1C7B7" />
                <stop offset="10%" stopColor="#ED4027" />
                <stop offset="15%" stopColor="#D1C7B7" />
                <stop offset="30%" stopColor="#B8AB9A" />
                <stop offset="50%" stopColor="#D1C7B7" />
                <stop offset="70%" stopColor="#B8AB9A" />
                <stop offset="100%" stopColor="#C2B8A8" />
              </linearGradient>
              <filter id={ribbonShadowId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="-3" dy="6" stdDeviation="3" floodColor="#141414" floodOpacity="0.35" />
              </filter>
            </defs>

            <path
              d="M 0,110 C 50,110 50,45 110,45"
              fill="none"
              stroke={`url(#${ribbonGradientId})`}
              strokeWidth="26"
              strokeLinecap="square"
              filter={`url(#${ribbonShadowId})`}
            />

            {/* Conductor grooving */}
            <path d="M 0,110 C 50,110 50,45 110,45" fill="none" stroke="#141414" strokeWidth="0.75" opacity="0.4" strokeDasharray="3 1" />
            <path d="M 0,105 C 50,105 50,40 110,40" fill="none" stroke="#141414" strokeWidth="0.75" opacity="0.4" strokeDasharray="3 1" />
            <path d="M 0,115 C 50,115 50,50 110,50" fill="none" stroke="#141414" strokeWidth="0.75" opacity="0.4" strokeDasharray="3 1" />
            
            {/* Red Pin 1 Conductor */}
            <path d="M 0,99 C 50,99 50,34 110,34" fill="none" stroke="#ED4027" strokeWidth="3" opacity="0.9" />

            {/* Header Bracket */}
            <rect x="108" y="26" width="10" height="38" rx="2" fill="#141414" stroke="#DACAB0" strokeWidth="1.5" />
            <text x="110" y="20" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#141414">J2:IN</text>
          </svg>
        </div>

        {/* RIGHT: CRT Phosphor Terminal & Schematik Tech Sheet */}
        <div className="crt-terminal-column">
          
          {/* CRT Screen */}
          <div className="crt-terminal-housing">
            <div className="crt-screen-bezel">
              <div className="crt-scanlines-layer" />
              
              <div className="crt-screen-content">
                <div className="crt-top-status-row">
                  <span className="crt-live-badge">
                    <span className="crt-pulse-dot" />
                    <span>TERMINAL // MONITOR-01</span>
                  </span>
                  <span className="crt-baud-rate">RATE: 44.1 kHz</span>
                </div>

                <div className="crt-field-group">
                  <div className="crt-field-label">// {language === 'ru' ? 'ВЫБРАННЫЙ АППАРАТНЫЙ НАВЫК' : 'SELECTED HARDWARE KEY'}</div>
                  <div className="crt-key-display">
                    {selectedSkill.name.toUpperCase()}
                  </div>
                </div>

                <div className="crt-field-group">
                  <div className="crt-field-label">// {language === 'ru' ? 'ПРОФИЛЬ СПЕЦИАЛИЗАЦИИ' : 'SPECIALIZATION PROFILE'}</div>
                  <div className="crt-spec-tag">
                    KEY: {selectedSkill.keyLabel}
                  </div>
                </div>

                <div className="crt-field-group">
                  <div className="crt-field-label">// {language === 'ru' ? 'АРХИТЕКТУРНЫЕ ДЕТАЛИ' : 'ARCHITECTURE DETAILS'}</div>
                  <p className="crt-desc-text">
                    {language === 'ru' ? selectedSkill.descriptionRu : selectedSkill.descriptionEn}
                  </p>
                </div>

                {/* Live telemetry row */}
                <div className="crt-telemetry-row">
                  <span>KNOB: {knobPercent}%</span>
                  <span>SFX: {isSoundOn ? 'ON' : 'MUTED'}</span>
                  <span>PRESSES: {pressCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schematik Hardware Tech Sheet Card */}
          <div className="schematik-specs-card">
            <div className="schematik-specs-header">
              <span>[+] SCHEMATIK TECH SHEET</span>
              <span className="text-red">PIN ASSIGNMENTS: OK</span>
            </div>

            <div className="schematik-applied-projects">
              <div className="applied-label">
                <Layers size={12} />
                <span>{language === 'ru' ? 'ПРИМЕНЯЕТСЯ В ПРОЕКТАХ:' : 'APPLIED IN PROJECTS:'}</span>
              </div>
              <div className="applied-pills-row">
                {selectedSkill.relatedProjects.map((proj, idx) => (
                  <span key={idx} className="schematik-proj-pill">
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            <div className="schematik-specs-grid">
              <div>• SPEED: <span className="spec-val">MAX_PERF</span></div>
              <div>• DB: <span className="spec-val">SQLITE / PG</span></div>
              <div>• ARCH: <span className="spec-val">ASYNC IO</span></div>
              <div>• HOST: <span className="spec-val">DOCKER VPS</span></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
