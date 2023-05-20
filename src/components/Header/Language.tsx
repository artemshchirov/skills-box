'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { DropdownChangeEvent, DropdownProps } from 'primereact/dropdown';
import { Dropdown } from 'primereact/dropdown';
import ua from '@/assets/ua.svg';
import ru from '@/assets/ru.svg';
import he from '@/assets/he.svg';
import en from '@/assets/en.svg';

type Country = {
  name: string;
  code: string;
};

export default function Language() {
  const countries: Country[] = [
    { name: 'Hebrew', code: 'HE' },
    { name: 'English', code: 'EN' },
    { name: 'Ukrainian', code: 'UA' },
    { name: 'Russian', code: 'RU' },
  ];
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[1]);

  const getFlagImage = (code: string) => {
    switch (code) {
      case 'HE':
        return he;
      case 'EN':
        return en;
      case 'UA':
        return ua;
      case 'RU':
        return ru;
      default:
        return '';
    }
  };

  const selectedCountryTemplate = (option: Country, props: DropdownProps) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <Image
            alt={option.name}
            width={18}
            height={14}
            src={getFlagImage(option.code)}
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.code}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: Country) => {
    return (
      <div className="flex align-items-center">
        <Image
          alt={option.name}
          width={18}
          height={14}
          src={getFlagImage(option.code)}
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.code}</div>
      </div>
    );
  };

  return (
    <Dropdown
      value={selectedCountry}
      onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
      options={countries}
      optionLabel="name"
      placeholder="Choose a Language"
      valueTemplate={selectedCountryTemplate}
      itemTemplate={countryOptionTemplate}
      className="w-min h-min"
    />
  );
}
