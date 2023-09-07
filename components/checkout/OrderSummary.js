// components/Cart.js
import React, { useState, useEffect, useCallback } from 'react';
import CartProductCard from './CheckoutProductCard'
import { useCart } from '../../contexts/CartContext';

const OrderSummary = ({selectedMethod}) => {
  const { myCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState('');

  const calculateTotalPrice = useCallback(() => {
    let totalPrice = 0;
    myCart.forEach((prod) => {
      totalPrice += prod.price * prod.quantity;
    });
    setTotalPrice(totalPrice);
  }, [myCart]);

  useEffect(() => {
    calculateTotalPrice();
  }, [myCart, calculateTotalPrice]);

    useEffect(() => {
        if (selectedMethod === 'Economy') {
            setShippingPrice('$4.90 USD');
            calculateTotalPrice();
        } else if (selectedMethod === 'Standard') {
            setShippingPrice('$7.70 USD');
            calculateTotalPrice();
        } else {
            setShippingPrice('Calculated at next step');
        }
    }, [selectedMethod, calculateTotalPrice]);


  return (
    <div className={` w-full  transition-all ease-in-out duration-500 `}>
        
        <div className="w-full flex flex-col gap-6 justify-between overflow-hidden">
          <div className="flex flex-col gap-1 py-3  mt-3 flex-grow ">
            {myCart && myCart.map((product) =>
              {
                return <CartProductCard 
                 product={product} 
                 key={product._id}
                />
              })
              }
          </div>
          <div className="flex ">
            <div className="flex flex-col gap-2 w-full ">
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Taxes</div>
                    <div className="text-sm text-neutral-500 uppercase">$0.00 usd</div>
                </div>
                <div className="border-b border-neutral-700"></div>
    
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Shipping</div>
                    <div className="text-sm text-neutral-500 ">{shippingPrice || 'Calculated at next step'} </div>
                </div>
                <div className="border-b border-neutral-700"></div>
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="text-sm text-neutral-500">Total</div>
                    <div className="text-base text-neutral-300 uppercase">${totalPrice} usd</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OrderSummary;