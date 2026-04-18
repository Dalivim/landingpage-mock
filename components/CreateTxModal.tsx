'use client';
import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';

export function CreateTxModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,10,10,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 520, background: '#fff', borderRadius: 28, border: '1px solid #E4E4E7', padding: 'clamp(24px,4vw,40px)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A' }}>
            Em breve
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#71717A', padding: 4, display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        {/* Fake email capture */}
        {!submitted ? (
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,4vw,28px)', margin: '0 0 6px', letterSpacing: '-0.012em' }}>Em breve</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 14, color: '#71717A', margin: '0 0 24px', lineHeight: 1.5 }}>Estamos preparando algo especial. Deixe seu e-mail e avisamos quando estiver pronto (captura fake).</p>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
                style={{ flex: 1, background: '#fff', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 14px', fontFamily: "'Inter'", fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
              />
              <Button variant="primary" onClick={() => setSubmitted(true)}>
                Avise-me
              </Button>
            </div>

            <p style={{ fontFamily: "'Inter'", fontSize: 13, color: '#9CA3AF', margin: 0 }}>Não enviaremos nada de verdade — isso é apenas um placeholder.</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, background: '#E8F2EC', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <Check size={26} color="#16794C" />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,4vw,28px)', margin: '0 0 8px', letterSpacing: '-0.012em' }}>Obrigado</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 15, color: '#71717A', margin: '0 0 24px', lineHeight: 1.5 }}>
              Avisaremos em breve. (captura fake)
            </p>
            <Button variant="dark" onClick={onClose}>Fechar</Button>
          </div>
        )}
      </div>
    </div>
  );
}
