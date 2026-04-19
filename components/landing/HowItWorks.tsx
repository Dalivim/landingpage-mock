'use client';
import * as React from 'react';
import { Container } from './Atoms';
import { Icon } from './Icons';
import { useIsMobile, useIsTablet } from './useMedia';

// HowItWorks — scroll/auto-driven transaction receipt.
// Card philosophy: receipt-like, minimal, step-aware.
// Only shows what matters at each step, highlights what just changed.

const HIW_STEPS = [
  { id: 0, title: 'Link criado',    body: 'Você combina os termos e envia um link de pagamento seguro.' },
  { id: 1, title: 'Em custódia',    body: 'O comprador paga via Pix. O valor fica retido — ninguém acessa.' },
  { id: 2, title: 'Liberado',       body: 'Entrega confirmada. O pagamento é liberado na hora.' },
];

// Step durations (ms) — each step holds one visual state, then auto-advances.
const STEP_DURATIONS = [3200, 3600, 3600];

function useReceiptSim() {
  const [step, setStep] = React.useState(0);
  const [cycle, setCycle] = React.useState(0);
  const timerRef = React.useRef(null);
  const mountedRef = React.useRef(true);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; clearTimeout(timerRef.current); };
  }, []);

  React.useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      const next = (step + 1) % 3;
      if (next === 0) setCycle(c => c + 1);
      setStep(next);
    }, STEP_DURATIONS[step]);
    return () => clearTimeout(timerRef.current);
  }, [step]);

  const jumpTo = (s) => { clearTimeout(timerRef.current); setStep(s); };
  return { step, cycle, jumpTo };
}

function Stepper({ step, onJump }: { step: number; onJump: (i: number) => void }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {HIW_STEPS.map((s, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <li key={s.id}>
            <button onClick={() => onJump(i)} style={{
              width: '100%', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20,
              padding: '16px 0', background: 'transparent', border: 'none',
              borderBottom: i < 2 ? '1px solid #E4E4E7' : 'none',
              textAlign: 'left', cursor: 'pointer',
              opacity: active ? 1 : done ? 0.55 : 0.35,
              transition: 'opacity 280ms cubic-bezier(0.2,0.6,0.2,1)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 9999,
                  border: '1.5px solid',
                  borderColor: active || done ? '#0A0A0A' : '#D4D4D8',
                  background: done ? '#0A0A0A' : '#fff',
                  color: done ? '#fff' : '#0A0A0A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 13,
                  transition: 'all 280ms cubic-bezier(0.2,0.6,0.2,1)',
                }}>
                  {done ? <Icon name="check" size={14}/> : (i + 1)}
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk'", fontWeight: 500,
                  fontSize: 22, letterSpacing: '-0.012em', color: '#0A0A0A',
                  marginBottom: 6,
                }}>{s.title}</div>
                <div style={{ fontFamily: "'Inter'", fontSize: 14, lineHeight: 1.55, color: '#71717A' }}>
                  {s.body}
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

// ────────────────────────────────────────────────────────────
// RECEIPT CARD
// A paper-like card. Calm, large amount, single clear status.
// Each step fades between states; changed pieces gently highlight.
// ────────────────────────────────────────────────────────────

function StatusBadge({ step }: { step: number }) {
  // Single, bold status — never more than one chip.
  const states = [
    { label: 'Link criado',       dot: '#71717A', bg: '#F4F4F5', fg: '#0A0A0A', border: '#E4E4E7' },
    { label: 'Em custódia',       dot: '#1E4BA0', bg: '#EEF2FB', fg: '#1E4BA0', border: '#D3DDF2' },
    { label: 'Pagamento liberado', dot: '#1E8A5A', bg: '#E8F5EE', fg: '#12663F', border: '#C9E3D3' },
  ];
  const s = states[step];
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '10px 16px',
      background: s.bg, border: `1px solid ${s.border}`,
      borderRadius: 9999,
      fontFamily: "'Inter'", fontSize: 13, fontWeight: 500,
      color: s.fg, letterSpacing: '-0.005em',
      transition: 'all 420ms cubic-bezier(0.2,0.6,0.2,1)',
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: 9999, background: s.dot,
        boxShadow: `0 0 0 4px ${s.dot}22`,
        transition: 'all 420ms',
      }}/>
      {s.label}
    </div>
  );
}

// Small helper: a field with a label above. Only used when it actually earns its place.
function Field({ label, children, highlight }: { label: string; children?: React.ReactNode; highlight?: boolean }) {
  return (
    <div style={{
      padding: '14px 18px',
      background: highlight ? '#F9FAFB' : 'transparent',
      border: '1px solid',
      borderColor: highlight ? '#E4E4E7' : 'transparent',
      borderRadius: 10,
      transition: 'all 420ms cubic-bezier(0.2,0.6,0.2,1)',
    }}>
      <div style={{
        fontFamily: "'Inter'", fontSize: 11, fontWeight: 500,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#71717A', marginBottom: 4,
      }}>{label}</div>
      <div style={{
        fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 15,
        color: '#0A0A0A', letterSpacing: '-0.01em',
      }}>{children}</div>
    </div>
  );
}

// Compact avatar — initials in a ring.
function Avatar({ initials, tone = 'light' }: { initials: string; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <span style={{
      width: 34, height: 34, borderRadius: 9999,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: dark ? '#0A0A0A' : '#F4F4F5',
      color: dark ? '#fff' : '#0A0A0A',
      fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 12,
      letterSpacing: '0.02em',
      border: '1px solid #E4E4E7',
    }}>{initials}</span>
  );
}

// Horizontal flow: Buyer → Custody → Seller
// The "active" node pulses softly; the connector line fills as we progress.
function FlowIndicator({ step }: { step: number }) {
  // 0: nothing highlighted yet. 1: custody glows. 2: seller glows.
  const custodyActive = step >= 1;
  const sellerActive  = step === 2;
  const isMobile = useIsMobile();

  const dashWidth = step === 0 ? '0%' : step === 1 ? '50%' : '100%';

  if (isMobile) {
    // Vertical: 3 nodes stacked with a vertical connector
    return (
      <div style={{
        padding: '20px 16px',
        background: '#fff',
        border: '1px solid #E4E4E7',
        borderRadius: 12,
        display: 'grid', gridTemplateColumns: '44px 1fr', gap: '0 14px',
        position: 'relative',
      }}>
        {/* Buyer */}
        <FlowNodeCompact label="Comprador" name="João P." initials="JP"
          active={step === 0} done={step >= 1}/>
        <div style={{ gridColumn: 1, margin: '0 auto', width: 2,
          background: step >= 1 ? '#0A0A0A' : '#E4E4E7',
          height: 24, transition: 'background 400ms',
        }}/>
        <div style={{ gridColumn: 2 }}/>

        {/* Custody */}
        <FlowNodeCompact label="Custódia" name="Dalivim" icon
          active={custodyActive && !sellerActive} done={sellerActive}/>
        <div style={{ gridColumn: 1, margin: '0 auto', width: 2,
          background: step === 2 ? '#1E8A5A' : '#E4E4E7',
          height: 24, transition: 'background 400ms',
        }}/>
        <div style={{ gridColumn: 2 }}/>

        {/* Seller */}
        <FlowNodeCompact label="Vendedor" name="Ana Ribeiro" initials="AR"
          active={sellerActive}/>

        <style>{`
          @keyframes dv-node-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(30, 75, 160, 0.28); }
            50%      { box-shadow: 0 0 0 8px rgba(30, 75, 160, 0);    }
          }
          @keyframes dv-node-pulse-green {
            0%, 100% { box-shadow: 0 0 0 0 rgba(30, 138, 90, 0.28); }
            50%      { box-shadow: 0 0 0 8px rgba(30, 138, 90, 0);   }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'auto 1fr auto 1fr auto',
      alignItems: 'center', gap: 0,
      padding: '24px 20px',
      background: '#fff',
      border: '1px solid #E4E4E7',
      borderRadius: 12,
    }}>
      {/* Buyer */}
      <FlowNode
        label="Comprador"
        name="João P."
        initials="JP"
        active={step === 0}
        done={step >= 1}
      />
      {/* Line 1 */}
      <div style={{ position: 'relative', height: 2, margin: '0 10px' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#E4E4E7', borderRadius: 2 }}/>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: step >= 1 ? '100%' : '0%',
          background: '#0A0A0A', borderRadius: 2,
          transition: 'width 600ms cubic-bezier(0.2,0.6,0.2,1)',
        }}/>
      </div>
      {/* Custody */}
      <FlowNode
        label="Custódia"
        name="Dalivim"
        icon
        active={custodyActive && !sellerActive}
        done={sellerActive}
      />
      {/* Line 2 */}
      <div style={{ position: 'relative', height: 2, margin: '0 10px' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#E4E4E7', borderRadius: 2 }}/>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: step === 2 ? '100%' : '0%',
          background: '#1E8A5A', borderRadius: 2,
          transition: 'width 600ms cubic-bezier(0.2,0.6,0.2,1)',
        }}/>
      </div>
      {/* Seller */}
      <FlowNode
        label="Vendedor"
        name="Ana Ribeiro"
        initials="AR"
        active={sellerActive}
      />

      <style>{`
        @keyframes dv-node-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30, 75, 160, 0.28); }
          50%      { box-shadow: 0 0 0 8px rgba(30, 75, 160, 0);    }
        }
        @keyframes dv-node-pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30, 138, 90, 0.28); }
          50%      { box-shadow: 0 0 0 8px rgba(30, 138, 90, 0);   }
        }
      `}</style>
    </div>
  );
}

function FlowNode({ label, name, initials, icon, active, done }: {
  label: string; name: string;
  initials?: string; icon?: boolean;
  active?: boolean; done?: boolean;
}) {
  const isSeller = active && label === 'Vendedor';
  const pulse = active && !done;
  const pulseAnim = isSeller ? 'dv-node-pulse-green 1.8s infinite' : 'dv-node-pulse 1.8s infinite';

  const ringColor = done ? '#0A0A0A' : active ? (isSeller ? '#1E8A5A' : '#1E4BA0') : '#E4E4E7';

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      minWidth: 90,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 9999,
        background: '#fff',
        border: `1.5px solid ${ringColor}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color 420ms cubic-bezier(0.2,0.6,0.2,1)',
        animation: pulse ? pulseAnim : 'none',
      }}>
        {icon ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="#0A0A0A" strokeWidth="1.5"/>
            <path d="M8 9V7a4 4 0 0 1 8 0v2" stroke="#0A0A0A" strokeWidth="1.5" fill="none"/>
            <circle cx="12" cy="14.5" r="1.5" fill="#0A0A0A"/>
          </svg>
        ) : (
          <span style={{
            fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 13,
            color: '#0A0A0A', letterSpacing: '0.02em',
          }}>{initials}</span>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Inter'", fontSize: 10, fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#71717A',
        }}>{label}</div>
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 13,
          color: '#0A0A0A', letterSpacing: '-0.005em', marginTop: 2,
        }}>{name}</div>
      </div>
    </div>
  );
}

// The Card — a receipt that reveals information progressively.
// The Card — a receipt that reveals information progressively.
function FlowNodeCompact({ label, name, initials, icon, active, done }: {
  label: string; name: string;
  initials?: string; icon?: boolean;
  active?: boolean; done?: boolean;
}) {
  const isSeller = active && label === 'Vendedor';
  const pulse = active && !done;
  const pulseAnim = isSeller ? 'dv-node-pulse-green 1.8s infinite' : 'dv-node-pulse 1.8s infinite';
  const ringColor = done ? '#0A0A0A' : active ? (isSeller ? '#1E8A5A' : '#1E4BA0') : '#E4E4E7';

  return (
    <>
      <div style={{
        width: 40, height: 40, borderRadius: 9999,
        background: '#fff',
        border: `1.5px solid ${ringColor}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: pulse ? pulseAnim : 'none',
        transition: 'border-color 420ms cubic-bezier(0.2,0.6,0.2,1)',
        justifySelf: 'center',
      }}>
        {icon ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="#0A0A0A" strokeWidth="1.5"/>
            <path d="M8 9V7a4 4 0 0 1 8 0v2" stroke="#0A0A0A" strokeWidth="1.5" fill="none"/>
            <circle cx="12" cy="14.5" r="1.5" fill="#0A0A0A"/>
          </svg>
        ) : (
          <span style={{
            fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 12,
            color: '#0A0A0A', letterSpacing: '0.02em',
          }}>{initials}</span>
        )}
      </div>
      <div style={{ alignSelf: 'center' }}>
        <div style={{
          fontFamily: "'Inter'", fontSize: 10, fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#71717A',
        }}>{label}</div>
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 14,
          color: '#0A0A0A', letterSpacing: '-0.005em', marginTop: 2,
        }}>{name}</div>
      </div>
    </>
  );
}

function ReceiptCard({ step, cycle }: { step: number; cycle: number }) {
  const amount = 'R$ 2.480,00';
  const isMobile = useIsMobile();

  // Message that changes per step — short, human.
  const messages = [
    'Link enviado ao comprador.',
    'Dinheiro em custódia. Seguro.',
    'Liberado para Ana em segundos.',
  ];

  // Timeline entries unlocked per step — human-readable, no jargon.
  const timeline = [
    { t: '14:02', label: 'Link criado',        step: 0 },
    { t: '14:08', label: 'Pagamento recebido', step: 1 },
    { t: '14:09', label: 'Fundos em custódia', step: 1 },
    { t: '14:32', label: 'Entrega confirmada', step: 2 },
    { t: '14:32', label: 'Pagamento liberado', step: 2 },
  ];
  const visibleTimeline = timeline.filter(e => e.step <= step);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 20,
      padding: isMobile ? 20 : 32,
      boxShadow: '0 1px 2px rgba(10,10,10,0.04), 0 24px 60px -24px rgba(10,10,10,0.10)',
      border: '1px solid #E4E4E7',
      display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 24,
      minHeight: isMobile ? 'auto' : 420,
      position: 'relative',
    }}>
      {/* Paper corner detail — subtle, receipt-like */}
      <div style={{
        position: 'absolute', top: 20, right: 20,
        fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: 11, color: '#A1A1AA', letterSpacing: '0.08em',
      }}>#4193</div>

      {/* 1. STATUS — the most important line */}
      <StatusBadge step={step}/>

      {/* 2. AMOUNT — large, primary */}
      <div>
        <div style={{
          fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#71717A', marginBottom: 10,
        }}>Valor da transação</div>
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: isMobile ? 40 : 64, lineHeight: 1, letterSpacing: '-0.028em',
          color: '#0A0A0A', wordBreak: 'break-word',
        }}>{amount}</div>
        <div style={{
          marginTop: 14,
          fontFamily: "'Inter'", fontSize: 15, lineHeight: 1.5,
          color: '#52525B',
          // crossfade the short message
          transition: 'opacity 500ms',
        }}>
          <FadeKey k={`${step}-${cycle}`}>
            {messages[step]}
          </FadeKey>
        </div>
      </div>

      {/* 3. COUNTERPARTY FLOW — buyer → custody → seller */}
      <FlowIndicator step={step}/>

      {/* 4. TIMELINE — human-readable, appends as steps progress */}
      <div>
        <div style={{
          fontFamily: "'Inter'", fontSize: 11, fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#71717A', marginBottom: 16,
        }}>Linha do tempo</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {timeline.map((e, i) => {
            const shown = e.step <= step;
            const isNewest = shown && e.step === step;
            return (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '56px 14px 1fr',
                alignItems: 'center',
                gap: 14,
                opacity: shown ? 1 : 0.25,
                transform: shown ? 'translateY(0)' : 'translateY(4px)',
                transition: 'opacity 500ms cubic-bezier(0.2,0.6,0.2,1), transform 500ms cubic-bezier(0.2,0.6,0.2,1)',
              }}>
                <span style={{
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 12, color: '#71717A', letterSpacing: '0.04em',
                }}>{e.t}</span>
                <span style={{
                  width: 8, height: 8, borderRadius: 9999,
                  background: shown ? (e.step === 2 ? '#1E8A5A' : e.step === 1 ? '#1E4BA0' : '#0A0A0A') : '#D4D4D8',
                  boxShadow: isNewest ? `0 0 0 4px ${
                    e.step === 2 ? 'rgba(30,138,90,0.18)'
                    : e.step === 1 ? 'rgba(30,75,160,0.18)'
                    : 'rgba(10,10,10,0.12)'
                  }` : 'none',
                  transition: 'all 420ms',
                }}/>
                <span style={{
                  fontFamily: "'Inter'", fontSize: 14,
                  color: shown ? '#0A0A0A' : '#A1A1AA',
                  fontWeight: isNewest ? 500 : 400,
                }}>{e.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// FadeKey — swap text with a fade when key changes.
function FadeKey({ k, children }: { k: string; children?: React.ReactNode }) {
  const [cur, setCur] = React.useState({ k, children });
  const [opacity, setOpacity] = React.useState(1);
  React.useEffect(() => {
    if (k === cur.k) return;
    setOpacity(0);
    const t = setTimeout(() => {
      setCur({ k, children });
      setOpacity(1);
    }, 200);
    return () => clearTimeout(t);
  }, [k, children]);
  return (
    <span style={{ opacity, transition: 'opacity 260ms cubic-bezier(0.2,0.6,0.2,1)' }}>
      {cur.children}
    </span>
  );
}

function HowItWorks() {
  const sim = useReceiptSim();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <section id="how" style={{ padding: isMobile ? '56px 0' : '80px 0', background: '#F4F4F5', borderBottom: '1px solid #E4E4E7' }}>
      <Container>
        {/* Layout: on wide screens, put heading + stepper in the left column and the animated card in the right column
            so the card starts at the same vertical position as the heading. On tablet/mobile it stacks. */}
        <div style={{
          display: isMobile ? 'block' : 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '1fr' : 'minmax(300px, 1fr) 1.15fr'),
          gap: isMobile ? 20 : 40,
          alignItems: 'start',
          marginBottom: isMobile ? 28 : 40,
        }}>
          <div>
            <div style={{
              fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#71717A', marginBottom: 14,
            }}>Como funciona</div>
            <h2 style={{
              fontFamily: "'Space Grotesk'", fontWeight: 500,
              fontSize: 'clamp(36px, 7vw, 64px)', lineHeight: 1.02,
              letterSpacing: '-0.024em', margin: 0, color: '#0A0A0A',
            }}>
              Uma transação.<br/>
              <span style={{ color: '#71717A' }}>Três passos simples.</span>
            </h2>

            {/* Stepper sits directly under the heading in the left column on wide screens */}
            <div style={{ marginTop: isMobile ? 20 : 28 }}>
              <Stepper step={sim.step} onJump={sim.jumpTo} />
            </div>
          </div>

          {/* Animated receipt card aligned to the top of the heading */}
          <div>
            <ReceiptCard step={sim.step} cycle={sim.cycle} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
