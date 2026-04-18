import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function CtaInlineBand({ onCta, eyebrow, title, sub, cta }: { onCta: () => void; eyebrow?: string; title: string; sub?: string; cta?: string }) {
  return (
    <section style={{ padding: 'clamp(48px,7vw,72px) 0', background: '#fff', borderBottom: '1px solid #E4E4E7' }}>
      <style>{`.cta-band-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; } @media(max-width:640px){ .cta-band-inner { flex-direction: column; align-items: flex-start; } }`}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="cta-band-inner">
          <div style={{ maxWidth: 680 }}>
            {eyebrow && <div style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#71717A', marginBottom: 10 }}>{eyebrow}</div>}
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.014em', lineHeight: 1.12, margin: '0 0 8px', color: '#0A0A0A' }}>{title}</h3>
            {sub && <p style={{ fontFamily: "'Inter'", fontSize: 15, color: '#71717A', margin: 0, lineHeight: 1.55 }}>{sub}</p>}
          </div>
          <Button variant="primary" onClick={onCta}>{cta || 'Criar transação'}<ArrowRight size={15} /></Button>
        </div>
      </div>
    </section>
  );
}
