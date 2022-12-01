import React, { useState } from 'react';

export default function Calendar({ data, changeHandler }) {
  return (
    <div className="form-group">
      <h5 className="heading">Выбери день, в который ты хочешь получить бесплатные лекарства</h5>
      <div className="grid">
        <div className="0">
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad, beatae porro consequuntur delectus hic eius eum suscipit dicta, voluptate error accusamus fugit ab rerum? Laboriosam excepturi, deserunt enim earum est tenetur porro nulla rem esse ducimus nostrum reprehenderit doloremque, natus ut blanditiis vel ab praesentium minus aliquam distinctio! Totam.</p>
        </div>
      </div>
    </div>
  );
}
