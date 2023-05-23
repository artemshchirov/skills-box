'use client';

import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import PageSection from '@/uikit/PageSection';
import questionsData from './questionsData';

export default function Questions() {
  return (
    <PageSection className="surface-section px-4 py-6 md:px-6 w-full">
      <h2 className="text-2xl text-900 font-semibold mb-2 text-left mb-5">
        Frequently Asked Questions
      </h2>
      <Accordion>
        {questionsData.map((q) => (
          <AccordionTab key={q.id} header={q.question}>
            <p className="m-0">{q.answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </PageSection>
  );
}
