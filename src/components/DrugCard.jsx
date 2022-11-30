import React from 'react';

export default function DrugCard({ drug }) {
  return (
    <div className="col-4 mt-5">
      <div className="card" style={{ width: '18rem' }}>
        <img src={drug.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{drug.title}</h5>
          <p className="card-text">
            {drug.price}
            {' '}
            руб.
          </p>
          {/* <button
            className="btn btn-primary"
            type="button"
          onClick={() => deleteHandler(student.id)}
          >
            Добавить в корзину
          </button> */}
        </div>
      </div>
    </div>
  );
}
