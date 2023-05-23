import React from 'react';
import Text from '@/uikit/Text';
import Container from '../../uikit/Container';

type PhoneProps = {
  number: string;
  className?: string;
};

export default function Phone({ number, className }: PhoneProps): JSX.Element {
  return (
    <Container className={`${className}`}>
      <div className="col flex align-items-center gap-2">
        <i className="pi pi-phone" />
        <Text>{number}</Text>
      </div>
    </Container>
  );
}
