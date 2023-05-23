import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={`${className}`} {...props}>
      {children}
    </section>
  );
}
