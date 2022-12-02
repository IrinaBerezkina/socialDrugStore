import React, { useEffect, useState } from 'react';
import DrugCard from './DrugCard';
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

  const submitHandler = async () => {
    await fetch('/bascket/deleteAll', {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setCurrentDrugs([]);
        }
      })
      .catch(() => console.log('Error'));
  };

  return (
    <div className="bigCont">
      <div className="smallCont">
        <div className="row pt=5 mb=15">
          <div>
            <h4 className="headerOfBascket headerToGreet">
              {!user ? (
                'Hello, Guest!'
              ) : (
                `${input?.login}, проверьте свою корзину:`
              )}
            </h4>
          </div>
          <div>
            <h4 className="headerOfBascket">Платные лекарства</h4>
            {currentDrugs?.filter((el) => !el.is_free).map((el) => (
              <DrugCard
                key={el.id}
                drug={el}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>

        </div>

        <div>
          <h4 className="headerOfBascket">Бесплатные лекарства</h4>
          {currentDrugs?.filter((el) => el.is_free).map((el) => (
            <DrugCard
              key={el.id}
              drug={el}
              deleteHandler={deleteHandler}
              isFreeBasket
            />
          ))}
        </div>

        <div className="bascketSummary">

          <div className="summary">
            Сумма:
            {(currentDrugs.filter((el) => !el.is_free).reduce((acc, el) => el.price + acc, 0) * 0.8).toFixed(1)}
            руб.
          </div>

          <button onClick={submitHandler} className="btn btn-primary" type="button">Оформить заказ</button>

        </div>
      </div>
    </div>
  );
}
