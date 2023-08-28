// components/Layout.js
import React, { useState } from 'react';
import Header from './Header';
import FooterPart from './FooterPart';
import Cart from './cart/Cart';
import AccountInfo from './AccountInfo';
import ToggleBar from './ToggleBar';

export default function Layout({ children }) {
  const [isCartVisible, setCartVisibility] = useState(false);
  const [isAccountVisible, setAccountVisibility] = useState(false);
  const [isToggleBarVisible, setToggleBarVisibility] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible);
    setAccountVisibility(false);
    setToggleBarVisibility(false);
  };

  const toggleAccountVisibility = () => {
    setAccountVisibility(!isAccountVisible);
    setCartVisibility(false);
    setToggleBarVisibility(false);
  };

  const toggleBarVisibility = () => {
    setToggleBarVisibility(!isToggleBarVisible);
    setCartVisibility(false);
    setAccountVisibility(false);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <Header 
         isCartVisible={isCartVisible}  
         toggleAccountVisibility={toggleAccountVisibility}
         toggleCartVisibility={toggleCartVisibility} 
         toggleBarVisibility={toggleBarVisibility}
      />
      {/* Horizontal line */}
      <div className="w-full h-[0.1px] mb-8 bg-neutral-600"></div>
      {children}
      <FooterPart />
      {isCartVisible && <Cart toggleCartVisibility={toggleCartVisibility} />}
      {isAccountVisible && <AccountInfo  toggleAccountVisibility={toggleAccountVisibility} />}
      {isToggleBarVisible && 
          <ToggleBar 
            toggleBarVisibility={toggleBarVisibility} 
            toggleAccountVisibility={toggleAccountVisibility}
            toggleCartVisibility={toggleCartVisibility}
          />}
    </div>
  );
}