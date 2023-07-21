import './App.css';
import React, {useState} from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import { GlobalProvider } from './context/GlobalState';

function App() {
  const products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
  ];
  const [cart, setCart] = useState([]);
  return (
    <GlobalProvider>
      <div>
        <Products products={products} setCart={setCart} cart={cart} />
        <Cart cart={cart} />
      </div>
    </GlobalProvider>
  );
}

export default App;
