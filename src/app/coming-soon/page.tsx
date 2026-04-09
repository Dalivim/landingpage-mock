"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ComingSoonPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-white text-dark flex flex-col items-center justify-center p-6 selection:bg-accent selection:text-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center animate-in fade-in duration-1000 zoom-in-95 ease-out">
        {/* Logo Setup */}
        <Link href="/" className="mb-16 block hover:opacity-80 transition-opacity">
          <div className="w-16 h-20 relative mx-auto">
            <Image
              src="/logo-dalivim.png"
              alt="Dalivim logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Core Content */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-dark leading-tight">
            Transações seguras chegarão em breve.
          </h1>

          <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
            Dalivim está chegando. Estamos finalizando a experiência para garantir que cada transação seja protegida do início ao fim.
          </p>
        </div>

        {/* Form area */}
        <div className="mt-12 w-full max-w-md mx-auto">
          {isSubmitted ? (
            <div className="bg-light border border-border rounded-2xl p-8 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-dark font-medium text-lg mb-2">Tudo certo!</h3>
              <p className="text-muted text-[15px]">Avisaremos você assim que lançarmos.</p>
            </div>
          ) : (
            <form 
              className="flex flex-col sm:flex-row gap-3 w-full" 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-1 bg-white border border-border rounded-full px-6 py-4 text-dark placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-[15px]"
                required
              />
              <button
                type="submit"
                className="bg-accent text-white hover:bg-accent-hover px-8 py-4 rounded-full text-[15px] font-medium transition-colors w-full sm:w-auto shrink-0"
              >
                Quero ser notificado
              </button>
            </form>
          )}
          <div className="mt-6 flex flex-col items-center justify-center gap-6">
            <p className="text-muted text-xs tracking-wider uppercase font-medium">
              Sem spam. Apenas atualizações importantes.
            </p>

            <Link
              href="/"
              className="text-muted hover:text-dark text-sm transition-colors"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
