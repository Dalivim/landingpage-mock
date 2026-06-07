'use client';

import { useState } from 'react';
import { Container, Eyebrow } from './Atoms';
import { HeroHeadline } from './MicroBits';
import MicroExperience from './MicroExperience';
import Icon from './Icon';

export default function HeroWithMicro({ variant = 'v2', tweaks = {} }) {
  const [tipo, setTipo] = useState(null);

  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      paddingTop: 140, paddingBottom: 100,
      background: '#fff',
    }}>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, marginBottom: 56 }}>
          <Eyebrow color="#1E4BA0">
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px',
              background: 'rgba(30,75,160,0.06)',
              border: '1px solid rgba(30,75,160,0.16)',
              borderRadius: 9999,
            }}>
              <Icon name="shield-check" size={13}/> Pix com garantia
            </span>
          </Eyebrow>
          <HeroHeadline
            tipo={tipo}
            headlineOverride={tweaks.headlineText}
            resolutionText={tweaks.resolutionText || 'Sem problema. A gente garante.'}
            animated={tweaks.animatedHeadline}
          />
          <p style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 'clamp(15px, 1.4vw, 17px)',
            color: '#52525B', textAlign: 'center', maxWidth: 580, margin: 0, lineHeight: 1.55,
          }}>
            O dinheiro fica protegido até a entrega ser confirmada. Se algo der errado, você não perde.
          </p>
        </div>

        <MicroExperience onTipoLock={setTipo}/>

        <div className="dv-trust-strip" style={{
          marginTop: 56, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24,
          fontFamily: "var(--font-body), sans-serif", fontSize: 13, color: '#71717A',
          flexWrap: 'wrap',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="lock" size={14} color="#16794C"/> Custódia em conta segregada
          </span>
          <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#D4D4D8' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="pix" size={14} color="#16794C"/> 100% via Pix
          </span>
          <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#D4D4D8' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="scale" size={14} color="#16794C"/> Mediação de disputas
          </span>
        </div>
      </Container>
    </section>
  );
}
