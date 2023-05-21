'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Galleria } from 'primereact/galleria';
import type { GalleriaResponsiveOptions } from 'primereact/galleria';
import { Button } from 'primereact/button';
import Section from '@/components/Section';
import PhotoService from './GalleriaService';
import type { PhotoData } from './GalleriaService';

export default function About() {
  const [images, setImages] = useState<PhotoData[]>([]);
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data: PhotoData[]) => setImages(data));
  }, []);

  const itemTemplate = (item: PhotoData) => {
    return (
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        src={item.itemImageSrc}
        alt={item.alt}
      />
    );
  };

  const thumbnailTemplate = (item: PhotoData) => {
    return (
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        src={item.thumbnailImageSrc}
        alt={item.alt}
      />
    );
  };
  return (
    <Section className="grid grid-nogutter surface-ground px-4 py-8 md:px-6">
      <Section className="col-12 md:col-6 p-6 sm:pt-0 text-center md:text-left flex align-items-center">
        <div>
          <span className="block text-5xl font-bold mb-1">
            What is <br /> Skills Box?
          </span>
          <div className="text-xl text-primary font-semibold mb-3">Creative Workshop Set</div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            We explore creative hobbies and package them both figuratively and literally. With each
            set, we dive into a new hobby: finding experts, filming video tutorials, recording
            podcasts, gathering all the necessary components, and adding a concise guide. You
            don&apos;t need to spend hours searching for information - we&apos;ve already prepared
            everything for a comfortable creative process.
          </p>
          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
        </div>
      </Section>
      <Section className="col-12 md:col-6 m-auto">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          circular
          autoPlay
          transitionInterval={5000}
        />
      </Section>
    </Section>
  );
}
