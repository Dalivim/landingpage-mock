'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ToastContext = createContext({ show: () => {} });

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const show = useCallback((message = 'Em breve.') => {
    setToast({ id: Date.now(), message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toast && (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed', bottom: 32, left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: '#0A0A0A', color: '#fff',
            padding: '14px 20px',
            borderRadius: 9999,
            fontFamily: "var(--font-body), sans-serif", fontSize: 14, fontWeight: 500,
            boxShadow: '0 12px 40px -8px rgba(10,10,10,0.4)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            animation: 'dv-toast-in 280ms cubic-bezier(0.2,0.6,0.2,1)',
            border: '1px solid #1F1F23',
          }}
        >
          <span style={{
            width: 7, height: 7, borderRadius: 9999, background: '#7FD1A8',
            boxShadow: '0 0 0 3px rgba(127,209,168,0.18)',
          }}/>
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

/**
 * Wrap any clickable that should fire a toast instead of navigating.
 * Renders an <a> by default — pass `as="button"` for buttons.
 */
export function ComingSoonAction({
  as = 'a', message = 'Em breve. Estamos finalizando o cadastro.', children,
  onClick, href = '#', style, ...rest
}) {
  const { show } = useToast();
  const handle = (e) => {
    e.preventDefault();
    show(message);
    onClick && onClick(e);
  };
  if (as === 'button') {
    return <button onClick={handle} style={style} {...rest}>{children}</button>;
  }
  return <a href={href} onClick={handle} style={style} {...rest}>{children}</a>;
}
