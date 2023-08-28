// components/Cart.js
import React, { useState } from 'react';


const AccountInfo = ({toggleAccountVisibility}) => {
  

  return (
    <div className={`border-l border-neutral-800 fixed top-0 right-0 min-w-sm sm:w-[350px] h-full w-full  bg-neutral-900 px-4 md:px-6 py-6 overflow-y-auto transition-all ease-in-out duration-500 `}>
        <div className="w-full flex flex-row justify-between pr-1 ">
          <div className="text-2xl md:text-3xl">My Account</div>
          <div
            className="hover:bg-neutral-800 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-900"
            onClick={toggleAccountVisibility}
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
        <div className='flex flex-col gap-40 justify-between overflow-hidden'>
          <div className="flex flex-col gap-3 py-3  mt-3 flex-grow ">
            user info
          </div>
          <div className='flex '>
            edit button
          </div>
        </div>
    </div>
  );
};

export default AccountInfo;
