import React, {useState}from 'react'
import BurguerIcon from '../BurguerIcon/BurguerIcon'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./styles.css"

function Navbar() {
    const [clicked,setClicked] = useState (false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <div className='Navbar'>
            <a href='/'><h1 className='TituloPagina'>Gamer<span>Zone</span></h1></a>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Juegos'>Juegos</Link>
                <Link to='/Consolas'>Consolas</Link>
                <Link to='/Accesorios'>Accesorios</Link>
                <Link to='/Contacto'>Contacto</Link>
                <CartWidget/>
                <span className='itemTotal'>0</span>
            </div>
            <div className='burguer'>
            <BurguerIcon clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`BgDiv initial ${clicked ?`active` : ``}`}></div>
        </div>
        
    )
}

export default Navbar
