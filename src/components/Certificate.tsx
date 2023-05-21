'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import launchImage from '@/assets/space.jpg';
import Section from '@/components/Section';

export default function Certificate() {
  return (
    <Section className="grid grid-nogutter surface-section px-4 py-8 md:px-6 w-full">
      <Section className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <div>
          <h1 className="block text-5xl font-bold mb-1 mb-3">Gift Certificate</h1>
          <p className="mt-0 mb-4 text-700 line-height-3 mb-4">
            Delight your loved ones with a gift certificate for a creative workshop set from
            nekorobka. After payment, we will send you an electronic certificate via email or
            deliver it in a printed format.
          </p>
          <p className="mt-0 mb-4 text-700 line-height-3 mb-3 font-bold text-3xl">200 sh.</p>
          <Button label="Order Now" type="button" className="mr-3 p-button-raised" />
        </div>
      </Section>
      <Section className="col-12 md:col-6">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={launchImage}
          alt="Certificate"
          className="w-full h-auto md:ml-auto block md:h-full"
        />
      </Section>
    </Section>
  );
}
