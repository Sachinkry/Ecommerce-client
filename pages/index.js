import Layout from '@/components/Layout'
import Categories from '@/components/Categories'
import ProductCard from '@/components/product/ProductCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import getRandomProducts from '../functions/getRandomProducts'

const storeProductsLocal = (data) => {
  localStorage.setItem('products', JSON.stringify(data))
}

export default function Home() {
  const [products, setProducts] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
        const localProducts = localStorage.getItem('products');
        try {
            if (localProducts) {
              const randomProducts = getRandomProducts(JSON.parse(localProducts), 8);
                setProducts(randomProducts);

                return setIsLoading(false);
            } else {
                const res = await axios.get("/api/products");
                const products = res.data;
                storeProductsLocal(products);
                const randomProducts = getRandomProducts(products, 8);
                console.log('randomProducts', randomProducts);
                setProducts(randomProducts);
            }
        } catch (error) {
          console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <Layout>
      <div className='space-y-6'>
        {/* <Banner /> */}

        <Categories  />
        
        <div>
            <div className='text-2xl font-semibold text-neutral-300 mb-2'>Products For You</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {products && products.map((product) => (
                <ProductCard key={product._id} product={product} isLoading={isLoading} />
                ))}
            </div>
        </div>
             
        
      </div>
    </Layout>
  )
}
