'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { Button } from 'primereact/button';
import Container from '@/uikit/Container';
import PageSection from '@/uikit/PageSection';
import productService from './ProductService';
import type { Product } from './productsData';

export default function ProductsView() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data.slice(0, 12)));
  }, []);

  return (
    <PageSection className="surface-ground">
      <div className="grid -mt-3 -ml-3 -mr-3">
        {products.map((product) => (
          <div key={product.id} className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
              <div className="relative mb-3">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  src={product.image}
                  alt={product.name}
                />
                <span
                  className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute border-round-2xl"
                  style={{
                    right: '1rem',
                    bottom: '1rem',
                  }}
                >
                  -%{product.discount}
                </span>
              </div>
              <p className="text-900 font-medium text-xl">{product.name}</p>
              <div className="mb-4">
                <span className="line-through text-600">${product.oldPrice}.00</span>
                <span className="font-bold text-900 ml-2">${product.price}.00</span>
              </div>
              <Container className="flex gap-2">
                <div className="w-9">
                  <Button
                    type="button"
                    label="Learn More"
                    className="w-full"
                    severity="info"
                    aria-label="Add to Cart"
                    icon="pi pi-search"
                  />
                </div>
                <div className="w-3">
                  <Button
                    type="button"
                    className="w-full"
                    severity="danger"
                    aria-label="Add to Cart"
                    icon="pi pi-shopping-cart"
                  />
                </div>
              </Container>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
