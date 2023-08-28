import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProductPageCard from '../../components/product/ProductPageCard';
import RelatedProductCard from '../../components/product/RelatedProductCard';
import {  useState } from 'react';


export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true); // Set isLoading to true by default

    const router = useRouter();
    const { id } = router.query;
    console.log(typeof id)

    return (
      <Layout>
           <div className='space-y-10'>
        
        <ProductPageCard id={id} />

        <div className='flex flex-col gap-4'>
          <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
          <RelatedProductCard  />
        </div>
           </div>
      </Layout>
    );
}