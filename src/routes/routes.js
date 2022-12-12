import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu';
import Index from '../pages/index';
import Signup from '../controllers/registrate.controller';
import Productos from '../pages/productos';
import Pedidos from '../pages/pedidos';

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/productos' element={<Productos/>}/>
        <Route exact path='/pedidos' element={<Pedidos/>}/>
      </Routes>
    </BrowserRouter>
  );
}