import React, { useContext }  from 'react'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemCount from "../ItemCount/itemCount";

import carrito from '../Image/cart-plus.svg'
import "./styles.css" 

function Item({item}) {
    const [stock, setStock] = useState(item.stock)
    const [contador, setContador] = useState(1);

    const cartContext = useContext(CartContext)
    // cuando coloco esta linea me da un error renderizando la pagina-----------------------------------------
    //const {cart,agregarAlCarrito} = cartContext;
    //console.log(agregarAlCarrito)
    // -------------------------------------------------------------------------------------------------------
    



    //----------------------------funciones de contador
    function agregarAlContador () {
        contador<stock ? setContador(contador + 1): alert("Lo sentimos no disponemos de mas unidades de ese producto");
    }

    function quitarAlContador () {
        contador<=1 ? alert("Lo has gastao al boton che!") : setContador(contador - 1);
    }
/*
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
*/
    return (
        <tr className="items">
                <td><img src={item.imagen} alt="Imagen Producto" className="imagenProducto"></img></td>
                <td className="nombreProducto"> <p>{item.nombre}</p></td>
                <td className="precioProducto"><p>{item.precio}</p></td>
                <td className="stockProducto"> <p>Disponibles: {item.stock}</p></td>
                <td className="botonAgregar">
                    <input value ="-"type="submit" onClick={() => quitarAlContador()}/></td>
                <td>
                    <p> <img src={carrito} alt="imagen del carrito"></img>
                    </p></td>        
                <td className="botonQuitar">
                    <input value ="+"type="submit" onClick={() => agregarAlContador()}/></td>
                <td className="botonCarrito">
                    <input value ="Añadir"type="submit" onClick={() => agregarAlCarrito()}/>
                    <button>
                    <NavLink to={`/detalles/${item.id}`} className="NavLink">Ver Detalles</NavLink>    
                    </button></td>
        </tr>
    )
}

export default Item


/*
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
*/