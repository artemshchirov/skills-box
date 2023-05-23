'use client';

import React from 'react';
import PageSection from '@/uikit/PageSection';
import Container from '@/uikit/Container';
import Steps from './Steps';
import Step from './Step';

type Step = {
  name: string;
  description: string;
  icon: string;
  color: string;
};

const steps: Step[] = [
  {
    name: 'Order',
    description: 'Choose an item and place an order on our website.',
    icon: 'pi-desktop',
    color: 'pink',
  },
  {
    name: 'Get',
    description:
      'We will deliver your order or hand it over to the delivery service within 24 hours.',
    icon: 'pi-lock',
    color: 'blue',
  },
  {
    name: 'Learn',
    description: 'Immerse yourself in the creative process with a master of their craft.',
    icon: 'pi-check',
    color: 'orange',
  },
  {
    name: 'Create',
    description: 'Make a cool and useful thing with your own hands.',
    icon: 'pi-globe',
    color: 'green',
  },
];

// TODO Columns With Borders https://blocks.primereact.org/ecommerce/incentive

export default function Info() {
  return (
    <PageSection className="surface-section">
      <Container className="flex flex-wrap">
        <Steps className="flex flex-wrap">
          {steps.map((step) => (
            <Step
              key={step.name}
              className={`flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-${step.color}-500`}
            >
              <i className={`pi ${step.icon} text-${step.color}-500 text-4xl mr-5`} />
              <div>
                <p className="text-900 font-medium text-xl">{step.name}</p>
                <p className="text-600 line-height-3 p-0 mt-3 mb-0">{step.description}</p>
              </div>
            </Step>
          ))}
        </Steps>
      </Container>
    </PageSection>
  );
}
