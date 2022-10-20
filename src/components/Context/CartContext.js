import React, {createContext, useState} from "react";

export const CartContext=createContext(null);

const CartProvider=(props) => {
    const [cart,setCart] =useState([])

    function agregarAlCarrito (item,qty) {
        let product ={...item,qty};
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider value ={{cart,setCart, agregarAlCarrito,}}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider