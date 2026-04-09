"use client";

import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle, Plus, Minus, ArrowRight, Menu, X, Check, Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">

            <div className="w-20 h-24 relative">
              <Image
                src="/logo-dalivim.png"
                alt="Dalivim logo"
                fill
                className="object-contain"
              />
            </div>

            <span className="font-display font-medium text-xl tracking-tight">Dalivim</span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[15px]">
            <Link href="#how-it-works" className="hover:opacity-70 transition-opacity">Como funciona</Link>
            <Link href="#use-cases" className="hover:opacity-70 transition-opacity">Usos</Link>
            <Link href="#faq" className="hover:opacity-70 transition-opacity">Perguntas</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/coming-soon" className="bg-accent text-white hover:bg-accent-hover px-6 py-3 rounded-full text-[15px] font-medium transition-colors">
              Criar transação
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 font-medium">
            <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Como funciona</Link>
            <Link href="#use-cases" onClick={() => setMobileMenuOpen(false)}>Usos</Link>
            <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>Perguntas</Link>
            <Link href="/coming-soon" className="bg-accent text-white hover:bg-accent-hover text-center py-4 rounded-full w-full transition-colors">
              Criar transação
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:pt-52 md:pb-32 max-w-7xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl mx-auto tracking-tight">
          Medo de não receber? <br className="hidden md:block" />
          <span className="text-muted">Sem problema. A gente garante.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
          Uma camada de segurança para freelancers e negociações online. O pagamento fica seguro até as duas partes cumprirem o acordo.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/coming-soon" className="bg-accent text-white hover:bg-accent-hover px-8 py-4 rounded-full text-lg w-full sm:w-auto transition-colors">
            Crie uma transação segura
          </Link>
          <Link href="#how-it-works" className="bg-transparent border border-border text-dark hover:bg-light px-8 py-4 rounded-full text-lg w-full sm:w-auto transition-colors">
            Veja como funciona
          </Link>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-muted" />
            <span className="font-medium text-[15px]">Feito para negociações de confiança</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Banknote className="w-6 h-6 text-muted" />
            <span className="font-medium text-[15px]">Pagamento simples com Pix</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="w-6 h-6 text-muted" />
            <span className="font-medium text-[15px]">Liberação clara e transparente</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Lock className="w-6 h-6 text-muted" />
            <span className="font-medium text-[15px]">Proteção para os dois lados</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 md:py-40 bg-light px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">Como funciona</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-[60px] left-1/6 right-1/6 h-[1px] bg-border" />

            <div className="bg-white border border-border p-10 rounded-[2rem] relative z-10 text-center">
              <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center font-display text-xl mx-auto mb-8 border border-border text-dark">1</div>
              <h3 className="font-display text-2xl mb-4">Criar transação</h3>
              <p className="text-muted text-[17px] leading-relaxed">
                Combine os termos com a outra parte e gere um link de pagamento seguro na hora.
              </p>
            </div>

            <div className="bg-white border border-border p-10 rounded-[2rem] relative z-10 text-center">
              <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center font-display text-xl mx-auto mb-8 border border-border text-dark">2</div>
              <h3 className="font-display text-2xl mb-4">O pagamento fica seguro</h3>
              <p className="text-muted text-[17px] leading-relaxed">
                O comprador paga na hora via Pix, mas o dinheiro fica retido em segurança. O vendedor começa a trabalhar tranquilo.
              </p>
            </div>

            <div className="bg-white border border-border p-10 rounded-[2rem] relative z-10 text-center">
              <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center font-display text-xl mx-auto mb-8 border border-border text-dark">3</div>
              <h3 className="font-display text-2xl mb-4">Liberação do pagamento</h3>
              <p className="text-muted text-[17px] leading-relaxed">
                Quando o serviço ou produto for entregue e confirmado por ambas as partes, o dinheiro é liberado na hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 md:py-40 px-6 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">Projetos que importam.</h2>
            <p className="text-white/60 text-xl font-light mb-16">
              Quando você trabalha com alguém novo, a confiança é a parte mais difícil. Nossa plataforma atua como a parte neutra no meio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-full py-8 px-10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <span className="text-2xl font-display">Projetos Freelance</span>
              <ArrowRight className="text-muted w-6 h-6" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-full py-8 px-10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <span className="text-2xl font-display">Negócios em marketplaces</span>
              <ArrowRight className="text-muted w-6 h-6" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-full py-8 px-10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <span className="text-2xl font-display">Serviços digitais</span>
              <ArrowRight className="text-muted w-6 h-6" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-full py-8 px-10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <span className="text-2xl font-display">Transações entre pessoas</span>
              <ArrowRight className="text-muted w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Why People Use It */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-20 text-center">Por que as pessoas escolhem Dalivim</h2>

          <div className="space-y-4">
            <div className="bg-white border border-border rounded-[2rem] p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center shrink-0">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-2">Evite pagar e não receber</h3>
                <p className="text-muted text-lg">Como comprador, seu dinheiro fica retido em segurança. Se o vendedor sumir, o dinheiro volta para você.</p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-[2rem] p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center shrink-0">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-2">Nunca entregue sem garantia</h3>
                <p className="text-muted text-lg">Como vendedor, você sabe que o dinheiro já está retido em nosso sistema antes de você escrever uma única linha de código ou enviar um arquivo.</p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-[2rem] p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center shrink-0">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-2">Faça estranhos se sentirem seguros</h3>
                <p className="text-muted text-lg">Feche negócios mais rápido oferecendo um fluxo de pagamento seguro e profissional usando Pix que elimina a fricção da falta de confiança.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-40 px-6 bg-light border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-16">Perguntas frequentes</h2>

          <div className="space-y-4">
            {[
              { q: "Quando o pagamento é liberado?", a: "O pagamento é liberado no momento em que ambas as partes confirmam que os termos da transação foram cumpridos. Isso acontece instantaneamente." },
              { q: "O que acontece se houver uma disputa?", a: "Se houver um desacordo, os fundos permanecem congelados em segurança. Nossa equipe de resolução imparcial intervém para analisar as evidências de ambos os lados." },
              { q: "Para quem é isso?", a: "Qualquer pessoa que faça negócios online e precise de um intermediário seguro. Freelancers, criadores digitais, comerciantes de domínios e contratados independentes nos usam diariamente." },
              { q: "Isso protege tanto o comprador quanto o vendedor?", a: "Sim. O dinheiro do comprador está seguro até a entrega, e o vendedor trabalha sabendo que o dinheiro está ativamente retido e garantido." },
              { q: "Como o Pix se encaixa no fluxo?", a: "Os compradores depositam fundos usando um pagamento instantâneo via Pix em nossa conta de custódia segura. Após a conclusão, os fundos são instantaneamente roteados para a chave Pix do vendedor." }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-border rounded-3xl overflow-hidden cursor-pointer" onClick={() => toggleFaq(index)}>
                <div className="p-8 flex justify-between items-center bg-white hover:bg-light transition-colors">
                  <h3 className="font-display text-xl">{faq.q}</h3>
                  {openFaq === index ? <Minus className="w-6 h-6 text-muted shrink-0" /> : <Plus className="w-6 h-6 text-muted shrink-0" />}
                </div>
                {openFaq === index && (
                  <div className="px-8 pb-8 text-muted leading-relaxed text-[17px] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 px-6 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-10 leading-[1.1]">
            Todo negócio começa com uma promessa. <br />
            <span className="text-white/60">Nós somos a garantia.</span>
          </h2>
          <Link href="/coming-soon" className="inline-block bg-accent text-white hover:bg-accent-hover px-10 py-5 rounded-full text-xl font-medium transition-colors">
            Comece uma transação
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-12 relative">
              <Image
                src="/logo-dalivim.png"
                alt="Dalivim logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-medium text-xl tracking-tight">Dalivim</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-white/50 text-[15px]">
            <Link href="#" className="hover:text-white transition-colors">Termos de Serviço</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Contato</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
