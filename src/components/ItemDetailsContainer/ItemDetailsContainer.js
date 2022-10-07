import React from 'react'

function ItemDetailsContainer(item) {
    return (
        <div>
            <h3> Esto es el Item Details Container</h3>
            <p>{item.nombre}</p>
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
