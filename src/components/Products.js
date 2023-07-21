import React from 'react'
import ProductCard from './ProductCard'


const Products = ({ products, setCart, cartArr }) => {
    return (
      <div className='products'>
        <div style={{fontSize: '20px'}}>Products</div>
        <div>
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
      </div>
    );
};

export default Products
