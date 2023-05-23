import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';

type TitleProps = {
  Tag?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function Title({
  Tag = 'h2',
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  return (
    <Tag className={` ${className}`} {...props}>
      {children}
    </Tag>
  );
}
