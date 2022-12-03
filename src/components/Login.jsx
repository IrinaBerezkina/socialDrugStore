import React from 'react';

export default function Login() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    } else {
      alert('Упс, кажется вы не зарегистрированы');
      window.location = '/auth/reg';
    }
  };

  return (
    <form onSubmit={submitHandler} className="loginPage">
      <div className="form">

        <h1 className="form__title">Авторизация</h1>

        <div className="form__group">
          <input name="login" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Логин</label>
        </div>

        <div className="form__group">
          <input name="pass" type="password" className="form__input" placeholder=" " />
          <label className="form__label">Пароль</label>
        </div>

        <button type="submit" className="form__button">Войти</button>

      </div>
    </form>
  );
}
