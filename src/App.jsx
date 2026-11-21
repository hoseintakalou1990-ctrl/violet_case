import React, { useState } from 'react'


import Header from './Header';
import Home from './Home';


const App = () => {
   const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  
  return (
    <div>
      <Header cartCount={cart.length}/>
      <Home onAdd={addToCart}/>
      
      
    </div>



  )
}

export default App

