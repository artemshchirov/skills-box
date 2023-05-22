import React from 'react';
import Container from '../Container';

type PhoneProps = {
  number: string;
  className?: string;
};

export default function Phone({ number, className }: PhoneProps): JSX.Element {
  return (
    <Container className={`${className}`}>
      <p className="col flex align-items-center gap-2">
        <i className="pi pi-phone" />
        {number}
      </p>
    </Container>
  );
}
