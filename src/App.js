import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
