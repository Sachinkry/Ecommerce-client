import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import BuyMeCoffeeBtn from '../BuyMeCoffeeBtn';

const stripePromise = loadStripe('STRIPE_CHECKOUT_KEY');

const CheckoutForm = ({ setTab }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log(result.token);
      alert('Payment Successful');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <CardElement className="p-2 ring-2 ring-neutral-600 rounded text-white bg-neutral-300 "/>
      </div>
      <button type="submit" disabled={!stripe} className="px-6 py-2 rounded bg-blue-500 text-white disabled:opacity-50 hover:bg-neutral-900 hover:cursor-pointer ease-in duration-200 ring-2 ring-blue-500 hover:text-blue-500">Review Payment</button>
    </form>
  );
};

export default function Payment() {
  return (
    <div className="space-y-8 ">
      <div className='text-sm bg-neutral-900 p-4 rounded-lg ring-1 ring-neutral-600 text-neutral-300 h-[200px]  '>No Payments are accepted as of now.</div>
      <div className='flex justify-start'>
          <div className=" text-xs text-rose-600 hover:text-rose-600/80 flex flex-row items-center gap-1 hover:cursor-pointer" onClick={() => router.push('/')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>Return to Home Page</span>
          </div>
      </div>
      <BuyMeCoffeeBtn />
    </div>
  );
}
