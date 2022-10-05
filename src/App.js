import React from 'react';
import Home from './Pages/Home';
import Juegos from './Pages/Juegos';
import Consolas from './Pages/Consolas';
import Accesorios from './Pages/Accesorios';
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
        <Route exact path='/contacto'  element={<Home/>}>Contacto</Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
