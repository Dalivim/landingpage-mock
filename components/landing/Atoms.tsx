'use client';
import * as React from 'react';

// Shared atoms: Button, Container
type ButtonVariant = 'primary' | 'dark' | 'secondary' | 'outlined' | 'ghostDark';

type ButtonProps = {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
};

function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  style = {},
}: ButtonProps) {
  const base: React.CSSProperties = {
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
  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary:   { background: '#1E4BA0', color: '#fff' },
    dark:      { background: '#0A0A0A', color: '#fff' },
    secondary: { background: '#F4F4F5', color: '#0A0A0A' },
    outlined:  { background: 'transparent', color: '#0A0A0A', border: '1.5px solid #E4E4E7', padding: '12.5px 26.5px' },
    ghostDark: { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.15)', padding: '12.5px 26.5px' },
  };
  return (
    <button
      className={className}
      style={{ ...base, ...variants[variant], ...style }}
      onClick={onClick}
      onMouseEnter={e => {
        if (variant === 'primary') e.currentTarget.style.background = '#153A82';
        else if (variant === 'dark') e.currentTarget.style.opacity = '0.88';
        else if (variant === 'secondary') e.currentTarget.style.background = '#ECECEF';
        else if (variant === 'outlined') e.currentTarget.style.background = '#F4F4F5';
        else if (variant === 'ghostDark') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = variants[variant].background as string;
        e.currentTarget.style.opacity = '1';
      }}
    >{children}</button>
  );
}

type ContainerProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

function Container({ children, style = {}, className = '' }: ContainerProps) {
  return (
    <div
      className={className}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', ...style }}
    >
      {children}
    </div>
  );
}

export { Button, Container };
