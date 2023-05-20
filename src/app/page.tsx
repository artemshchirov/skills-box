'use client';

import Image from 'next/image';
import { Button } from 'primereact/button';
import welcomeImage from '@/assets/space.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-column justify-content-evenly align-items-center">
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">SKILLS BOX</span>
            <div className="text-6xl text-primary font-bold mb-3">Art for everyone</div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Ignite your creativity with our curated art boxes. Experience unique and fulfilling
              artistic journeys. Perfect for seasoned artists or beginners, our boxes inspire and
              ignite your passion for art.
            </p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
            <Button label="Live Demo" type="button" className="p-button-outlined" />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <Image
            src={welcomeImage}
            sizes="100vw"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </main>
  );
}
