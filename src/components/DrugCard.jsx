import React from 'react';

export default function DrugCard({ drug, isSmall }) {
  return (
    <div className="col-4 mt-5">
      <div className={
        isSmall
          ? 'card smallDrugCard' : 'card drugCard'
      }
      >
        <img src={drug.img} className="card-img-top p-5" style={{ width: 300, height: 300, objectFit: 'contain' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{drug.title}</h5>
          <p className="card-text">
            Цена:
            {' '}
            {drug.price}
            {' '}
            руб.
          </p>
          <button
            className="btn btn-primary"
            type="button"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}
