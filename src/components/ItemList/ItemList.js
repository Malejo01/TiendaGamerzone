import React from 'react'
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer'
import Item from '../Item/item'
import "./styles.css"

function ItemList ({data, tipoDeFiltro}) {
    //filtro segun el tipo de pagina 
    let filteredData = data.filter (e => e.tipo === tipoDeFiltro)
    //logeo los datos recibidos
    console.log("llego al itemList", (tipoDeFiltro)," y ", {filteredData})
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
