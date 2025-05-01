import Layout from '@/components/Layout'
import Categories from '@/components/Categories'
import ProductCard from '@/components/product/ProductCard'
import { useEffect, useState } from 'react'
import { useProducts } from '@/contexts/ProductsContext'
import Loading from '@/components/Loading'

export default function Home() {
  const [randProducts, setRandProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { products, getRandomProducts } = useProducts()

  useEffect(() => {
    if (products.length > 0) {
      const randomProducts = getRandomProducts(8)
      setRandProducts(randomProducts)
      setIsLoading(false)
    }
  }, [products, getRandomProducts])

  return (
    <Layout>
      <div className="space-y-6">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Categories />
            <div>
              <div className="text-2xl font-semibold text-neutral-300 mb-2">Products For You</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {randProducts && randProducts.map((product) => (
                  <ProductCard key={product._id} product={product} isLoading={isLoading} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
