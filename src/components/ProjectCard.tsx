import { useState, useRef } from 'react';
import type { ProjectItem } from '../types';
import type { Language } from '../data/portfolioData';
import { Lock, CheckCircle2, ArrowUpRight, Monitor, Layers } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectCardProps {
  project: ProjectItem;
  language: Language;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard = ({ project, language, onOpenDetails }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const maxTilt = 6;
    const rx = -((y - cy) / cy) * maxTilt;
    const ry = ((x - cx) / cx) * maxTilt;

    setTilt({
      rx,
      ry,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  const isWidget = project.id === 'lucidtune';

  return (
    <div
      ref={cardRef}
      className="bento-featured-card scroll-reveal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDetails(project)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: tilt.opacity === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease' : 'none',
      }}
    >
      {/* 3D Specular Glare Layer */}
      <div
        className="card-specular-glare"
        style={{
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,${tilt.opacity}), transparent 60%)`,
        }}
      />

      {/* Top Media / Mockup Preview Stage */}
      <div className={`card-mockup-wrapper ${isWidget ? 'widget-mockup-wrapper' : ''}`}>
        <div className="mockup-window-header">
          <div className="mockup-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="mockup-header-title">{project.id}.app</span>
        </div>

        <div className={`mockup-screen-container ${isWidget ? 'widget-screen-container' : ''}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`mockup-real-img ${isWidget ? 'mockup-widget-img' : ''}`}
              loading="lazy"
            />
          ) : (
            <div className="mockup-abstract-preview">
              <div className="abstract-glow-orb" />
              <Monitor size={32} className="abstract-icon" />
              <span className="abstract-title">{project.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Info Content */}
      <div className="card-info-pane">
        <div className="card-status-row">
          <span className="card-type-tag">
            <Layers size={12} />
            <span>{project.status || 'Project'}</span>
          </span>

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

        <h3 className="card-heading">{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>
        <p className="card-desc-preview">{project.description}</p>

        {/* Tech Stack Pills */}
        <div className="card-tech-chips">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span key={i} className="tech-chip">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-chip-more">+{project.techStack.length - 4}</span>
          )}
        </div>

        {/* Action Row */}
        <div className="card-bottom-actions" onClick={(e) => e.stopPropagation()}>
          <button className="details-trigger-btn" onClick={() => onOpenDetails(project)}>
            <span>{language === 'ru' ? 'Подробнее' : 'View Details'}</span>
            <ArrowUpRight size={14} />
          </button>

          {project.githubUrl && !project.isPrivate && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-btn"
              title="GitHub Repository"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
