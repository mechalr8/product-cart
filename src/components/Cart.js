import React from 'react'
import CartCard from './CartCard'


const Cart = ({cart}) => {
    var total = 0;
  return (
    <div className='cart'>
      Cart <br/>
      {cart.length
        ? cart.map((cartProduct, id) => {
            // console.log("From Cart, cart: ", cart);
            return <CartCard cartProduct={cartProduct} key={id} />;
          })
        : "No Product added to the cart"}
      <div>
        {cart.forEach((cartProduct) => {
          total += cartProduct.quantity * cartProduct.price;
        })}
        Total: {total}
      </div>
    </div>
  );
}

export default Cart
