import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = ({ setTab }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Send token to server or handle payment
      console.log(result.token);
      alert('Payment Successful');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <CardElement />
      <div className='flex justify-end'>
         <button type="submit" disabled={!stripe} className="ring-1 ring-rose-600 px-5 p-4 bg-rose-900 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-rose-600 text-xs">Review Payment</button>
      </div>
    </form>
  );
};

export default function Payment() {
  return (
    <div className="space-y-8 text-sm  bg-neutral-900 rounded-lg">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
