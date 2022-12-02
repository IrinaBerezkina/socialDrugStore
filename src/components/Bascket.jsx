import React, { useEffect, useState } from 'react';
import OneDrug from './OneDrug';

export default function Bascket({ drugs, user }) {
  const [currentDrugs, setCurrentDrugs] = useState(drugs);
  const [input, setInput] = useState({ login: user?.login, email: user?.email });

  const deleteHandler = async (drugId) => {
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
        <div>
          <h4>
            {!user ? (
              'Hello, Guest!'
            ) : (
              `Dear ${input?.login}, here is your Basket:`
            )}
          </h4>
        </div>
        {currentDrugs?.map((el) => (
          <OneDrug
            key={el.id}
            drug={el}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
      <div>
        <h5>
          Total Amount:
          {currentDrugs.reduce((acc, el) => el.price + acc, 0)}
          руб.
        </h5>
      </div>
      <div className="row mt=5 mb=5">
        <button type="button">Place an order</button>
      </div>
    </>
  );
}
