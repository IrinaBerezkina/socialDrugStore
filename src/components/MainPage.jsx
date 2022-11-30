import React from 'react';
import Catalog from './Catalog';

export default function MainPage({ drug }) {
  return (
    <Catalog drug={drug} />
  );
}
