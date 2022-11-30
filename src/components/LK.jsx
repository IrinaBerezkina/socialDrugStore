import React from 'react';

export default function LK({ user }) {
  return (
    <div className="Container mt-3">
      {`Hello, ${user?.login}`}
      <div className="card" style={{ width: '18rem' }}>
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
      </div>
    </div>
  );
}
