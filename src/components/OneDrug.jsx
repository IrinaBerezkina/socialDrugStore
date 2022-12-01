import React from 'react';

export default function OneDrug({ drug, deleteHandler }) {
  console.log(drug);
  return (
    <div className="col-4 mt-5">

      <div className="card" style={{ width: '18rem' }}>
        <img src={`${drug.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{drug.title}</h5>
          <h5 className="card-title">{`${drug.price}руб`}</h5>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => deleteHandler(drug?.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
