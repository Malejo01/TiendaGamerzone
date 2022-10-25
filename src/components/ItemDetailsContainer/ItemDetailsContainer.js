
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
            <Carousel data={data}/>
            <h1>{data.nombre}</h1>
            <p>Precio: {data.precio} $USD</p>
            <p>Sobre el producto: {data.detalles}</p>
            <p>Variante 1: {data.color1}</p>
            <p>Variante 2: {data.color2}</p>
            <p>Stock: {data.stock}</p>
            <ItemCount stock={data.stock} initial={1}></ItemCount>
        </div>
    )
}
export default ItemDetailsContainer
