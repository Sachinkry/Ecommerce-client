// components/Cart.js
import React, { useState } from 'react';

const Cart = ({toggleCartVisibility}) => {
  

  return (
    <div className={`fixed top-0 right-0 min-w-sm sm:w-[370px] w-full h-screen bg-neutral-900 px-4 md:px-6 py-6 overflow-y-auto transition-all ease-in-out duration-500`}>
      <div className="w-full">
        <div className="w-full flex flex-row justify-between lg:pr-4">
          <div className="text-2xl md:text-3xl">My Cart</div>
          <div
            className="hover:bg-neutral-800 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-900"
            onClick={toggleCartVisibility}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;