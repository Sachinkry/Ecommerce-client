import Layout from '@/components/Layout'
import Categories from '@/components/Categories'
import ProductCard2 from '@/components/product/ProductCard2'


export default function Home() {

  return (
    <Layout>
      <div className='space-y-10'>
        {/* <Banner /> */}

        <Categories  />

        <ProductCard2 />
             
        
      </div>
    </Layout>
  )
}
