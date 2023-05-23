// 'use client';

import React, { useState } from 'react';
import { Sidebar as SidebarSurf } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Container from '../../uikit/Container';
import Language from './Language';
import Phone from './Phone';
import Socials from './Socials';

// TODO refactor <Nav/>

export default function Sidebar() {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <>
      <div className="lg:hidden ">
        <Button
          icon="pi pi-bars"
          outlined
          severity="secondary"
          onClick={() => setVisibleRight(true)}
        />
      </div>

      <SidebarSurf visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
        <Container className="h-full flex flex-column align-items-center justify-content-evenly">
          <Container className="flex flex-column justify-content-center align-items-center gap-3 my-auto">
            <ul className="list-none flex flex-column align-items-center gap-2">
              <li>
                <Button severity="help" label="Skills" icon="pi pi-star" text />
              </li>
              <li>
                <Button severity="help" label="Delivery" icon="pi pi-truck" text />
              </li>
            </ul>
            <Phone number="0584441705" className="mt-1" />
            <Socials />
          </Container>
          <Language />
        </Container>
      </SidebarSurf>
    </>
  );
}
