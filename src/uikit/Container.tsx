import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}
