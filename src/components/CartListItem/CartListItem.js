import React, { useContext } from 'react'
import {CartContext} from '../Context/CartContext'
import CartItem from '../CartItem/CartItem';

import './styles.css'
function CartListItem() {
    const cartContext = useContext(CartContext);
    const { cart, deleteCartById, deleteCart } = cartContext;

    return (
        <section className="list-cart-container">
            {cart ? (cart.map( product => {
                return( <CartItem key={product.id} 
                                  item={product} 
                                  deleteCartById={deleteCartById} 
                        /> );
                }))
                  : <p>cargando productos</p>
            }
            {cart.length ? (<button 
                            className="button-primary button-padding"
                            onClick={deleteCart}
                      >Vaciar Carrito</button>)
                         : <p>No hay productos en el carrito</p>
            }
        </section>
    )
}

export default CartListItem

