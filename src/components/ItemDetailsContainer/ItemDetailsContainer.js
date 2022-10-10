import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import getFetch from '../Data/data';
import Navbar from '../NavBar/Navbar'

function ItemDetailsContainer() {
    let itemId = useParams()
    const[data,setData]=useState([])

    console.log(itemId)

  useEffect(()=> {
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
  },[])

  console.log(data)
  let producto = data.filter(data => data.id=== itemId)

  //let filteredData = data.filter (data => data.tipo === tipoDeFiltro)
    return (
        <div>
            <Navbar/>
            <h3> Esto es el Item Details Container</h3>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <img src={producto.imagen} alt="Imagen del producto"></img>
            <p>{producto.stock}</p>
            <p>{producto.detalles}</p>
            <p>{producto.color1}</p>
            <p>{producto.color2}</p>
        </div>
    )
}
export default ItemDetailsContainer
