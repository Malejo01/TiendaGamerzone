import React, {useState}from 'react'
import BurguerIcon from '../BurguerIcon/BurguerIcon'
import CartWidget from '../CartWidget/CartWidget'
import "./styles.css"

function Navbar() {
    const [clicked,setClicked] = useState (false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <div className='Navbar'>
            <h1 className='TituloPagina'>Gamer<span>Zone</span></h1>
            <div>
                <a href='/'>Home</a>
                <a href='/Juegos'>Juegos</a>
                <a href='/Consolas'>Consolas</a>
                <a href='/Accesorios'>Accesorios</a>
                <a href='/Contacto'>Contacto</a>
                <CartWidget/>
            </div>
            <div className='burguer'>
            <BurguerIcon clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`BgDiv initial ${clicked ?`active` : ``}`}></div>
        </div>
        
    )
}

export default Navbar
