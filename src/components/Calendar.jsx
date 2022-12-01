import React, { useState } from 'react';

export default function Calendar() {
  const [data, setData] = useState({ data: '' });
  const changeHandler = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="form-group">
      <h4 className="heading">Choose date for free medicine</h4>
      <div>
        <div>
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
                  Data
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
      </div>
    </div>
  );
}
