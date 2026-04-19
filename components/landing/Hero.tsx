'use client';
import * as React from 'react';
import { Button, Container } from './Atoms';
import { Icon } from './Icons';
import { Starfield, Orbits } from './OrbitalFinale';
import { useIsMobile } from './useMedia';

// Hero — dark, footer-aligned visual language.
// Reuses <Starfield/> and <Orbits/> from OrbitalFinale.jsx for continuity.

function Hero({ onPrimary, onSecondary }: { onPrimary?: () => void; onSecondary?: () => void }) {
  const isMobile = useIsMobile();
  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: isMobile ? 120 : 180,
      paddingBottom: isMobile ? 96 : 160,
      background: '#0A0A0A', color: '#fff',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Decorators from the footer — shared DNA */}
      {typeof Orbits === 'function' && <Orbits/>}
      {typeof Starfield === 'function' && <Starfield/>}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Container>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', maxWidth: 900, margin: '0 auto',
          }}>
            {/* Eyebrow pill — mirrors footer chip style */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '7px 14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 9999,
              fontFamily: "'Inter'", fontSize: 13, fontWeight: 500,
              color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.005em',
              marginBottom: 40,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 9999, background: '#7FD1A8',
                boxShadow: '0 0 0 4px rgba(127,209,168,0.18)',
              }}/>
              Pix com garantia de entrega
            </span>

            <h1 style={{
              fontFamily: "'Space Grotesk'", fontWeight: 500,
              fontSize: isMobile ? 'clamp(44px, 12vw, 64px)' : 'clamp(56px, 8vw, 112px)',
              lineHeight: 0.98,
              letterSpacing: '-0.034em',
              margin: '0 0 28px', color: '#fff',
              textWrap: 'balance',
            }}>
              Medo de não receber?<br/>
              <span style={{ color: '#1E4BA0' }}>Sem problema. A gente garante.</span>
            </h1>

            <p style={{
              fontFamily: "'Inter'", fontSize: 'clamp(17px, 1.4vw, 20px)',
              lineHeight: 1.55, color: 'rgba(255,255,255,0.7)',
              maxWidth: 620, margin: '0 0 48px',
            }}>
              Dalivim retém o pagamento até a entrega. Se algo der errado, o dinheiro volta.
              Sem mensalidade. Sem cartão. Em qualquer acordo.
            </p>

            <div style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 40,
              width: isMobile ? '100%' : 'auto',
              flexDirection: isMobile ? 'column' : 'row',
            }}>
              <Button variant="primary" onClick={onPrimary}
                style={{ padding: '16px 28px', fontSize: 15, justifyContent: 'center', width: isMobile ? '100%' : 'auto' }}>
                Criar transação grátis
                <Icon name="arrow-right" size={16}/>
              </Button>
              <Button variant="ghostDark" onClick={onSecondary}
                style={{ padding: '16px 28px', fontSize: 15, justifyContent: 'center', width: isMobile ? '100%' : 'auto' }}>
                Ver como funciona
              </Button>
            </div>

            {/* Trust strip — quiet, mirrors footer divider style */}
            <div style={{
              display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center',
              fontFamily: "'Inter'", fontSize: 13, color: 'rgba(255,255,255,0.55)',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={13} color="rgba(255,255,255,0.85)"/>
                Fundos em conta segregada
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={13} color="rgba(255,255,255,0.85)"/>
                Reembolso automático
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={13} color="rgba(255,255,255,0.85)"/>
                Pague só se usar
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export { Hero };
