import React, { useState } from 'react';
import OneDrug from './OneDrug';

export default function Bascket({ drugs }) {
  const [currentDrugs, setCurrentDrugs] = useState(drugs);

  const deleteHandler = async (drugId) => {
    console.log(drugId, 'drugID');
    // e.preventDefault();
    await fetch(`/bascket/del/${drugId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setCurrentDrugs((prev) => prev.filter((el) => el.id !== drugId));
        }
      })
      .catch(() => console.log('Error'));
  };

  return (
    <>
      <div className="row mt=5 mb=15">
        {currentDrugs?.map((el) => (
          <OneDrug
            key={el.id}
            drug={el}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
      <div className="row mt=5 mb=5">
        <button type="button">Place an order</button>
      </div>
    </>
  );
}
