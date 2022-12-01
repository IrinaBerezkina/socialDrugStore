import React, { useEffect, useState } from 'react';
import DrugCard from './DrugCard';

export default function RandomCards({ drug, data }) {
  const [randomDrugs, setRandomDrugs] = useState(drug);

  const getRandomCards = (arr) => {
    const res = new Set([]);
    while (res.size < 3) {
      const indexCard = Math.floor(Math.random() * arr.length);
      res.add(arr[indexCard]);
    }
    return Array.from(res);
  };

  useEffect(() => {
    setRandomDrugs(getRandomCards(drug));
  }, [data]);
  const submitHandler = async (e, drugId) => {
    e.preventDefault();
    const response = await fetch('/bascket', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ id: drugId }),
    });
    console.log('itt worksssssssssssssssssssssss');
  };

  return (
    <div className="flexForRandom">
      {randomDrugs?.map((el) => (
        <DrugCard
          key={el.id}
          drug={el}
          isSmall
          submitHandler={submitHandler}
        />
      ))}
    </div>
  );
}
