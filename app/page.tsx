'use client';

import { useState } from 'react';
import Header from './components/Header';
import HeroWithMicro from './components/Hero';
import { Scenarios, HowItWorks, Testimonials } from './components/Sections';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function Page() {
  // Tweaks-equivalent defaults — the v2 (Ledger) variant is the published one.
  const [tweaks] = useState({
    headlineText: 'Medo de pagar e não receber?',
    resolutionText: 'Sem problema. A gente garante.',
    animatedHeadline: false,
    variant: 'v2',
  });

  return (
    <main>
      <Header/>
      <HeroWithMicro variant={tweaks.variant} tweaks={tweaks}/>
      <HowItWorks/>
      <Scenarios/>
      <Testimonials/>
      <Faq/>
      <FinalCta/>
      <Footer/>
    </main>
  );
}
