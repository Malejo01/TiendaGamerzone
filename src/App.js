import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
