import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo_1.svg';

type LogoProps = {
  size: number;
  className?: string;
};

export default function Logo({ size, className }: LogoProps) {
  return (
    <Image className={`${className}`} src={logo} alt="Skills Box" width={size} height={size} />
  );
}
