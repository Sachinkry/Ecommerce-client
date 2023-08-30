import React, { useState } from 'react';

export default function SortDropdown({ onChange }) {
  const [selectedOption, setSelectedOption] = useState('Relevance');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    
    'Price: Low to high',
    'Price: High to low',
  ];

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange && onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-neutral-900 text-neutral-300 text-sm ring-1 ring-neutral-600 rounded-md px-4 py-3 hover:bg-neutral-800 focus:outline-none cursor-pointer flex flex-row justify-between items-center "
      >
        {selectedOption}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-neutral-900 rounded-md shadow-lg ring-1 ring-neutral-600">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleChange(option)}
              className="text-neutral-300 text-sm px-4 py-3 hover:bg-neutral-800 rounded-md cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
