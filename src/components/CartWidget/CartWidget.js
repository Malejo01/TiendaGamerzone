import React, { useContext } from 'react';
import imagenCarrito from '../Image/carrito.png'
import './styles.css';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  //la lógica va siempre antes del return

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <a href='/carrito'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;

/*
import imagenCarrito from '../Image/carrito.png'
<a href='/carrito'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
*/
