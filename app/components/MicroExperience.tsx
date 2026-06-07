'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { formatBRL } from './Atoms';
import {
  TIPO_OPTIONS, OptionButton, StepHeader, FinalScreen, HeroHeadline,
} from './MicroBits';

// Snap-points slider for valor (Step 2)
function ValueSlider({ value, onChange }) {
  const points = [50, 200, 500, 1000, 2500, 5000, 10000, 25000];
  const idx = points.indexOf(value);
  const safeIdx = idx === -1 ? 2 : idx;
  return (
    <div>
      <div style={{
        textAlign: 'center', marginBottom: 18,
        fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
        fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em',
        color: '#0A0A0A',
        fontVariantNumeric: 'tabular-nums',
      }}>{formatBRL(value)}</div>
      <input
        type="range"
        className="dv-range"
        min={0} max={points.length - 1} step={1}
        value={safeIdx}
        onChange={e => onChange(points[Number(e.target.value)])}
        style={{
          width: '100%',
          height: 4,
          background: `linear-gradient(90deg, #1E4BA0 0%, #1E4BA0 ${(safeIdx / (points.length - 1)) * 100}%, #E4E4E7 ${(safeIdx / (points.length - 1)) * 100}%, #E4E4E7 100%)`,
          borderRadius: 9999,
          cursor: 'pointer',
        }}
      />
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginTop: 12, fontFamily: "var(--font-body), sans-serif",
        fontSize: 11, color: '#A1A1AA',
      }}>
        <span>{formatBRL(points[0])}</span>
        <span>{formatBRL(points[points.length - 1])}</span>
      </div>
    </div>
  );
}

export default function MicroExperience({ onTipoLock, onComplete }: { onTipoLock?: any; onComplete?: any }) {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState(null);
  const [value, setValue] = useState(500);
  const stepRef = useRef(null);

  const goNext = () => setStep(s => s + 1);
  const goBack = () => setStep(s => Math.max(1, s - 1));

  useEffect(() => {
    if (step === 3 && onComplete) onComplete({ tipo, value });
  }, [step, tipo, value, onComplete]);

  return (
    <div ref={stepRef} style={{
      width: '100%', maxWidth: 520, margin: '0 auto',
      background: '#fff',
      border: '1px solid #E4E4E7',
      borderRadius: 24,
      padding: 28,
      boxShadow: '0 24px 60px -32px rgba(10,10,10,0.18), 0 4px 16px -8px rgba(10,10,10,0.06)',
    }}>
      {step === 1 && (
        <div key="s1" style={{ animation: 'dv-step-in 360ms cubic-bezier(0.2,0.6,0.2,1)' }}>
          <StepHeader step={1} total={3} question="O que está sendo combinado?" sub="Isso ajuda a personalizar a experiência."/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TIPO_OPTIONS.map(opt => (
              <OptionButton
                key={opt.key}
                icon={opt.icon}
                sub={opt.sub}
                selected={tipo === opt.key}
                onClick={() => {
                  setTipo(opt.key);
                  if (onTipoLock) onTipoLock(opt.key);
                  setTimeout(goNext, 280);
                }}
              >{opt.label}</OptionButton>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div key="s2" style={{ animation: 'dv-step-in 360ms cubic-bezier(0.2,0.6,0.2,1)' }}>
          <StepHeader step={2} total={3} question="Qual o valor envolvido?" sub="Você pode ajustar depois."/>
          <ValueSlider value={value} onChange={setValue}/>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
            <button onClick={goBack} style={{
              background: 'transparent', border: 'none',
              color: '#71717A', fontFamily: "var(--font-body), sans-serif", fontSize: 14,
              padding: '10px 4px', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <Icon name="arrow-left" size={14}/> Voltar
            </button>
            <button onClick={goNext} style={{
              fontFamily: "var(--font-body), sans-serif", fontWeight: 500, fontSize: 14,
              background: '#0A0A0A', color: '#fff',
              padding: '12px 22px', borderRadius: 9999,
              border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#1f1f24'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0A0A'}
            >Continuar <Icon name="arrow-right" size={14}/></button>
          </div>
        </div>
      )}

      {step === 3 && (
        <FinalScreen
          value={value} tipo={tipo}
          onReset={() => { setStep(1); if (onTipoLock) onTipoLock(null); }}
        />
      )}
    </div>
  );
}
