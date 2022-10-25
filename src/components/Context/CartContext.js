import React, {createContext, useState} from "react";

export const CartContext=createContext(null);

const CartProvider=(props) => {
    const [cart,setCart] =useState([])

    function addToCart (item,quantity) {
        let product ={...item,quantity};
        setCart([...cart, product]);

        console.log(cart)
    }

    return (
        <CartContext.Provider value ={{cart,setCart, addToCart,}}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider