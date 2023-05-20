'use client';

import React from 'react';
import { Divider } from 'primereact/divider';
import Section from '@/components/Section';
import Steps from './Steps';
import Step from './Step';

type Step = {
  name: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    name: 'Order',
    description: 'Choose an item and place an order on our website.',
    icon: 'pi-desktop',
  },
  {
    name: 'Get',
    description:
      'We will deliver your order or hand it over to the delivery service within 24 hours.',
    icon: 'pi-lock',
  },
  {
    name: 'Learn',
    description: 'Immerse yourself in the creative process with a master of their craft.',
    icon: 'pi-check',
  },
  {
    name: 'Create',
    description: 'Make a cool and useful thing with your own hands.',
    icon: 'pi-globe',
  },
];

// TODO Columns With Borders https://blocks.primereact.org/ecommerce/incentive

export default function Info() {
  return (
    <Section className="p-6 surface-0 text-center">
      <Divider align="left" type="solid">
        <div className="inline-flex align-items-center">
          <h2 className="text-3xl font-normal">How It Works</h2>
        </div>
      </Divider>
      <Steps className="grid">
        {steps.map((step) => (
          <Step
            key={step.name}
            className="col-12 md:col-6 lg:col-3 mb-4 px-5 flex flex-column align-items-start"
          >
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <i className={`pi ${step.icon} text-4xl text-blue-500`} />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">{step.name}</div>
            <span className="text-700 line-height-3 text-left">{step.description}</span>
          </Step>
        ))}
      </Steps>
    </Section>
  );
}
