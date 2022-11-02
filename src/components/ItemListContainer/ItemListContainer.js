import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react';
//import getFetch from '../Data/data';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import "./styles.css"

function ItemListContainer({tipoDeFiltro}) {
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState([])

  
    useEffect(() =>{
      const db = getFirestore()
      const data = collection(db,'Productos')
      getDocs(data)
        .then((value)=>{ setData (value.docs.map((value)=>{
          return value.data()
        }))
      })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    },[])


    return (
        <div className='itemListContainer'>
            {
        loading ? <h2 className='cargando'>Cargando por favor espere</h2> :
        <ItemList data={data} tipoDeFiltro={tipoDeFiltro}/>
      }
        </div>
    )
}

export default ItemListContainer

/*
  useEffect(()=> {
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[])
*/
