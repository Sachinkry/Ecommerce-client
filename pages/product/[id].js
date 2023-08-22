import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProductPageCard from '../../components/product/ProductPageCard';
import RelatedProductCard from '../../components/product/RelatedProductCard';


export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
           <div className='space-y-10'>
        
        <ProductPageCard />

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