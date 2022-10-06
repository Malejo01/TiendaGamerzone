import React, {useState}from 'react'
import imagenCarrito from '../image/carrito.png'
import "./styles.css"

function CartWidget() {
    const [clicked,setClicked] = useState (false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <a onClick ={handleClick}href='/carrito'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
    )
}

export default CartWidget
