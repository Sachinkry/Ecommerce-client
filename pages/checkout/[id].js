import OrderSummary from '@/components/checkout/OrderSummary';
import { useState } from 'react';

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

        <div className="lg:p-4 rounded-lg lg:w-1/2 lg:bg-neutral-900 h-full space-y-8">
          {/* Email Address */}
          <div className="flex flex-col space-y-4">
            <input type="email" placeholder="Email Address" className="w-full p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
            <label className="flex items-center text-xs text-neutral-500 hover:cursor-pointer">
              <input type="checkbox" className="mr-2 " />
              Receive email updates for latest products or news
            </label>
          </div>

          {/* Shipping Address Form */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <div className="flex flex-col space-y-4">
              <input type="text" placeholder="Country" className="p-2 rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <input type="text" placeholder="First Name" className="p-2  rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <input type="text" placeholder="Last Name" className="p-2  rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <div className="relative ">
                <input type="text" placeholder="Address" className="p-2  rounded-lg bg-neutral-800 pl-10 ring-1 ring-neutral-600" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21H3a1 1 0 01-1-1V3a1 1 0 011-1h7l1 1h9a1 1 0 011 1v16a1 1 0 01-1 1zM11 12h10m-10-4h10m-7 8h7" />
                </svg>
              </div>
              <input type="text" placeholder="City" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <input type="text" placeholder="State" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <input type="text" placeholder="Zip Code" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <label className="flex items-center text-neutral-500 text-xs hover:cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Save this information
              </label>
            </div>
          </div>

          {/* Continue to Shipping Button */}
          <button className="w-full p-4 ring-1 ring-rose-600 bg-rose-900 hover:ring-2 hover:text-rose-600 hover:bg-neutral-900 text-white rounded-lg">Continue to Shipping</button>
        </div>
      </div>
    </div>
  );
}
