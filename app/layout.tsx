import './globals.css';
import '../styles/colors_and_type.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ToastProvider } from './components/Toast';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'Dalivim — Medo de pagar e não receber? A gente garante.',
  description: 'Pix com garantia de entrega. O dinheiro só é liberado quando tudo é entregue.',
  icons: { icon: '/dalivim-mark.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
