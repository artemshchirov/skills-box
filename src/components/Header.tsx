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
    <header className="px-6 py-3 gap-6 grid grid-nogutter flex align-items-center">
      <Image className="col col-fixed" src={logo} alt="logo" width={143} height={40} />
      <Nav />
      <div className="col flex justify-content-end gap-3">
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
      <p className="col-1 flex align-items-center gap-2">
        <i className="pi pi-phone" />
        0584441705
      </p>
      <Language />
    </header>
  );
}
