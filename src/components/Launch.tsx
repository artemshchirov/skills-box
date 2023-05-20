'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import welcomeImage from '@/assets/space.jpg';
import Section from '@/components/Section';

export default function Launch() {
  return (
    <Section className="grid grid-nogutter surface-0 text-800">
      <Section className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <div>
          <h1 className="block text-6xl font-bold mb-1">SKILLS BOX</h1>
          <p className="text-6xl text-primary font-bold mb-3">Art for everyone</p>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Ignite your creativity with our curated art boxes. Experience unique and fulfilling
            artistic journeys. Perfect for seasoned artists or beginners, our boxes inspire and
            ignite your passion for art.
          </p>

          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
          <Button label="Live Demo" type="button" className="p-button-outlined" />
        </div>
      </Section>
      <Section className="col-12 md:col-6 overflow-hidden">
        <Image
          src={welcomeImage}
          width="0"
          height="0"
          sizes="100vw"
          alt="hero-1"
          className="w-full h-auto md:ml-auto block md:h-full"
          style={{
            clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
          }}
        />
      </Section>
    </Section>
  );
}
