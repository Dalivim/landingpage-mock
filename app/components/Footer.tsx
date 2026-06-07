'use client';

import { Container } from './Atoms';

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A', color: '#8A8A92',
      padding: '48px 0 56px',
      borderTop: '1px solid #1C1C20',
    }}>
      <Container>
        <div className="dv-footer-row" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
          fontFamily: "var(--font-body), sans-serif", fontSize: 13,
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dalivim-mark.svg" alt="" style={{ width: 22, height: 22, filter: 'invert(1)' }}/>
            <span style={{
              fontFamily: "var(--font-display), sans-serif", fontWeight: 500, fontSize: 15,
            }}>Dalivim</span>
          </div>
          <span>© 2026 Dalivim — Pix com garantia de entrega.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: '#8A8A92', textDecoration: 'none' }}>Termos</a>
            <a href="#" style={{ color: '#8A8A92', textDecoration: 'none' }}>Privacidade</a>
            <a href="mailto:contato@dalivim.com.br" style={{ color: '#8A8A92', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
