import React from 'react';

export default function DrugCard({
  drug, isSmall, submitHandler, deleteHandler,
}) {
  const sellPrice = Math.floor(drug.price * 0.8);
  return (
    <div className={
      isSmall
        ? 'col-4 oneCard' : 'col-4 mt-5 oneCard'
    }
    >
      <div className={
        isSmall
          ? 'card smallDrugCard' : 'card drugCard'
      }
      >
        <div className="imageDiv">
          <img src={drug.img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <div className="textDiv">
            <h5 className="card-title">{drug.title}</h5>
          </div>
          {isSmall
            ? ''
            : (
              <>
                <p className="card-text te">
                  Цена:
                  {' '}
                  {drug.price}
                  {' '}
                  руб.
                </p>
                <p className="card-text">
                  Цена со скидкой:
                  {' '}
                  {sellPrice}
                  {' '}
                  руб.
                </p>
              </>
            )}
          {deleteHandler
            ? (
              <button
                onClick={() => deleteHandler(drug?.id)}
                className="btn btn-primary"
                type="button"
              >
                Удалить
              </button>
            )
            : (
              <button
                onClick={(e) => submitHandler(e, drug.id)}
                className="btn btn-primary"
                type="button"
              >
                {isSmall ? 'Получить' : 'Добавить в корзину'}
              </button>
            )}

        </div>
      </div>
    </div>
  );
}
