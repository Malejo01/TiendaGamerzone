import React from 'react';


import './styles.css';
function CartItem({ item, deleteCartById }) {
    
    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={()=>deleteCartById(item.id)}>
            </div>
            <div className="cart-item__img">
                <img src={item.imagen} alt="Imagen"/>
            </div>
            <h2 className="cart-item__name">{item.nombre}</h2>
            <span className="cart-item__price">${item.precio}</span>
            <span className="cart-item__qty"><strong>Cantidad:</strong> {item.quantity}</span>
            <span className="cart-item__qty"><strong>Total:</strong> ${item.quantity * item.precio}</span>
        </article>
    )
}

export default CartItem
