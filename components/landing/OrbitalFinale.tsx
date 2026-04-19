'use client';
import * as React from 'react';
import { Container, Button } from './Atoms';
import { Icon } from './Icons';
import { useIsMobile, useIsTablet } from './useMedia';

// OrbitalFinale — final section + footer.
// Quiet starfield + two slow-drifting orbital curves, all SVG.
// No gradients, no glows, no neon. Everything blends into #0A0A0A.

function Starfield() {
  // Deterministic pseudo-random so stars don't flicker between renders.
  const stars = React.useMemo(() => {
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const out = [];
    // Tiny dots — most very dim, a few slightly brighter 'anchor' stars
    for (let i = 0; i < 180; i++) {
      const isAnchor = rand() < 0.04;
      out.push({
        x: rand() * 100,
        y: rand() * 100,
        r: isAnchor ? 0.9 + rand() * 0.6 : 0.35 + rand() * 0.4,
        o: isAnchor ? 0.5 + rand() * 0.25 : 0.08 + rand() * 0.18,
        k: isAnchor, // 'anchor' star gets a faint 4-point spike
      });
    }
    return out;
  }, []);

  // Parallax — extremely subtle, reacts to cursor
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 2;
      const dy = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: dx, y: dy });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        transform: `translate3d(${tilt.x * -4}px, ${tilt.y * -4}px, 0)`,
        transition: 'transform 1400ms cubic-bezier(0.2,0.6,0.2,1)',
        pointerEvents: 'none',
      }}
    >
      {stars.map((s, i) => (
        <g key={i} opacity={s.o}>
          <circle cx={s.x} cy={s.y} r={s.r * 0.15} fill="#fff"/>
          {s.k && (
            <g stroke="#fff" strokeWidth="0.04" opacity="0.55">
              <line x1={s.x - s.r * 0.6} y1={s.y} x2={s.x + s.r * 0.6} y2={s.y}/>
              <line x1={s.x} y1={s.y - s.r * 0.6} x2={s.x} y2={s.y + s.r * 0.6}/>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}

function Orbits() {
  // Two long ellipses crossing diagonally. Very low opacity.
  // Each drifts on its own very slow rotation — imperceptible but alive.
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <style>{`
          @keyframes dv-orbit-a { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes dv-orbit-b { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
          .dv-orbit-a { animation: dv-orbit-a 220s linear infinite; transform-origin: 800px 450px; }
          .dv-orbit-b { animation: dv-orbit-b 340s linear infinite; transform-origin: 800px 450px; }
        `}</style>
      </defs>
      {/* Orbit A — wide diagonal, tilted 20deg */}
      <g className="dv-orbit-a">
        <ellipse
          cx="800" cy="450" rx="1100" ry="300"
          transform="rotate(-18 800 450)"
          fill="none" stroke="#1E4BA0" strokeWidth="0.8" opacity="0.38"
        />
      </g>
      {/* Orbit B — narrower, opposite tilt, reverse direction */}
      <g className="dv-orbit-b">
        <ellipse
          cx="800" cy="450" rx="900" ry="220"
          transform="rotate(22 800 450)"
          fill="none" stroke="#1E4BA0" strokeWidth="0.6" opacity="0.28"
        />
      </g>
      {/* Orbit C — outermost faint trace */}
      <g className="dv-orbit-a" style={{ animationDuration: '480s' }}>
        <ellipse
          cx="800" cy="450" rx="1280" ry="360"
          transform="rotate(8 800 450)"
          fill="none" stroke="#1E4BA0" strokeWidth="0.5" opacity="0.18"
        />
      </g>
    </svg>
  );
}

function FinalCta({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();
  return (
    <section style={{
      position: 'relative', background: '#0A0A0A', color: '#fff',
      padding: isMobile ? '120px 24px 96px' : '200px 24px 160px', overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Orbits/>
      <Starfield/>
      <div style={{
        position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)', marginBottom: isMobile ? 24 : 32,
        }}>
          Pronto para seguir em frente?
        </div>
        <h2 style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: 'clamp(44px, 11vw, 128px)',
          lineHeight: 0.98, letterSpacing: '-0.032em',
          margin: '0 0 32px',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>Acordos são</span>
          <span style={{ display: 'block', color: '#1E4BA0' }}>mais seguros aqui.</span>
        </h2>
        <p style={{
          fontFamily: "'Inter'", fontSize: isMobile ? 16 : 18, lineHeight: 1.6,
          color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 40px',
        }}>
          Crie sua primeira transação em minutos. Dalivim retém, protege e libera. Você foca no que importa.
        </p>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <Button
            variant="primary"
            onClick={onCta}
            style={{ padding: isMobile ? '16px 28px' : '18px 36px', fontSize: isMobile ? 15 : 17 }}
          >
            Criar sua transação
            <Icon name="arrow-right" size={18}/>
          </Button>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontFamily: "'Inter'", fontSize: 13, color: 'rgba(255,255,255,0.45)',
          }}>
            <span>Sem taxas escondidas</span>
            <span style={{ width: 3, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.3)' }}></span>
            <span>Sem mensalidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const columns = [
    {
      label: 'Produto',
      items: [
        { name: 'Como funciona', href: '#how' },
        { name: 'Para empresas', href: '#' },
        { name: 'Para pessoas', href: '#' },
        { name: 'Desenvolvedores', href: '#' },
      ],
    },
    {
      label: 'Recursos',
      items: [
        { name: 'Documentação', href: '#' },
        { name: 'Segurança', href: '#' },
        { name: 'Suporte', href: '#' },
        { name: 'Status', href: '#' },
      ],
    },
    {
      label: 'Empresa',
      items: [
        { name: 'Sobre', href: '#' },
        { name: 'Carreiras', href: '#' },
        { name: 'Contato', href: 'mailto:contato@dalivim.com.br' },
        { name: 'Legal', href: '#' },
      ],
    },
  ];

  return (
    <footer style={{
      position: 'relative', background: '#0A0A0A', color: '#fff',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '64px 0 40px',
    }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? '1fr repeat(3, 1fr)' : '1.4fr repeat(3, 1fr) auto',
          gap: isMobile ? 32 : 64,
          alignItems: 'start',
          paddingBottom: isMobile ? 40 : 56,
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/assets/dalivim-logo.png" alt="Dalivim"
                style={{ width: 28, height: 28, objectFit: 'contain', filter: 'brightness(1.2)' }}/>
              <span style={{
                fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 19,
                letterSpacing: '0.02em',
              }}>DALIVIM</span>
            </div>
            <p style={{
              fontFamily: "'Inter'", fontSize: 13, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)', margin: 0, maxWidth: 260,
            }}>
              Infraestrutura de custódia para acordos modernos.<br/>
              Seguro. Transparente. Inevitável.
            </p>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.label}>
              <div style={{
                fontFamily: "'Inter'", fontSize: 11, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', marginBottom: 18,
              }}>{col.label}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(it => (
                  <li key={it.name}>
                    <a href={it.href} style={{
                      fontFamily: "'Inter'", fontSize: 14,
                      color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                    >{it.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locale + social */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            alignItems: isMobile || isTablet ? 'flex-start' : 'flex-end',
            gridColumn: isMobile ? '1 / -1' : 'auto',
            marginTop: isMobile ? 8 : 0,
          }}>
            <button style={{
              fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff', padding: '8px 12px', borderRadius: 9999,
              display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
            }}>
              PT <Icon name="chevron-down" size={12}/>
            </button>
            <div style={{ display: 'flex', gap: 14, color: 'rgba(255,255,255,0.55)' }}>
              <a href="#" aria-label="LinkedIn" style={{ color: 'inherit' }}><Icon name="linkedin" size={18}/></a>
              <a href="#" aria-label="X"        style={{ color: 'inherit' }}><Icon name="twitter" size={18}/></a>
              <a href="#" aria-label="GitHub"   style={{ color: 'inherit' }}><Icon name="github" size={18}/></a>
            </div>
          </div>
        </div>

        {/* Rule + legal */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, flexWrap: 'wrap',
          fontFamily: "'Inter'", fontSize: 12, color: 'rgba(255,255,255,0.4)',
        }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Dalivim. Todos os direitos reservados.</span>
            <span>63.278.101/0001-49</span>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { FinalCta, Footer, Starfield, Orbits };
