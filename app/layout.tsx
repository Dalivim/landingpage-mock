import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalivim",
  description: "Uma camada de segurança para freelancers e negociações online. O pagamento fica seguro até as duas partes cumprirem o acordo.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='%230A0A0A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'><path d='M32 8 L54 20 L54 44 L32 56 L10 44 L10 20 Z'/><path d='M32 8 L32 32 M54 20 L32 32 M54 44 L32 32 M32 56 L32 32 M10 44 L32 32 M10 20 L32 32'/></g><g fill='%230A0A0A'><circle cx='32' cy='8' r='5'/><circle cx='54' cy='20' r='5'/><circle cx='54' cy='44' r='5'/><circle cx='32' cy='56' r='5'/><circle cx='10' cy='44' r='5'/><circle cx='10' cy='20' r='5'/><circle cx='32' cy='32' r='6'/></g></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
