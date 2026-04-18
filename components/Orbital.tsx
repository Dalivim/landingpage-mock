'use client';
import { useMemo, useState, useEffect } from 'react';

export function Starfield() {
  const stars = useMemo(() => {
    let seed = 7;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    return Array.from({ length: 180 }, () => {
      const isAnchor = rand() < 0.04;
      return { x: rand() * 100, y: rand() * 100, r: isAnchor ? 0.9 + rand() * 0.6 : 0.35 + rand() * 0.4, o: isAnchor ? 0.5 + rand() * 0.25 : 0.08 + rand() * 0.18, k: isAnchor };
    });
  }, []);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) => setTilt({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: `translate3d(${tilt.x * -4}px,${tilt.y * -4}px,0)`, transition: 'transform 1400ms cubic-bezier(0.2,0.6,0.2,1)', pointerEvents: 'none' }}>
      {stars.map((s, i) => (
        <g key={i} opacity={s.o}>
          <circle cx={s.x} cy={s.y} r={s.r * 0.15} fill="#fff" />
          {s.k && <g stroke="#fff" strokeWidth="0.04" opacity="0.55"><line x1={s.x - s.r * 0.6} y1={s.y} x2={s.x + s.r * 0.6} y2={s.y} /><line x1={s.x} y1={s.y - s.r * 0.6} x2={s.x} y2={s.y + s.r * 0.6} /></g>}
        </g>
      ))}
    </svg>
  );
}

export function Orbits() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <g className="dv-orbit-a"><ellipse cx="800" cy="450" rx="1100" ry="300" transform="rotate(-18 800 450)" fill="none" stroke="#1E4BA0" strokeWidth="0.8" opacity="0.38" /></g>
      <g className="dv-orbit-b"><ellipse cx="800" cy="450" rx="900" ry="220" transform="rotate(22 800 450)" fill="none" stroke="#1E4BA0" strokeWidth="0.6" opacity="0.28" /></g>
      <g className="dv-orbit-c"><ellipse cx="800" cy="450" rx="1280" ry="360" transform="rotate(8 800 450)" fill="none" stroke="#1E4BA0" strokeWidth="0.5" opacity="0.18" /></g>
    </svg>
  );
}
