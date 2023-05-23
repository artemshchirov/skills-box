import React from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type TextProps = {
  size?: FontSize;
  weight?: FontWeight;
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export default function Text({
  className,
  size = 'base',
  weight = 'normal',
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <p className={`text-${size} font-${weight} ${className}`} {...props}>
      {children}
    </p>
  );
}
