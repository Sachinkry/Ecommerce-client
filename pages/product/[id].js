import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProductPageCard from '../../components/product/ProductPageCard';
import RelatedProductCard from '../../components/product/RelatedProductCard';
import { useEffect, useRef } from 'react';


export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const containerRef = useRef(null);
    
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
    
        }, []);

    return (
        <Layout>
           <div className='space-y-10'>
        
        <ProductPageCard />

        <div className='flex flex-col gap-4'>
          <div className='text-2xl font-semibold text-neutral-200'>Related Products</div>
          <div ref={containerRef} className='space-x-3 sm:space-x-5 w-full flex gap-3 sm:gap-5 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-gray-200 scrollbar-rounded-md pb-1 scroll-auto'>
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
    </Layout>
    );
}