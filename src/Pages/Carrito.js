import React from 'react'
import CartListItem from '../components/CartListItem/CartListItem';
import Navbar from '../components/NavBar/Navbar';


function Carrito() {
    return (
        <main className="display-page">
            <Navbar/>
            <h1>Tu carrito de compras</h1>
            <CartListItem/>
        </main>
    )
}

export default Carrito
