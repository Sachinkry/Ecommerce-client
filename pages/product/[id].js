import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RelatedProductCard from '../../components/product/RelatedProductCard';
import {  useState } from 'react';
import ProductInfoCard from '@/components/product/ProductInfoCard';


export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true); // Set isLoading to true by default

    const router = useRouter();
    const { id } = router.query;
    console.log(id)

    return (
      <Layout>
        <div className='space-y-10'>
          {id && 
          <ProductInfoCard id={id} />
          }
  
          <div className='flex flex-col gap-4'>
            <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
            <RelatedProductCard  />
          </div>
        </div>
      </Layout>
    );
}