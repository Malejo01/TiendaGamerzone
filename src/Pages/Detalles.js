import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer';
import "./styles.css"

export default function Detalles () {
    
    return (
        <div>
            <Navbar/>
            <h2>Tu mejor tienda de videojuegos</h2>
            <ItemDetailsContainer/>
        </div>
    )
}