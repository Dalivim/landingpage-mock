'use client';
import * as React from 'react';
import { Container, Button } from './Atoms';
import { Icon } from './Icons';
import { useIsMobile, useIsTablet } from './useMedia';

// Scenarios — "this is my situation" recognition grid.
// Each card is a flat, minimal UI-style illustration rendered in SVG.
// Clickable; subtle hover lift + border darken. No stock photos, no cartoons.

function ScenarioArt({ kind }: { kind: string }) {
  // All illustrations share the same drawing vocabulary:
  // pale paper rectangles, hairline borders, monochrome with a single ink line.
  // Rendered in SVG so they stay crisp at any size.
  const common = {
    stroke: '#0A0A0A',
    strokeWidth: 1,
    vectorEffect: 'non-scaling-stroke',
  };
  const muted = '#71717A';
  const ink = '#0A0A0A';
  const paper = '#FAFAFA';
  const line = '#D4D4D8';

  if (kind === 'website') {
    return (
      <svg viewBox="0 0 260 140" style={{ width: '100%', height: '100%' }}>
        {/* Browser-ish frame, offset */}
        <g transform="translate(28 22)">
          <rect x="0" y="0" width="180" height="96" rx="4" fill="#fff" stroke={line}/>
          <line x1="0" y1="16" x2="180" y2="16" stroke={line}/>
          <circle cx="8" cy="8" r="1.6" fill={line}/>
          <circle cx="14" cy="8" r="1.6" fill={line}/>
          <circle cx="20" cy="8" r="1.6" fill={line}/>
          {/* page skeleton */}
          <rect x="10" y="26" width="60" height="6" rx="1" fill={ink}/>
          <rect x="10" y="36" width="100" height="3" rx="1" fill={line}/>
          <rect x="10" y="42" width="78" height="3" rx="1" fill={line}/>
          <rect x="10" y="56" width="40" height="24" rx="2" fill={paper} stroke={line}/>
          <rect x="56" y="56" width="40" height="24" rx="2" fill={paper} stroke={line}/>
          <rect x="102" y="56" width="40" height="24" rx="2" fill={paper} stroke={line}/>
        </g>
        {/* cursor hint */}
        <path d="M212 92 l6 2 l-2.4 1.6 l1.4 3.2 l-1.8 0.8 l-1.4 -3.2 l-2.4 1.6 z" fill={ink}/>
      </svg>
    );
  }

  if (kind === 'stranger') {
    return (
      <svg viewBox="0 0 260 140" style={{ width: '100%', height: '100%' }}>
        {/* Two chat bubbles — buyer/seller, unknown context */}
        <g transform="translate(24 22)">
          <rect x="0" y="4" width="118" height="32" rx="12" fill="#fff" stroke={line}/>
          <rect x="10" y="14" width="70" height="3" rx="1" fill={line}/>
          <rect x="10" y="22" width="48" height="3" rx="1" fill={line}/>

          <rect x="90" y="52" width="118" height="38" rx="12" fill={ink}/>
          <rect x="102" y="63" width="72" height="3" rx="1" fill="#fff" opacity="0.6"/>
          <rect x="102" y="71" width="94" height="3" rx="1" fill="#fff" opacity="0.9"/>
          <rect x="102" y="79" width="52" height="3" rx="1" fill="#fff" opacity="0.4"/>

          {/* small "?" avatar */}
          <circle cx="218" cy="20" r="12" fill="#fff" stroke={line}/>
          <text x="218" y="25" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="500" fontSize="14" fill={muted}>?</text>
        </g>
      </svg>
    );
  }

  if (kind === 'specialist') {
    return (
      <svg viewBox="0 0 260 140" style={{ width: '100%', height: '100%' }}>
        {/* Contract / proposal card with signature line */}
        <g transform="translate(40 16)">
          <rect x="0" y="0" width="124" height="108" rx="4" fill="#fff" stroke={line}/>
          <rect x="14" y="16" width="44" height="5" rx="1" fill={ink}/>
          <rect x="14" y="28" width="90" height="3" rx="1" fill={line}/>
          <rect x="14" y="34" width="78" height="3" rx="1" fill={line}/>
          <rect x="14" y="40" width="86" height="3" rx="1" fill={line}/>
          {/* fee block */}
          <rect x="14" y="54" width="96" height="22" rx="3" fill={paper} stroke={line}/>
          <rect x="20" y="60" width="24" height="4" rx="1" fill={muted}/>
          <rect x="20" y="68" width="40" height="5" rx="1" fill={ink}/>
          {/* signature line */}
          <line x1="14" y1="92" x2="70" y2="92" stroke={ink} strokeWidth="1.2"/>
          <path d="M16 89 q 8 -6 14 0 t 14 0 t 14 0" fill="none" stroke={ink} strokeWidth="1"/>
          <rect x="80" y="88" width="26" height="6" rx="1" fill={line}/>
        </g>
        {/* stamp corner */}
        <g transform="translate(176 88)">
          <rect x="0" y="0" width="44" height="18" rx="2" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="2 2"/>
          <text x="22" y="12" textAnchor="middle" fontFamily="Inter" fontWeight="500" fontSize="8" letterSpacing="0.1em" fill={ink}>PROPOSTA</text>
        </g>
      </svg>
    );
  }

  if (kind === 'direct') {
    return (
      <svg viewBox="0 0 260 140" style={{ width: '100%', height: '100%' }}>
        {/* Two nodes connected by a line — direct agreement */}
        <g transform="translate(20 30)">
          <rect x="0" y="10" width="80" height="56" rx="4" fill="#fff" stroke={line}/>
          <circle cx="20" cy="28" r="7" fill={paper} stroke={line}/>
          <rect x="34" y="25" width="36" height="3" rx="1" fill={ink}/>
          <rect x="34" y="32" width="28" height="3" rx="1" fill={line}/>
          <rect x="12" y="48" width="56" height="10" rx="2" fill={paper} stroke={line}/>

          <rect x="140" y="10" width="80" height="56" rx="4" fill="#fff" stroke={line}/>
          <circle cx="160" cy="28" r="7" fill={ink}/>
          <rect x="174" y="25" width="36" height="3" rx="1" fill={ink}/>
          <rect x="174" y="32" width="28" height="3" rx="1" fill={line}/>
          <rect x="152" y="48" width="56" height="10" rx="2" fill={ink}/>

          {/* connector line with a midpoint */}
          <line x1="80" y1="38" x2="140" y2="38" stroke={ink} strokeWidth="1"/>
          <rect x="102" y="32" width="16" height="12" rx="2" fill="#fff" stroke={ink}/>
          <path d="M106 38 l3 2 l5 -4" fill="none" stroke={ink} strokeWidth="1.2"/>
        </g>
      </svg>
    );
  }

  return null;
}

function ScenarioCard({ scenario, idx, selected, onSelect }: {
  scenario: { kind: string; label: string; title: string };
  idx: number;
  selected: boolean;
  onSelect: (i: number) => void;
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => onSelect(idx)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        background: '#fff',
        border: `1px solid ${selected ? '#0A0A0A' : hover ? '#A1A1AA' : '#E4E4E7'}`,
        borderRadius: 14,
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        transform: hover || selected ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 260ms cubic-bezier(0.2,0.6,0.2,1), border-color 200ms, background 200ms',
        overflow: 'hidden',
        minHeight: 280,
      }}
    >
      {/* Illustration region */}
      <div style={{
        position: 'relative',
        background: '#FAFAFA',
        borderBottom: '1px solid #E4E4E7',
        padding: '24px 24px 16px',
        height: 168,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ScenarioArt kind={scenario.kind}/>
        {/* subtle category index */}
        <div style={{
          position: 'absolute', top: 14, left: 16,
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: 11, color: '#A1A1AA', letterSpacing: '0.08em',
        }}>0{idx + 1}</div>
        {/* selection mark */}
        {selected && (
          <div style={{
            position: 'absolute', top: 14, right: 14,
            width: 22, height: 22, borderRadius: 9999,
            background: '#0A0A0A', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="check" size={12}/>
          </div>
        )}
      </div>
      {/* Content */}
      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{
          fontFamily: "'Inter'", fontSize: 11, fontWeight: 500,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#71717A',
        }}>{scenario.label}</div>
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 500,
          fontSize: 19, letterSpacing: '-0.012em', lineHeight: 1.25,
          color: '#0A0A0A',
        }}>{scenario.title}</div>
      </div>
    </button>
  );
}

function Scenarios({ onCta }: { onCta?: () => void }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const scenarios = [
    { kind: 'website',    label: 'Para freelancers',   title: 'Criando um site para um cliente.' },
    { kind: 'stranger',   label: 'Pessoa a pessoa',    title: 'Comprando algo de um desconhecido.' },
    { kind: 'specialist', label: 'Serviços contratados', title: 'Contratando um especialista para um projeto.' },
    { kind: 'direct',     label: 'Acordo direto',      title: 'Fechando um acordo direto com alguém.' },
  ];
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <section id="uses" style={{ padding: isMobile ? '80px 0' : '128px 0', background: '#fff', borderBottom: '1px solid #E4E4E7' }}>
      <Container>
        <div style={{ maxWidth: 720, marginBottom: isMobile ? 36 : 56 }}>
          <div style={{
            fontFamily: "'Inter'", fontSize: 12, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#71717A', marginBottom: 14,
          }}>Seus cenários</div>
          <h2 style={{
            fontFamily: "'Space Grotesk'", fontWeight: 500,
            fontSize: 'clamp(32px, 6vw, 64px)', letterSpacing: '-0.022em',
            lineHeight: 1.02, margin: '0 0 20px', color: '#0A0A0A',
          }}>
            Reconheça sua situação.<br/>
              <span style={{ color: '#71717A' }}>A <span style={{ color: '#1E4BA0' }}>Dalivim</span> cabe aqui.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter'", fontSize: 16, color: '#71717A',
            lineHeight: 1.55, margin: 0, maxWidth: 560,
          }}>
            Selecione o contexto que descreve o seu próximo acordo. O fluxo de custódia se adapta ao tipo.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: 32,
        }}>
          {scenarios.map((s, i) => (
            <ScenarioCard
              key={s.kind}
              scenario={s}
              idx={i}
              selected={selected === i}
              onSelect={setSelected}
            />
          ))}
        </div>

        {selected !== null && (
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center',
            gap: 20, padding: isMobile ? '20px 20px' : '18px 24px',
            background: '#0A0A0A', color: '#fff',
            borderRadius: 14,
            animation: 'dv-slide-up 320ms cubic-bezier(0.2,0.6,0.2,1)',
          }}>
            <style>{`@keyframes dv-slide-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div>
              <div style={{
                fontFamily: "'Inter'", fontSize: 11, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', marginBottom: 4,
              }}>Cenário selecionado</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>
                {scenarios[selected].title}
              </div>
            </div>
            <Button variant="primary" onClick={onCta}
              style={{ justifyContent: 'center', width: isMobile ? '100%' : 'auto' }}>
              Criar transação
              <Icon name="arrow-right" size={14}/>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export { Scenarios };
