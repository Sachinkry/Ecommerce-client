import React, { useState, useEffect, useRef } from "react"
import axios from "axios";
import Loading from "./Loading";
import { useRouter } from "next/router";

const handleRouteChange = (router, categoryId, categoryName) => {
  if (categoryId && categoryName) {
    const formattedName = categoryName.toLowerCase().replace(/ /g, '-'); 
    router.push(`/category/${formattedName}-${categoryId}`);
  } else {
    console.error("Both categoryId and categoryName should be provided");
  }
};

// Main component "Categories"
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState({});
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const { query } = router;
  let categoryName, categoryId;
  if (query.category) {
    [categoryName, categoryId] = query.category.split('-');
  }

  const fetchAndStoreCategories = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get("/api/categories");
      const loadingState = {};
      data.forEach((cat) => {
        loadingState[cat._id] = false;
      });
      setLoadingCategories(loadingState)
      setCategories(data);
      setIsLoading(false)

    } catch (err) {
      setError('Error fetching categories')
      console.error("Error fetching categories:", err);
    } 

  };

  const handleCategoryClick = (categoryId, categoryName) => {
    handleRouteChange(router, categoryId, categoryName);
  };

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
      fetchAndStoreCategories();
    }, []);

    if(isLoading) <Loading />;

    return (
      <div ref={containerRef} className="w-full flex gap-3 md:gap-4 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-gray-200 scrollbar-rounded-md pb-1 scroll-auto">
        {error && <div>{error}</div>}
        {categories && categories.map((category) => (
          <button onClick={() => handleCategoryClick(category._id, category.name)} key={category._id}>
            <div className="w-24 h-36 md:w-48 md:h-72 relative rounded-xl shrink-0 ease-in duration-200 hover:cursor-pointer snap-center">
              {isLoading ? (
                <Loading />
              ) : (
                <img src={category.imgUrl} alt="categoryImg" className="w-24 h-36 md:w-48 md:h-72 left-0 top-0 absolute rounded-md" />
              )}
              <div className="w-full top-[10px] md:top-[24px] absolute text-center text-white md:text-2xl font-medium">{category.name}</div>
            </div>
          </button>
        ))}
      </div>
    )
}

export default React.memo(Categories);