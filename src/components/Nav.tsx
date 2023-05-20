import React from 'react';
import { Button } from 'primereact/button';

export default function Nav() {
  return (
    <nav className="col card pl-3 flex flex-wrap justify-content-start w-full gap-3">
      <Button
        size="small"
        label="Home"
        icon="pi pi-home"
        style={{ boxShadow: 'none', outline: 'none', color: 'black' }}
        text
      />
      <Button
        size="small"
        label="Delivery"
        icon="pi pi-box"
        style={{ boxShadow: 'none', outline: 'none', color: 'black' }}
        text
      />
    </nav>
  );
}
