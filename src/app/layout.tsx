import 'primereact/resources/themes/viva-light/theme.css';
import React from 'react';
// import 'primereact/resources/themes/viva-dark/theme.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Skills Box',
  description: 'Art for everyone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
