import OrderSummary from '@/components/checkout/OrderSummary';
import CheckOutMain from '@/components/checkout/checkOutMain';
import { useState } from 'react';
import Shipping from '@/components/checkout/Shipping';
import Payment from '@/components/checkout/Payment';
import {useRouter} from 'next/router';

export default function CheckoutPage() {
  const router = useRouter();
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [tab, setTab] = useState('Information'); // ['Information', 'Shipping', 'Payment'
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className=" max-w-[1050px] mx-auto container  px-4 sm:px-6 md:px-8  text-white rounded-lg my-8 ">
      <div className='my-4' onClick={() => router.push('/')}>
          <img
            src="/logo-noname.png" // Replace with your logo image path
            alt="Logo"
            className=" cursor-pointer h-10"
          />
      </div>
      <div className=" md:flex md:space-y-0 md:gap-0 space-y-10   justify-center ">

      {/* Order Summary Component- for small screen */}
      <div className="md:hidden flex flex-col  bg-neutral-900 md:p-1 p-3 rounded-lg ">
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
            <OrderSummary selectedMethod={selectedMethod} />
          )}
      </div>

        {/* horizonatl line */}
        <div className=' md:w-[480px] md:bg-neutral-900 md:p-4   text-white rounded-lg '>
          <nav className="text-xs flex space-x-4 items-center md:my-6 mb-6">
            <div className={`${tab === 'Information' ? 'text-rose-600 text-sm' : 'text-neutral-300'} hover:cursor-pointer`} onClick={() => setTab('Information')}>Information</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 text-neutral-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <div className={`hover:cursor-pointer ${tab === 'Shipping' ? 'text-rose-600 text-sm' : 'text-neutral-300'}`} onClick={() => setTab('Shipping')}>Shipping</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 text-neutral-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <div className={`hover:cursor-pointer ${tab === 'Payment' ? 'text-rose-600 text-sm' : 'text-neutral-300'}`} onClick={() => setTab('Payment')}>Payment</div>
          </nav>

          {tab === 'Information' && <CheckOutMain setTab={setTab} />}
          {tab === 'Shipping' && <Shipping selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} setTab={setTab} />}
          {tab === 'Payment' && <Payment />}
        </div>
        {/* horizontal line */}
        {/* Order Summary Component larger Screens*/}
        <div className="md:ml-4 hidden  md:flex flex flex-col  p-3 rounded-lg w-[480px] bg-neutral-900 md:pt-8">
          <div className='text-md text-neutral-500 '>Order Summary</div>
          <OrderSummary selectedMethod={selectedMethod} />
        </div>
        
      </div>
    </div>
  );
}
