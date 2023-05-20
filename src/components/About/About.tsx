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
    <Section className="grid grid-nogutter surface-0 text-800">
      <Section className="col-12 md:col-6 p-6 my-auto overflow-hidden h-full">
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

      <Section className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
        <div>
          <span className="block text-6xl font-bold mb-1">SKILLS BOX</span>
          <div className="text-6xl text-primary font-bold mb-3">Art for everyone</div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Ignite your creativity with our curated art boxes. Experience unique and fulfilling
            artistic journeys. Perfect for seasoned artists or beginners, our boxes inspire and
            ignite your passion for art.
          </p>
          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
          <Button label="Live Demo" type="button" className="p-button-outlined" />
        </div>
      </Section>
    </Section>
  );
}
