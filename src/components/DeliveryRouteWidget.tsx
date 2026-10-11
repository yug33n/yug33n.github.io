import { Truck, CheckCircle2 } from 'lucide-react';

export const DeliveryRouteWidget = () => {
  return (
    <div style={{ marginTop: '0.75rem', background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
          <Truck size={14} />
          <span>REAL-TIME DISPATCH ENGINE</span>
        </div>
        <span style={{ fontSize: '0.72rem', color: '#34d399', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <CheckCircle2 size={12} /> SLA 99.8%
        </span>
      </div>

      {/* Visual Route Nodes */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', margin: '0.75rem 0' }}>
        <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', background: 'rgba(255, 255, 255, 0.08)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '65%', height: '2px', background: 'var(--accent-primary)', zIndex: 1, boxShadow: '0 0 8px var(--accent-primary)' }} />

        {['Центр', 'Хаб #3', 'Курьер 07', 'Клиент'].map((node, i) => (
          <div key={node} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div
              style={{
                width: i === 2 ? '14px' : '10px',
                height: i === 2 ? '14px' : '10px',
                borderRadius: '50%',
                background: i <= 2 ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                boxShadow: i === 2 ? '0 0 10px var(--accent-primary)' : 'none',
              }}
            />
            <span style={{ fontSize: '0.68rem', color: i <= 2 ? 'var(--text-main)' : 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {node}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.6rem', textAlign: 'center' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.4rem', borderRadius: '4px' }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>1.2m</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Маршрутизация</div>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.4rem', borderRadius: '4px' }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>0%</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Ошибок доставок</div>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.4rem', borderRadius: '4px' }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>60 FPS</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>UI Реактивность</div>
        </div>
      </div>
    </div>
  );
};
