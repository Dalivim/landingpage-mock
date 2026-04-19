'use client';
import * as React from 'react';
import { Container } from './Atoms';
import { Icon } from './Icons';
import { useIsMobile, useIsTablet } from './useMedia';

// WhyChoose — psychological conversion section.
// Three cards, each: (1) uncomfortable real situation, (2) calm resolution,
// with a real-system-state mini-panel that makes the resolution tangible.

// ─────────────────────────────────────────────
// Mini system-state panels embedded in each card
// ─────────────────────────────────────────────

function StatePanel({ txId, amount, status, statusTone, lines, footer }: {
  txId: string; amount: string; status: string;
  statusTone: 'protected' | 'awaiting' | 'active' | 'released';
  lines?: Array<{ k: string; v: string; mono?: boolean; emphasis?: boolean }>;
  footer?: React.ReactNode;
}) {
  // A small, fixed-size rendering of a transaction state.
  // Reads as a real window into the Dalivim system — not an illustration.
  const tones: Record<string, { chip: string; label: string }> = {
    protected: { chip: '#1E4BA0', label: 'PROTEGIDO' },
    awaiting:  { chip: '#B45309', label: 'AGUARDANDO' },
    active:    { chip: '#1E4BA0', label: 'ATIVA' },
    released:  { chip: '#1E8A5A', label: 'LIBERADA' },
  };
  const tone = tones[statusTone] || tones.protected;
  return (
    <div style={{
      background: '#0A0A0A',
      color: '#fff',
      border: '1px solid #1C1C20',
      borderRadius: 10,
      padding: '18px 20px',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Top row: tx id + status chip */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em',
        }}>{txId}</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '4px 10px',
          border: `1px solid ${tone.chip}55`,
          background: `${tone.chip}14`,
          borderRadius: 9999,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          color: '#fff',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 9999, background: tone.chip }}/>
          {tone.label}
        </span>
      </div>
      {/* Amount */}
      <div style={{
        fontFamily: "'Space Grotesk'", fontWeight: 500,
        fontSize: 26, letterSpacing: '-0.018em', lineHeight: 1,
        marginBottom: 4,
      }}>{amount}</div>
      {/* Status subline */}
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
        {status}
      </div>
      {/* Detail lines */}
      {lines && lines.length > 0 && (
        <div style={{ borderTop: '1px solid #1C1C20', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {lines.map((ln, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 12, color: 'rgba(255,255,255,0.7)',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>{ln.k}</span>
              <span style={{
                color: ln.emphasis ? '#fff' : 'rgba(255,255,255,0.75)',
                fontFamily: ln.mono ? "ui-monospace, 'SF Mono', Menlo, monospace" : "'Inter'",
                letterSpacing: ln.mono ? '0.04em' : '0',
              }}>{ln.v}</span>
            </div>
          ))}
        </div>
      )}
      {footer && (
        <div style={{
          marginTop: 14, paddingTop: 12, borderTop: '1px solid #1C1C20',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 12, color: 'rgba(255,255,255,0.6)',
        }}>
          {footer}
        </div>
      )}
    </div>
  );
}

// Custom mini-glyph: two parties with Dalivim in the middle (for card 3).
// Inline SVG, not an icon set — reads as "system mediating".
function MediatorDiagram() {
  return (
    <div style={{
      background: '#0A0A0A',
      border: '1px solid #1C1C20',
      borderRadius: 10,
      padding: '22px 20px',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{
        fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em',
      }}>TX-9821-VRB3</div>

      <svg viewBox="0 0 320 68" width="100%" style={{ display: 'block' }}>
        {/* Left node: Comprador */}
        <circle cx="34" cy="34" r="14" fill="none" stroke="#fff" strokeWidth="1.2"/>
        <text x="34" y="38" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="12" fontWeight="500" fill="#fff">C</text>
        <text x="34" y="62" textAnchor="middle" fontFamily="'Inter'" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">COMPRADOR</text>

        {/* Left connector */}
        <line x1="52" y1="34" x2="130" y2="34" stroke="#1E4BA0" strokeWidth="1" strokeDasharray="3 3"/>

        {/* Center: Dalivim node — a square, the system-of-record shape */}
        <rect x="130" y="20" width="60" height="28" rx="3" fill="#1E4BA0" stroke="#1E4BA0"/>
        <text x="160" y="38" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="11" fontWeight="500" fill="#fff" letterSpacing="0.04em">DALIVIM</text>
        <text x="160" y="62" textAnchor="middle" fontFamily="'Inter'" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">CUSTÓDIA</text>

        {/* Right connector */}
        <line x1="190" y1="34" x2="268" y2="34" stroke="#1E4BA0" strokeWidth="1" strokeDasharray="3 3"/>

        {/* Right node: Vendedor */}
        <circle cx="286" cy="34" r="14" fill="none" stroke="#fff" strokeWidth="1.2"/>
        <text x="286" y="38" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="12" fontWeight="500" fill="#fff">V</text>
        <text x="286" y="62" textAnchor="middle" fontFamily="'Inter'" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.12em">VENDEDOR</text>
      </svg>

      <div style={{
        borderTop: '1px solid #1C1C20', paddingTop: 12,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: 'rgba(255,255,255,0.7)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.45)' }}>Acordo ativo</span>
        <span style={{
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          letterSpacing: '0.04em', color: '#fff',
        }}>2 partes · 1 contrato</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// The cards
// ─────────────────────────────────────────────

const FEAR_CARDS = [
  {
    number: '01',
    situation: 'Você pagou… e a outra pessoa sumiu?',
    resolution: 'Com Dalivim, os fundos só são liberados depois da entrega. Se algo der errado, o dinheiro volta pra você.',
    panel: (
      <StatePanel
        txId="TX-4193-KM7P"
        amount="R$ 1.500,00"
        status="Aguardando entrega · fundos retidos"
        statusTone="protected"
        lines={[
          { k: 'Método',   v: 'Pix',                  mono: false, emphasis: true },
          { k: 'Custódia', v: 'ativa · 3d restantes', mono: true },
          { k: 'Reembolso', v: 'disponível',          mono: true, emphasis: true },
        ]}
      />
    ),
  },
  {
    number: '02',
    situation: 'Já entregou o trabalho e teve que correr atrás do pagamento?',
    resolution: 'Aqui, o pagamento é garantido antes de você começar. Dinheiro na custódia é dinheiro confirmado.',
    panel: (
      <StatePanel
        txId="TX-2774-BN2L"
        amount="R$ 2.480,00"
        status="Pagamento recebido · aguardando entrega"
        statusTone="active"
        lines={[
          { k: 'Comprador', v: 'João P. — confirmado',   emphasis: true },
          { k: 'Recebido',  v: '17 abr · 14:22',         mono: true },
          { k: 'Status',    v: 'pronto para iniciar',    mono: true, emphasis: true },
        ]}
        footer={
          <>
            <span style={{
              width: 7, height: 7, borderRadius: 9999, background: '#1E8A5A',
              boxShadow: '0 0 0 3px rgba(30,138,90,0.22)',
            }}/>
            <span>Você pode começar o trabalho com segurança.</span>
          </>
        }
      />
    ),
  },
  {
    number: '03',
    situation: 'Fazer negócio com estranhos sempre é um risco.',
    resolution: 'Dalivim fica no meio, garantindo que os dois lados cumpram o combinado. Neutro. Verificável. Irreversível.',
    panel: <MediatorDiagram/>,
  },
];

// ─────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────

function WhyChoose() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <section style={{
      padding: isMobile ? '80px 0' : '140px 0 128px',
      background: '#fff',
      borderBottom: '1px solid #E4E4E7',
    }}>
      <Container style={{ maxWidth: 1200 }}>
        {/* Header */}
        <div style={{ maxWidth: 860, marginBottom: isMobile ? 48 : 80 }}>
          <div style={{
            fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#71717A', marginBottom: 20,
          }}>O problema real</div>
          <h2 style={{
            fontFamily: "'Space Grotesk'", fontWeight: 500,
            fontSize: 'clamp(34px, 6.5vw, 72px)',
            lineHeight: 1.02, letterSpacing: '-0.028em',
            margin: '0 0 20px', color: '#0A0A0A',
          }}>
            O problema nunca foi o pagamento.<br/>
            <span style={{ color: '#71717A' }}>Foi confiar no outro lado.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter'", fontSize: 17, lineHeight: 1.55,
            color: '#52525B', margin: 0, maxWidth: 620,
          }}>
            Acordos não falham por falta de boas intenções. Falham por falta de garantias.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {FEAR_CARDS.map((c) => (
            <article
              key={c.number}
              style={{
                background: '#FAFAFA',
                border: '1px solid #E4E4E7',
                borderRadius: 14,
                padding: 28,
                display: 'flex', flexDirection: 'column', gap: 24,
                transition: 'border-color 220ms cubic-bezier(0.2,0.6,0.2,1), background 220ms, transform 220ms',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0A0A0A';
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E4E4E7';
                e.currentTarget.style.background = '#FAFAFA';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Card header: number + uncomfortable situation */}
              <div>
                <div style={{
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 11, color: '#A1A1AA', letterSpacing: '0.12em',
                  marginBottom: 18,
                }}>{c.number}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk'", fontWeight: 500,
                  fontSize: 24, lineHeight: 1.18, letterSpacing: '-0.014em',
                  margin: 0, color: '#0A0A0A',
                  textWrap: 'balance',
                }}>
                  {c.situation}
                </h3>
              </div>

              {/* System state panel — the proof */}
              {c.panel}

              {/* Resolution */}
              <div style={{
                borderTop: '1px solid #E4E4E7', paddingTop: 20,
                display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 9999,
                  background: '#0A0A0A', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon name="check" size={12} strokeWidth={2.5}/>
                </div>
                <p style={{
                  fontFamily: "'Inter'", fontSize: 15, lineHeight: 1.55,
                  color: '#27272A', margin: 0,
                }}>
                  {c.resolution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// UseCases replaced by Scenarios.jsx

export { WhyChoose };
