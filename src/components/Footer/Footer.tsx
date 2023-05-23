'use client';

import React from 'react';
import Link from 'next/link';
import PageSection from '@/uikit/PageSection';
import Logo from '@/components/Logo';
import Phone from '@/components/Header/Phone';
import Container from '../../uikit/Container';
import Title from '../../uikit/Title';
import sitemap from './sitemap';

export default function Footer() {
  return (
    <PageSection className="grid grid-nogutter text-center lg:text-left">
      <Container className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column align-items-center lg:align-items-start">
        <Logo size={70} className="w-9rem mx-auto lg:mx-0" />
        <ul className="list-none flex align-items-center w-full mt-5 justify-content-center lg:justify-content-start ">
          <li className="mr-3 text-blue-600">
            <Link href="http://example.com/" tabIndex={0}>
              <i className="pi pi-facebook p-1 text-sm border-1 border-circle" />
            </Link>
          </li>
          <li className="mr-3 text-pink-500">
            <Link href="http://example.com/" tabIndex={0}>
              <i className="pi pi-instagram p-1 text-sm border-1 border-circle" />
            </Link>
          </li>
          <li className="mr-3 text-blue-500">
            <Link href="http://example.com/" tabIndex={0}>
              <i className="pi pi-telegram p-1 text-sm border-1 border-circle" />
            </Link>
          </li>
          <li className="text-green-500">
            <Link href="http://example.com/" tabIndex={0}>
              <i className="pi pi-whatsapp p-1 text-sm border-1 border-circle" />
            </Link>
          </li>
        </ul>
        <Phone className="text-600  mt-4" number="0584441705" />

        <Link
          href="http://example.com/"
          tabIndex={0}
          className="text-600 mt-4 hover:text-900 transition-duration-150 select-none"
        >
          <i className="pi pi-map-marker mr-2" />
          Israel, Bat Yam
        </Link>
      </Container>
      {sitemap.map((column) => (
        <Container
          key={column.title}
          className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column"
        >
          <Title className="text-900 text-xl font-medium block">{column.title}</Title>
          <ul className="list-none p-0">
            {column.links.map((row) => (
              <li key={row.name}>
                <Link
                  href={row.link}
                  tabIndex={0}
                  className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                >
                  {row.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ))}
    </PageSection>
  );
}
