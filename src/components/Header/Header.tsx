'use client';

import React from 'react';
import Image from 'next/image';
import PrimeReact from 'primereact/api';
import logo from '../../assets/logo_1.svg';
import Language from './Language';
import Nav from './Nav';
import Phone from './Phone';
import Socials from './Socials';
import Sidebar from './Sidebar';

export default function Header() {
  PrimeReact.ripple = true;
  return (
    <header className="gap-3 lg:gap-5 grid grid-nogutter flex flex-nowrap align-items-center px-4 py-3 md:px-6">
      <Image className="col col-fixed mr-auto" src={logo} alt="logo" width={70} height={70} />
      <Nav className="hidden lg:flex" />
      <Socials className="hidden lg:flex" />
      <Phone className="hidden lg:flex" number="0584441705" />
      <Language className="ml-auto" />
      <Sidebar />
    </header>
  );
}
