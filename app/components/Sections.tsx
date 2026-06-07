'use client';

import { Container, Eyebrow } from './Atoms';
import Icon from './Icon';

// ---------- ILLUSTRATIONS ----------
function IlloFreelancer({ accent = '#0A0A0A' }) {
  return (
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <g stroke="#0A0A0A" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="28" y="30" width="164" height="86" rx="4" fill="#fff"/>
        <line x1="28" y1="44" x2="192" y2="44"/>
        <circle cx="36" cy="37" r="1.3" fill="#0A0A0A" stroke="none"/>
        <circle cx="42" cy="37" r="1.3" fill="#0A0A0A" stroke="none"/>
        <circle cx="48" cy="37" r="1.3" fill="#0A0A0A" stroke="none"/>
        <rect x="40" y="54" width="62" height="6" rx="1" fill={accent} stroke="none"/>
        <rect x="40" y="66" width="96" height="3" rx="1" fill="#D4D4D8" stroke="none"/>
        <rect x="40" y="73" width="72" height="3" rx="1" fill="#D4D4D8" stroke="none"/>
        <rect x="40" y="88" width="34" height="20" rx="2"/>
        <rect x="78" y="88" width="34" height="20" rx="2"/>
        <rect x="116" y="88" width="34" height="20" rx="2"/>
      </g>
      <g transform="translate(162 108)">
        <path d="M0 0 L0 12 L3.2 9 L6 14 L8 13 L5.3 8 L9.5 7 Z" fill="#0A0A0A"/>
      </g>
    </svg>
  );
}
function IlloPessoa({ accent = '#0A0A0A' }) {
  return (
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <g strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M34 38 h108 a10 10 0 0 1 10 10 v14 a10 10 0 0 1 -10 10 h-92 l-10 8 v-8 a10 10 0 0 1 -10 -10 v-14 a10 10 0 0 1 10 -10 z" fill="#fff" stroke="#0A0A0A"/>
        <rect x="50" y="50" width="74" height="4" rx="1" fill="#D4D4D8" stroke="none"/>
        <rect x="50" y="58" width="50" height="4" rx="1" fill="#D4D4D8" stroke="none"/>
        <path d="M76 80 h88 a10 10 0 0 1 10 10 v10 a10 10 0 0 1 -10 10 h-78 l-10 8 v-8 h-0 a10 10 0 0 1 -10 -10 v-10 a10 10 0 0 1 10 -10 z" fill="#0A0A0A" stroke="#0A0A0A"/>
        <rect x="92" y="92" width="60" height="4" rx="1" fill="#fff" stroke="none"/>
        <rect x="92" y="100" width="42" height="4" rx="1" fill="#fff" stroke="none"/>
      </g>
      <g transform="translate(180 30)">
        <circle cx="0" cy="0" r="12" fill={accent} stroke="none"/>
        <text x="0" y="5" fontFamily="Space Grotesk, serif" fontSize="15" fontWeight="600" textAnchor="middle" fill="#fff">?</text>
      </g>
    </svg>
  );
}
function IlloServicos({ accent = '#0A0A0A' }) {
  return (
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <g stroke="#0A0A0A" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 18 h78 l18 18 v82 h-96 z" fill="#fff"/>
        <path d="M118 18 v18 h18"/>
        <line x1="52" y1="50" x2="110" y2="50"/>
        <line x1="52" y1="60" x2="124" y2="60"/>
        <line x1="52" y1="70" x2="118" y2="70"/>
        <path d="M52 92 q6 -8 12 0 t12 0 t12 0 t12 0"/>
        <circle cx="120" cy="94" r="4"/>
      </g>
      <g transform="translate(162 78) rotate(8)">
        <rect x="-34" y="-12" width="68" height="24" fill="none" stroke={accent} strokeWidth="1.2" strokeDasharray="2 2"/>
        <text x="0" y="4" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="2" textAnchor="middle" fill={accent} fontWeight="600">PROPOSTA</text>
      </g>
    </svg>
  );
}
function IlloAcordo({ accent = '#0A0A0A' }) {
  return (
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <g strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="18" y="48" width="58" height="40" rx="4" stroke="#0A0A0A" fill="#fff"/>
        <circle cx="28" cy="60" r="3.5" stroke="#0A0A0A"/>
        <line x1="38" y1="60" x2="68" y2="60" stroke="#0A0A0A"/>
        <line x1="26" y1="74" x2="60" y2="74" stroke="#D4D4D8"/>
        <rect x="144" y="48" width="58" height="40" rx="4" fill="#0A0A0A" stroke="#0A0A0A"/>
        <circle cx="154" cy="60" r="3.5" fill="#fff" stroke="#fff"/>
        <line x1="164" y1="60" x2="192" y2="60" stroke="#fff"/>
        <line x1="152" y1="74" x2="184" y2="74" stroke="#52525B"/>
        <line x1="76" y1="68" x2="96" y2="68" stroke="#0A0A0A" strokeDasharray="3 3"/>
        <line x1="124" y1="68" x2="144" y2="68" stroke="#0A0A0A" strokeDasharray="3 3"/>
        <circle cx="110" cy="68" r="12" fill="#fff" stroke="#0A0A0A"/>
        <path d="M104 68 l4 4 l8 -8" stroke={accent} strokeWidth="1.8"/>
      </g>
    </svg>
  );
}

// ---------- HOW IT WORKS (scenarios grid) ----------
export function HowItWorks() {
  const cards = [
    { n: '01', eyebrow: 'Para freelancers',     body: 'Criando um site para um cliente.',             Illo: IlloFreelancer, tint: '#F5F4FF', accent: '#1E4BA0' },
    { n: '02', eyebrow: 'Pessoa a pessoa',      body: 'Comprando algo de um desconhecido.',           Illo: IlloPessoa,     tint: '#FFF4EF', accent: '#C0450F' },
    { n: '03', eyebrow: 'Serviços contratados', body: 'Contratando um especialista para um projeto.', Illo: IlloServicos,   tint: '#F0F7F3', accent: '#16794C' },
    { n: '04', eyebrow: 'Acordo direto',        body: 'Fechando um acordo direto com alguém.',        Illo: IlloAcordo,     tint: '#F4F4F5', accent: '#27272A' },
  ];
  return (
    <section id="how" style={{ padding: '140px 0', background: '#fff', color: '#0A0A0A' }}>
      <Container>
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <Eyebrow>Seus cenários</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display), serif", fontWeight: 400,
            fontSize: 'clamp(36px, 5.2vw, 68px)',
            letterSpacing: '-0.022em', lineHeight: 1.02,
            margin: '18px 0 20px', color: '#0A0A0A', textWrap: 'balance',
          }}>
            Reconheça sua situação.<br/>
            <span style={{ color: '#A1A1AA' }}>A <span style={{ color: '#1E4BA0' }}>Dalivim</span> cabe aqui.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 16, lineHeight: 1.6,
            color: '#71717A', margin: 0, maxWidth: 520,
          }}>
            Selecione o contexto que descreve o seu próximo acordo. O fluxo de custódia se adapta ao tipo.
          </p>
        </div>
        <div className="dv-scenarios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {cards.map(({ n, eyebrow, body, Illo, tint, accent }) => (
            <button key={n} type="button" style={{
              all: 'unset', cursor: 'pointer',
              display: 'flex', flexDirection: 'column',
              background: '#fff', border: '1px solid #E4E4E7', borderRadius: 16,
              overflow: 'hidden',
              transition: 'all 260ms cubic-bezier(0.2, 0.6, 0.2, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = accent;
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = `0 18px 40px -22px ${accent}40, 0 2px 0 ${accent}12`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E4E4E7';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                background: tint, borderBottom: '1px solid #E4E4E7',
                position: 'relative', aspectRatio: '1 / 0.8',
                padding: '18px 20px', overflow: 'hidden',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  backgroundImage: 'linear-gradient(rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                  maskImage: 'linear-gradient(180deg, transparent 0%, black 40%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 40%, black 100%)',
                }}/>
                <span style={{
                  position: 'absolute', top: 14, left: 18,
                  fontFamily: 'ui-monospace, monospace', fontSize: 11,
                  letterSpacing: '0.14em', color: accent, fontWeight: 500, zIndex: 2,
                }}>{n}</span>
                <div style={{ position: 'absolute', inset: '28px 14px 14px', zIndex: 2 }}>
                  <Illo accent={accent}/>
                </div>
              </div>
              <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    fontFamily: "var(--font-body), sans-serif", fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: accent,
                  }}>{eyebrow}</div>
                </div>
                <div style={{
                  fontFamily: "var(--font-display), serif", fontSize: 17,
                  lineHeight: 1.35, letterSpacing: '-0.012em',
                  color: '#0A0A0A', textWrap: 'pretty',
                }}>{body}</div>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---------- RECEIPTS ----------
function TxChip({ label, color = '#7FD1A8' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 9px', background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)', borderRadius: 9999,
      fontFamily: "var(--font-body), sans-serif", fontSize: 10, fontWeight: 600,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 9999, background: color, boxShadow: `0 0 0 3px ${color}22` }}/>
      {label}
    </span>
  );
}
function ReceiptRow({ k, v, vColor, vWeight }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 0', borderBottom: '1px solid #1F1F23', fontSize: 12.5,
    }}>
      <span style={{ color: '#8A8A92' }}>{k}</span>
      <span style={{
        color: vColor || '#fff', fontWeight: vWeight || 400,
        fontFamily: typeof v === 'string' && /\d/.test(v) ? 'ui-monospace, monospace' : "var(--font-body), sans-serif",
      }}>{v}</span>
    </div>
  );
}
function ReceiptProtegido() {
  return (
    <div style={{
      background: '#0A0A0A', color: '#fff',
      border: '1px solid #1F1F23', borderRadius: 16, padding: '18px 20px',
      fontFamily: "var(--font-body), sans-serif",
      boxShadow: '0 20px 40px -24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, letterSpacing: '0.12em', color: '#8A8A92' }}>TX-4193-KM7P</span>
        <TxChip label="Protegido" color="#1E4BA0"/>
      </div>
      <div style={{
        fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
        fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums', marginBottom: 6,
      }}>R$ 1.500,00</div>
      <div style={{ fontSize: 12, color: '#8A8A92', marginBottom: 18 }}>Aguardando entrega · fundos retidos</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid #1F1F23' }}>
        <ReceiptRow k="Método" v="Pix"/>
        <ReceiptRow k="Custódia" v="ativa · 3d restantes"/>
        <ReceiptRow k="Reembolso" v="disponível" vColor="#7FD1A8"/>
      </div>
    </div>
  );
}
function ReceiptAtiva() {
  return (
    <div style={{
      background: '#0A0A0A', color: '#fff',
      border: '1px solid #1F1F23', borderRadius: 16, padding: '18px 20px',
      fontFamily: "var(--font-body), sans-serif",
      boxShadow: '0 20px 40px -24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, letterSpacing: '0.12em', color: '#8A8A92' }}>TX-2774-BN2L</span>
        <TxChip label="Ativa" color="#7FD1A8"/>
      </div>
      <div style={{
        fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
        fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums', marginBottom: 6,
      }}>R$ 2.480,00</div>
      <div style={{ fontSize: 12, color: '#8A8A92', marginBottom: 18 }}>Pagamento recebido · aguardando entrega</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid #1F1F23' }}>
        <ReceiptRow k="Comprador" v={<>João P.&nbsp;—&nbsp;<span style={{ color: '#7FD1A8' }}>confirmado</span></>}/>
        <ReceiptRow k="Recebido" v="17 abr · 14:22"/>
        <ReceiptRow k="Status" v="pronto para iniciar" vColor="#fff" vWeight={500}/>
      </div>
      <div style={{
        marginTop: 16, padding: '10px 12px',
        background: 'rgba(127,209,168,0.08)', border: '1px solid rgba(127,209,168,0.18)',
        borderRadius: 10, fontSize: 12, color: '#B8E6CC',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 9999, background: '#7FD1A8' }}/>
        Você pode começar o trabalho com segurança.
      </div>
    </div>
  );
}
function ReceiptAcordo() {
  return (
    <div style={{
      background: '#0A0A0A', color: '#fff',
      border: '1px solid #1F1F23', borderRadius: 16, padding: '18px 20px 22px',
      fontFamily: "var(--font-body), sans-serif",
      boxShadow: '0 20px 40px -24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, letterSpacing: '0.12em', color: '#8A8A92' }}>TX-9821-VRB3</span>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center', position: 'relative', marginBottom: 26,
      }}>
        <div style={{
          position: 'absolute', left: '15%', right: '15%', top: 18, height: 1.5,
          backgroundImage: 'repeating-linear-gradient(90deg, #3A3A42 0, #3A3A42 4px, transparent 4px, transparent 8px)',
          zIndex: 0,
        }}/>
        {[
          { big: 'C', label: 'Comprador', fill: '#0A0A0A', textColor: '#fff', border: '1.5px solid #3A3A42' },
          { big: 'Dalivim', label: 'Custódia', fill: '#1E4BA0', textColor: '#fff', border: 'none', pill: true },
          { big: 'V', label: 'Vendedor', fill: '#0A0A0A', textColor: '#fff', border: '1.5px solid #3A3A42' },
        ].map((n, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
            <span style={{
              ...(n.pill ? {
                padding: '6px 14px', borderRadius: 9999,
                fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
                fontSize: 13, letterSpacing: '0.02em',
              } : {
                width: 36, height: 36, borderRadius: 9999,
                fontFamily: "var(--font-display), sans-serif", fontWeight: 500, fontSize: 15,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }),
              background: n.fill, color: n.textColor, border: n.border,
            }}>{n.big}</span>
            <span style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: 9.5, fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A8A92',
            }}>{n.label}</span>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid #1F1F23', paddingTop: 12,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: '#A1A1AA',
      }}>
        <span>Acordo ativo</span>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: '#fff' }}>2 partes &nbsp;·&nbsp; 1 contrato</span>
      </div>
    </div>
  );
}

// ---------- SCENARIOS ----------
export function Scenarios() {
  const cases = [
    {
      n: '01',
      fear: <>Você pagou… e a<br/>outra pessoa sumiu?</>,
      Receipt: ReceiptProtegido,
      resolution: 'Com Dalivim, os fundos só são liberados depois da entrega. Se algo der errado, o dinheiro volta pra você.',
    },
    {
      n: '02',
      fear: <>Já entregou o trabalho e teve<br/>que correr atrás do pagamento?</>,
      Receipt: ReceiptAtiva,
      resolution: 'Aqui, o pagamento é garantido antes de você começar. Dinheiro na custódia é dinheiro confirmado.',
    },
    {
      n: '03',
      fear: <>Fazer negócio com<br/>estranhos sempre é um risco.</>,
      Receipt: ReceiptAcordo,
      resolution: <>Dalivim fica no meio, garantindo que os dois lados cumpram o combinado. <span style={{ color: '#0A0A0A', fontWeight: 500 }}>Neutro. Verificável. Irreversível.</span></>,
    },
  ];
  return (
    <section id="uses" style={{ padding: '140px 0', background: '#F4F4F5' }}>
      <Container>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <Eyebrow>Casos de uso</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
            fontSize: 'clamp(34px, 4.4vw, 54px)',
            letterSpacing: '-0.022em', lineHeight: 1.05,
            margin: '16px 0 16px', color: '#0A0A0A', textWrap: 'balance',
          }}>
            Situações em que ninguém devia<br/>
            <span style={{ color: '#A1A1AA' }}>confiar só na palavra.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 16, color: '#52525B',
            margin: 0, maxWidth: 520, lineHeight: 1.55,
          }}>
            Três formas reais de ser enganado. Cada uma com o mesmo final — desde que a Dalivim esteja no meio.
          </p>
        </div>
        <div className="dv-uses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {cases.map(({ n, fear, Receipt, resolution }) => (
            <article key={n} style={{
              background: '#fff', border: '1px solid #E4E4E7', borderRadius: 20,
              padding: 28, display: 'flex', flexDirection: 'column', gap: 22,
            }}>
              <span style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 11,
                letterSpacing: '0.18em', color: '#A1A1AA', fontWeight: 500,
              }}>{n}</span>
              <h3 style={{
                fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
                fontSize: 'clamp(19px, 1.6vw, 22px)',
                letterSpacing: '-0.014em', lineHeight: 1.25,
                margin: 0, color: '#0A0A0A',
              }}>{fear}</h3>
              <Receipt/>
              <div style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                paddingTop: 14, borderTop: '1px solid #E4E4E7', marginTop: 'auto',
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 9999,
                  background: '#0A0A0A', color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 1,
                }}>
                  <Icon name="check" size={12} strokeWidth={2.5}/>
                </span>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: 14, lineHeight: 1.55,
                  color: '#52525B', margin: 0,
                }}>{resolution}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
export function Testimonials() {
  const quotes = [
    { q: 'Perdi R$ 3.500 uma vez com um cliente que sumiu. Hoje eu só fecho se for pela Dalivim.',
      name: 'Helena Ribeiro', role: 'Designer freelancer · SP' },
    { q: 'Vendi uma câmera de R$ 8 mil pra um cara do outro estado. Dormi tranquilo porque o dinheiro estava travado.',
      name: 'Caio Almeida', role: 'Fotógrafo · RJ' },
    { q: 'A gente aluga nossa casa de praia por temporada. Antes era só fé. Agora é Dalivim.',
      name: 'Marina e Tiago', role: 'Proprietários · Florianópolis' },
  ];
  return (
    <section style={{
      padding: '120px 0', background: '#FAFAFA',
      borderTop: '1px solid #E4E4E7', borderBottom: '1px solid #E4E4E7',
    }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>Quem já usa</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.022em', lineHeight: 1.1,
            margin: '14px 0 0', color: '#0A0A0A',
          }}>
            Gente que já perdeu dinheiro — <span style={{ color: '#A1A1AA' }}>e não perde mais.</span>
          </h2>
        </div>
        <div style={{
          display: 'grid', gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {quotes.map((t, i) => (
            <figure key={i} style={{
              margin: 0, background: '#fff', border: '1px solid #E4E4E7',
              borderRadius: 20, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 24, minHeight: 280,
            }}>
              <blockquote style={{
                margin: 0, flex: 1,
                fontFamily: "var(--font-display), sans-serif", fontWeight: 400,
                fontSize: 19, lineHeight: 1.4, letterSpacing: '-0.012em',
                color: '#0A0A0A',
              }}>&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif", fontWeight: 500, fontSize: 14, color: '#0A0A0A',
                }}>{t.name}</div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: 13, color: '#71717A', marginTop: 2,
                }}>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
