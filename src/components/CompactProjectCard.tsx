import type { ProjectItem } from '../types';
import type { Language } from '../data/portfolioData';
import { Lock, FolderGit2 } from 'lucide-react';

interface CompactProjectCardProps {
  project: ProjectItem;
  language: Language;
}

export const CompactProjectCard = ({ project, language }: CompactProjectCardProps) => {
  return (
    <div className="bento-archive-card static-archive-card scroll-reveal">
      <div className="archive-card-top">
        <div className="archive-icon-pill">
          <FolderGit2 size={16} />
        </div>
        <div className="archive-badges">
          {project.isPrivate ? (
            <span className="status-badge-private mini">
              <Lock size={11} />
              <span>{language === 'ru' ? 'Приват' : 'Private'}</span>
            </span>
          ) : (
            <span className="status-badge-open mini">
              <span>Open Source</span>
            </span>
          )}
        </div>
      </div>

      <h4 className="archive-card-title">{project.title}</h4>
      <p className="archive-card-tagline">{project.tagline}</p>

      <div className="archive-tech-chips">
        {project.techStack.slice(0, 3).map((tech, i) => (
          <span key={i} className="archive-chip">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
