'use client';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

function StatePanel({ txId, amount, status, statusTone, lines, footer }: { txId: string; amount: string; status: string; statusTone: string; lines?: { k: string; v: string; mono?: boolean; emphasis?: boolean }[]; footer?: ReactNode }) {
  const tones: Record<string, { chip: string; label: string }> = {
    protected: { chip: '#1E4BA0', label: 'PROTEGIDO' },
    active:    { chip: '#1E4BA0', label: 'ATIVA' },
    released:  { chip: '#1E8A5A', label: 'LIBERADA' },
  };
  const tone = tones[statusTone] ?? tones.protected;
  return (
    <div style={{ background: '#0A0A0A', color: '#fff', border: '1px solid #1C1C20', borderRadius: 10, padding: '16px 18px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>{txId}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 9px', border: `1px solid ${tone.chip}55`, background: `${tone.chip}14`, borderRadius: 9999, fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', color: '#fff' }}>
          <span style={{ width: 5, height: 5, borderRadius: 9999, background: tone.chip }} />{tone.label}
        </span>
      </div>
      <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 22, letterSpacing: '-0.018em', lineHeight: 1, marginBottom: 4 }}>{amount}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>{status}</div>
      {lines && (
        <div style={{ borderTop: '1px solid #1C1C20', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {lines.map((ln, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>{ln.k}</span>
              <span style={{ color: ln.emphasis ? '#fff' : 'rgba(255,255,255,0.75)', fontFamily: ln.mono ? 'ui-monospace,monospace' : "'Inter'", letterSpacing: ln.mono ? '0.04em' : '0' }}>{ln.v}</span>
            </div>
          ))}
        </div>
      )}
      {footer && <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #1C1C20', display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{footer}</div>}
    </div>
  );
}

function MediatorDiagram() {
  return (
    <div style={{ background: '#0A0A0A', border: '1px solid #1C1C20', borderRadius: 10, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontFamily: 'ui-monospace,monospace', fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>TX-9821-VRB3</div>
      <svg viewBox="0 0 320 68" width="100%" style={{ display: 'block' }}>
        <circle cx="34" cy="34" r="14" fill="none" stroke="#fff" strokeWidth="1.2" />
        <text x="34" y="38" textAnchor="middle" fontFamily="Space Grotesk" fontSize="12" fontWeight="500" fill="#fff">C</text>
        <text x="34" y="62" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">COMPRADOR</text>
        <line x1="52" y1="34" x2="130" y2="34" stroke="#1E4BA0" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="130" y="20" width="60" height="28" rx="3" fill="#1E4BA0" />
        <text x="160" y="38" textAnchor="middle" fontFamily="Space Grotesk" fontSize="11" fontWeight="500" fill="#fff" letterSpacing="0.04em">DALIVIM</text>
        <text x="160" y="62" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">CUSTÓDIA</text>
        <line x1="190" y1="34" x2="268" y2="34" stroke="#1E4BA0" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="286" cy="34" r="14" fill="none" stroke="#fff" strokeWidth="1.2" />
        <text x="286" y="38" textAnchor="middle" fontFamily="Space Grotesk" fontSize="12" fontWeight="500" fill="#fff">V</text>
        <text x="286" y="62" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">VENDEDOR</text>
      </svg>
      <div style={{ borderTop: '1px solid #1C1C20', paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
        <span style={{ color: 'rgba(255,255,255,0.45)' }}>Acordo ativo</span>
        <span style={{ fontFamily: 'ui-monospace,monospace', letterSpacing: '0.04em', color: '#fff' }}>2 partes · 1 contrato</span>
      </div>
    </div>
  );
}

const CARDS = [
  {
    number: '01', situation: 'Você pagou… e a outra pessoa sumiu?',
    resolution: 'Com Dalivim, os fundos só são liberados depois da entrega. Se algo der errado, o dinheiro volta pra você.',
    panel: <StatePanel txId="TX-4193-KM7P" amount="R$ 1.500,00" status="Aguardando entrega · fundos retidos" statusTone="protected" lines={[{ k: 'Método', v: 'Pix', emphasis: true }, { k: 'Custódia', v: 'ativa · 3d restantes', mono: true }, { k: 'Reembolso', v: 'disponível', mono: true, emphasis: true }]} />,
  },
  {
    number: '02', situation: 'Já entregou o trabalho e teve que correr atrás do pagamento?',
    resolution: 'Aqui, o pagamento é garantido antes de você começar. Dinheiro na custódia é dinheiro confirmado.',
    panel: <StatePanel txId="TX-2774-BN2L" amount="R$ 2.480,00" status="Pagamento recebido · aguardando entrega" statusTone="active" lines={[{ k: 'Comprador', v: 'João P. — confirmado', emphasis: true }, { k: 'Recebido', v: '17 abr · 14:22', mono: true }, { k: 'Status', v: 'pronto para iniciar', mono: true, emphasis: true }]} footer={<><span style={{ width: 6, height: 6, borderRadius: 9999, background: '#1E8A5A', boxShadow: '0 0 0 3px rgba(30,138,90,0.22)', display: 'inline-block' }} /><span>Você pode começar com segurança.</span></>} />,
  },
  {
    number: '03', situation: 'Fazer negócio com estranhos sempre é um risco.',
    resolution: 'Dalivim fica no meio, garantindo que os dois lados cumpram o combinado. Neutro. Verificável. Irreversível.',
    panel: <MediatorDiagram />,
  },
];

export function WhyChoose() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,140px) 0 clamp(64px,8vw,128px)', background: '#fff', borderBottom: '1px solid #E4E4E7' }}>
      <style>{`.why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; } @media(max-width:900px){ .why-grid { grid-template-columns: 1fr; } }`}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 820, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <div style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#71717A', marginBottom: 18 }}>O problema real</div>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(32px,5vw,72px)', lineHeight: 1.02, letterSpacing: '-0.028em', margin: '0 0 18px', color: '#0A0A0A' }}>
            O problema nunca foi o pagamento.<br /><span style={{ color: '#71717A' }}>Foi confiar no outro lado.</span>
          </h2>
          <p style={{ fontFamily: "'Inter'", fontSize: 17, lineHeight: 1.55, color: '#52525B', margin: 0, maxWidth: 580 }}>
            Acordos não falham por falta de boas intenções. Falham por falta de garantias.
          </p>
        </div>
        <div className="why-grid">
          {CARDS.map(c => (
            <article key={c.number} style={{ background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column', gap: 20, transition: 'border-color 220ms, background 220ms, transform 220ms', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0A0A0A'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div>
                <div style={{ fontFamily: 'ui-monospace,monospace', fontSize: 11, color: '#A1A1AA', letterSpacing: '0.12em', marginBottom: 16 }}>{c.number}</div>
                <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(18px,2vw,24px)', lineHeight: 1.2, letterSpacing: '-0.014em', margin: 0, color: '#0A0A0A' }}>{c.situation}</h3>
              </div>
              {c.panel}
              <div style={{ borderTop: '1px solid #E4E4E7', paddingTop: 18, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 20, height: 20, borderRadius: 9999, background: '#0A0A0A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Check size={11} strokeWidth={2.5} /></div>
                <p style={{ fontFamily: "'Inter'", fontSize: 14, lineHeight: 1.55, color: '#27272A', margin: 0 }}>{c.resolution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
