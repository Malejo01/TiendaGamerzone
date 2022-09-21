import React from 'react'
import "./styles.css"

function BurguerIcon(props) {
    return (
    <div onClick ={props.handleClick}
     class={`icon nav-icon-5 ${props.clicked ? `open`:``}`}
     >
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
}

export default BurguerIcon

