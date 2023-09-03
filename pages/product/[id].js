import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RelatedProductCard from '../../components/product/RelatedProductCard';
import {  useEffect, useState } from 'react';
import ProductInfoCard from '@/components/product/ProductInfoCard';
import { useProducts } from '@/contexts/ProductsContext';


export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true); 
    const [product, setProduct] = useState(null);
    const {products} = useProducts();

    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    
    const getProductById = () => {
      console.log(products)
      // search product by id in this products array
      const product_ = products.find((product) => product._id === id.trim());
      setProduct(product_)
      console.log(product)
      
    }
    
    useEffect(() => {
      getProductById();
    }, [id])
  

    return (
      <Layout>
        <div className='space-y-10'>
          <ProductInfoCard product={product} />
  
          <div className='flex flex-col gap-4'>
            <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
            <RelatedProductCard  />
          </div>
        </div>
      </Layout>
    );
}