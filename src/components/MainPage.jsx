import React from 'react';
import Catalog from './Catalog';
import CalendarAndRandomCard from './CalendarAndRandomCard';

export default function MainPage({ drug, user }) {
  return (
    <div className="mainPage">
      <CalendarAndRandomCard drug={drug} />
      <Catalog drug={drug} user={user} />
    </div>
  );
}
