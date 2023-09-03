import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      router.push(`/search?query=${searchInput}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div className=" relative flex flex-row items-center  ">
      <div className=" w-60 md:w-80   rounded-md">
        <input className="text-left text-neutral-300 text-sm bg-neutral-800 w-full py-2 pl-3 rounded-md ring-1 ring-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:bg-neutral-900 focus:ring-opacity-50 placeholder:text-neutral-300/30 placeholder-opacity-30"
        placeholder='Search Products'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
        />
      </div>
        <span className="absolute right-0 mr-2 hover:cursor-pointer" onClick={() => handleSearch()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </span>

      </div>
  );
};


