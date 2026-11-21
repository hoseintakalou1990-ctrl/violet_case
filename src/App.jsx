
import React, { useState } from "react";
import Category from "./Category";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";

const App = () => {
  const [cart, setCart] = useState([]);

  // افزودن محصول به سبد خرید
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Layout مشترک تمام صفحات */}
        <Route
          path="/"
          element={<Layout cartCount={cart.length} />}
        >

          {/* صفحه اصلی */}
          <Route
            index
            element={<Home onAdd={addToCart} />}
          />

          {/* مسیر دسته‌بندی‌ها و صفحات دیگر را بعداً اضافه می‌کنیم */}
          <Route
    path="category/:categoryId"
    element={<Category onAdd={addToCart} />}
  />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
