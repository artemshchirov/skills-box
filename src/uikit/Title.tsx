import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';

type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type TitleProps = {
  Tag?: React.ElementType;
  weight?: FontWeight;
  size?: FontSize;
  className?: string;
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function Title({
  Tag = 'h2',
  size = '2xl',
  weight = 'medium',
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  return (
    <Tag className={`text-${size} font-${weight} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
