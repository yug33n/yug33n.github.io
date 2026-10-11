import { useEffect, useState } from 'react';

export const SpotlightOverlay = () => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = coords
    ? ({
        '--mouse-x': `${coords.x}px`,
        '--mouse-y': `${coords.y}px`,
        opacity: 1,
      } as React.CSSProperties)
    : ({ opacity: 0 } as React.CSSProperties);

  return (
    <>
      <div className="background-glow" />
      <div className="mouse-spotlight" style={style} />
    </>
  );
};
