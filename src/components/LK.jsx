import React, { useState } from 'react';

export default function LK({ user }) {
  const [input, setInput] = useState({ login: user.login, email: user.email });
  const [isEdit, setIsEdit] = useState(false);

  const editProxyHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const editHandler = async () => {
    setIsEdit((prev) => !prev);
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
      const { login, email } = await response.json();
      setInput({ login, email });
    }
  };

  const changeHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="Container mt-3">
      {!user ? (
        'Hello, Guest!'
      ) : (
        `Hello, ${user?.login}`
      )}
      <div className="card" style={{ width: '18rem' }}>
        {isEdit ? (
          <label htmlFor="login">
            Login:
            <input type="text" id="login" name="login" onChange={changeHandler} value={input.login} />
          </label>
        ) : input.login}
        -
        {isEdit ? (
          <label htmlFor="email">
            Email
            <input id="email" type="text" name="email" onChange={changeHandler} value={input.email} />
          </label>
        ) : input.email}

        {!isEdit && <button type="button" onClick={editProxyHandler}>Edit</button>}
        {isEdit && (<button type="button" onClick={editHandler}>Save</button>)}

      </div>

      {/*

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Login
          <button type="button">Edit</button>
        </li>
        <li className="list-group-item">
          Email Address
          <button type="button">Edit</button>
        </li>

      </ul>
    </div> */}
    </div>
  );
}
