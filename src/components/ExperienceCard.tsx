import type { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="glass-card experience-item">
      <div className="exp-date">{experience.period}</div>
      <div className="exp-body">
        <h3 className="exp-role-title">
          {experience.role} <span style={{ color: 'var(--text-dim)' }}>•</span>{' '}
          <span className="exp-company">{experience.company}</span>
        </h3>
        <p className="exp-description">{experience.description}</p>
        <div className="tags-row">
          {experience.skills.map((skill) => (
            <span key={skill} className="tech-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
