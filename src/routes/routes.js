import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}