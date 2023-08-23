// components/Cart.js
import React, { useState } from 'react';
import CartProductCard from '../cart/CartProductCard';
import CartBilling from '../cart/CartBilling';

const OrderSummary = () => {
  

  return (
    <div className={` w-full overflow-y-auto transition-all ease-in-out duration-500 `}>
        
        <div className='flex flex-col gap-4 justify-between overflow-hidden'>
          <div className="flex flex-col gap-1 py-3  mt-3 flex-grow ">
            <CartProductCard  />
            <CartProductCard  />
          </div>
          <div className='flex '>
            <div className="flex flex-col gap-1 w-full ">
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Taxes</div>
                    <div className="text-base text-neutral-300 uppercase">$0.00 usd</div>
                </div>
                <div className="border-b border-neutral-700"></div>
    
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Shipping</div>
                    <div className="text-sm text-neutral-500 ">Calculated at next step</div>
                </div>
                <div className="border-b border-neutral-700"></div>
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Total</div>
                    <div className="text-base text-neutral-300 uppercase">$200.00 usd</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OrderSummary;