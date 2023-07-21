import React from 'react'
import ProductCard from './ProductCard'


const Products = ({products, setCart, cart}) => {
  return (
    <div className='products'>
        Products
        {products.map((product, id) => {
            return (
                <ProductCard product={product} key={id} setCart={setCart} cart={cart}/>
            )
        })}
    </div>
  )
}

export default Products
