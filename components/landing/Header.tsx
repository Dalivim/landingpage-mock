'use client';
import * as React from 'react';
import { Button } from './Atoms';
import { useIsMobile } from './useMedia';

// Header — modern SaaS navbar.
// Desktop: brand / center pill nav / right CTA
// Mobile:  brand / hamburger → full-width dropdown

function Header({ onCta }: { onCta?: () => void }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const headerRef = React.useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when resizing back up
  React.useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  // Hide header when the user scrolls past the hero section bottom.
  React.useEffect(() => {
    const update = () => {
      const hero = document.getElementById('hero');
      const headerEl = headerRef.current;
      if (!hero || !headerEl) return;
      const heroRect = hero.getBoundingClientRect();
      const headerHeight = headerEl.getBoundingClientRect().height;
      // When the hero's bottom is at or above the header bottom (headerHeight), hide the header.
      const shouldHide = heroRect.bottom <= headerHeight + 0;
      setHidden(shouldHide);
      if (shouldHide) setMenuOpen(false);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const links = [
    { label: 'Como funciona', href: '#how' },
    { label: 'Casos de uso',  href: '#uses' },
    { label: 'Preços',        href: '#pricing' },
    { label: 'FAQ',           href: '#faq' },
  ];

  return (
    <header ref={headerRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'center',
      padding: scrolled ? '12px 12px' : '16px 12px',
      transition: 'padding 240ms cubic-bezier(0.2,0.6,0.2,1), opacity 260ms ease',
      pointerEvents: 'none',
      opacity: hidden ? 0 : 1,
    }}>
      <div style={{
        pointerEvents: hidden ? 'none' : 'auto',
        width: '100%', maxWidth: 1280,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr auto' : '1fr auto 1fr',
        alignItems: 'center', gap: isMobile ? 12 : 24,
        padding: isMobile ? '8px 8px 8px 16px' : '10px 14px 10px 20px',
        background: '#000',
        // subtle frosted border suited for dark background
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: isMobile ? 20 : 9999,
        transition: 'background 240ms, border-color 240ms',
      }}>
        {/* Brand */}
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: '#fff',
        }}>
          <img src="/assets/dalivim-mark.svg" alt="Dalivim"
            style={{ width: 24, height: 24, display: 'block', filter: 'brightness(0) invert(1)' }}/>
          <span style={{
            fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 17,
            letterSpacing: '-0.01em', color: '#fff',
          }}>Dalivim</span>
        </a>

        {/* Center pill capsule — desktop only */}
        {!isMobile && (
          <nav style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '6px',
            background: 'transparent',
            borderRadius: 9999,
          }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                padding: '8px 16px',
                fontFamily: "'Inter'", fontWeight: 500, fontSize: 14,
                color: '#E5E7EB', textDecoration: 'none',
                borderRadius: 9999, whiteSpace: 'nowrap',
                transition: 'background 180ms, color 180ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E5E7EB'; }}
              >{l.label}</a>
            ))}
          </nav>
        )}

        {/* Right: CTA (desktop) or Hamburger (mobile) */}
        {!isMobile ? (
          <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="#" style={{
              padding: '8px 14px',
              fontFamily: "'Inter'", fontWeight: 500, fontSize: 14,
              color: '#E5E7EB', textDecoration: 'none', borderRadius: 9999,
            }}>Entrar</a>
            <Button variant="primary" onClick={onCta} style={{ padding: '10px 18px', fontSize: 14 }}>
              Criar transação
            </Button>
          </div>
        ) : (
          <button
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={{
              width: 40, height: 40, borderRadius: 9999,
              background: menuOpen ? '#111' : 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 180ms',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="17" x2="21" y2="17"/>
                </>
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          position: 'fixed', top: 72, left: 12, right: 12,
          background: '#000',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 20,
          padding: 16,
          boxShadow: '0 20px 48px -12px rgba(0,0,0,0.6)',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 220ms cubic-bezier(0.2,0.6,0.2,1), transform 220ms cubic-bezier(0.2,0.6,0.2,1)',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '14px 16px', borderRadius: 12,
                fontFamily: "'Inter'", fontWeight: 500, fontSize: 16,
                color: '#E5E7EB', textDecoration: 'none',
              }}
            >{l.label}</a>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 6, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="#" onClick={() => setMenuOpen(false)} style={{
              padding: '12px 16px', borderRadius: 12,
              fontFamily: "'Inter'", fontWeight: 500, fontSize: 15,
              color: '#E5E7EB', textDecoration: 'none',
            }}>Entrar</a>
            <Button variant="primary" onClick={() => { setMenuOpen(false); onCta?.(); }}
              style={{ width: '100%', justifyContent: 'center' }}>
              Criar transação
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
