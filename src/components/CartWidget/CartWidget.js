import React from 'react'
import imagenCarrito from '../Image/carrito.png'

function CartWidget() {
    return (
        <a href='/carrito'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
    )
}

export default CartWidget
