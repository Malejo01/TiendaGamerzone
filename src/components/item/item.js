import React from 'react'
import {useState} from 'react';
import carrito from '../Image/cart-plus.svg'
import "./styles.css" 

function Item({item}) {
    const [stock, setStock] = useState(item.stock)
    const [contador, setContador] = useState(1);
    
    function agregarAlContador () {
        contador<stock ? setContador(contador + 1): alert("Lo sentimos no disponemos de mas unidades de ese producto");
    }

    function quitarAlContador () {
        contador<=1 ? alert("Lo has gastao al boton che!") : setContador(contador - 1);
    }

    function agregarAlCarrito () {
        if (item.stock-contador>=0) {
            item.stock=item.stock-contador
            setStock(item.stock-1)
            console.log("itemStock: "+item.stock+" contador: "+ contador)
        }
        else {
         alert("Lo sentimos ya no queda stock de ese producto")
        }
    }

    function verDetalles () {
        
    }

    return (
        <tr className="items">
                <td><img src={item.imagen} alt="Imagen Producto" className="imagenProducto"></img></td>
                <td className="nombreProducto"> <p>{item.nombre}</p></td>
                <td className="precioProducto"><p>{item.precio}</p></td>
                <td className="stockProducto"> <p>Disponibles: {item.stock}</p></td>
                <td className="botonAgregar">
                    <input value ="-"type="submit" onClick={() => quitarAlContador()}/></td>
                <td>
                    <p> <img src={carrito} alt="imagen del carrito"></img>{contador}</p></td>        
                <td className="botonQuitar">
                    <input value ="+"type="submit" onClick={() => agregarAlContador()}/></td>
                <td className="botonCarrito">
                    <input value ="Comprar"type="submit" onClick={() => agregarAlCarrito()}/>
                    <input value ="Ver Detalles"type="submit" onClick={() => verDetalles(item)}/></td>
        </tr>
    )
}

export default Item
