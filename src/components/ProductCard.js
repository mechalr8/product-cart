import React, { useState } from 'react'

const ProductCard = ({product, setCart, cartArr}) => {
    const [count, setCount] = useState(0);
    

    const addToCartHandler = () => {
        console.log("count before setCount in count before setCount in addToCartHandler: ",count);
        const index = cartArr.findIndex((obj) => obj.id === product.id);
        setCount((currCount) => currCount + 1);
        console.log(
          "count after setCount in count before setCount in addToCartHandler: ",
          count
        );
        if(index>-1){
            console.log("inside if", index, cartArr[index], cartArr);
            cartArr[index].quantity+=1
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
        }
        setCart(cartArr);
    }

    

    const removeFromCartHandler = () => {
        console.log(
          "count before setCount in count before setCount in addToCartHandler: ",
          count
        );
        const index = cartArr.findIndex((obj) => obj.id === product.id);
        if(count>0){
            setCount((currCount) => currCount - 1);
        }
        console.log(
          "count after setCount in count before setCount in addToCartHandler: ",
          count
        );
        if (index > -1) {
            console.log("inside if", index, cartArr[index], cartArr);
            if (cartArr[index].quantity>1){
                cartArr[index].quantity -= 1;
                setCart(cartArr);
            }
            else{
                setCart(cartArr.filter((cartProduct) => cartProduct.id !== product.id))
            }
        }
    };

    return (
        <div className='product-card'>
            <div className='product-card-name'>{product.name}</div>
            <div className='product-card-price'>{product.price}</div>
            <div className='product-quanity'>
            <button className='add-del' onClick={removeFromCartHandler}>
                -
            </button>
            <span>{count}</span>
            <button className='add-del' onClick={addToCartHandler}>
                +
            </button>
            </div>
        </div>
    );
}

export default ProductCard
