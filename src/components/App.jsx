import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bascket from './Bascket';
import LK from './LK';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Registration from './Registration';

export default function App({ user, drug }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage drug={drug} />} />
          <Route path="/bascket" element={<Bascket />} />
          <Route path="/lk" element={<LK user={user} />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/reg" element={<Registration />} />
        </Routes>
      </div>
    </>
  );
}
