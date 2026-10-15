import { FolderGit2 } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import type { ProjectItem } from '../types';

interface CompactProjectCardProps {
  project: ProjectItem;
}

export const CompactProjectCard = ({ project }: CompactProjectCardProps) => {
  return (
    <article className="glass-card archive-card">
      <div className="archive-card-header">
        <div className="archive-card-title-wrap">
          <FolderGit2 size={16} color="var(--accent-primary)" />
          <h4 className="archive-card-title">{project.title}</h4>
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="archive-github-btn"
            title="GitHub"
            aria-label={`${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
          </a>
        )}
      </div>

      <p className="archive-card-summary">{project.tagline}</p>

      <div className="tags-row archive-tags">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag archive-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
