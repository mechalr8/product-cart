import React, { useState } from 'react'

const ProductCard = ({product, setCart, cartArr}) => {
    const [count, setCount] = useState(0);
    // const cartArr =[]
    

    const addToCartHandler = () => {
        console.log(cartArr, product, "count before setCount: ",count);
        const index = cartArr.findIndex((obj) => obj.id === product.id);
        setCount(count+1);
        console.log("count after setCount: ",count);
        if(index>-1){
            console.log("inside if", index, cartArr[index], cartArr);
            cartArr[index].quantity = count
        }
        else {
            console.log("inside else");
            const newCartProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            }
            cartArr.push(newCartProduct);
            setCart(cartArr)
        }
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
    //   cartArr[product.id - 1] = newCartProduct;
    //   setCart(cartArr);
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
