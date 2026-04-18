import { ShieldCheck, Banknote, CheckCircle, Lock } from 'lucide-react';
import { Button } from './Button';

export function Hero({ onPrimary, onSecondary }: { onPrimary: () => void; onSecondary: () => void }) {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 96 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: 'clamp(38px, 7vw, 96px)',
          lineHeight: 1.04, letterSpacing: '-0.022em',
          margin: '0 auto', maxWidth: 960, color: '#0A0A0A',
        }}>
          Medo de não receber?<br />
          <span style={{ color: '#71717A' }}>Sem problema. A gente garante.</span>
        </h1>
        <p style={{
          fontFamily: "'Inter'", fontSize: 'clamp(16px, 2vw, 19px)', fontWeight: 400,
          color: '#71717A', lineHeight: 1.6,
          maxWidth: 600, margin: '28px auto 0',
        }}>
          Uma camada de segurança para freelancers e negociações online. O pagamento fica seguro até as duas partes cumprirem o acordo.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={onPrimary} style={{ padding: '15px 28px', fontSize: 'clamp(14px, 2vw, 16px)' }}>
            Crie uma transação segura
          </Button>
          <Button variant="outlined" onClick={onSecondary} style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
            Veja como funciona
          </Button>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { icon: ShieldCheck, label: 'Feito para negociações de confiança' },
  { icon: Banknote,    label: 'Pagamento simples com Pix' },
  { icon: CheckCircle, label: 'Liberação clara e transparente' },
  { icon: Lock,        label: 'Proteção para os dois lados' },
];

export function TrustStrip() {
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid #E4E4E7', borderBottom: '1px solid #E4E4E7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px 16px',
          textAlign: 'center',
        }}>
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <Icon size={22} color="#71717A" strokeWidth={1.5} />
              <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: '#0A0A0A', lineHeight: 1.4 }}>{label}</span>
            </div>
          ))}
        </div>
        <style>{`@media (min-width: 640px) { .trust-grid { grid-template-columns: repeat(4,1fr) !important; } }`}</style>
      </div>
    </section>
  );
}
