import OrderSummary from '@/components/checkout/OrderSummary';
import CheckOutMain from '@/components/checkout/checkOutMain';
import { useState } from 'react';
import Shipping from '@/components/checkout/Shipping';

export default function CheckoutPage() {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className=" max-w-[1024px]  container mx-auto px-4 sm:px-6 md:px-8  text-white rounded-lg my-8 ">
      <div className='my-4'>
          <img
            src="/logo-noname.png" // Replace with your logo image path
            alt="Logo"
            className=" cursor-pointer h-10"
          />
      </div>
      <div className="lg:flex lg:space-y-0 gap-6 space-y-10  ">

        {/* Order Summary Component */}
        <div className="flex flex-col  bg-neutral-900 p-3 rounded-lg lg:w-1/2 ">
          <div
            className="text-left text-xs  text-rose-500 py-2 rounded-lg flex flex-row gap-1.5 items-center cursor-pointer"
            onClick={() => setShowOrderSummary(!showOrderSummary)}
          >
            <span >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-rose-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </span>
            {showOrderSummary ? 'Hide' : 'Show'} Order Summary
            <span >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>

            </span>

          </div>
          {showOrderSummary && (
            <OrderSummary />
          )}
        </div>

        {/* horizonatl line */}

        <CheckOutMain />
        <Shipping />
      </div>
    </div>
  );
}
