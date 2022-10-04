import React from 'react'
import ItemList from '../ItemList/ItemList'
import "./styles.css"

function ItemListContainer() {
    return (
        <div className='ItemListContainer'>
         <h1>Esto es el Item List Container</h1>
         <ItemList/>
        </div>
    )
}

export default ItemListContainer
