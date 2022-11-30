import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bascket from './Bascket';
import LK from './LK';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Registration from './Registration';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bascket" element={<Bascket />} />
        <Route path="/lk" element={<LK />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/reg" element={<Registration />} />
      </Routes>
    </>
  );
}