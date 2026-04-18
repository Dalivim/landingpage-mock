import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Orbits, Starfield } from './Orbital';

export function CtaBarDark({ onCta }: { onCta: () => void }) {
  return (
    <section style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) 0', background: '#0A0A0A', color: '#fff', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <Orbits /><Starfield />
      <style>{`.cta-dark-inner { display: grid; grid-template-columns: 1fr auto; gap: 64px; align-items: center; } @media(max-width:768px) { .cta-dark-inner { grid-template-columns: 1fr; gap: 32px; } }`}</style>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="cta-dark-inner">
          <div>
            <div style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>Pronto em 60 segundos</div>
            <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(32px,5vw,64px)', lineHeight: 1.02, letterSpacing: '-0.026em', margin: '0 0 20px', color: '#fff' }}>
              <span style={{ display: 'block' }}>Proteja seu próximo pagamento.</span>
              <span style={{ display: 'block', color: '#1E4BA0' }}>Antes de ele virar problema.</span>
            </h2>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontFamily: "'Inter'", fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
              {['Sem mensalidade', 'Sem cartão', 'Pague só se usar'].map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Check size={13} color="#fff" />  {t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
            <Button variant="primary" onClick={onCta} style={{ padding: '16px 28px', fontSize: 15 }}>Criar transação agora <ArrowRight size={15} /></Button>
            <Button variant="ghostDark" onClick={onCta}>Ver como funciona</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
