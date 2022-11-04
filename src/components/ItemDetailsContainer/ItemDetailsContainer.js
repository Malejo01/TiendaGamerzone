
import React from 'react'
import {useEffect, useState, useContext} from "react"
import { CartContext } from '../Context/CartContext';
import {useParams} from 'react-router-dom'
import Carousel from '../Carousel/Carousel';
import getFetch from '../data/data';
import ItemCount from '../ItemCount/itemCount';
import Navbar from '../NavBar/Navbar'
import "./styles.css"

function ItemDetailsContainer({item}) {
    let {detallesId} = useParams()
    const[data,setData]=useState([])

    const [stock, setStock] = useState(data.stock)
    const cartContext =useContext(CartContext)
    const {cart,addToCart} = cartContext


  useEffect(()=> {
    getFetch
    .then((resp) => setData(resp.find((item) => item.id===Number(detallesId))))
    .catch(err=>console.log(err))
  },[detallesId])

  function onAdd(quantity) {
    if(data.stock>=quantity){
      addToCart(data,quantity)
      data.stock-=quantity
      setStock(data.stock-quantity)
      console.log(cart)
  } else {
      alert("No se puede agregar esa cantidad al carrito")
  }
  }
  
    return (
      <div>
      <Navbar/>
        <div className='itemDetailsContainer'>
          <div className='contenedorIzquierdo'>
            <div className='detallesDelProducto'>
            <Carousel data={data}/>
            <div>
            <h1 className='nombre' >{data.nombre}</h1>
            <p className='precio'>Precio: {data.precio} $USD</p>
            </div>
          </div>
          <div className='contenedorDerecho'>
            <p className='detalles'>Sobre el producto: {data.detalles}</p>
            <div>
            <p className='color'>Variante 1: {data.color1}</p>
            <p className='color'>Variante 2: {data.color2}</p>
            <p className='stock'>Stock: {data.stock}</p>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd}></ItemCount>
            </div>
          </div>
            </div>
        </div>
        </div>
    )
}
export default ItemDetailsContainer
