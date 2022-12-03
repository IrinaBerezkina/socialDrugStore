import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function LK({ user }) {
  const [input, setInput] = useState({ login: user?.login, email: user?.email });
  const [isEdit, setIsEdit] = useState(false);

  const editProxyHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const editHandler = async () => {
    setIsEdit((prev) => !prev);
    if ((input.login !== user.login) || (input.email !== user.email)) {
      const response = await fetch(
        `/lk/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input),
        },
      );
      if (response.ok) {
        window.location.href = '/auth';
      }
    }
  };

  const changeHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bigCont backgroundForLK">
      <div className="smallCont contForLK">
        <form action="" className="formForLK">
          {!user ? (
            'Привет, Guest!'
          ) : (
            `Добрый день,  ${input.login}!
          Тут вы можете изменить свои данные`
          )}
          <div className="card mt-3 mb-3" style={{ width: '20rem' }}>
            {isEdit ? (
              <label htmlFor="login">
                Login:
                <input type="text" id="login" name="login" onChange={changeHandler} value={input.login} />
              </label>
            ) : input.login}
          </div>
          <div className="card mt-3 mb-3" style={{ width: '20rem' }}>
            {isEdit ? (
              <label htmlFor="email">
                Email
                <input id="email" type="text" name="email" onChange={changeHandler} value={input.email} />
              </label>
            ) : input.email}
          </div>
          <div className="mt-3 mb-3">
            {!isEdit && <button type="button" className="btn btn-primary" onClick={editProxyHandler}>Изменить</button>}
            {isEdit && (<button type="button" className="btn btn-primary" onClick={editHandler}>Сохранить</button>)}
          </div>
        </form>
      </div>
    </div>
  );
}
