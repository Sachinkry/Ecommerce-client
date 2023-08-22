// components/Layout.js
import React, { useState } from 'react';
import Header from './Header';
import FooterPart from './FooterPart';
import Cart from './Cart';

export default function Layout({ children }) {
  const [isCartVisible, setCartVisibility] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <Header isCartVisible={isCartVisible} toggleCartVisibility={toggleCartVisibility} />
      {/* Horizontal line */}
      <div className="w-full h-[0.1px] mb-8 bg-neutral-600"></div>
      {children}
      <FooterPart />
      {isCartVisible && <Cart toggleCartVisibility={toggleCartVisibility} />}
    </div>
  );
}