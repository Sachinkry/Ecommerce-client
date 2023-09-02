import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';
import ProductCard2 from '../../components/product/ProductCard';
import SortProducts from '@/components/product/SortProducts';
import SortDropdown from '@/components/product/SortDropdown';
import RelatedProductCard from '@/components/product/RelatedProductCard';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Price: Low to high');
  const [error , setError] = useState(null)
  const router = useRouter();

  const { id } = router.query;
  const categoryId = id && id.split('-').pop();
  console.log(categoryId)


  const sortFunction = useMemo(
    () => selectedOption === 'Price: Low to high' 
      ? (a, b) => a.price - b.price 
      : (a, b) => b.price - a.price,
    [selectedOption]
  );

  const fetchSortedProductsByCategory = async () => {
    setIsLoading(true);
    setError(null)
    
    try {
      const res = await axios.get(`/api/productByCategory?category=${categoryId}`);
      const allProducts = res.data;
  
      // Sort products by price
      allProducts.sort(sortFunction);
  
      setProducts(allProducts);
      setIsLoading(false);
    } catch (error) {
      setError(`Failed to fetch Products: ${error.response ? error.response.data.error : error.message}`)
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (categoryId) {
      fetchSortedProductsByCategory();
    }
  }, [categoryId, selectedOption]);

  return (
    
      <Layout>
        <div className="flex  flex-col md:flex-row gap-4 ">
          {isLoading ? (
            <Loading />
          ) : error ? (
            <div className='text-rose-600 ring-rose-600 ring-1 rounded-md p-3'>Something went wrong!!</div>
          ) : products.length === 0 ? (
            <div className='ring-neutral-600 text-neutral-300 ring-1 rounded-md p-3'>No products found.</div>
          ) : (
            <>
              <SortDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-4/5'>
                {products.map(product => <ProductCard2 key={product._id} product={product} />)}
              </div>
              <SortProducts selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </>
          )}
        </div>
    
        {products.length > 0 && !isLoading && (
          <div className='flex flex-col gap-4 mt-4'>
            <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
            <RelatedProductCard />
          </div>
        )}
      </Layout>
    );
}
