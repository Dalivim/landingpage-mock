'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';
import { Button, formatBRL, useAnimatedNumber } from './Atoms';
import { useToast } from './Toast';

export const TIPO_OPTIONS = [
  { key: 'servico',  label: 'Serviço',  icon: 'briefcase', headline: 'Medo de não receber pelo seu serviço?', ctaNoun: 'serviço',
    sub: 'Freelance, design, programação, consultoria.' },
  { key: 'produto',  label: 'Produto',  icon: 'package',   headline: 'Medo de pagar e não receber o produto?', ctaNoun: 'produto',
    sub: 'Compra e venda de itens físicos.' },
  { key: 'outro',    label: 'Outro',    icon: 'handshake', headline: 'Medo de não receber o que foi combinado?', ctaNoun: 'acordo',
    sub: 'Qualquer acordo que precise de garantia.' },
];

// ---------- WORD LOOP (kept for completeness; landing currently uses static headline) ----------
function LoopingFearLine({ locked, frozenHeadline }) {
  const words = ['pagar', 'vender', 'trabalhar'];
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState('hold');

  useEffect(() => {
    if (locked) return;
    let timeout;
    if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('deleting'), 2000);
    } else if (phase === 'deleting') {
      if (text.length === 0) {
        const next = (wordIdx + 1) % words.length;
        setWordIdx(next);
        setPhase('typing');
      } else {
        timeout = setTimeout(() => setText(t => t.slice(0, -1)), 42);
      }
    } else if (phase === 'typing') {
      const target = words[wordIdx];
      if (text.length >= target.length) {
        setPhase('hold');
      } else {
        timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, text, wordIdx, locked]);

  if (locked && frozenHeadline) {
    return <span key="locked">{frozenHeadline}</span>;
  }

  return (
    <span style={{
      color: '#1E4BA0',
      whiteSpace: 'pre',
      transition: 'color 200ms',
    }}>
      {text}
      <span style={{
        display: 'inline-block', width: '0.06em', height: '0.82em',
        background: 'currentColor', verticalAlign: '-0.08em',
        marginLeft: '0.02em', opacity: 0.85,
        animation: 'dv-caret 900ms steps(1) infinite',
      }}/>
    </span>
  );
}

// ---------- TWO-BEAT HERO HEADLINE ----------
export function HeroHeadline({
  tipo,
  size = 'clamp(36px, 5vw, 64px)',
  muted = '#A1A1AA',
  headlineOverride,
  resolutionText = 'Sem problema. A gente garante.',
  animated = false,
}) {
  const frozen = headlineOverride
    || (tipo ? TIPO_OPTIONS.find(o => o.key === tipo)?.headline : null);

  const splitIdx = resolutionText.indexOf('.');
  const firstPart = splitIdx >= 0 ? resolutionText.slice(0, splitIdx + 1) : '';
  const secondPart = splitIdx >= 0 ? resolutionText.slice(splitIdx + 1).trim() : resolutionText;

  return (
    <h1 style={{
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 500, fontSize: size,
      lineHeight: 1.05, letterSpacing: '-0.028em',
      margin: 0, color: '#0A0A0A',
      textAlign: 'center',
      maxWidth: 900,
    }}>
      <div style={{ display: 'block', whiteSpace: 'nowrap' }}>
        {animated && !frozen
          ? <>Medo de <LoopingFearLine/> e não receber?</>
          : <span>{frozen || 'Medo de pagar e não receber?'}</span>}
      </div>
      <div style={{ display: 'block' }}>
        {firstPart && <span style={{ color: muted }}>{firstPart} </span>}
        <span style={{ color: '#1E4BA0' }}>{secondPart}</span>
      </div>
    </h1>
  );
}

// ---------- OPTION BUTTON ----------
export function OptionButton({ children, selected, onClick, icon, sub }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body), sans-serif",
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '18px 22px',
        background: selected ? '#0A0A0A' : '#fff',
        color: selected ? '#fff' : '#0A0A0A',
        border: selected ? '1.5px solid #0A0A0A'
              : hover ? '1.5px solid #1E4BA0'
              : '1.5px solid #E4E4E7',
        borderRadius: 14,
        textAlign: 'left',
        cursor: 'pointer',
        flex: 1,
        minHeight: 68,
        transform: hover && !selected ? 'translateY(-1px) scale(1.005)' : 'none',
        boxShadow: hover && !selected ? '0 8px 24px -12px rgba(30,75,160,0.25)' : 'none',
        transition: 'all 220ms cubic-bezier(0.2,0.6,0.2,1)',
      }}
    >
      <span style={{
        width: 40, height: 40, borderRadius: 12,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: selected ? 'rgba(255,255,255,0.1)' : '#F4F4F5',
        color: selected ? '#fff' : '#0A0A0A',
        transition: 'background 220ms',
        flexShrink: 0,
      }}>
        <Icon name={icon} size={20}/>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}>{children}</span>
        {sub && <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.65, lineHeight: 1.3 }}>{sub}</span>}
      </span>
      {selected && <Icon name="check" size={16}/>}
    </button>
  );
}

// ---------- STEP HEADER ----------
export function StepHeader({ step, total, question, sub }) {
  const pctMap = { 1: 30, 2: 65, 3: 100, 4: 100 };
  const pct = pctMap[step] ?? (step / total) * 100;
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22,
      }}>
        <span style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: 10.5, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: '#52525B',
          whiteSpace: 'nowrap',
        }}>Configuração · {step}/{total}</span>
        <div style={{ flex: 1, height: 4, background: '#F4F4F5', borderRadius: 9999, overflow: 'hidden', position: 'relative' }}>
          <div style={{
            height: '100%', width: `${pct}%`,
            background: 'linear-gradient(90deg, #1E4BA0 0%, #3D6BC4 100%)',
            borderRadius: 9999,
            transition: 'width 520ms cubic-bezier(0.2,0.9,0.2,1)',
          }}/>
        </div>
      </div>
      <h3 style={{
        fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
        fontSize: 'clamp(20px, 2.1vw, 24px)', letterSpacing: '-0.016em', lineHeight: 1.2,
        margin: 0, color: '#0A0A0A',
      }}>{question}</h3>
      {sub && <p style={{
        fontFamily: "var(--font-body), sans-serif", fontSize: 14, lineHeight: 1.5,
        color: '#71717A', margin: '8px 0 0',
      }}>{sub}</p>}
    </div>
  );
}

// ---------- FINAL SCREEN ----------
export function FinalScreen({ value, tipo, onReset }) {
  const tipoData = TIPO_OPTIONS.find(o => o.key === tipo);
  const ctaText = `Proteger meus ${formatBRL(value)}`;
  const animated = useAnimatedNumber(value, 600);
  const { show } = useToast();

  return (
    <div style={{ animation: 'dv-fade-in 500ms cubic-bezier(0.2,0.6,0.2,1)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '20px 22px',
        background: '#0A0A0A', color: '#fff',
        borderRadius: 18,
        marginBottom: 20,
      }}>
        <span style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(30,75,160,0.2)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: '#6B98E8',
        }}>
          <Icon name="shield-check" size={22}/>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 12, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8A92',
            marginBottom: 4,
          }}>Em custódia</div>
          <div style={{
            fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
            fontSize: 28, letterSpacing: '-0.014em',
            fontVariantNumeric: 'tabular-nums',
          }}>{formatBRL(animated)}</div>
        </div>
        <span style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: 12,
          color: '#7FD1A8', display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: 9999, background: '#7FD1A8', boxShadow: '0 0 0 4px rgba(127,209,168,0.18)' }}/>
          ativo
        </span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
        fontSize: 26, letterSpacing: '-0.018em', lineHeight: 1.15,
        margin: '0 0 10px', color: '#0A0A0A',
      }}>
        Seu dinheiro pode ficar protegido.
      </h3>
      <p style={{
        fontFamily: "var(--font-body), sans-serif", fontSize: 15, lineHeight: 1.55,
        color: '#52525B', margin: '0 0 20px',
      }}>
        {formatBRL(value)} fica protegido até o {tipoData?.ctaNoun || 'acordo'} ser entregue.
        Se algo der errado, você não perde o dinheiro.
      </p>

      <ul style={{
        listStyle: 'none', padding: 0, margin: '0 0 24px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {[
          'Só libera quando ambos confirmam',
          'Pode abrir disputa se algo der errado',
          'Proteção contra golpes e não entrega',
        ].map((b, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: "var(--font-body), sans-serif", fontSize: 14, color: '#27272A',
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: 9999,
              background: '#E8F2EC',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#16794C', flexShrink: 0,
            }}>
              <Icon name="check" size={13} strokeWidth={2.5}/>
            </span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          onClick={() => show('Em breve. Estamos finalizando o cadastro.')}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontFamily: "var(--font-body), sans-serif", fontWeight: 500, fontSize: 16,
            background: '#1E4BA0', color: '#fff',
            padding: '18px 28px', borderRadius: 9999,
            border: 'none', cursor: 'pointer',
            boxShadow: '0 0 0 0 rgba(30,75,160,0.35)',
            animation: 'dv-cta-pulse 2.2s cubic-bezier(0.2,0.6,0.2,1) infinite',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#153A82'}
          onMouseLeave={e => e.currentTarget.style.background = '#1E4BA0'}
        >
          {ctaText}<Icon name="arrow-right" size={16}/>
        </button>
        <button
          onClick={onReset}
          style={{
            background: 'transparent', border: 'none',
            fontFamily: "var(--font-body), sans-serif", fontSize: 13, color: '#71717A',
            padding: 8, cursor: 'pointer',
          }}
        >Ajustar detalhes</button>
      </div>

      <p style={{
        fontFamily: "var(--font-body), sans-serif", fontSize: 12, color: '#A1A1AA',
        margin: '16px 0 0', textAlign: 'center',
      }}>
        Falta só 1 passo para proteger esse valor.
      </p>
    </div>
  );
}
