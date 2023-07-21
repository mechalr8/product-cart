import React from 'react'
import CartCard from './CartCard'

const Cart = ({cart}) => {
  return (
    <div className='cart'>
    Cart
      {cart.map((cartProduct, id) => {
        console.log("From Cart, cart: ",cart);
        return (
            <CartCard cartProduct={cartProduct} key={id}/>
        )
      })}
    </div>
  )
}

export default Cart
