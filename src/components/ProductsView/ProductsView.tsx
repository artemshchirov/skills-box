'use client';

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import Section from '@/components/Section';
import productService from './ProductService';
import type { Product } from './ProductService';

export default function ProductsView() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data.slice(0, 12)));
  }, []);

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const gridItem = (product: Product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag" />
              <span className="font-semibold">{product.category}</span>
            </div>
            <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-9 shadow-2 border-round h-auto"
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
            />
            <div className="text-2xl font-bold">{product.name}</div>
            <Rating value={product.rating} readOnly cancel={false} />
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">${product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              disabled={product.inventoryStatus === 'OUTOFSTOCK'}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section className="p-6">
      <DataView value={products} itemTemplate={gridItem} layout="grid" />
    </Section>
  );
}
