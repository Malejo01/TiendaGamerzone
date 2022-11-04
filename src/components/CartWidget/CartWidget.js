import React, { useContext } from 'react';
import imagenCarrito from '../image/carrito.png'
import './styles.css';
import { CartContext } from '../Context/CartContext';
import { Link} from 'react-router-dom';

const CartWidget = () => {
  //la lógica va siempre antes del return

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      <Link to={'/carrito'}> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></Link>
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;

/*
import imagenCarrito from '../Image/carrito.png'
<a href='/carrito'> <img src={imagenCarrito} alt="Carrito" className='imagenCarrito'></img></a>
*/
