import React, { useState } from 'react'

export default function CartProductCard({ product }) {

    return (
        <div className="flex flex-col gap-3 ">
            <div className="flex flex-row  justify-between w-full px-1 items-center">
                <div className="flex items-center relative">
                    <img src={product.imageUrl} className="aspect-square w-12 ring-1 ring-neutral-600  rounded-md " />
                    <div className="text-xs text-white px-1 absolute top-0 right-[-4px] bg-rose-600 rounded-xl hover:cursor-pointer"> {product.quantity}</div>
                </div>
                <div className="name gap-2 flex flex-col mt-1 w-2/4">
                    <div className="text-sm w-40  sm:w-32 font-semibold text-neutral-200 ">{product.name}</div>
                    <div className="text-xs text-neutral-600">
                        <span className="text-xs">1.5 </span> /
                        <span className="text-xs"> B</span>
                    </div>
                </div>
                    <div className="text-sm  text-neutral-200 uppercase text-end mt-1">${product.priceInCart} usd</div>
                    
            </div>
            {/* horizontal line */}
            <div className="border-b border-neutral-700"></div>
        </div>
    )
}