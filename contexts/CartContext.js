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

  const updateCart = (newCart) => {
    setMyCart(newCart);
    localStorage.setItem('myCart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ myCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
