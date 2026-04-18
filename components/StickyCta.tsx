'use client';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function StickyCta({ onCta }: { onCta: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(pct > 0.25 && pct < 0.92);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%',
      transform: `translateX(-50%) translateY(${visible ? 0 : 24}px)`,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 280ms cubic-bezier(0.2,0.6,0.2,1), transform 280ms cubic-bezier(0.2,0.6,0.2,1)',
      zIndex: 40,
      background: '#0A0A0A',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 9999,
      padding: '8px 8px 8px 20px',
      display: 'flex', alignItems: 'center', gap: 14,
      boxShadow: '0 20px 48px -12px rgba(0,0,0,0.5)',
      maxWidth: 'calc(100vw - 32px)',
    }}>
      <span style={{ fontFamily: "'Inter'", fontSize: 13, color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: 9, whiteSpace: 'nowrap' }}>
        <span style={{ width: 7, height: 7, borderRadius: 9999, background: '#1E8A5A', boxShadow: '0 0 0 4px rgba(30,138,90,0.2)', display: 'inline-block', flexShrink: 0 }} />
        <span className="sticky-label">Comece grátis em menos de 1 minuto</span>
      </span>
      <Button variant="primary" onClick={onCta} style={{ padding: '10px 18px', fontSize: 13, whiteSpace: 'nowrap' }}>
        Criar transação <ArrowRight size={13} />
      </Button>
      <style>{`@media(max-width:480px){ .sticky-label { display: none; } }`}</style>
    </div>
  );
}
