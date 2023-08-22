
import React from 'react';
import { useRouter } from 'next/router';

export default function ProductCard2() {
    const router = useRouter();

    const handleCardClick = () => {
        console.log('Card clicked');
        router.push('/product/1');
    }

    const handleAddToCart = (e) => {
      e.stopPropagation();
      console.log('Add to cart clicked');
    }
    return (
        <div className=" min-w-[270px] w-[270px]  hover:shadow-md hover:shadow-neutral-700 hover:rounded-lg hover:cursor-pointer rouned-lg" onClick={() => handleCardClick()}>
            <div className="  bg-neutral-900 rounded-lg shadow ">
                <div className="bg-neutral-200 rounded-t-lg">
                    <img className="rounded-t-lg w-full " src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60' />
                </div>
                <div className="px-5 pb-5">
                    <div>
                        <h4 className="text-2xl sm:text-xl font-semibold tracking-tight text-neutral-200 mt-2">Product Name</h4>
                        <h5 className="text-lg sm:text-md my-2 text-neutral-400">Product description</h5>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl sm:text-2xl font-bold text-neutral-200">$100</span>
                        <div className="flex items-center" onClick={(e) => handleAddToCart(e)}>
                              <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-800 ' title="Add to Cart">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                  </svg>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
