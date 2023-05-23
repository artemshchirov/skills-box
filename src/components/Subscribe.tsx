'use client';

import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Title from '@/uikit/Title';
import Text from '@/uikit/Text';
import PageSection from '@/uikit/PageSection';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  return (
    <PageSection className="surface-ground">
      <Title className="text-900 text-3xl font-medium block text-center lg:text-left">
        Be the first to learn about new collections
      </Title>
      <Text className="text-600 text-2xl block mt-4 text-center lg:text-left">
        We promise not to spam you :)
      </Text>
      <div className="p-inputgroup mt-4 justify-content-center lg:justify-content-start">
        <InputText
          placeholder="Enter your email address"
          className="max-w-30rem"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-help"
          type="email"
        />
        <Button label="Subscribe" className="surface-900 px-5 border-none" />
      </div>
    </PageSection>
  );
}
