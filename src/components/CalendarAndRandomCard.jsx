import React, { useState } from 'react';
import Calendar from './Calendar';
import RandomCards from './RandomCards';

export default function CalendarAndRandomCard({ drug }) {
  const [data, setData] = useState({ data: '' });
  const changeHandler = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  return (
    <div className="calendarAndRandomCard">
      <div className="calendar"><Calendar data={data} changeHandler={changeHandler} /></div>
      <div className="randomCards"><RandomCards drug={drug} data={data} /></div>
    </div>
  );
}
