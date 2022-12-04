import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}