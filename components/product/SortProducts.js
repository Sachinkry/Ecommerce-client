import React from 'react';

export default function SortProducts({ selectedOption, setSelectedOption }) {
  return (
    <div className="text-white px-4 rounded-lg hidden md:flex flex-col">
      <h2 className="text-xs mb-3 text-neutral-600 w-full">Sort by</h2>
      <ul className="space-y-2">
        <li onClick={() => setSelectedOption('Price: Low to high')} className={`cursor-pointer text-xs text-neutral-400 hover:underline ${selectedOption === 'Price: Low to high' ? 'text-rose-500/60 underline' : ''}`}>Price: Low to high</li>
        <li onClick={() => setSelectedOption('Price: High to low')} className={`cursor-pointer text-xs text-neutral-400 hover:underline ${selectedOption === 'Price: High to low' ? 'text-rose-500/60 underline' : ''}`}>Price: High to low</li>
      </ul>
    </div>
  );
}
