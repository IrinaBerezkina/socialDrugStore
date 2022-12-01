import React, { useState } from 'react';

export default function Calendar({ data, changeHandler }) {
  return (
    <div className="form-group">
      <h5 className="heading">Выбери день, в который ты хочешь получить бесплатные лекарства</h5>
      <div className="grid">
        <div className="controlsMain">
          <div className="controlsNotMain">
            <div className="controls">
              <input
                type="date"
                onChange={(e) => changeHandler(e)}
                id="arrive"
                className="floatLabel"
                name="data"
                value={data.data}
              />
              {!data.data
                ? (
                  <label htmlFor="arrive" className="label-date">
                    <i className="fa fa-calendar" />
                    Дата
                  </label>
                )
                : (
                  <label htmlFor="arrive" className="label-date">
                    <i className="fa fa-calendar" />

                    {data.data}
                  </label>
                )}

            </div>
          </div>
          <p>Добрый день, дорогой друг! Мы рады, что ты решил воспользоваться нашим сервисом покупки лекарств! Наша миссия - помочь тем, кто в этом нуждается! Именно поэтому в нашем приложении вы увидите только демократичные цены. А также каждый день вы можете выбрать лекарство, в котором вы нуждаетесь и мы его вам подарим!</p>
        </div>
      </div>
    </div>
  );
}
