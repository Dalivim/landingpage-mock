'use client';

import { useState, useEffect } from 'react';
import { Button } from './Atoms';
import { ComingSoonAction } from './Toast';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: 'Como funciona', href: '#how' },
    { label: 'Casos de uso',  href: '#uses' },
    { label: 'FAQ',           href: '#faq' },
  ];
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'center',
      padding: scrolled ? '14px 20px' : '18px 20px',
      transition: 'padding 240ms cubic-bezier(0.2,0.6,0.2,1)',
      pointerEvents: 'none',
    }}>
      <div style={{
        pointerEvents: 'auto',
        width: '100%', maxWidth: 1180,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center', gap: 20,
        padding: '8px 12px 8px 18px',
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
        backdropFilter: 'saturate(180%) blur(14px)',
        WebkitBackdropFilter: 'saturate(180%) blur(14px)',
        border: '1px solid #E4E4E7',
        borderRadius: 9999,
      }}>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: '#0A0A0A',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalivim-mark.svg" alt="" style={{ width: 24, height: 24 }}/>
          <span style={{
            fontFamily: "var(--font-display), sans-serif", fontWeight: 500, fontSize: 17,
            letterSpacing: '-0.01em',
          }}>Dalivim</span>
        </a>
        <nav style={{
          display: 'inline-flex', alignItems: 'center', gap: 2,
          padding: 4, background: '#F4F4F5', border: '1px solid #E4E4E7',
          borderRadius: 9999,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              padding: '7px 14px',
              fontFamily: "var(--font-body), sans-serif", fontWeight: 500, fontSize: 13,
              color: '#52525B', textDecoration: 'none', borderRadius: 9999,
              transition: 'background 180ms, color 180ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0A0A0A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#52525B'; }}
            >{l.label}</a>
          ))}
        </nav>
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 6 }}>
          <ComingSoonAction message="Em breve. O acesso ainda não está aberto." style={{
            padding: '6px 12px', fontFamily: "var(--font-body), sans-serif",
            fontWeight: 500, fontSize: 13, color: '#52525B',
            textDecoration: 'none', borderRadius: 9999,
          }}>Entrar</ComingSoonAction>
          <ComingSoonAction message="Em breve. Estamos finalizando o cadastro.">
            <Button variant="primary" style={{ padding: '9px 16px', fontSize: 13 }}>
              Criar transação
            </Button>
          </ComingSoonAction>
        </div>
      </div>
    </header>
  );
}
