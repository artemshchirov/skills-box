import React from 'react';

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageSection({ children, className, ...props }: PageSectionProps) {
  return (
    <section className={`px-4 py-6 md:p-6 lg:p-8 w-full ${className}`} {...props}>
      {children}
    </section>
  );
}
