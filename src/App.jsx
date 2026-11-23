import React, { useState } from "react";
import Category from "./Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Layout from "./Layout";
import Home from "./Home";

const App = () => {
    const [cart, setCart] = useState([]);

    // افزودن محصول به سبد خرید
function addToCart(product) {
    setCart((prevCart) => {
        const exist = prevCart.find(
            (item) => item.id === product.id
        );

        if (exist) {
            return prevCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        return [
            ...prevCart,
            {
                ...product,
                quantity: 1,
            },
        ];
    });
}

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout cartCount={cart.length} />}>
                    <Route index element={<Home onAdd={addToCart} />} />
                    <Route
                        path="category/:categoryId"
                        element={<Category onAdd={addToCart} />}
                    />
                </Route>
                   <Route path="cart" element={<Cart cart={cart} />} />
            </Routes>

        </BrowserRouter>
    );
};

export default App;
