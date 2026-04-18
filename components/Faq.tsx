'use client';
import { useState } from 'react';

const FAQ_ITEMS = [
  { q: 'E se a outra parte não cumprir?',       a: 'O dinheiro não sai da custódia. Ele volta pra quem pagou.' },
  { q: 'Existe taxa escondida?',                 a: 'Não. Você só paga quando uma transação é concluída. Sem mensalidade, sem setup.' },
  { q: 'O dinheiro fica com a Dalivim?',         a: 'Fica retido em conta segregada até a confirmação. Nunca transita pela nossa operação.' },
  { q: 'Funciona para serviços e produtos?',     a: 'Funciona para qualquer acordo: serviço, produto, digital, físico, recorrente.' },
  { q: 'E se houver divergência?',               a: 'Os fundos permanecem retidos. Nossa equipe analisa evidências das duas partes e decide.' },
];

function FaqRow({ item, index, isOpen, onToggle }: { item: typeof FAQ_ITEMS[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E4E4E7', transition: 'background 200ms', background: hover && !isOpen ? '#FAFAFA' : 'transparent' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button onClick={onToggle} style={{ width: '100%', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '0 20px', padding: '24px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }} aria-expanded={isOpen}>
        <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: 11, color: '#A1A1AA', letterSpacing: '0.08em', width: 32 }}>0{index + 1}</span>
        <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(16px,2vw,22px)', letterSpacing: '-0.012em', lineHeight: 1.3, color: '#0A0A0A' }}>{item.q}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, color: '#0A0A0A', justifySelf: 'end' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 280ms cubic-bezier(0.2,0.6,0.2,1)' }}>
            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 320ms cubic-bezier(0.2,0.6,0.2,1)' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ paddingLeft: 'clamp(0px,4vw,52px)', paddingBottom: 28, fontFamily: "'Inter'", fontSize: 16, lineHeight: 1.6, color: '#52525B', maxWidth: 600 }}>{item.a}</div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" style={{ padding: 'clamp(80px,10vw,140px) 0', background: '#fff', borderTop: '1px solid #E4E4E7' }}>
      <style>{`.faq-header { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: start; margin-bottom: clamp(40px,6vw,80px); } @media(max-width:768px){ .faq-header { grid-template-columns: 1fr; gap: 20px; } }`}</style>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div className="faq-header">
          <div>
            <div style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#71717A', marginBottom: 14 }}>Sem surpresas</div>
            <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(32px,5vw,64px)', letterSpacing: '-0.024em', lineHeight: 1, margin: 0, color: '#0A0A0A' }}>Antes de você seguir.</h2>
          </div>
          <p style={{ fontFamily: "'Inter'", fontSize: 16, lineHeight: 1.6, color: '#52525B', margin: 0 }}>
            Regras simples. Sem marketing. Se você ler isso e algo ainda parecer escondido, é porque não existe.
          </p>
        </div>
        <div style={{ borderTop: '1px solid #0A0A0A' }}>
          {FAQ_ITEMS.map((f, i) => <FaqRow key={i} item={f} index={i} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
        </div>
        <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid #E4E4E7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontFamily: "'Inter'", fontSize: 14, color: '#71717A' }}>
          <span>Ainda tem dúvidas?</span>
          <a href="mailto:contato@dalivim.com.br" style={{ color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid #0A0A0A', paddingBottom: 2, fontWeight: 500 }}>Fale conosco →</a>
        </div>
      </div>
    </section>
  );
}
