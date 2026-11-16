import { useEffect } from 'react';
import type { ProjectItem } from '../types';
import type { Language } from '../data/portfolioData';
import { X, ExternalLink, Lock, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  language: Language;
  onClose: () => void;
}

export const ProjectModal = ({ project, language, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Generate specialized DIP IC Pinout depending on project type
  const isCsharp = project.category === 'csharp' || project.techStack.includes('C#');
  const isWeb = project.category === 'web' || project.techStack.includes('React');

  const inputPins = isCsharp
    ? [
        { pin: 'PIN 1', label: 'WIN32_HOOKS', desc: language === 'ru' ? 'Слушатель событий Win API' : 'Win API Event Listener' },
        { pin: 'PIN 2', label: 'PROC_MONITOR', desc: language === 'ru' ? 'Диспетчер процессов ОС' : 'OS Process Dispatcher' },
        { pin: 'PIN 3', label: 'ASYNC_CORE', desc: language === 'ru' ? 'Многопоточное ядро .NET' : '.NET Multithreaded Core' },
      ]
    : isWeb
    ? [
        { pin: 'PIN 1', label: 'HTTP_STREAM', desc: language === 'ru' ? 'Входящие REST запросы' : 'Incoming REST Stream' },
        { pin: 'PIN 2', label: 'SOCKET_IO', desc: language === 'ru' ? 'Двунаправленный вебсокет' : 'Bidirectional WebSocket' },
        { pin: 'PIN 3', label: 'LLM_PIPELINE', desc: language === 'ru' ? 'Нейросетевой процессинг' : 'Neural Pipeline Stream' },
      ]
    : [
        { pin: 'PIN 1', label: 'KW_STREAM', desc: language === 'ru' ? 'Парсинг площадок и бирж' : 'Scraper Ingestion Stream' },
        { pin: 'PIN 2', label: 'TG_WEBHOOK', desc: language === 'ru' ? 'Бот-диспетчер aiogram' : 'aiogram Bot Webhook' },
        { pin: 'PIN 3', label: 'PROXY_BYPASS', desc: language === 'ru' ? 'Ротация IP и User-Agent' : 'Proxy & Anti-bot Guard' },
      ];

  const outputPins = isCsharp
    ? [
        { pin: 'PIN 4', label: 'SQLITE_LOCAL', desc: language === 'ru' ? '100% приватная локальная БД' : '100% Private Local DB' },
        { pin: 'PIN 5', label: 'TRAY_WIDGET', desc: language === 'ru' ? 'Плавающий оверлей и трей' : 'Floating Overlay & Tray' },
        { pin: 'PIN 6', label: 'SYS_NOTIF', desc: language === 'ru' ? 'Всплывающие уведомления' : 'Native Toast Notifications' },
      ]
    : isWeb
    ? [
        { pin: 'PIN 4', label: 'VITE_REACT', desc: language === 'ru' ? 'Реактивный 60 FPS интерфейс' : 'Reactive 60 FPS Interface' },
        { pin: 'PIN 5', label: 'STATE_STORE', desc: language === 'ru' ? 'Атомарное состояние Zustand' : 'Atomic Zustand Store' },
        { pin: 'PIN 6', label: 'EDGE_CACHE', desc: language === 'ru' ? 'Быстрое кеширование' : 'Edge Latency Optimizer' },
      ]
    : [
        { pin: 'PIN 4', label: 'INSTANT_ALERT', desc: language === 'ru' ? 'Моментальное push-оповещение' : 'Instant User Push Alert' },
        { pin: 'PIN 5', label: 'NEON_TX', desc: language === 'ru' ? 'Cloud PostgreSQL транзакции' : 'Cloud PostgreSQL Tx' },
        { pin: 'PIN 6', label: 'RATE_GUARD', desc: language === 'ru' ? 'Защита от банов и лимитов' : 'Rate-Limit Adaptive Guard' },
      ];

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="datasheet-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Technical Chrome Header */}
        <div className="datasheet-chrome-header">
          <div className="datasheet-header-left">
            <span className="datasheet-badge-red">ENGINEERING DATASHEET</span>
            <span className="datasheet-rev-tag">REV: 3.1</span>
            <span className="datasheet-doc-num">#DS-{project.id.toUpperCase()}-2026</span>
          </div>

          <button className="datasheet-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        {/* Modal Inner Scroll */}
        <div className="datasheet-inner-scroll">
          
          {/* Title Row with Rubber Stamp */}
          <div className="datasheet-headline-box">
            <div className="datasheet-title-meta">
              <h2 className="datasheet-title">{project.title}</h2>
              <p className="datasheet-tagline">{project.tagline}</p>
              
              <div className="datasheet-status-tags">
                <span className="datasheet-type-pill">
                  {project.status || (language === 'ru' ? 'Инженерный релиз' : 'Engineering Release')}
                </span>

                {project.isPrivate ? (
                  <span className="status-badge-private">
                    <Lock size={12} />
                    <span>{language === 'ru' ? 'Приватный' : 'Private'}</span>
                  </span>
                ) : (
                  <span className="status-badge-open">
                    <CheckCircle2 size={12} />
                    <span>Open Source</span>
                  </span>
                )}
              </div>
            </div>

            {/* Rubber Stamp: VERIFIED ARCHITECTURE */}
            <div className="datasheet-rubber-stamp">
              VERIFIED ARCHITECTURE
            </div>
          </div>

          {/* Description Section */}
          <div className="datasheet-section-card">
            <div className="datasheet-section-title">
              // 01. {language === 'ru' ? 'ОПИСАНИЕ И НАЗНАЧЕНИЕ СИСТЕМЫ' : 'SYSTEM OVERVIEW & PURPOSE'}
            </div>
            <p className="datasheet-desc-text">{project.description}</p>
          </div>

          {/* DIP-12 IC PACKAGE PINOUT (СХЕМА РАСПИНОВКИ МИКРОСХЕМЫ) */}
          <div className="datasheet-section-card pcb-circuit-bg">
            <div className="datasheet-section-header-row">
              <span className="datasheet-section-title">
                // 02. {language === 'ru' ? 'РАСПИНОВКА СИСТЕМНЫХ ШИН (DIP-12 IC PINOUT)' : 'SYSTEM BUS PINOUT (DIP-12 IC)'}
              </span>
              <span className="datasheet-bus-active">LOGIC BUS: ACTIVE</span>
            </div>

            <div className="datasheet-pinout-grid">
              {/* Inputs */}
              <div className="pinout-column">
                <div className="pinout-col-header">// {language === 'ru' ? 'ВХОДНЫЕ СИГНАЛЫ (INPUTS)' : 'INPUT SIGNALS'}</div>
                {inputPins.map((p, i) => (
                  <div key={i} className="pinout-cell input-cell">
                    <span className="pin-number">{p.pin}</span>
                    <span className="pin-name">{p.label}</span>
                    <span className="pin-desc">{p.desc}</span>
                  </div>
                ))}
              </div>

              {/* Outputs */}
              <div className="pinout-column">
                <div className="pinout-col-header">// {language === 'ru' ? 'ВЫХОДНЫЕ СИГНАЛЫ (OUTPUTS)' : 'OUTPUT SIGNALS'}</div>
                {outputPins.map((p, i) => (
                  <div key={i} className="pinout-cell output-cell">
                    <span className="pin-number">{p.pin}</span>
                    <span className="pin-name">{p.label}</span>
                    <span className="pin-desc">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="datasheet-section-card">
              <div className="datasheet-section-title">
                // 03. {language === 'ru' ? 'КЛЮЧЕВЫЕ ТЕХНИЧЕСКИЕ ОСОБЕННОСТИ' : 'KEY TECHNICAL HIGHLIGHTS'}
              </div>
              <ul className="datasheet-highlights-list">
                {project.highlights.map((h, i) => (
                  <li key={i} className="datasheet-highlight-item">
                    <span className="highlight-bullet">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Stack */}
          <div className="datasheet-section-card">
            <div className="datasheet-section-title">
              // 04. {language === 'ru' ? 'КОМПОНЕНТНАЯ БАЗА (TECH STACK)' : 'COMPONENT BASE (TECH STACK)'}
            </div>
            <div className="datasheet-tech-tags">
              {project.techStack.map((tech, i) => (
                <span key={i} className="datasheet-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="datasheet-actions-bar">
            {project.githubUrl && !project.isPrivate && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="datasheet-action-btn primary-btn"
              >
                <GithubIcon size={16} />
                <span>{language === 'ru' ? 'Исходный код GitHub' : 'GitHub Repository'}</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="datasheet-action-btn download-btn"
              >
                <Download size={16} />
                <span>{language === 'ru' ? 'Скачать релиз' : 'Download Release'}</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="datasheet-action-btn demo-btn"
              >
                <span>{language === 'ru' ? 'Открыть Demo ↗' : 'Open Demo ↗'}</span>
              </a>
            )}

            <button onClick={onClose} className="datasheet-action-btn close-btn">
              <span>{language === 'ru' ? 'Закрыть паспорт [ESC]' : 'Close Spec [ESC]'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
