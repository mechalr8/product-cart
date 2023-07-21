import React, { useState } from 'react'

const ProductCard = ({product, setCart, cart}) => {
    const [count, setCount] = useState(0);
    const cartArr =[]
    

    const addToCartHandler = () => {
        console.log("count from product card: ", count);
        setCount((count) => count+1);
        
            const newCartProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: count,
            };
            cartArr[product.id - 1] = newCartProduct;
            setCart(cartArr);
    }

    const removeFromCartHandler = () => {
      console.log("count from product card: ", count);
      if(count > 0)
        setCount((count) => count - 1);

      const newCartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: count,
      };
      cartArr[product.id - 1] = newCartProduct;
      setCart(cartArr);
    };

    return (
        <div className='product-card'>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>
            <button onClick={removeFromCartHandler}>-</button>
            <span>{count}</span>
            <button onClick={addToCartHandler}>+</button>
        </div>
        </div>
    )
}

export default ProductCard
