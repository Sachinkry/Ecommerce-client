import Image from "next/image"

export default function Banner() {
    return (
        <div className=" w-full flex">
            <div className="bg-violet-900 flex flex-row  justify-between w-full mx-auto rounded-sm ">
              
              <div className="lg:w-1/2 lg:px-20 lg:py-8 h-30 flex-col justify-center items-start gap-6 inline-flex">
                <div className="w-full text-xs  text-white lg:text-4xl  font-semibold leading-10 letter-spacing-1">Grab Upto 50% Off on Selected Items</div>
                <div className=" bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex ">
                  <button className="px-6 py-2  text-violet-950 text-xs md:text-base  hover:text-white hover:bg-violet-900 hover:ring-2 hover:ring-white hover:cursor-pointer hover:text-white hover:rounded-3xl ">Read More..</button>
                </div>
              </div>
              {/* img */}
                  <Image 
                    src="/girl-headphone.png" 
                    width={300} 
                    height={300} 
                    className="object-cover lg:mr-20 scale-[0.4]"
                  />
            </div>
        </div>
      
    )
}