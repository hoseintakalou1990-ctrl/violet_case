import React, { useState } from 'react'


import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import ProductCarousel from './ProductCarousel';

const App = () => {
   const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  
  return (
    <div>
      <Header cartCount={cart.length}/>
      <Home/>
      <Categories/>
      <ProductCarousel onAdd={addToCart}/>
      
    </div>



  )
}

export default App

