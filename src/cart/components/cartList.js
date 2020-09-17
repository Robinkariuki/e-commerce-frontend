import React from 'react';
import CartItem from './cartItem';


const CartList =(props)=>{
    console.log(props.items)
    return(
        <CartItem/>
    )
}


export default CartList;