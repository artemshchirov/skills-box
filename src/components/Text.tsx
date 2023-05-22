import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export default function Text({ className, children, ...props }: TextProps): JSX.Element {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
}
