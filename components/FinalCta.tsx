import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Orbits, Starfield } from './Orbital';

export function FinalCta({ onCta }: { onCta: () => void }) {
  return (
    <section style={{
      position: 'relative', background: '#0A0A0A', color: '#fff',
      padding: 'clamp(100px,14vw,200px) 24px clamp(80px,10vw,160px)',
      overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Orbits />
      <Starfield />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>
          Pronto para seguir em frente?
        </div>
        <h2 style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: 'clamp(48px, 8.5vw, 128px)',
          lineHeight: 0.98, letterSpacing: '-0.032em',
          margin: '0 0 36px',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>Acordos são</span>
          <span style={{ display: 'block', color: '#1E4BA0' }}>mais seguros aqui.</span>
        </h2>
        <p style={{ fontFamily: "'Inter'", fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 44px' }}>
          Crie sua primeira transação em minutos. Dalivim retém, protege e libera — você foca no que importa.
        </p>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <Button variant="primary" onClick={onCta} style={{ padding: '17px 32px', fontSize: 16 }}>
            Criar sua transação <ArrowRight size={17} />
          </Button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: "'Inter'", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            <span>Sem taxas escondidas</span>
            <span style={{ width: 3, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            <span>Sem mensalidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
