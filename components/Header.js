// NavBar.js
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/router';

export default function Header({ toggleCartVisibility, toggleAccountVisibility, toggleBarVisibility }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { myCart } = useCart();
  const router = useRouter()

  // Listen for clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown')) return;
    setIsDropdownOpen(false);
  };

  // Attach and detach the click listener
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="py-3  md:py-4  flex justify-between items-center text-sm ">
      <div className="">
        <Link href="/" className='flex flex-row items-center space-x-2'>
          <img
            src="/logo-noname.png" 
            alt="Logo"
            className=" cursor-pointer h-10"
          />
          <img
            src="/logo-name.png" 
            alt="Logo"
            className=" cursor-pointer w-30 h-6 sm:w-40 sm:h-8 md:block hidden"
          />
        </Link>
        
      </div>
      {/* menu links */}
      <div className="hidden lg:flex space-x-8 items-center">
        <Link href="/">
          <span className={`cursor-pointer ${router.pathname === '/' ? 'text-rose-600' : 'hover:text-rose-500 ease-out duration-300'}`}>All</span>
        </Link>
        
        <Link href="/trending">
          <span className={`cursor-pointer ${router.pathname === '/trending' ? 'text-rose-600' : 'hover:text-rose-500 ease-out duration-300'}`}>Trending</span>
        </Link>
      
        <Link href="/orders">
          <span className={`cursor-pointer ${router.pathname === '/orders' ? 'text-rose-600' : 'hover:text-rose-500 ease-out duration-300'}`}>Orders</span>
        </Link>
      </div>



      {/* Search bar */}
      <SearchBar />

      <div className="flex items-center gap-5">

          <span className="flex flex-row items-center justify-between hidden md:flex">
            <div className="hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-800 " onClick={toggleAccountVisibility}>
              {/* account icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </span>

          <span className="flex flex-row items-center justify-between hidden md:flex">
            <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  bg-neutral-800 relative' onClick={toggleCartVisibility}>
              {/* Cart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <div className="text-xs text-white px-1 absolute top-[-8px] right-[-9px] bg-rose-600 rounded-xl hover:cursor-pointer">{myCart.length > 0 ? myCart.length: ''}</div>
            </div>
          </span>

          <span className="flex flex-row items-center justify-between md:hidden ">
            <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  bg-neutral-800 ' onClick={toggleBarVisibility}>
              {/* toggleBar icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </span>
          
      </div>
    </nav>
  );
};

