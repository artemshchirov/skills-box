import React from 'react';

type StepProps = {
  className?: React.ReactNode;
  children: React.ReactNode;
};

export default function Step({ className, children }: StepProps) {
  return <li className={`${className}`}>{children}</li>;
}
