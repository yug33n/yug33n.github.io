import { Layout, Server, Terminal, Code2, Gamepad2, Smartphone } from 'lucide-react';
import type { SkillCategory } from '../types';

interface SkillsGridProps {
  categories: SkillCategory[];
}

export const SkillsGrid = ({ categories }: SkillsGridProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={18} color="var(--accent-primary)" />;
      case 'Gamepad2':
        return <Gamepad2 size={18} color="#a855f7" />;
      case 'Smartphone':
        return <Smartphone size={18} color="#38bdf8" />;
      case 'Layout':
        return <Layout size={18} color="var(--accent-secondary)" />;
      case 'Server':
        return <Server size={18} color="#f59e0b" />;
      case 'Terminal':
        return <Terminal size={18} color="#10b981" />;
      default:
        return <Code2 size={18} color="var(--accent-primary)" />;
    }
  };

  return (
    <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
      {categories.map((cat) => (
        <div key={cat.category} className="glass-card skill-category-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="skill-cat-title" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600 }}>
            {getIcon(cat.iconName)}
            <span style={{ color: 'var(--text-main)' }}>{cat.category}</span>
          </div>
          <div className="skill-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-badge" style={{ padding: '0.3rem 0.65rem', fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
