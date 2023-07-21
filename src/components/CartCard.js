import React from 'react'

const CartCard = ({cartProduct}) => {
  return (
    <div className='cart-card'>
      <div>{cartProduct.name}</div>
      <div>{cartProduct.quantity} x {cartProduct.price}</div>
    </div>
  );
}

export default CartCard
