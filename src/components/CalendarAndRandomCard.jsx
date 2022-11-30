import React from 'react';
import Calendar from './Calendar';
import RandomCards from './RandomCards';

export default function CalendarAndRandomCard({ drug }) {
  return (
    <div className="calendarAndRandomCard">
      <div className="calendar"><Calendar /></div>
      <div className="randomCards"><RandomCards drug={drug} /></div>
    </div>
  );
}
