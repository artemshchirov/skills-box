'use client';

import React from 'react';
import { Button } from 'primereact/button';
import Image from 'next/image';
import PrimeReact from 'primereact/api';

import logo from '../../public/next.svg';
import Language from './Language';
import Nav from './Nav';

// type HeaderProps = {
//   classNameProp?: string | undefined;
// };

export default function Header() {
  PrimeReact.ripple = true;

  return (
    <header className="px-6 col-12 gap-6 grid grid-nogutter container flex justify-content-center align-items-center">
      <Image className="col col-fixed " src={logo} alt="logo" width={143} height={40} />
      <Nav />
      <div className="flex flex-wrap justify-content-center gap-3">
        <Button
          icon="pi pi-instagram"
          rounded
          text
          raised
          severity="danger"
          aria-label="Instagram"
        />
        <Button
          icon="pi pi-telegram"
          rounded
          text
          raised
          severity="info"
          aria-label="Telegram Social"
        />
        <Button
          icon="pi pi-whatsapp"
          rounded
          text
          raised
          severity="success"
          aria-label="WhatsApp"
        />
      </div>
      <Language />
    </header>
  );
}
