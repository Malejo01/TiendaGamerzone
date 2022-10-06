import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react';
import getFetch from '../components/data/data';
import "./styles.css"

function ItemListContainer(tipoDeFiltro) {
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState([])

  useEffect(()=> {
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))

  },[])
    return (
        <div className='itemListContainer'>
            <h1>Esto es el Item List Container</h1>
            {
        loading ? <h2>Cargando por favor espere</h2> :
        <ItemList data={data} tipoDeFiltro={tipoDeFiltro}/>
      }
        </div>
    )
}

export default ItemListContainer
