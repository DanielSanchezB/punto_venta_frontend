import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu';
import Index from '../pages/index';
import Signup from '../pages/signup';
import Productos from '../pages/productos';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/productos' element={<Productos/>}/>
      </Routes>
    </BrowserRouter>
  );
}