import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';
import { useCart } from '@/contexts/CartContext';


export default function ProductInfoCard({ product }) {
    const [isLoading, setIsLoading] = useState(true); 
    // const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    

    return (
        <div>
            {product && (
                
                <div className="flex-1 w-full ">
                <div className="flex flex-col md:flex-row  bg-neutral-900 rounded-lg shadow p-5  gap-5 md:gap-8 lg:gap-12">
                    
                    <div className=" rounded-lg md:w-2/3 ">
                        <img className="rounded-lg w-full" src={product.imageUrl} />
                    </div>
    
                    <div className=" flex flex-col md:w-1/3 gap-5">
                    
                        <div className=" ">
                        <div>
                            <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200 ">{product.name}</h4>
                            <h5 className="text-lg  my-2 text-neutral-400">{product.description}</h5>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl  font-bold text-neutral-200">${product.price}</span>
                            
                        </div>
                        </div>
                        { /* horizonal line */}
                        <div className="border-b border-neutral-700"></div>
    
                        {/* color, size and more info on mainProduct */}
                        <div className="flex flex-col gap-1">
                            <div className='text-neutral-200 uppercase text-sm '>color</div>
                            <div className='text-xs flex flex-row gap-4'>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>white</div>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>black</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className='text-neutral-200 uppercase text-sm'>size</div>
                            <div className='text-xs flex flex-row gap-4'>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>2</div>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>5</div>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>6</div>
                                <div className='bg-neutral-800 rounded-2xl ring-1 ring-neutral-600 px-3 py-1'>7</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className='text-neutral-200 uppercase text-sm'>more info</div>
                            <ul className='text-xs flex flex-col gap-1'>
                                <li className='text-xs'><span className='font-bold px-2'>•</span> Made from durable materials</li>
                                <li className='text-xs'><span className='font-bold px-2'>•</span> Available in multiple sizes</li>
                                <li className='text-xs'><span className='font-bold px-2'>•</span> Easy-to-close durable drawstring</li>
                                <li className='text-xs'><span className='font-bold px-2'>•</span> Sturdy, reusable, and resilient</li>
                            </ul>
                        </div>
                        <div onClick={() => addToCart(product)} className='flex flex-row gap-2 justify-center hover:bg-neutral-900 cursor-pointer ring-1 ring-rose-600 rounded-md p-2 bg-rose-800 mt-4' >
                            <span className='text-sm text-neutral-300 hover:text-rose-800'>Add to Cart</span>
                            <div className='flex items-center'>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                               </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
