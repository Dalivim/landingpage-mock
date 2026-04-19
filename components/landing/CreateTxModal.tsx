'use client';
import * as React from 'react';
import { Button, Container } from './Atoms';
import { Icon } from './Icons';

// Interactive overlay: a fake "Criar transação" modal showing product UI
function CreateTxModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'error' | 'saved'>('idle');

  if (!open) return null;

  const validate = (v: string) => /\S+@\S+\.\S+/.test(v);

  const submit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate(email)) {
      setStatus('error');
      return;
    }
    try {
      const key = 'coming_soon_emails_modal';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ email, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      // ignore storage errors
    }
    setStatus('saved');
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 'min(560px, 100%)', background: '#fff', borderRadius: 24,
        border: '1px solid #E4E4E7', padding: 32,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#71717A' }}>
            Disponível em breve
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#71717A', padding: 4 }}>
            <Icon name="x" size={20}/>
          </button>
        </div>

        {status !== 'saved' ? (
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 26, margin: '0 0 8px', letterSpacing: '-0.012em' }}>Em breve</h3>
            <p style={{ fontFamily: "'Inter'", fontSize: 14, color: '#71717A', margin: '0 0 18px' }}>Estamos preparando algo muito especial. Quer ser avisado quando estivermos no ar?</p>

            <form onSubmit={submit} style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                aria-label="Seu email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                placeholder="seu@email.com"
                style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #E6E9F2', fontSize: 14 }}
              />
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <Button variant="primary" onClick={() => submit()}>Avisar-me</Button>
                <Button variant="outlined" onClick={onClose}>Fechar</Button>
              </div>
            </form>
            {status === 'error' && (
              <div style={{ color: '#B91C1C', marginTop: 10, fontSize: 13 }}>Por favor, insira um email válido.</div>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, background: '#E8F2EC', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#16794C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk'", fontSize: 20, margin: '8px 0 6px' }}>Obrigado. Salvo!</h3>
            <p style={{ fontFamily: "'Inter'", color: '#6B7280', margin: 0 }}>Enviaremos um aviso para <strong>{email}</strong> quando estivermos no ar.</p>
            <div style={{ marginTop: 18 }}>
              <Button variant="dark" onClick={onClose}>Fechar</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { CreateTxModal };
