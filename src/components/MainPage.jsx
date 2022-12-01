import React from 'react';
import Catalog from './Catalog';
import CalendarAndRandomCard from './CalendarAndRandomCard';

export default function MainPage({ drug }) {
  return (
    <div className="mainPage">
      <CalendarAndRandomCard drug={drug} />
      <Catalog drug={drug} />
    </div>
  );
}
