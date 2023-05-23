import React from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

type TextProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export default function Text({
  className,
  size = 'md',
  children,
  ...props
}: TextProps): JSX.Element {
  const textSizeClass = cn({
    'text-sm': size === 'sm',
    'text-base': size === 'md',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
  });

  return (
    <p className={`${className} ${textSizeClass}`} {...props}>
      {children}
    </p>
  );
}
