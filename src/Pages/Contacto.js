import React from 'react'
import Navbar from '../components/NavBar/Navbar';
import Contact from '../components/Contact/Contact';
import "./styles.css"

function Contacto() {
    return (
        <div>
        <Navbar/>
        <h2 className='sub-titulo'>Ponte en contacto con nosotros</h2>
            <div className='aviso'>
                <Contact></Contact>
            </div>
        </div>
    )
}

export default Contacto
            