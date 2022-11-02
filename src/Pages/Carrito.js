import React from 'react'
import CartListItem from '../components/CartListItem/CartListItem';
import Navbar from '../components/NavBar/Navbar';


function Carrito() {
    return (
        <main className="display-page">
            <Navbar/>
            <div className='aviso'>
            <h2 className='tucarrito'>Tu carrito de compras</h2>
            </div>
            <CartListItem/>
        </main>
    )
}

export default Carrito
