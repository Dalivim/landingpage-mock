'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero, TrustStrip } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { CtaInlineBand } from '@/components/CtaInlineBand';
import { Scenarios } from '@/components/Scenarios';
import { CtaBarDark } from '@/components/CtaBarDark';
import { WhyChoose } from '@/components/WhyChoose';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { CreateTxModal } from '@/components/CreateTxModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main>
      <Header onCta={openModal} />
      <Hero
        onPrimary={openModal}
        onSecondary={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <TrustStrip />
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
      <CreateTxModal open={modalOpen} onClose={closeModal} />
    </main>
  );
}
