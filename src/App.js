import React from 'react';
import Home from './Pages/Home';
import Juegos from './Pages/Juegos';
import Consolas from './Pages/Consolas';
import Accesorios from './Pages/Accesorios';
import Contacto from './Pages/Contacto';
import Carrito from './Pages/Carrito';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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
        <Route exact path='/carrito'  element={<Carrito/>}>Carrito</Route>
        <Route exact path='/detalles/detalles:Id'  element={<ItemDetailsContainer/>}>Detalles</Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
