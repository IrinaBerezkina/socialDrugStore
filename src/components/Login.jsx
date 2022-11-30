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
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Логин
          <input name="login" type="text" className="form-control" id="exampleInput" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Пароль
          <input name="pass" type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>
  );
}
