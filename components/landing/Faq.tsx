'use client';
import * as React from 'react';
import { Container } from './Atoms';
import { useIsMobile } from './useMedia';

// FAQ — conversion-focused, product-driven.
// Single-expand accordion, thin separators, smooth height animation,
// arrow icon rotation, open item visually distinct (ink text + spacing grows).

function Faq() {
  const isMobile = useIsMobile();
  const items = [
    // 1. Risk / safety
    {
      q: 'Como sei que meu dinheiro está seguro?',
      a: 'Os fundos ficam em conta segregada, separada do patrimônio da Dalivim. Nenhum dinheiro transita pela nossa operação — ele só se move quando a entrega é confirmada ou o reembolso é acionado.',
    },
    // 2. Money handling
    {
      q: 'Onde o dinheiro fica durante a transação?',
      a: 'Em custódia, em uma conta de pagamento segregada auditável. Fica visível para as duas partes e bloqueado até a liberação ou o reembolso.',
    },
    // 3. How it works
    {
      q: 'O que acontece se uma das partes não cumprir?',
      a: 'O dinheiro não sai da custódia. Ele volta integralmente para quem pagou. Se houver divergência, nossa equipe analisa as evidências e decide em até 48 horas.',
    },
    // 4. Edge cases
    {
      q: 'Posso usar para serviços contínuos ou parcelados?',
      a: 'Sim. Você pode criar transações em etapas — cada entrega libera uma parte do pagamento. O restante continua retido até a próxima confirmação.',
    },
    // 5. Trust / fees
    {
      q: 'Quanto custa usar a Dalivim?',
      a: 'Nada por transação criada ou cancelada. Uma taxa pequena é cobrada apenas na liberação bem-sucedida. Sem mensalidade, sem cartão, sem setup.',
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" style={{ padding: isMobile ? '80px 0' : '160px 0', background: '#fff', borderTop: '1px solid #E4E4E7' }}>
      <Container style={{ maxWidth: 960 }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: isMobile ? 24 : 80,
          alignItems: 'start',
          marginBottom: isMobile ? 48 : 96,
        }}>
          <div>
            <div style={{
              fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#71717A', marginBottom: 16,
            }}>Sem surpresas</div>
            <h2 style={{
              fontFamily: "'Space Grotesk'", fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 64px)',
              letterSpacing: '-0.024em', lineHeight: 1,
              margin: 0, color: '#0A0A0A',
            }}>
              Antes de você seguir.
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Inter'", fontSize: 16, lineHeight: 1.6,
              color: '#52525B', margin: 0, maxWidth: 440,
            }}>
              Regras simples. Sem marketing. Se você ler isso e algo ainda parecer escondido,
              é porque não existe.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div>
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <FaqRow
                key={i}
                item={f}
                index={i}
                total={items.length}
                isOpen={isOpen}
                onToggle={() => setOpen(isOpen ? -1 : i)}
              />
            );
          })}
        </div>

        {/* Footer escape hatch */}
        <div style={{
          marginTop: isMobile ? 56 : 80,
          paddingTop: 32,
          borderTop: '1px solid #E4E4E7',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, flexWrap: 'wrap',
          fontFamily: "'Inter'", fontSize: 14, color: '#71717A',
        }}>
          <span>Ainda tem dúvidas?</span>
          <a href="mailto:contato@dalivim.com.br" style={{
            color: '#0A0A0A', textDecoration: 'none',
            borderBottom: '1px solid #0A0A0A',
            paddingBottom: 2, fontWeight: 500,
          }}>Fale conosco →</a>
        </div>
      </Container>
    </section>
  );
}

function FaqRow({ item, index, total, isOpen, onToggle }: {
  item: { q: string; a: string };
  index: number;
  total: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [hover, setHover] = React.useState(false);
  const isLast = index === total - 1;

  return (
    <div
      style={{
        // Subtle separators, not heavy borders
        borderBottom: isLast ? 'none' : '1px solid rgba(228, 228, 231, 0.7)',
        transition: 'background 280ms cubic-bezier(0.2,0.6,0.2,1)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 32px',
          alignItems: 'center',
          gap: 24,
          // Grow spacing when open to visually distinguish it
          padding: isOpen ? '36px 0 20px' : '30px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'padding 320ms cubic-bezier(0.2,0.6,0.2,1)',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: 'clamp(20px, 2.2vw, 24px)',
          letterSpacing: '-0.014em', lineHeight: 1.3,
          color: isOpen ? '#0A0A0A' : hover ? '#0A0A0A' : '#27272A',
          transition: 'color 220ms',
        }}>{item.q}</span>

        <span
          aria-hidden
          style={{
            justifySelf: 'end',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, borderRadius: 9999,
            background: isOpen ? '#0A0A0A' : 'transparent',
            border: isOpen ? '1px solid #0A0A0A' : '1px solid #E4E4E7',
            color: isOpen ? '#fff' : '#0A0A0A',
            transition: 'all 280ms cubic-bezier(0.2,0.6,0.2,1)',
          }}
        >
          {/* Plus → cross — rotates 45° on open */}
          <svg width="14" height="14" viewBox="0 0 16 16"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 320ms cubic-bezier(0.2,0.6,0.2,1)',
            }}>
            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      {/* Smooth height + opacity animation via grid-template-rows */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
          transition: 'grid-template-rows 380ms cubic-bezier(0.2,0.6,0.2,1), opacity 260ms cubic-bezier(0.2,0.6,0.2,1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            paddingBottom: 36, paddingRight: 8,
            fontFamily: "'Inter'", fontSize: 16, lineHeight: 1.65,
            color: '#52525B', maxWidth: 720,
            transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
            transition: 'transform 380ms cubic-bezier(0.2,0.6,0.2,1)',
          }}>
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Faq };
