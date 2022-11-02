
import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Carousel from '../Carousel/Carousel';
import getFetch from '../Data/data';
import ItemCount from '../ItemCount/itemCount';
import Navbar from '../NavBar/Navbar'
import "./styles.css"

function ItemDetailsContainer() {
    let {detallesId} = useParams()
    const[data,setData]=useState([])


  useEffect(()=> {
    getFetch
    .then((resp) => setData(resp.find((item) => item.id===Number(detallesId))))
    .catch(err=>console.log(err))
  },[detallesId])
  

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
            <ItemCount stock={data.stock} initial={1}></ItemCount>
            </div>
          </div>
            </div>
        </div>
        </div>
    )
}
export default ItemDetailsContainer
