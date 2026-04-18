import { ShieldCheck, Banknote, CheckCircle, Lock } from 'lucide-react';
import { Button } from './Button';

export function Hero({
  onPrimary,
  onSecondary,
}: {
  onPrimary: () => void;
  onSecondary: () => void;
}) {
  return (
    <section
      style={{
        paddingTop: 176,
        paddingBottom: 120,
        background: '#FFFFFF',
      }}
    >
      <style>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-fade {
          animation: heroFade 320ms ease-out both;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 18px;
          text-align: center;
        }

        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <div
          className="hero-fade"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 14px',
            borderRadius: 9999,
            background: '#0A0A0A',
            color: '#FFFFFF',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.01em',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 9999,
              background: '#1E4BA0',
              display: 'inline-block',
            }}
          />
          O combinado não sai caro.
        </div>

        <h1
          className="hero-fade"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            fontWeight: 800,
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            margin: '0 auto 20px',
            maxWidth: 720,
            overflow: 'visible',
          }}
        >
          <span style={{ display: 'block', color: '#0A0A0A', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Medo de não receber?
          </span>
          <span
            style={{
              display: 'block',
              color: '#1E4BA0',
              fontWeight: 700,
              marginTop: '-4px',
              letterSpacing: '-0.02em',
            }}
          >
            Sem problema. A gente garante.
          </span>
        </h1>

        <p
          className="hero-fade"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 17,
            lineHeight: 1.55,
            color: '#52525B',
            maxWidth: 700,
            margin: '0 auto 36px',
          }}
        >
          Uma camada de segurança para negociações online.
          O pagamento fica seguro até as duas partes cumprirem o acordo.
        </p>

        <div
          className="hero-fade"
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: 14,
          }}
        >
          <Button
            onClick={onPrimary}
            style={{
              background: '#1E4BA0',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 9999,
              padding: '14px 28px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              boxShadow: 'none',
            }}
          >
            Crie uma transação segura
          </Button>

          <Button
            onClick={onSecondary}
            style={{
              background: 'transparent',
              color: '#0A0A0A',
              border: '1.5px solid #E4E4E7',
              borderRadius: 9999,
              padding: '14px 24px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              boxShadow: 'none',
            }}
          >
            Veja como funciona
          </Button>
        </div>

        <div
          className="hero-fade"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 13,
            lineHeight: 1.5,
            color: '#71717A',
          }}
        >
          Sem mensalidade. Sem enrolação.
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { icon: ShieldCheck, label: 'Feito para negociações de confiança' },
  { icon: Banknote, label: 'Pagamento simples com Pix' },
  { icon: CheckCircle, label: 'Liberação clara e transparente' },
  { icon: Lock, label: 'Proteção para os dois lados' },
];

export function TrustStrip() {
  return (
    <section
      style={{
        padding: '44px 0',
        borderTop: '1px solid #E4E4E7',
        borderBottom: '1px solid #E4E4E7',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="trust-grid">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9999,
                  background: '#F4F4F5',
                  border: '1px solid #E4E4E7',
                }}
              >
                <Icon size={18} color="#71717A" strokeWidth={2} />
              </div>

              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  lineHeight: 1.45,
                  color: '#0A0A0A',
                  maxWidth: 180,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}