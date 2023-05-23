'use client';

import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Loading() {
  return (
    <div className="card flex justify-content-center">
      <ProgressSpinner />
    </div>
  );
}
