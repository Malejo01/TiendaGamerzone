import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'

function ItemDetailsContainer(item) {
    console.log(item)
    console.log(item.id)
    console.log(item.nombre)
    return (
        <div>
            <Navbar/>
            <h3> Esto es el Item Details Container</h3>
            <p><NavLink>{item.nombre}</NavLink></p>
            <p>{item.precio}</p>
            <img src={item.imagen} alt="Imagen del producto"></img>
            <p>{item.stock}</p>
            <p>{item.detalles}</p>
            <p>{item.color1}</p>
            <p>{item.color2}</p>
        </div>
    )
}
export default ItemDetailsContainer
