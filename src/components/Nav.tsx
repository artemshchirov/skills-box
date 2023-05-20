import React from 'react';
import { Button } from 'primereact/button';

export default function Nav() {
  const buttonStyle = { boxShadow: 'none' };
  return (
    <nav className="col ">
      <ul className="list-none flex gap-3">
        <li>
          <Button severity="help" label="Skills" icon="pi pi-star" style={buttonStyle} text />
        </li>
        <li>
          <Button severity="help" label="Delivery" icon="pi pi-truck" style={buttonStyle} text />
        </li>
      </ul>
    </nav>
  );
}
