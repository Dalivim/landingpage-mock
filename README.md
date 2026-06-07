# Dalivim — Landing Page (Next.js + TypeScript)

Landing page de pré-lançamento da Dalivim — Pix com garantia de entrega (escrow).

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript** — config frouxa (`strict: false`, `noImplicitAny: false`) para manter o port mecânico limpo. Aperte conforme endurecer o código.
- **next/font** para Inter + Space Grotesk (expostos como `--font-body` / `--font-display`)
- Sem framework de CSS. Tokens em `styles/colors_and_type.css`; componentes usam `style={{...}}` inline para portabilidade.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Estrutura

```
app/
├── layout.tsx                  # next/font (Inter, Space Grotesk) → variáveis CSS; ToastProvider
├── page.tsx                    # composição da landing
├── globals.css                 # reset + animações + responsivo
└── components/
    ├── Toast.tsx               # ToastProvider + ComingSoonAction (toast "Em breve")
    ├── Atoms.tsx               # Button, Container, Eyebrow, useAnimatedNumber, formatBRL
    ├── Icon.tsx                # ícones SVG inline
    ├── Header.tsx              # header fixo, glass
    ├── Hero.tsx                # hero + headline + micro-experiência
    ├── MicroBits.tsx           # HeroHeadline, OptionButton, StepHeader, FinalScreen, TIPO_OPTIONS
    ├── MicroExperience.tsx     # wizard de 3 passos
    ├── Sections.tsx            # cenários, casos de uso (recibos), depoimentos
    ├── Faq.tsx                 # accordion
    ├── FinalCta.tsx            # CTA final
    └── Footer.tsx
styles/
└── colors_and_type.css         # tokens (cores, tipografia, espaçamento)
public/
├── dalivim-mark.svg
└── dalivim-wordmark.svg
```

## Fontes (next/font)

`app/layout.tsx` instancia `Inter` e `Space_Grotesk` via `next/font/google` com
`variable: '--font-body'` e `variable: '--font-display'`, aplicados no `<html>`.
Os componentes referenciam essas variáveis nos inline styles
(`fontFamily: "var(--font-body), sans-serif"`), então não há `@import` de Google Fonts.

## CTAs → toast "Em breve"

Todos os CTAs disparam o toast global:

- Header: **Entrar**, **Criar transação**
- Hero (fim do wizard): **Proteger meus R$ X**
- Bloco final: **Criar transação grátis**

Centralizado em `app/components/Toast.tsx`. Para apontar um CTA a um destino real,
troque `<ComingSoonAction>` por `<a href="…">` ou `<Link>` do Next.

## Notas

- A página é client-side (`'use client'`) — usa `useState`/`useEffect`.
- Tipagem está propositalmente frouxa; props não estão tipadas. Adicione interfaces ao endurecer.
- Logos via `<img src="/...svg">`; troque por `next/image` se quiser otimização.
