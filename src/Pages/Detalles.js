import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer';
import "./styles.css"

export default function Detalles () {
    return (
        <div>
            <NavBar/>
            <h1>Esta es la seccion de detalle de un producto</h1>
            <ItemDetailsContainer/>
        </div>
    )
}