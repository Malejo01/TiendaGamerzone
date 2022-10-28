import React, {useState}from 'react'
import BurguerIcon from '../BurguerIcon/BurguerIcon'
import { Link } from 'react-router-dom';
import "./styles.css"
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    const [clicked,setClicked] = useState (false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <div className='fixed'>
        <div className='Navbar'>
            <Link to={'/'}><h1 className='TituloPagina'>Gamer<span>Zone</span></h1></Link>
            <div className='barraDeNavegacion'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/Juegos' className='link'>Juegos</Link>
                <Link to='/Consolas' className='link'>Consolas</Link>
                <Link to='/Accesorios' className='link'>Accesorios</Link>
                <Link to='/Contacto' className='link'>Contacto</Link>
                <CartWidget/>
            </div>
            <div className='burguer'>
            <BurguerIcon clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`BgDiv initial ${clicked ?`active` : ``}`}></div>
        </div>
        <h2>Tu mejor tienda de videojuegos</h2>
        <video muted autoPlay loop>
            <source src='https://cdn-animation.artstation.com/p/video_sources/000/016/909/rog.mp4' type='video/mp4'></source>
        </video>
        </div>
        
    )
}

export default Navbar
