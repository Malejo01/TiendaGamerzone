import React from 'react'
import Navbar from '../components/NavBar/Navbar';
import Contact from '../components/Contact/Contact';
import "./styles.css"

function Contacto() {
    return (
        <div>
        <Navbar/>
            <div className='aviso'>
                <h3>Ponte en contacto con nosotros</h3>
                <Contact></Contact>
            </div>
        </div>
    )
}

export default Contacto
            