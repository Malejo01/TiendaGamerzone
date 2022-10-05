import React from 'react'
import imagenCarrito from '../image/carrito.png'
import "./styles.css"

function CartWidget() {
    return (
        <a onClick ={handleClick}href='/#h'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
    )
}

export default CartWidget
