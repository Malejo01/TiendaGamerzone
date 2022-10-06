import React from 'react';
import Home from './Pages/Home';
import Juegos from './Pages/Juegos';
import Consolas from './Pages/Consolas';
import Accesorios from './Pages/Accesorios';
import Carrito from './Pages/Carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contacto from './Pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route exact path='/'  element={<Home/>}>Home</Route>
        <Route exact path='/juegos'  element={<Juegos/>}>Juegos</Route>
        <Route exact path='/consolas'  element={<Consolas/>}>Consolas</Route>
        <Route exact path='/accesorios'  element={<Accesorios/>}>Accesorios</Route>
        <Route exact path='/contacto'  element={<Contacto/>}>Contacto</Route>
        <Route exact path='/carrito'  element={<Carrito/>}>Contacto</Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
