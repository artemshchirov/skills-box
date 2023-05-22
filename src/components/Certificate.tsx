'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import launchImage from '@/assets/space.jpg';
import Section from '@/components/Section';
import PageSection from '@/components/PageSection';

export default function Certificate() {
  return (
    <PageSection className="grid grid-nogutter surface-ground">
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
    </PageSection>
  );
}
