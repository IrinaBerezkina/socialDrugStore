import React, { useEffect, useState } from 'react';
import DrugCard from './DrugCard';

export default function Catalog({ drug }) {
  const [descending, setDescending] = useState(false);
  const [currentDrugs, setCurrentDrugs] = useState(drug);

  const changeHahdler = (e) => {
    setDescending(e.target.value);
    console.log(descending);
  };

  useEffect(() => {
    // const copy = [...drug];
    // console.log(copy);
    fetch(`/drugs?descending=${descending}`)
      .then((res) => res.json()
        .then((data) => {
          setCurrentDrugs(data);
        }));
    // setCurrentDrugs(copy.sort((a, b) => {
    //   if (descending) {
    //     if (a.price > b.price) return 1;
    //     if (a.price < b.price) return -1;
    //     return 0;
    //   }
    //   if (a.price < b.price) return 1;
    //   if (a.price > b.price) return -1;
    //   return 0;
    // }));
  }, [descending]);

  return (
    <>
      <span className="input-group-text" id="basic-addon1">Сортировка по цене</span>
      <select
        defaultValue={false}
        onChange={changeHahdler}
        className="form-select"
        aria-label="Default select example"
      >
        <option value={false}>По возрастанию</option>
        <option value>По убыванию</option>

      </select>
      <div className="row mt=5">
        {currentDrugs?.map((el) => (
          <DrugCard
            key={el.id}
            drug={el}
          />
        ))}
      </div>
    </>
  );
}
