// components/Cart.js
import React, { useState } from 'react';


const ToggleBar = ({toggleBarVisibility, toggleCartVisibility, toggleAccountVisibility}) => {
  

  return (
    <div className={`md:hidden border-l border-neutral-800 fixed top-0 right-0 min-w-sm sm:w-[350px] h-full w-full  bg-neutral-900 px-6 py-6 overflow-y-auto transition-all ease-in-out duration-500 space-y-8`}>
        <div className="w-full flex flex-row justify-end pr-1 ">
          <div
            className="hover:bg-neutral-800 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-900"
            onClick={toggleBarVisibility}
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
        <div className='flex flex-col gap-4 '>
            <div className='flex flex-row gap-6 items-center hover:bg-neutral-900 hover:text-neutral-500 hover:cursor-pointer' onClick={toggleAccountVisibility}>
                <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <div className=" gap-3 py-3 text-base">
                  Your Account
                </div>
            </div>
            <div className='flex flex-row gap-6 items-center hover:text-neutral-500 hover:cursor-pointer' onClick={toggleCartVisibility}>
               <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
              </div>
                <div className=" gap-3 py-3 text-base">
                    Your Cart
                </div>
            </div>
        </div>
    </div>
  );
};

export default ToggleBar;
