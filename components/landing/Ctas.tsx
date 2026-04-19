'use client';
import * as React from 'react';
import { Container, Button } from './Atoms';
import { Icon } from './Icons';
import { Starfield, Orbits } from './OrbitalFinale';
import { useIsMobile } from './useMedia';

// Conversion CTAs — three distinct forms placed along the scroll.
// CtaInlineBand: quiet nudge after a content section
// CtaBarDark: punchy mid-page dark band with trust microcopy
// StickyCta: floating pill that fades in after 40% scroll

function CtaInlineBand({ onCta, eyebrow, title, sub, cta }: {
  onCta?: () => void;
  eyebrow?: string;
  title?: React.ReactNode;
  sub?: string;
  cta?: string;
}) {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 0' : '72px 0', background: '#fff', borderBottom: '1px solid #E4E4E7' }}>
      <Container>
        <div style={{
          display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between',
          gap: isMobile ? 24 : 40, flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div style={{ maxWidth: 680 }}>
            {eyebrow && (
              <div style={{
                fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#71717A', marginBottom: 10,
              }}>{eyebrow}</div>
            )}
            <h3 style={{
              fontFamily: "'Space Grotesk'", fontWeight: 500,
              fontSize: isMobile ? 24 : 32, letterSpacing: '-0.014em', lineHeight: 1.15,
              margin: '0 0 8px', color: '#0A0A0A',
            }}>{title}</h3>
            {sub && (
              <p style={{ fontFamily: "'Inter'", fontSize: 15, color: '#71717A', margin: 0, lineHeight: 1.55 }}>
                {sub}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" onClick={onCta} style={{ width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
              {cta || 'Criar transação'}
              <Icon name="arrow-right" size={16}/>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CtaBarDark({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ position: 'relative', padding: isMobile ? '72px 0' : '120px 0', background: '#0A0A0A', color: '#fff', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Shared decorators from OrbitalFinale — keeps visual continuity across dark surfaces */}
      {typeof Orbits === 'function' && <Orbits/>}
      {typeof Starfield === 'function' && <Starfield/>}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Container>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
            gap: isMobile ? 40 : 64,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)', marginBottom: 18,
              }}>Pronto em 60 segundos</div>
              <h2 style={{
                fontFamily: "'Space Grotesk'", fontWeight: 500,
                fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.02,
                letterSpacing: '-0.026em', margin: '0 0 24px',
                color: '#ffffff',
              }}>
                <span style={{ display: 'block', color: '#ffffff' }}>Proteja seu próximo pagamento.</span>
                <span style={{ display: 'block', color: '#1E4BA0' }}>Antes dele virar problema.</span>
              </h2>
              <div style={{
                display: 'flex', gap: isMobile ? 16 : 24, flexWrap: 'wrap',
                fontFamily: "'Inter'", fontSize: 14, color: 'rgba(255,255,255,0.65)',
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="check" size={14} color="#fff"/>
                  Sem mensalidade
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="check" size={14} color="#fff"/>
                  Sem cartão
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="check" size={14} color="#fff"/>
                  Pague só se usar
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: isMobile ? 0 : 240 }}>
              <Button variant="primary" onClick={onCta} style={{ padding: isMobile ? '16px 24px' : '18px 32px', fontSize: 16, justifyContent: 'center' }}>
                Criar transação agora
                <Icon name="arrow-right" size={16}/>
              </Button>
              <Button variant="ghostDark" onClick={onCta} style={{ justifyContent: 'center' }}>
                Ver como funciona
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function StickyCta({ onCta }: { onCta?: () => void }) {
  const [visible, setVisible] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(() => {
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
      position: 'fixed', bottom: isMobile ? 16 : 24, left: '50%',
      transform: `translateX(-50%) translateY(${visible ? 0 : 24}px)`,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 280ms cubic-bezier(0.2,0.6,0.2,1), transform 280ms cubic-bezier(0.2,0.6,0.2,1)',
      zIndex: 50,
      background: '#0A0A0A',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 9999,
      padding: isMobile ? '6px 6px 6px 16px' : '8px 8px 8px 24px',
      display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 16,
      boxShadow: '0 20px 48px -12px rgba(0,0,0,0.4)',
      maxWidth: 'calc(100vw - 32px)',
    }}>
      <span style={{
        fontFamily: "'Inter'", fontSize: isMobile ? 12 : 14, color: 'rgba(255,255,255,0.9)',
        display: 'inline-flex', alignItems: 'center', gap: isMobile ? 6 : 10,
        whiteSpace: 'nowrap',
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: 9999, background: '#1E8A5A',
          boxShadow: '0 0 0 4px rgba(30,138,90,0.2)',
          flexShrink: 0,
        }}></span>
        {isMobile ? 'Comece grátis' : 'Comece grátis em menos de 1 minuto'}
      </span>
      <Button variant="primary" onClick={onCta} style={{ padding: isMobile ? '8px 14px' : '10px 20px', fontSize: isMobile ? 12 : 14, whiteSpace: 'nowrap' }}>
        {isMobile ? 'Criar' : 'Criar transação'}
        <Icon name="arrow-right" size={isMobile ? 12 : 14}/>
      </Button>
    </div>
  );
}

export { CtaInlineBand, CtaBarDark, StickyCta };
