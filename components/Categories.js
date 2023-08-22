import Link from "next/link";
import { useState, useEffect, useRef } from "react"

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const handleWheel = (e) => {
      e.preventDefault();
      if (container) {
        container.scrollLeft += e.deltaY;
      };
    };

      if (container) {
        container.addEventListener("wheel", handleWheel);
      };

      return () => {
        if (container) {
          container.removeEventListener("wheel", handleWheel);
        }
      };

    }, []);


    return (
      <div ref={containerRef} className="w-full flex  gap-3 md:gap-4  overflow-x-auto overflow-y-hidden  scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-gray-200 scrollbar-rounded-md pb-1 snap-x ">
        
        <Link href="/category/shoes">
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1513330313640-7b537adc4708?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg2fHxzaG9lc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Shoes</div>
          </div>
        </Link>

        <Link href='/category/clothing'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxjbG90aGluZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Clothing</div>
          </div>
        </Link>
        <Link href='/category/headphones'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://plus.unsplash.com/premium_photo-1679913796054-fc4e44f35b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhlYWRwaG9uZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Headphones</div>
          </div>
        </Link>
        <Link href='/category/furnitures'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Furnitures</div>
          </div>
        </Link>
        <Link href='/category/books'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2tzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Books</div>
          </div>
        </Link>
        <Link href='/category/gadgets'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1602525963389-fde1e08ca487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGdhZGdldHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=400&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Gadgets</div>
          </div>
        </Link>

        <Link href='/category/handbags'> 
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1597358371607-5987dd7da3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3N8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=400&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Handbags</div>
          </div>
        </Link>
        <Link href='/category/travel'>
          <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
          <img src='https://images.unsplash.com/photo-1604712937118-0835edf8130a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwYmFnc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60' className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
          <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">Travel</div>
          </div>
        </Link>
        
      </div>
    )
}