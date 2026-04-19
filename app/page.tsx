'use client';

import * as React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { WhyChoose } from '@/components/landing/Sections';
import { Scenarios } from '@/components/landing/Scenarios';
import { FinalCta, Footer } from '@/components/landing/OrbitalFinale';
import { CtaInlineBand, CtaBarDark, StickyCta } from '@/components/landing/Ctas';
import { Faq } from '@/components/landing/Faq';
import { CreateTxModal } from '@/components/landing/CreateTxModal';

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Header onCta={openModal} />
      <Hero onPrimary={openModal} onSecondary={() => scrollTo('how')} />
      <HowItWorks />
      <CtaInlineBand
        onCta={openModal}
        eyebrow="Pronto para começar"
        title="Crie sua primeira transação em 60 segundos."
        sub="Sem cadastro complicado, sem mensalidade. Você só paga quando o dinheiro é liberado."
        cta="Começar agora"
      />
      <Scenarios onCta={openModal} />
      <CtaBarDark onCta={openModal} />
      <WhyChoose />
      <CtaInlineBand
        onCta={openModal}
        eyebrow="Ainda com dúvidas?"
        title="Comece com uma transação pequena para testar."
        sub="Você não precisa se comprometer. Teste o fluxo, sinta a segurança, depois escale."
        cta="Testar agora"
      />
      <Faq />
      <FinalCta onCta={openModal} />
      <Footer />
      <StickyCta onCta={openModal} />
      <CreateTxModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
