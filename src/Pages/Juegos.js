import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Juegos () {
    let tipoDeFiltro = "Juegos"
    return (
        <div>
            <Navbar/>
            <h2>Tu mejor tienda de videojuegos</h2>
            <ItemListContainer tipoDeFiltro={tipoDeFiltro}/>
        </div>
    )
}