'use client';
import { CSSProperties, ReactNode, MouseEvent } from 'react';

type Variant = 'primary' | 'dark' | 'secondary' | 'outlined' | 'ghostDark';

const base: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 15,
  borderRadius: 9999,
  padding: '14px 28px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 220ms cubic-bezier(0.2, 0.6, 0.2, 1)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  whiteSpace: 'nowrap',
};

const variants: Record<Variant, CSSProperties> = {
  primary:   { background: '#1E4BA0', color: '#fff' },
  dark:      { background: '#0A0A0A', color: '#fff' },
  secondary: { background: '#F4F4F5', color: '#0A0A0A' },
  outlined:  { background: 'transparent', color: '#0A0A0A', border: '1.5px solid #E4E4E7', padding: '12.5px 26.5px' },
  ghostDark: { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.15)', padding: '12.5px 26.5px' },
};

const hoverMap: Record<Variant, Partial<CSSProperties>> = {
  primary:   { background: '#153A82' },
  dark:      { opacity: 0.88 } as any,
  secondary: { background: '#ECECEF' },
  outlined:  { background: '#F4F4F5' },
  ghostDark: { background: 'rgba(255,255,255,0.12)' },
};

export function Button({
  variant = 'primary',
  children,
  onClick,
  style = {},
}: {
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const initialBackground =
    style.background ?? variants[variant].background ?? 'transparent';

  const handleEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const h = hoverMap[variant];
    Object.assign(e.currentTarget.style, h);
  };

  const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = initialBackground as string;
    e.currentTarget.style.opacity = '1';
  };

  return (
    <button
      style={{ ...base, ...variants[variant], ...style }}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}