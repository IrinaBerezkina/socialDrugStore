import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bascket from './Bascket';
import LK from './LK';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Background from './Background';
import Backgroundone from './Backgroundone';

export default function App({
  user, drug, drugs,
}) {
  return (
    <>
      <NavBar user={user} />
        <Routes>
          <Route path="/" element={<MainPage drug={drug} user={user} />} />
          <Route path="/bascket" element={<Bascket user={user} drugs={drugs} />} />
          <Route path="/lk" element={<LK user={user} />} />
          <Route path="/auth" element={<Backgroundone />} />
          <Route path="/auth/reg" element={<Background />} />
        </Routes>
    </>
  );
}
