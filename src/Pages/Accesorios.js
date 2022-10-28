import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Accesorios () {
    let tipoDeFiltro = "Accesorios"
    return (
        <div>
            <Navbar/>
            
            <ItemListContainer tipoDeFiltro={tipoDeFiltro}/>
        </div>
    )
}