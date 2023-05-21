'use client';

import React from 'react';
import { Rating } from 'primereact/rating';
import { Divider } from 'primereact/divider';
import Image from 'next/image';
import Section from '@/components/Section';
import productsData from '@/components/ProductsView/productsData';
import productTemplate from '@/assets/space.jpg';
import Container from '../Container';
import Review from './Review';
import reviews from './reviewsData';

export default function Reviews() {
  return (
    <Section className="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <h2 className="text-900 font-medium text-2xl mb-5">Your Voice</h2>
      <ul className="list-none grid -mt-3 -ml-3 -mr-3">
        {reviews.map((review) => (
          <Review key={review.id} className="col-12 xl:col-4">
            <Container className="flex">
              <Container className="flex flex-column w-9 pr-4">
                <p className="mb-4 text-900 font-medium">{review.author}</p>
                <Rating
                  className="mb-3"
                  value={review.rating}
                  cancel={false}
                  onIcon={<i className="pi pi-star-fill text-yellow-500 mr-1" />}
                  offIcon={<i className="pi pi-star-fill text-300" />}
                />
                <p className="text-700 m-0 p-0 line-height-3">{review.description}</p>
              </Container>
              <Container className="w-3  flex align-items-start justify-content-end">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto "
                  src={review.image}
                  alt={review.author}
                />
              </Container>
            </Container>

            <Container className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
              <Image
                width={48}
                height={48}
                className="w-3rem h-3rem flex-shrink-0 mr-3"
                src={productsData.find((p) => p.name === review.product)?.image || productTemplate}
                alt={review.product}
              />
              <div>
                <p className="block mb-2 text-900 font-medium">{review.product}</p>
                <p className="text-600 m-0 p-0 text-sm">{review.type}</p>
              </div>
            </Container>
          </Review>
        ))}
      </ul>
    </Section>
  );
}
