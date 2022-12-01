import React from 'react';
import DrugCard from './DrugCard';

export default function Catalog({ drug }) {
  return (
    <div className="row mt-5">
      {drug?.map((el) => (
        <DrugCard
          key={el.id}
          drug={el}
        />
      ))}
    </div>
  );
}
