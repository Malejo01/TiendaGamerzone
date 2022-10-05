import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import  ItemListContainer  from '../ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Home () {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
        </div>
    )
}
