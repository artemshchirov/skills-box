import React from 'react';

type StepsProps = {
  className?: React.ReactNode;
  children: React.ReactNode;
};

export default function Steps({ className, children }: StepsProps) {
  return <ul className={`list-none ${className}`}>{children}</ul>;
}
