import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Activity } from 'lucide-react';

interface Packet {
  id: number;
  time: string;
  protocol: string;
  src: string;
  dest: string;
  length: number;
  info: string;
}

const SAMPLE_PACKETS = [
  { protocol: 'TCP SYN', info: 'Seq=0 Win=64240 Len=0 MSS=1460' },
  { protocol: 'TLS 1.3', info: 'Client Hello (Cipher: TLS_AES_128_GCM_SHA256)' },
  { protocol: 'HTTP/2', info: 'HEADERS 200 OK, :status: 200, content-type: application/json' },
  { protocol: 'WSS', info: 'Binary Stream Frame (opcode=2, length=128B)' },
  { protocol: 'DNS', info: 'Standard query 0x1a2b A api.netmorph.internal' },
  { protocol: 'JSON/REST', info: 'POST /v1/telemetry {"node": "alpha", "latency_ms": 1.4}' },
];

export const PacketStreamSimulator = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [packets, setPackets] = useState<Packet[]>([
    { id: 1, time: '00:00.012', protocol: 'TCP SYN', src: '192.168.1.104', dest: '10.0.0.1:443', length: 64, info: 'SYN [Seq=0 Win=65535]' },
    { id: 2, time: '00:00.018', protocol: 'TLS 1.3', src: '192.168.1.104', dest: '10.0.0.1:443', length: 512, info: 'Client Hello TLS_AES_256' },
    { id: 3, time: '00:00.025', protocol: 'HTTP/2', src: '10.0.0.1:443', dest: '192.168.1.104', length: 1240, info: 'HEADERS frame :status 200' },
  ]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPackets((prev) => {
        const sample = SAMPLE_PACKETS[Math.floor(Math.random() * SAMPLE_PACKETS.length)];
        const nextId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
        const nowSec = (nextId * 0.014).toFixed(3);
        const newPacket: Packet = {
          id: nextId,
          time: `00:00.${nowSec.slice(2)}`,
          protocol: sample.protocol,
          src: '192.168.1.104',
          dest: '10.0.0.1:443',
          length: Math.floor(Math.random() * 800) + 64,
          info: sample.info,
        };
        // keep last 5 packets
        return [...prev.slice(-4), newPacket];
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div style={{ marginTop: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <Activity size={13} color="var(--accent-secondary)" />
          <span>NETMORPH INSPECTOR STREAM</span>
        </div>
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="cli-btn"
            style={{ padding: '0.15rem 0.45rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            title={isRunning ? 'Приостановить поток' : 'Возобновить поток'}
          >
            {isRunning ? <Pause size={11} /> : <Play size={11} />}
            <span>{isRunning ? 'Pause' : 'Stream'}</span>
          </button>
          <button
            onClick={() => setPackets([])}
            className="cli-btn"
            style={{ padding: '0.15rem 0.45rem' }}
            title="Очистить буфер"
          >
            <RotateCcw size={11} />
          </button>
        </div>
      </div>

      <div className="packet-visualizer">
        {packets.length === 0 ? (
          <div style={{ color: 'var(--text-dim)', textAlign: 'center', padding: '1rem 0' }}>
            Буфер пуст. Нажмите Stream для запуска захвата пакетов.
          </div>
        ) : (
          packets.map((pkt) => (
            <div key={pkt.id} className="packet-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>#{pkt.id}</span>
                <span className="packet-proto">{pkt.protocol}</span>
                <span style={{ color: 'var(--text-dim)' }}>{pkt.length}B</span>
              </div>
              <div className="packet-payload" title={pkt.info}>
                {pkt.info}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
