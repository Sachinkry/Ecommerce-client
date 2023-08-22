import FeaturedProducts from '@/components/FeaturedProducts'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import OfferHeader from '@/components/OfferHeader'
import SearchBar from '@/components/SearchBar'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import ProductCard2 from '@/components/product/ProductCard2'
import ProductCard from '@/components/product/ProductCard'
import ProductCard3 from '@/components/product/ProductPageCard'

export default function Home() {
  return (
    <Layout>
      <div className='space-y-10'>
        {/* <Banner /> */}

        <Categories />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {/* ProductCard2 components go here */}
             <ProductCard2 />
             <ProductCard2 />
             <ProductCard2 />
             <ProductCard2 />
             <ProductCard2 />
        </div>
      </div>
    </Layout>
  )
}
