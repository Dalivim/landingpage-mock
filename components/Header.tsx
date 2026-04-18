'use client';
import { useState } from 'react';
import { DalivimMark } from './DalivimMark';
import { Button } from './Button';
import { X, Menu } from 'lucide-react';

export function Header({ onCta }: { onCta: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#how', label: 'Como funciona' },
    { href: '#uses', label: 'Usos' },
    { href: '#faq', label: 'Perguntas' },
  ];

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E4E4E7',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <DalivimMark size={30} color="#0A0A0A" />
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 20, letterSpacing: '-0.012em' }}>Dalivim</span>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 15, fontFamily: "'Inter'" }} className="desktop-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{ color: '#0A0A0A', textDecoration: 'none', opacity: 0.75, transition: 'opacity 180ms' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
              >{l.label}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <Button variant="primary" onClick={onCta} style={{ fontSize: 14, padding: '12px 24px' }}>Criar transação</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#0A0A0A', display: 'none' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: '#fff',
          display: 'flex', flexDirection: 'column',
          padding: '96px 24px 40px',
          gap: 0,
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#0A0A0A', textDecoration: 'none',
                fontFamily: "'Space Grotesk'", fontWeight: 500,
                fontSize: 28, letterSpacing: '-0.014em',
                padding: '20px 0', borderBottom: '1px solid #E4E4E7',
                display: 'block',
              }}
            >{l.label}</a>
          ))}
          <div style={{ marginTop: 40 }}>
            <Button variant="primary" onClick={() => { setMenuOpen(false); onCta(); }} style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px 24px' }}>
              Criar transação
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
