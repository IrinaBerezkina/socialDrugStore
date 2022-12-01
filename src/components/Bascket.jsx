import React, { useState } from 'react';
import OneDrug from './OneDrug';

export default function Bascket({ drugs }) {
  const [currentDrugs, setCurrentDrugs] = useState(drugs);

  const deleteHandler = (id) => {
    fetch(`/bascket/del/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setCurrentDrugs((prev) => prev.filter((el) => el.id !== id));
        }
      })
      .catch(() => console.log('Error'));
  };

  return (
    <div className="row mt=5">
      {currentDrugs?.map((el, index) => (
        <OneDrug
          key={el.id}
          drug={el}
          deleteHandler={deleteHandler}
        />
      ))}
      <button type="button">Place an order</button>
    </div>
  );
}
