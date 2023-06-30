import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import ThemeProviderWrapper from '@/components/theme-provider-wrapper';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Estancy',
  description: 'Online real estate marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
