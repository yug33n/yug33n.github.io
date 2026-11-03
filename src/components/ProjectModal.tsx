import { useEffect } from 'react';
import type { ProjectItem } from '../types';
import type { Language } from '../data/portfolioData';
import { X, ExternalLink, Lock, CheckCircle2, Monitor } from 'lucide-react';
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

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Window Chrome Header */}
        <div className="modal-window-chrome">
          <div className="chrome-dots">
            <span className="dot dot-red" onClick={onClose} />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="chrome-title">
            <Monitor size={13} />
            <span>{project.title} — {project.status || 'Details'}</span>
          </div>
          <button className="chrome-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-inner-scroll">
          {/* Screenshot / Visual Container Placeholder */}
          <div className="modal-preview-stage">
            {project.image ? (
              <img src={project.image} alt={project.title} className="modal-preview-img" />
            ) : (
              <div className="modal-preview-placeholder">
                <div className="placeholder-device-mockup">
                  <div className="mockup-header-bar">
                    <span className="mockup-url">app://{project.id}.local</span>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-icon-glow">
                      <Monitor size={36} />
                    </div>
                    <span className="mockup-title">{project.title}</span>
                    <span className="mockup-subtitle">{project.tagline}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="modal-details-content">
            <div className="modal-headline-row">
              <div>
                <h3 className="modal-title">{project.title}</h3>
                <p className="modal-tagline">{project.tagline}</p>
              </div>

              {project.isPrivate ? (
                <span className="status-badge-private">
                  <Lock size={12} />
                  <span>{language === 'ru' ? 'Приват' : 'Private'}</span>
                </span>
              ) : (
                <span className="status-badge-open">
                  <CheckCircle2 size={12} />
                  <span>Open Source</span>
                </span>
              )}
            </div>

            <p className="modal-desc">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="modal-highlights">
                <h4>{language === 'ru' ? 'Ключевые особенности' : 'Key Highlights'}</h4>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-stack-section">
              <h4>{language === 'ru' ? 'Технологический стек' : 'Technologies & Stack'}</h4>
              <div className="modal-stack-tags">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="modal-actions-bar">
              {project.githubUrl && !project.isPrivate && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary"
                >
                  <GithubIcon size={15} />
                  <span>{language === 'ru' ? 'Открыть репозиторий' : 'View Repository'}</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn secondary"
                >
                  <span>{language === 'ru' ? 'Скачать релиз' : 'Download Release'}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
