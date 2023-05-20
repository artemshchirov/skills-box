import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return <section className={`${className}`}>{children}</section>;
}
