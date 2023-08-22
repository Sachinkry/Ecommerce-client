// NavBar.js
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import Cart from './Cart';

export default function Header({ isCartVisible, toggleCartVisibility}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if the user clicks outside of it
      if (event.target.closest('.dropdown')) return;
      setIsDropdownOpen(false);
    };

    // this line adds the listener for click events on the document
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
            src="/logo-noname.png" // Replace with your logo image path
            alt="Logo"
            className=" cursor-pointer h-10"
          />
          <img
            src="/logo-name.png" // Replace with your logo image path
            alt="Logo"
            className=" cursor-pointer w-30 h-6 sm:w-40 sm:h-8 md:block hidden"
          />
        </Link>
        
      </div>
      {/* navigation items */}
      <div className="hidden lg:flex space-x-8 items-center">
        <Link href="/all">
          <span className=" hover:text-rose-500 ease-out duration-300 cursor-pointer">All</span>
        </Link>

        {/* <div className="relative dropdown w-30">
        <div className='hover:text-rose-500 ease-in duration-150 flex flex-row space-x-1 items-center cursor-pointer ring-1 px-2 py-1 rounded-md' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span
            className=" "
            >
            {selectedCategory || 'Categories'}
  
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>

        </div>

        {isDropdownOpen && (
          <div className="absolute rounded-sm top-8 left-0 flex flex-col ring-1 ring-rose-500 group-hover:block">
            
            <Link href="">
              <span className="block py-1 px-2 rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => {
                setSelectedCategory('Headphones');
                setIsDropdownOpen(false);
              }}>Headphones</span>
            </Link>
            <Link href="/">
              <span className="block py-1 px-2 rounded-md hover:bg-blue-600 cursor-pointer" onClick={() => {
                setSelectedCategory('Shoes');
                setIsDropdownOpen(false);
              }}>Shoes</span>
            </Link>
          </div>
        )}
        </div> */}
        
       
        <Link href="/whats-new">
          <span className=" hover:text-rose-500 cursor-pointer">What's New</span>
        </Link>
        <Link href="/clothing" className='x'>
          <span className=" hover:text-rose-500 cursor-pointer">Shoes</span>
        </Link>
      </div>

      {/* Search bar */}
      <SearchBar />

      <div className="flex items-center gap-5">
        <Link href="/account" className='hidden md:block'>
          <span className="flex flex-row items-center justify-between ">
            <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2 bg-neutral-800 '>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            {/* <span className="hidden lg:inline-block text-sm text-neutral-700">Account</span> */}
          </span>
        </Link>
          <span className="flex flex-row items-center justify-between hidden md:flex">
            <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  bg-neutral-800 ' onClick={toggleCartVisibility}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>

            {/* <span className="hidden lg:inline-block">Cart</span> */}
            
          </span>
          <span className="flex flex-row items-center justify-between md:hidden ">
            <div className='hover:bg-neutral-900 cursor-pointer ring-1 ring-neutral-600 rounded-md p-2  bg-neutral-800 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>

            {/* <span className="hidden lg:inline-block">Cart</span> */}
            
          </span>
      </div>
    </nav>
  );
};

