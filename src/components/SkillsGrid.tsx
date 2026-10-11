import { Layout, Cpu, Server, Terminal, Code2 } from 'lucide-react';
import type { SkillCategory } from '../types';

interface SkillsGridProps {
  categories: SkillCategory[];
}

export const SkillsGrid = ({ categories }: SkillsGridProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={16} color="var(--accent-cyan)" />;
      case 'Cpu':
        return <Cpu size={16} color="var(--accent-indigo)" />;
      case 'Server':
        return <Server size={16} color="#a855f7" />;
      case 'Terminal':
        return <Terminal size={16} color="#34d399" />;
      default:
        return <Code2 size={16} color="var(--accent-cyan)" />;
    }
  };

  return (
    <div className="skills-grid">
      {categories.map((cat) => (
        <div key={cat.category} className="skill-category-card">
          <div className="skill-cat-title">
            {getIcon(cat.iconName)}
            <span>{cat.category}</span>
          </div>
          <div className="skill-items">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
