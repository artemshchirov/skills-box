import React from 'react';
import { Button } from 'primereact/button';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps): JSX.Element {
  const buttonStyle = { boxShadow: 'none' };
  return (
    <nav className={`col ${className}`}>
      <ul className="list-none flex gap-2 lg:gap-3">
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
