// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('myCart')) || [];
    setMyCart(initialCart);
  }, []);

  const addToCart = (product, quantityChange = 1) => {
    let updatedCart = [...myCart];
    const existingProductIndex = updatedCart.findIndex((p) => p._id === product._id);
  
    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity += quantityChange;
      if (updatedCart[existingProductIndex].quantity <= 0) {
        updatedCart.splice(existingProductIndex, 1);
      }
    } else if (quantityChange > 0) {
      updatedCart.push({ ...product, quantity: 1 });
    }
  
    setMyCart(updatedCart);
    localStorage.setItem('myCart', JSON.stringify(updatedCart));
  };
  

  const removeFromCart = (productId, callback) => {
    const newCartArray = myCart.filter((prod) => prod._id !== productId);
    setMyCart(newCartArray);
    localStorage.setItem('myCart', JSON.stringify(newCartArray));
    if (callback) callback();
  };

  return (
    <CartContext.Provider value={{ myCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
