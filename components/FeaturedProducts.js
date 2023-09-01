import Image from "next/image"
import Categories from "./Categories"
import ProductCard from "./product/ProductCard"
import SaveDollarCard from "./product/SaveDollarsCard"
import TopPicksCard from "./product/TopPickCard"
import QuestionCard from "./product/QuestionCard"
import FooterPart from "./FooterPart"
import ProductCard2 from "./product/ProductCard2"

export default function FeaturedProducts() {
    return (
          <div className=" min-h-screen space-y-16 ">
            {/* banner headphones */}
            <div className=" w-full flex px-16 ">
              <div className="bg-violet-900 flex flex-row  justify-between w-full mx-auto rounded-sm ">
                
                <div className="w-1/2 px-20 py-12 h-30 flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-full  text-white text-4xl  font-semibold leading-10 letter-spacing-1">Grab Upto 50% Off on Selected Items</div>
                  <div className=" bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex ">
                    <button className="px-6 py-2  text-violet-950 text-base font-normal hover:text-white hover:bg-violet-900 hover:ring-2 hover:ring-white hover:cursor-pointer hover:text-white hover:rounded-3xl ">Read More..</button>
                  </div>
                </div>
                {/* img */}
                <div className="">
                    
                    <Image 
                      src="/girl-headphone.png" 
                      width={400} 
                      height={300} 
                      className="object-cover mr-20"
                    />
                </div>
              </div>
            </div>
            {/* banner headphones end */}

            {/* Categories  */}
            {/* <Categories /> */}
            <div className="px-16 flex flex-row justify-between">
               <Categories />
               <Categories />
               <Categories />
               <Categories />
               <Categories />
               <Categories />
            </div>

            {/* Today's best deals for you */}
            <div className="px-16 flex flex-col justify-left w-full ">
              <div className="text-left text-black text-2xl font-semibold leading-7 mb-4">Today&apos;s Best Deals for You</div>
              <div className=" flex flex-wrap columns-2 md:columns-3 gap-8 ">

                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
                <ProductCard2  />
              </div>
            </div>

            {/* Credit Cashback Banner */}
            <div className="w-full  px-16 ">
              <div className="bg-blue-200 w-full h-400 flex flex-row justify-between rounded-md px-16">
                <div className="flex w-1/2 flex-col px-12 space-y-4 my-auto items-start ">
                  <div className="text-4xl font-semibold text-blue-600 line-height-20">Get Up To 40% Cashback on Credit Cards</div>
                  <div className=" bg-blue-600 rounded-3xl justify-center items-center  inline-flex ">
                    <button className="px-6 py-2  text-white text-base font-medium hover:text-blue-600 hover:bg-white hover:ring-2 hover:ring-blue-600 hover:cursor-pointer hover:text-blue-600 hover:rounded-3xl hover:font-semibold ">Read More..</button>
                  </div>
                </div>
                <Image src='/credit-card.png' alt="credit card" width={400} height={300} className="" />
              </div>
            </div>
          
            {/* save dollars Cards*/}
            <div className="w-full px-16">
              <div className="flex flex-wrap justify-between">
               <SaveDollarCard />
               <SaveDollarCard />
               <SaveDollarCard />
               <SaveDollarCard />
               <SaveDollarCard />
               <SaveDollarCard />
              </div>
            </div>

            {/* Popular items this season */}
            <div className="px-16 flex flex-col justify-left  ">
              <div className="text-left text-black text-2xl font-semibold leading-7 mb-4">Popular Items this Season</div>
              <div className="flex flex-wrap justify-between ">
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                
              </div>
            </div>


            

            {/* Footer */}
            <div className="w-full px-16 ">
              <FooterPart />
            </div>


          </div>
    )
}

