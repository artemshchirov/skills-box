'use client';

import { Button } from 'primereact/button';
import React from 'react';
import Container from '../../uikit/Container';

type SocialsProps = {
  className?: string;
};

export default function Socials({ className }: SocialsProps): JSX.Element {
  return (
    <Container className={`${className}`}>
      <ul className="list-none flex justify-content-end gap-2 lg:gap-3">
        <li>
          <Button
            icon="pi pi-instagram"
            rounded
            text
            raised
            aria-label="Instagram"
            className="text-pink-500 hover:surface-10 transition-colors transition-duration-150"
          />
        </li>
        <li>
          <Button
            icon="pi pi-telegram"
            rounded
            text
            raised
            aria-label="Telegram"
            className="text-blue-500 hover:surface-10 transition-colors transition-duration-150"
          />
        </li>
        <li>
          <Button
            icon="pi pi-whatsapp"
            rounded
            text
            raised
            aria-label="WhatsApp"
            className="text-green-500 hover:surface-10 transition-colors transition-duration-150"
          />
        </li>
      </ul>
    </Container>
  );
}
