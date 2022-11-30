import React from 'react';
import Catalog from './Catalog';
import Calendar from './Calendar';

export default function MainPage({ drug }) {
  return (
    <>
      <Calendar />
      <Catalog drug={drug} />
    </>
  );
}
