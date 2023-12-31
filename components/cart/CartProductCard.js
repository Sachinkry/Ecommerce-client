import React, { useEffect } from 'react'
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

export default function CartProductCard({product, calculateTotalPrice}) {
    const { addToCart, removeFromCart} = useCart();
    
    const removeProductFromCart = () => {
      removeFromCart(product._id, calculateTotalPrice);
    };

    const increaseQuantity = () => {
      addToCart(product);
      calculateTotalPrice();
    };
    
    const decreaseQuantity = () => {
      addToCart(product, -1);
      calculateTotalPrice();
    };


  useEffect(() => {
    calculateTotalPrice();
    }, [calculateTotalPrice]);

    return (
        <div className="flex flex-col gap-3 ">
            <div className="flex flex-row  justify-between w-full px-1">
                <div className="flex items-center relative">
                    <Image alt='cartImg' width={16} height={16} src={product.imageUrl || 'https://fakeimg.pl/'} className="aspect-square object-contain w-12 ring-1 ring-neutral-600  rounded-md " />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 absolute top-0 right-[-4px] bg-neutral-800 rounded-xl hover:cursor-pointer" onClick={() => removeProductFromCart()} >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </div>
                
                <div className="name gap-2 flex flex-col mt-1">
                    <div className="text-sm w-40  sm:w-32 sm:font-semibold  text-neutral-200 ">{product.name || 'Product Name'}</div>
                    <div className="text-xs text-neutral-600">
                        <span className="text-xs">1.5 </span> /
                        <span className="text-xs"> B</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm  text-neutral-200 uppercase text-end mt-1">${product.price * product.quantity || '00.0'} usd</div>
                    <div className="flex flex-row gap-3 px-2 py-1 bg-neutral-800 rounded-3xl ring-1 ring-neutral-600 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-neutral-500 hover:cursor-pointer" onClick={()=> {if(product.quantity > 1) decreaseQuantity()}}>
                          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                        </svg>
                        <span className="text-sm text-neutral-400">{product.quantity}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-neutral-500 hover:cursor-pointer" onClick={()=>  increaseQuantity()}>
                          <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* horizontal line */}
            <div className="border-b border-neutral-700"></div>
        </div>
    )
}