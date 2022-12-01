import React from 'react';
import Catalog from './Catalog';
import CalendarAndRandomCard from './CalendarAndRandomCard';

export default function MainPage({ drug, user }) {
  return (

    <div className="mainPage">
      <div className="backgroundCard">
        <div className="smallCont">
          <CalendarAndRandomCard drug={drug} />
        </div>

      </div>
      <div className="backgroundCatalog">
        <div className="smallCont">
          <Catalog drug={drug} user={user} />
        </div>
      </div>
    </div>
  );
}
