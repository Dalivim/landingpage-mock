'use client';

import { useState } from 'react';
import { Container, Eyebrow } from './Atoms';

export default function Faq() {
  const items = [
    { q: 'Como sei que meu dinheiro está seguro?',
      a: 'Os fundos ficam em conta segregada, separada do patrimônio da Dalivim. Nenhum dinheiro transita pela nossa operação — ele só se move quando a entrega é confirmada ou o reembolso é acionado.' },
    { q: 'O que acontece se uma das partes não cumprir?',
      a: 'O dinheiro não sai da custódia. Volta integralmente para quem pagou. Se houver divergência, nossa equipe analisa as evidências e decide em até 48 horas.' },
    { q: 'Posso usar para serviços contínuos ou parcelados?',
      a: 'Sim. Você pode criar transações em etapas — cada entrega libera uma parte do pagamento. O restante continua retido até a próxima confirmação.' },
    { q: 'Quanto custa usar a Dalivim?',
      a: 'Nada por transação criada ou cancelada. Uma taxa pequena é cobrada apenas na liberação bem-sucedida. Sem mensalidade, sem cartão, sem setup.' },
    { q: 'E se eu for vítima de golpe?',
      a: 'Se a entrega não aconteceu ou foi diferente do combinado, você abre disputa e o dinheiro volta. A Dalivim é feita exatamente para esse cenário.' },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: '140px 0', background: '#fff', borderTop: '1px solid #E4E4E7' }}>
      <Container maxWidth={960}>
        <div className="dv-faq-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr',
          gap: 64, alignItems: 'start', marginBottom: 72,
        }}>
          <div>
            <Eyebrow>Sem surpresas</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              letterSpacing: '-0.022em', lineHeight: 1.05,
              margin: '14px 0 0', color: '#0A0A0A',
            }}>Antes de você seguir.</h2>
          </div>
          <p style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 16, lineHeight: 1.6,
            color: '#52525B', margin: 0, maxWidth: 440,
          }}>
            Regras simples. Sem marketing. Se algo parecer escondido, é porque não existe.
          </p>
        </div>
        <div>
          {items.map((f, i) => {
            const isOpen = open === i;
            const isLast = i === items.length - 1;
            return (
              <div key={i} style={{ borderBottom: isLast ? 'none' : '1px solid rgba(228,228,231,0.7)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%', display: 'grid',
                    gridTemplateColumns: '1fr 32px',
                    alignItems: 'center', gap: 20,
                    padding: isOpen ? '32px 0 18px' : '26px 0',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left', transition: 'padding 320ms cubic-bezier(0.2,0.6,0.2,1)',
                  }}
                >
                  <span className="dv-faq-q" style={{
                    fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    letterSpacing: '-0.012em', lineHeight: 1.3, color: '#0A0A0A',
                  }}>{f.q}</span>
                  <span style={{
                    justifySelf: 'end',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32, borderRadius: 9999,
                    background: isOpen ? '#0A0A0A' : 'transparent',
                    border: '1px solid ' + (isOpen ? '#0A0A0A' : '#E4E4E7'),
                    color: isOpen ? '#fff' : '#0A0A0A',
                    transition: 'all 280ms cubic-bezier(0.2,0.6,0.2,1)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 16 16" style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 320ms cubic-bezier(0.2,0.6,0.2,1)',
                    }}>
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  opacity: isOpen ? 1 : 0,
                  transition: 'grid-template-rows 380ms cubic-bezier(0.2,0.6,0.2,1), opacity 260ms',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      paddingBottom: 32, paddingRight: 48,
                      fontFamily: "var(--font-body), sans-serif", fontSize: 16, lineHeight: 1.65,
                      color: '#52525B', maxWidth: 680,
                    }}>{f.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
