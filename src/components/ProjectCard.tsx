import { FolderGit2 } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="glass-card project-card">
      <div className="project-header">
        <div>
          <div className="project-title-wrap">
            <FolderGit2 size={18} color="var(--accent-indigo)" />
            <h3 className="project-title">{project.title}</h3>
            {project.status && (
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {project.status}
              </span>
            )}
          </div>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              title="Открыть код на GitHub"
            >
              <GithubIcon size={14} />
              <span>Репозиторий</span>
            </a>
          )}
        </div>
      </div>

      <p className="project-desc">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="project-highlight-item">
              <span className="project-highlight-bullet">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="tags-row">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
