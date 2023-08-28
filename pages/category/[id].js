import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RelatedProductCard from '../../components/product/RelatedProductCard';
import ProductCard from '../../components/product/ProductCard';
import SortProducts from '@/components/product/SortProducts';
import SortDropdown from '@/components/product/SortDropdown';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchPage() {
  const [products, setProducts] = useState([]); 

  const router = useRouter();
  const { id } = router.query;

  // get products by category
  const getProductsByCategory = async () => {
    try {
      const res = await axios.get(`/api/productByCategory?category=${id}`);
      const productsByCategory = res.data;
      setProducts(productsByCategory);
      console.log('products', productsByCategory);
    } catch (error) {
      console.log('Error fetching products by category:', error);
    }
  }

  useEffect(() => {
    getProductsByCategory();
  }, [id]);
  

  return (
    <Layout>
      <div className='space-y-10'>
        
        <div className="flex flex-col md:flex-row gap-4">
             {/* ProductCard2 components go here */}
             <SortDropdown />
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-4/5'>
                {products && products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              <SortProducts />
        </div>

        <div className='flex flex-col gap-4'>
          <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
          <div className='w-full flex gap-3 sm:gap-5 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-gray-200 scrollbar-rounded-md pb-1 '>
            <div className='flex space-x-3 sm:space-x-5 '>
              <RelatedProductCard />
              <RelatedProductCard />
              <RelatedProductCard />
              <RelatedProductCard />
              <RelatedProductCard />
              <RelatedProductCard />
              <RelatedProductCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}