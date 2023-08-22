import StarRating from "./StarRating";
import Image from "next/image";


export default function ProductCard() {
    return (
        <div className="w-48 h-72 flex-col justify-center items-center gap-3 inline-flex mb-6  ">
          <div className="w-48 h-48 bg-neutral-900 rounded-tl-md rounded-tr-md flex-col justify-center items-center gap-2 flex hover:cursor-pointer">
            <Image 
              className="w-36 h-32" 
              src="/ProductImg.png" 
              width={144}
              height={136}
            />
          </div>
          <div className="self-stretch h-24 flex-col justify-center items-start gap-1.5 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-200 text-opacity-80 text-lg font-medium">Mpow CH6</div>
              <div className="grow shrink basis-0 h-3 justify-end items-center gap-2 flex">
                <div className="text-neutral-200 text-xs font-normal">$ 199.00</div>
              </div>
            </div>
            <div className="text-neutral-200 text-opacity-80 text-xs font-normal">Kids Headphones</div>
            {/* rating */}
            <StarRating />
            <div className="self-stretch flex flex-row justify-between items-center gap-5 inline-flex">
              <div className="  rounded-3xl ring-1 ring-rose-500 justify-center items-center gap-2 flex hover:ring-1 hover:ring-rose-500 hover:bg-rose-500 ">
                <div className="px-2.5 py-1 text-rose-500 text-xs font-normal hover:text-white hover:cursor-pointer ">Add to Cart</div>
              </div>
              {/* like button */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:cursor-pointer text-rose-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>

            </div>
          </div>
        </div>
    )
}