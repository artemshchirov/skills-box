import 'primereact/resources/themes/viva-light/theme.css';
// import 'primereact/resources/themes/viva-dark/theme.css';
import React from 'react';
// NOTE dark theme
import { Poppins } from 'next/font/google';
import PrimeReact from 'primereact/api';
import Header from '@/components/Header/Header';
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
  PrimeReact.ripple = true;
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
        style={{
          maxWidth: '1280px',
          margin: 'auto',
        }}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
