import Link from "next/link";
import React, { useState, useEffect, useRef } from "react"
import axios from "axios";
import Loading from "./Loading";
import { useRouter } from "next/router";

const storeCategoriesLocal = (data) => {
  localStorage.setItem("categories", JSON.stringify(data));
}

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set isLoading to true by default
  const containerRef = useRef(null);
  const router = useRouter();

  const getCategories = async () => {
    const localCategories = localStorage.getItem("categories");
    try {
      if (localCategories) {
        setCategories(JSON.parse(localCategories));
        return setIsLoading(false);
      } else {
        console.log("fetching categories");
        setIsLoading(true);
        const { data } = await axios.get("/api/categories");
        // store this data local storage
        storeCategoriesLocal(data);
        setCategories(data);
        console.log("data", data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCategoryClick = (categoryId) => {
    router.push(`/category/${categoryId}`);
  }



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
    
  },[] );

    useEffect(() => {
      getCategories();
    }, []);



    return (
      <div ref={containerRef} className="w-full flex  gap-3 md:gap-4  overflow-x-auto overflow-y-hidden  scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-gray-200 scrollbar-rounded-md pb-1 scroll-auto ">
        {isLoading ? (
          <Loading />
        ): (
          categories && categories.map((category) => (
            <div onClick={() => handleCategoryClick(category._id)} key={category._id}>
              <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl  shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
              <img src={category.imgUrl} className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md " />
              <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">{category.name}</div>
              </div>
            </div>
          ))
        )}
        
      </div>
    )
}

export default React.memo(Categories);