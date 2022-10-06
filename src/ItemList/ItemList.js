import React from 'react'
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer'
import Item from '../components/item/item'
import "./styles.css"

function ItemList ({data, tipoDeFiltro}) {
    let filteredData = data.filter (e => e.tipo === tipoDeFiltro)
    return (
        <div className='ItemList'>
            <h3> Nuestros Productos</h3>
            <table>
                <tbody>
                { tipoDeFiltro="ninguno" ? data.map(i=>{ return <Item  key ={data.id} item={i}/>}) : filteredData.map(i=>{ return <Item  key ={data.id} item={i}/>})}
                </tbody>
             </table>
            <ItemDetailsContainer/>
        </div>
    )
}

export default ItemList
