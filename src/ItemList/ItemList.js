import React from 'react'
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer'
import Item from '../components/item/item'
import "./styles.css"

function ItemList ({data}) {
    return (
        <div className='ItemList'>
            <h3> Nuestros Productos</h3>
            <table>
                <tbody>
                {data.map(i=>{ 
                return <Item  key ={data.id} item={i}/>
                })}
                </tbody>
             </table>
            <ItemDetailsContainer/>
        </div>
    )
}

export default ItemList
