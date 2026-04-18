'use client';
import { useEffect, useRef, useState } from 'react';

const HIW_STATES = [
  { id: 'received', chip: 'Pagamento recebido',   title: 'Fundos protegidos',          caption: 'O dinheiro do comprador ficou em custódia. Nada se move até você entregar.',       stepTitle: 'Comprador paga',         stepBody: 'O valor combinado entra em custódia no mesmo instante.' },
  { id: 'awaiting', chip: 'Aguardando entrega',   title: 'Tudo pronto para começar',   caption: 'Você pode trabalhar com tranquilidade. O pagamento já está garantido.',            stepTitle: 'Entrega em andamento',   stepBody: 'Os fundos seguem protegidos enquanto o combinado é cumprido.' },
  { id: 'released', chip: 'Liberado ao vendedor', title: 'Pagamento concluído',        caption: 'Entrega confirmada pelos dois lados. O dinheiro foi liberado.',                    stepTitle: 'Dinheiro liberado',      stepBody: 'Assim que a entrega é confirmada, o valor vai direto para você.' },
];

function useSlowState() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const mountedRef = useRef(true);
  useEffect(() => { mountedRef.current = true; return () => { mountedRef.current = false; clearTimeout(timerRef.current); }; }, []);
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { if (mountedRef.current) setIdx(i => (i + 1) % 3); }, 3200);
    return () => clearTimeout(timerRef.current);
  }, [idx]);
  return { idx, jumpTo: (i: number) => { clearTimeout(timerRef.current); setIdx(i); } };
}

function ShieldGlyph({ active, released }: { active: boolean; released: boolean }) {
  const color = released ? '#7FD1A8' : active ? '#A8C2EA' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ transition: 'color 500ms', color }}>
      <path d="M20 5 L33 9 V20 C33 28 27 33 20 35 C13 33 7 28 7 20 V9 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      {released
        ? <path d="M14 20 L18.5 24.5 L26 16" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M16 17 h8 M16 21 h8 M16 25 h5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />}
    </svg>
  );
}

export function HowItWorks() {
  const { idx, jumpTo } = useSlowState();
  const state = HIW_STATES[idx];
  const released = idx === 2;
  const active = idx >= 1;

  return (
    <section id="how" style={{ padding: 'clamp(64px,10vw,128px) 0', background: '#F4F4F5', borderBottom: '1px solid #E4E4E7' }}>
      <style>{`
        @keyframes dv-fade-in { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
        .hiw-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .hiw-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px,6vw,64px)' }}>
          <div style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#71717A', marginBottom: 14 }}>Como funciona</div>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.06, letterSpacing: '-0.024em', margin: 0, color: '#0A0A0A' }}>
            Seu dinheiro, protegido.<br /><span style={{ color: '#71717A' }}>Do pagamento até a entrega.</span>
          </h2>
        </div>

        <div className="hiw-grid">
          {/* Steps */}
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {HIW_STATES.map((s, i) => {
              const isActive = i === idx; const isDone = i < idx;
              return (
                <li key={s.id}>
                  <button onClick={() => jumpTo(i)} style={{
                    width: '100%', textAlign: 'left', background: 'transparent', border: 'none',
                    display: 'grid', gridTemplateColumns: '16px 1fr', gap: 20, padding: '20px 0',
                    borderBottom: i < 2 ? '1px solid #E4E4E7' : 'none',
                    cursor: 'pointer', opacity: isActive ? 1 : 0.45,
                    transition: 'opacity 320ms cubic-bezier(0.2,0.6,0.2,1)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 6 }}>
                      <span style={{ width: isActive ? 12 : 8, height: isActive ? 12 : 8, borderRadius: 9999, background: isActive || isDone ? '#0A0A0A' : '#D4D4D8', transition: 'all 320ms cubic-bezier(0.2,0.6,0.2,1)', display: 'block' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(18px,2.2vw,22px)', letterSpacing: '-0.012em', color: '#0A0A0A', marginBottom: 4 }}>{s.stepTitle}</div>
                      <div style={{ fontFamily: "'Inter'", fontSize: 14, lineHeight: 1.55, color: '#52525B' }}>{s.stepBody}</div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Card */}
          <div style={{ position: 'relative', background: '#141418', color: '#fff', borderRadius: 20, padding: 'clamp(24px,4vw,44px)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 28, overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(600px 320px at 80% 0%, rgba(30,75,160,0.16), transparent 70%)' }} />
            {/* Chip */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 9999, fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, color: '#fff', transition: 'all 500ms' }}>
                <span style={{ width: 8, height: 8, borderRadius: 9999, background: released ? '#7FD1A8' : '#A8C2EA', boxShadow: `0 0 0 4px ${released ? 'rgba(127,209,168,0.18)' : 'rgba(168,194,234,0.18)'}`, transition: 'all 500ms' }} />
                {state.chip}
              </span>
              <span style={{ fontFamily: "'Inter'", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Para <span style={{ color: 'rgba(255,255,255,0.85)' }}>Ana Ribeiro</span></span>
            </div>
            {/* Amount */}
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: "'Inter'", fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Valor em custódia</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(36px,6vw,64px)', lineHeight: 1, letterSpacing: '-0.028em', color: '#fff' }}>R$ 2.480,00</div>
            </div>
            {/* State box */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16, padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, transition: 'all 500ms' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: released ? 'rgba(127,209,168,0.10)' : 'rgba(168,194,234,0.08)', border: `1px solid ${released ? 'rgba(127,209,168,0.28)' : 'rgba(168,194,234,0.22)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 500ms' }}>
                <ShieldGlyph active={active} released={released} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div key={state.id + 't'} style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(16px,2vw,22px)', letterSpacing: '-0.014em', color: '#fff', marginBottom: 4, animation: 'dv-fade-in 520ms both' }}>{state.title}</div>
                <div key={state.id + 'c'} style={{ fontFamily: "'Inter'", fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.65)', animation: 'dv-fade-in 620ms both' }}>{state.caption}</div>
              </div>
            </div>
            {/* Progress */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter'", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                <span>Pagamento</span><span>Entrega</span><span>Liberação</span>
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= idx ? '#A8C2EA' : 'rgba(255,255,255,0.10)', transition: 'background 600ms' }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
