'use client';

import { useState, useEffect, useRef } from 'react';

export function Button({ variant = 'primary', children, onClick, className = '', style = {}, type = 'button' }) {
  const base = {
    fontFamily: "var(--font-body), sans-serif",
    fontWeight: 500,
    fontSize: 15,
    borderRadius: 9999,
    padding: '14px 28px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 220ms cubic-bezier(0.2,0.6,0.2,1), color 220ms cubic-bezier(0.2,0.6,0.2,1), border-color 220ms',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
    lineHeight: 1,
  };
  const variants = {
    primary:    { background: '#1E4BA0', color: '#fff' },
    dark:       { background: '#0A0A0A', color: '#fff' },
    secondary:  { background: '#F4F4F5', color: '#0A0A0A' },
    outlined:   { background: 'transparent', color: '#0A0A0A', border: '1.5px solid #E4E4E7', padding: '12.5px 26.5px' },
    ghost:      { background: 'transparent', color: '#0A0A0A', padding: '12.5px 20px' },
    ghostDark:  { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.15)', padding: '12.5px 26.5px' },
  };
  return (
    <button
      type={type}
      className={className}
      style={{ ...base, ...variants[variant], ...style }}
      onClick={onClick}
      onMouseEnter={e => {
        if (variant === 'primary') e.currentTarget.style.background = '#153A82';
        else if (variant === 'dark') e.currentTarget.style.background = '#1f1f24';
        else if (variant === 'secondary') e.currentTarget.style.background = '#ECECEF';
        else if (variant === 'outlined') e.currentTarget.style.background = '#F4F4F5';
        else if (variant === 'ghost') e.currentTarget.style.background = '#F4F4F5';
        else if (variant === 'ghostDark') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = variants[variant].background;
      }}
    >{children}</button>
  );
}

export function Container({ children, style = {}, className = '', maxWidth = 1200 }) {
  return (
    <div className={`dv-container ${className}`} style={{ maxWidth, margin: '0 auto', padding: '0 24px', ...style }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, color = '#71717A', style = {} }) {
  return (
    <span style={{
      fontFamily: "var(--font-body), sans-serif",
      fontSize: 12, fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color,
      ...style,
    }}>{children}</span>
  );
}

export function formatBRL(n) {
  const v = Math.max(0, Math.round(n || 0));
  return 'R$ ' + v.toLocaleString('pt-BR');
}

export function useAnimatedNumber(target, duration = 600) {
  const [value, setValue] = useState(target);
  const ref = useRef({ start: target, target, startedAt: 0, raf: 0 });
  useEffect(() => {
    ref.current.start = value;
    ref.current.target = target;
    ref.current.startedAt = performance.now();
    cancelAnimationFrame(ref.current.raf);
    const tick = (now) => {
      const { start, target, startedAt } = ref.current;
      const t = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(start + (target - start) * eased);
      if (t < 1) ref.current.raf = requestAnimationFrame(tick);
    };
    ref.current.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current.raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);
  return value;
}
