import React, { useState } from 'react';

export default function SortProducts({ onSort }) {
  const [selectedOption, setSelectedOption] = useState('Relevance');

  const handleSortChange = (option) => {
    setSelectedOption(option);
    onSort && onSort(option);
  };

  return (
    <div className=" text-white px-4 rounded-lg hidden md:flex flex-col ">
      <h2 className="text-xs  mb-3 text-neutral-600 w-full">Sort by</h2>
      <ul className="space-y-2">
        <li onClick={() => handleSortChange('Relevance')} className={`cursor-pointer text-xs text-neutral-400 hover:underline hover:cursor-pointer leading-4 ${selectedOption === 'Relevance' ? 'text-rose-500/60 underline' : ''}`}>Relevance</li>
        <li onClick={() => handleSortChange('Trending')} className={`cursor-pointer text-xs text-neutral-400 hover:underline hover:cursor-pointer leading-4 ${selectedOption === 'Trending' ? 'text-rose-500/60 underline' : ''}`}>Trending</li>
        <li onClick={() => handleSortChange('Latest arrivals')} className={`cursor-pointer text-xs text-neutral-400 hover:underline hover:cursor-pointer leading-4 ${selectedOption === 'Latest arrivals' ? 'text-rose-500/60 underline' : ''}`}>Latest arrivals</li>
        <li onClick={() => handleSortChange('Price: Low to high')} className={`cursor-pointer text-xs text-neutral-400 hover:underline hover:cursor-pointer leading-4 ${selectedOption === 'Price: Low to high' ? 'text-rose-500/60 underline' : ''}`}>Price: Low to high</li>
        <li onClick={() => handleSortChange('Price: High to low')} className={`cursor-pointer text-xs text-neutral-400 hover:underline hover:cursor-pointer leading-4 ${selectedOption === 'Price: High to low' ? 'text-rose-500/60 underline' : ''}`}>Price: High to low</li>
      </ul>
    </div>
  );
}
