import React, {useState}from 'react'
import BurguerIcon from '../BurguerIcon/BurguerIcon'
import imagenCarrito from '../image/carrito.png'
import "./styles.css"

function Navbar() {
    const [clicked,setClicked] = useState (false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <div className='Navbar'>
            <h1>Gamer<span>Zone</span></h1>
            <div className={`links ${clicked ?`active` :``}`}>
                <a onClick ={handleClick}href='/#h'>Home</a>
                <a onClick ={handleClick}href='/#h'>Juegos</a>
                <a onClick ={handleClick}href='/#h'>Consolas</a>
                <a onClick ={handleClick}href='/#h'>Accesorios</a>
                <a onClick ={handleClick}href='/#h'>Contacto</a>
                <a onClick ={handleClick}href='/#h'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
            </div>
            <div className='burguer'>
            <BurguerIcon clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`BgDiv initial ${clicked ?`active` : ``}`}></div>
        </div>
        
    )
}

export default Navbar
