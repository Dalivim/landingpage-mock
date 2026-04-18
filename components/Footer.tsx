'use client';
import { ChevronDown } from 'lucide-react';
import { DalivimMark } from './DalivimMark';

const columns = [
  { label: 'Produto',  items: [{ name: 'Como funciona', href: '#how' }, { name: 'Para empresas', href: '#' }, { name: 'Para pessoas', href: '#' }, { name: 'Desenvolvedores', href: '#' }] },
  { label: 'Recursos', items: [{ name: 'Documentação', href: '#' }, { name: 'Segurança', href: '#' }, { name: 'Suporte', href: '#' }, { name: 'Status', href: '#' }] },
  { label: 'Empresa',  items: [{ name: 'Sobre', href: '#' }, { name: 'Carreiras', href: '#' }, { name: 'Contato', href: 'mailto:contato@dalivim.com.br' }, { name: 'Legal', href: '#' }] },
];

function IconLinkedin() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}
function IconX() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function IconGithub() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
}

export function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(40px,6vw,64px) 0 32px' }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1.4fr repeat(3,1fr) auto; gap: 48px; align-items: start; padding-bottom: 48px; }
        @media(max-width:900px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } .footer-brand,.footer-locale { grid-column: 1/-1; } .footer-locale { flex-direction: row !important; justify-content: flex-start !important; align-items: center !important; } }
        @media(max-width:480px) { .footer-grid { grid-template-columns: 1fr; } }
        .footer-link { font-family: 'Inter',sans-serif; font-size: 14px; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 180ms; }
        .footer-link:hover { color: #fff; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <DalivimMark size={24} color="rgba(255,255,255,0.85)" />
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 500, fontSize: 18, letterSpacing: '0.02em' }}>DALIVIM</span>
            </div>
            <p style={{ fontFamily: "'Inter'", fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', margin: 0, maxWidth: 240 }}>
              Infraestrutura de custódia para acordos modernos.<br />Seguro. Transparente. Inevitável.
            </p>
          </div>

          {columns.map(col => (
            <div key={col.label}>
              <div style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{col.label}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(it => <li key={it.name}><a href={it.href} className="footer-link">{it.name}</a></li>)}
              </ul>
            </div>
          ))}

          <div className="footer-locale" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-end' }}>
            <button style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 500, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '7px 12px', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              PT <ChevronDown size={12} />
            </button>
            <div style={{ display: 'flex', gap: 14, color: 'rgba(255,255,255,0.5)' }}>
              <a href="#" aria-label="LinkedIn" style={{ color: 'inherit' }}><IconLinkedin /></a>
              <a href="#" aria-label="X" style={{ color: 'inherit' }}><IconX /></a>
              <a href="#" aria-label="GitHub" style={{ color: 'inherit' }}><IconGithub /></a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontFamily: "'Inter'", fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Dalivim. Todos os direitos reservados.</span>
            <span>63.278.101/0001-49</span>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            {['Termos', 'Privacidade', 'Cookies'].map(t => <a key={t} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
