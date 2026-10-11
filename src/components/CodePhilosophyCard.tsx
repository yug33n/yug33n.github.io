import { Check, ShieldCheck } from 'lucide-react';

export const CodePhilosophyCard = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
          <ShieldCheck size={16} />
          <span>Engineering Manifesto</span>
        </div>
        <span style={{ fontSize: '0.7rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>TS Strict</span>
      </div>

      <div style={{ background: '#050608', borderRadius: 'var(--radius-sm)', padding: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.6, border: '1px solid var(--border-subtle)' }}>
        <p><span style={{ color: '#c084fc' }}>const</span> <span style={{ color: 'var(--accent-secondary)' }}>engineeringStandard</span> = &#123;</p>
        <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#94a3b8' }}>typeSafety:</span> <span style={{ color: '#34d399' }}>true</span>,</p>
        <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#94a3b8' }}>zeroBloat:</span> <span style={{ color: '#34d399' }}>true</span>,</p>
        <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#94a3b8' }}>latencyTarget:</span> <span style={{ color: '#fbbf24' }}>'&lt;50ms'</span>,</p>
        <p style={{ paddingLeft: '1rem' }}><span style={{ color: '#94a3b8' }}>deployReady:</span> <span style={{ color: '#38bdf8' }}>'Docker + Nginx'</span>,</p>
        <p>&#125;;</p>
      </div>

      <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {[
          'Компонентная изоляция и чистота стейта',
          'Асинхронные пайплайны без блокировки UI',
          'Готовность к масштабированию на VPS',
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <Check size={13} color="var(--accent-primary)" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
