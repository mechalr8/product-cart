import React from 'react'
import ProductCard from './ProductCard'


const Products = ({ products, setCart, cartArr }) => {
  return (
    <div className='products'>
      Products
      {products.map((product, id) => {
        return (
          <ProductCard
            product={product}
            key={id}
            setCart={setCart}
            cartArr={cartArr}
          />
        );
      })}
    </div>
  );
};

export default Products
