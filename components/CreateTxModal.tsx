'use client';
import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';

export function CreateTxModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);

  if (!open) return null;

  const money = 'R$ 2.000,00';

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
            Nova transação · Passo {step + 1}/3
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#71717A', padding: 4, display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        {/* Step 1 */}
        {step === 0 && (
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,4vw,28px)', margin: '0 0 6px', letterSpacing: '-0.012em' }}>O que você está combinando?</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 14, color: '#71717A', margin: '0 0 24px', lineHeight: 1.5 }}>Descreva o serviço ou produto. Simples.</p>
            <label style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: '#0A0A0A', display: 'block', marginBottom: 6 }}>Descrição</label>
            <textarea
              defaultValue="Landing page em Next.js. Entrega em 10 dias."
              style={{ width: '100%', background: '#fff', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 14px', fontFamily: "'Inter'", fontSize: 14, outline: 'none', minHeight: 80, resize: 'none', boxSizing: 'border-box' }}
            />
            <label style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: '#0A0A0A', display: 'block', margin: '18px 0 6px' }}>Valor</label>
            <input
              defaultValue={money}
              style={{ width: '100%', background: '#fff', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 14px', fontFamily: "'Inter'", fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
              <Button variant="primary" onClick={() => setStep(1)}>Continuar</Button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,4vw,28px)', margin: '0 0 6px', letterSpacing: '-0.012em' }}>Com quem?</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 14, color: '#71717A', margin: '0 0 24px' }}>O link será enviado para a outra parte.</p>
            <label style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, display: 'block', marginBottom: 6 }}>Email do comprador</label>
            <input
              defaultValue="helena@exemplo.com"
              style={{ width: '100%', background: '#fff', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 14px', fontFamily: "'Inter'", fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
            />
            <label style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, display: 'block', margin: '18px 0 6px' }}>Sua chave Pix (para receber)</label>
            <input
              defaultValue="contato@dalivim.com.br"
              style={{ width: '100%', background: '#fff', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 14px', fontFamily: "'Inter'", fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, gap: 12 }}>
              <Button variant="outlined" onClick={() => setStep(0)}>Voltar</Button>
              <Button variant="primary" onClick={() => setStep(2)}>Gerar link seguro</Button>
            </div>
          </div>
        )}

        {/* Step 3 — success */}
        {step === 2 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, background: '#E8F2EC', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <Check size={26} color="#16794C" />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 'clamp(22px,4vw,28px)', margin: '0 0 8px', letterSpacing: '-0.012em' }}>Transação criada.</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 15, color: '#71717A', margin: '0 0 24px', lineHeight: 1.5 }}>
              {money} · em custódia após pagamento.<br />Link enviado para helena@exemplo.com.
            </p>
            <div style={{ background: '#F4F4F5', border: '1px solid #E4E4E7', borderRadius: 12, padding: '12px 16px', fontFamily: 'ui-monospace, monospace', fontSize: 13, color: '#0A0A0A', marginBottom: 22, wordBreak: 'break-all' }}>
              dalivim.com.br/t/tx_9f3a21b8
            </div>
            <Button variant="dark" onClick={onClose}>Fechar</Button>
          </div>
        )}
      </div>
    </div>
  );
}
