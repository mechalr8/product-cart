import React from 'react'
import CartCard from './CartCard'


const Cart = ({cart}) => {
    var total = 0;
    return (
      <div className='cart'>
        <div style={{ margin: "10px", fontSize: "20px" }}>Cart</div>

        <div style={{alignContent: 'center'}}>
        {cart.length
          ? cart.map((cartProduct, id) => {
              // console.log("From Cart, cart: ", cart);
              return <CartCard cartProduct={cartProduct} key={id} />;
            })
          : "No Product added to the cart"}
        </div>
        <div>
          {cart.forEach((cartProduct) => {
            total += cartProduct.quantity * cartProduct.price;
          })}
        </div>
        <div className='total'
        >
          Total: {total}
        </div>
      </div>
    );
}

export default Cart
