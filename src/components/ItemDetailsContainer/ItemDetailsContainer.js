import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import getFetch from '../Data/data';
import Navbar from '../NavBar/Navbar'

function ItemDetailsContainer() {
    let {detallesId} = useParams()
    const[data,setData]=useState([])

    console.log(detallesId)

  useEffect(()=> {
    getFetch
    .then((resp) => setData(resp.find((item) => item.id===Number(detallesId))))
    .catch(err=>console.log(err))
  },[detallesId])

  console.log(data)
  
  //let filteredData = data.filter (data => data.tipo === tipoDeFiltro)
    return (
        <div>
            <Navbar/>
            <h3> Esto es el Item Details Container</h3>
            <p>{data.precio}</p>
            <img src={data.imagen} alt="Imagen del producto"></img>
            <p>{data.stock}</p>
            <p>{data.detalles}</p>
            <p>{data.color1}</p>
            <p>{data.color2}</p>
        </div>
    )
}
export default ItemDetailsContainer
