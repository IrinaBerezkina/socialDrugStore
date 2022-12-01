import React from 'react';

export default function Registration() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    }
  };

  return (
    <form onSubmit={submitHandler} className="loginPage">
      <div className="form">

        <h1 className="form__title">Регистрация</h1>

        <div className="form__group">
          <input name="login" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Логин</label>
        </div>

        <div className="form__group">
          <input name="email" type="email" className="form__input" placeholder=" " />
          <label className="form__label">Адрес электронной почты</label>
        </div>

        <div className="form__group">
          <input name="pass" type="password" className="form__input" placeholder=" " />
          <label className="form__label">Пароль</label>
        </div>

        <button type="submit" className="form__button">Регистрация</button>

      </div>
    </form>
  );
}
