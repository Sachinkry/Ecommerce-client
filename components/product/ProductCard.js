import StarRating from "./StarRating";
import Image from "next/image";
import { useRouter } from "next/router";


export default function ProductCard({product}) {
    const router = useRouter();
    
    return (
      <div key={product._id} className="flex-1 w-full max-w-[600px]  hover:shadow-md hover:shadow-neutral-700 hover:rounded-lg hover:cursor-pointer rouned-lg max-h-xs" onClick={() => handleCardClick(product._id)}>
      <div className=" bg-neutral-900 rounded-lg shadow h-full">
          <div className=" object-fill bg-neutral-200 rounded-t-lg">
              <img className="rounded-t-lg w-full object-fill" src={product.imageUrl || 'https://placehold.co/'} />
          </div>
          <div className="px-5 pb-5">
              <div>
                  <h4 className="text-2xl sm:text-xl  tracking-tight text-neutral-200 mt-2">{product.name || 'Product Name'}</h4>
                  <h5 className="text-lg sm:text-md my-2 text-neutral-400 overflow-hidden overflow-ellipsis whitespace-nowrap max-h-[3em] line-clamp-2">{product.description || 'Product Description'}</h5>
              </div>
              <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-2xl font-bold text-neutral-200">${product.price || '119'}</span>
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
    )
}