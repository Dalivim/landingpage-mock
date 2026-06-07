'use client';

import { Container, Eyebrow, Button } from './Atoms';
import Icon from './Icon';
import { ComingSoonAction } from './Toast';

export default function FinalCta() {
  return (
    <section id="cadastro" style={{
      padding: '140px 0', background: '#0A0A0A', color: '#fff', textAlign: 'center',
    }}>
      <Container maxWidth={760}>
        <Eyebrow color="#8A8A92">Comece agora</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display), sans-serif", fontWeight: 500,
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          letterSpacing: '-0.028em', lineHeight: 1.02,
          margin: '18px 0 24px', textWrap: 'balance',
        }}>
          Crie sua primeira transação em 60 segundos.
        </h2>
        <p style={{
          fontFamily: "var(--font-body), sans-serif", fontSize: 18, lineHeight: 1.55,
          color: '#A1A1AA', margin: '0 auto 40px', maxWidth: 540,
        }}>
          Sem cadastro complicado, sem mensalidade. Você só paga quando o dinheiro é liberado.
        </p>
        <ComingSoonAction message="Em breve. Estamos finalizando o cadastro.">
          <Button variant="primary" style={{ padding: '18px 32px', fontSize: 16 }}>
            Criar transação grátis<Icon name="arrow-right" size={16}/>
          </Button>
        </ComingSoonAction>
      </Container>
    </section>
  );
}
