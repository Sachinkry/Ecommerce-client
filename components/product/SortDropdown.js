import React, { useState, useCallback } from 'react';

const options = [
  'Price: Low to high',
  'Price: High to low',
];

export default function SortDropdown({ selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleChange = useCallback((value) => {
    setSelectedOption(value);
    setIsOpen(false);
  }, [setSelectedOption]);

  return (
    <div className="relative w-full md:hidden">
      <button
        onClick={toggleDropdown}
        className="w-full bg-neutral-900 text-neutral-300 text-sm ring-1 ring-neutral-600 rounded-md px-4 py-3 hover:bg-neutral-800 focus:outline-none cursor-pointer flex flex-row justify-between items-center"
      >
        {selectedOption}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-neutral-900 rounded-md shadow-lg ring-1 ring-neutral-600">
          {options.map(option => (
            <button
              key={option}
              onClick={() => handleChange(option)}
              className="text-neutral-300 text-sm px-4 py-3 hover:bg-neutral-800 rounded-md cursor-pointer w-full text-left"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
