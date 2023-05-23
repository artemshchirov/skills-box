import React from 'react';
import Container from '@/uikit/Container';

type ReviewProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Review({ className, children }: ReviewProps) {
  return (
    <li className={`${className}`}>
      <Container className="p-2">
        <Container className="shadow-2 p-4 surface-card border-round-2xl">{children}</Container>
      </Container>
    </li>
  );
}
