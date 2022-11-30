import React from 'react';

export default function Registration() {
  return (
    <form className="container">
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Login
          <input type="text" className="form-control" id="exampleInput" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Адрес электронной почты
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Пароль
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Регистрация</button>
    </form>
  );
}
