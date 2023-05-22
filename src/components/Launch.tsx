'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import launchImage from '@/assets/space.jpg';
import Section from '@/components/Section';
import PageSection from '@/components/PageSection';

export default function Launch() {
  return (
    <PageSection className="grid grid-nogutter surface-section md:pt-0 lg:pt-0">
      <Section className="col-12 md:col-6 p-6 pt-0 md:pt-6 text-left flex align-items-center">
        <div>
          <h1 className="block text-6xl font-bold mb-1">SKILLS BOX</h1>
          <p className="text-3xl text-primary font-bold mb-3">ART FOR EVERYONE</p>
          {/* <p className="mt-0 mb-4 text-700 line-height-3">
            Ignite your creativity with art boxes. Experience unique and fulfilling artistic
            journeys. Perfect for seasoned artists or beginners, our boxes inspire and ignite your
            passion for art.
          </p> */}
          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
        </div>
      </Section>
      <Section className="col-12 md:col-6">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={launchImage}
          alt="Launch"
          className="w-full h-auto md:ml-auto block md:h-full"
        />
      </Section>
    </PageSection>
  );
}
