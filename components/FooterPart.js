import Image from "next/image"
import Link from "next/link"

export default function FooterPart() {
    return (
        <div className="flex flex-col mt-8">
            {/* Horizontal line */}
            <div className="w-full h-[0.1px]  bg-neutral-600"></div>

            <div className=" flex flex-col sm:flex-row h-fill">
                {/* logo part */}
                <div className=" md:w-1/4  flex flex-col justify-center items-start space-y-2 px-4   py-4">
                  <Link href="/" className='w-60 flex flex-row items-center space-x-2'>
                    <img
                      src="/logo-noname.png" // Replace with your logo image path
                      alt="Logo"
                      className=" cursor-pointer h-8 md:h-12"
                    />
                    <img
                      src="/logo-name.png" // Replace with your logo image path
                      alt="LogoName"
                      className=" cursor-pointer w-20 h-4 md:w-40 md:h-8 md:block "
                    />
                  </Link>
                    <div className="w-60 text-neutral-300  text-xs hidden sm:block md:text-sm"> Deserunt consectetur officia labore do aliqua in aliquip magna eu ipsum ipsum laborum </div>
                    <div className="  flex-col justify-start items-start  inline-flex  sm:hidden">
                      
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-neutral-300 hover:underline text-base font-normal">Home</div>
                        <div className="text-neutral-300 hover:underline text-base font-normal">About</div>
                        <div className="text-neutral-300 hover:underline text-base font-normal">Customer Support</div>
                        <div className="text-neutral-300 hover:underline text-base font-normal">Contact</div>
                        <div className="text-neutral-300 hover:underline text-base font-normal">Privacy Policy</div>
                      </div>
                    </div>
                </div>

                {/* box1: 2 cols*/}
                <div className="hidden sm:flex sm:w-4/5 w-full px-4 md:px-8   flex flex-row justify-center gap-20 lg: gap-32   my-4  lg:pb-8 ">
                    {/* departments */}
                    <div className="  flex-col  items-start inline-flex  text-white hidden lg:block">
                      <div className="text-neutral-200  text-base font-medium mb-3">Department</div>
                      <div className="flex-col justify-start items-start gap-1.5 flex text-white">
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Furniture</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Fashion</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Education Product</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Clothing</div>
                        
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Gadgets</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Books</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Travel</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Fitness</div>
                        <div className="text-neutral-300 hover:underline cursor-pointer text-xs font-normal">Sneakers</div>
                      </div>
                    </div>
                    {/* About us */}
                    <div className=" flex-col  items-start  inline-flex hidden sm:block">
                      <div className="text-neutral-300  text-base font-medium mb-3">About Us</div>
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-neutral-300 hover:underline text-xs font-normal">About ShopiCart</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Careers</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Team</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">News & Blogs</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Help</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Affiliates & Associates</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Advertisements</div>
                      </div>
                    </div>

                    {/* Help */}
                    <div className=" flex-col  items-start inline-flex hidden md:block ">
                      <div className="text-neutral-300  text-base font-medium mb-3">Help</div>
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-neutral-300 hover:underline text-xs font-normal">ShopiCart Help</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Contact Us</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Customer Support</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Email Us</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Security & Frauds</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Feedback</div>
                      </div>
                    </div>

                    {/* services */}
                    <div className=" flex-col  items-start  inline-flex  hidden xl:block">
                      <div className="text-neutral-300  text-base font-medium mb-3 hidden md:block">Services</div>
                      <div className="flex-col justify-start items-start gap-1.5 flex">
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Home</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">About</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Customer Support</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Contact</div>
                        <div className="text-neutral-300 hover:underline text-xs font-normal">Privacy Policy</div>
                      </div>
                    </div>

                </div>

            </div>
            {/* Horizontal line */}
            <div className=" h-[0.1px]  bg-neutral-600"></div>

            {/* Policy footer plus others */}
            <div className="w-full py-5 justify-between items-start  inline-flex ">
              {/* with icons; 1st box */}
              <div className="hidden lg:flex justify-between space-x-6 flex">
                <div className="h-3.5 justify-start items-center gap-1 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-rose-500">
                      <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
                      <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                    </svg>
                    <div className="text-neutral-300 text-xs font-normal">Become Seller</div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-rose-500">
                    <path fill-rule="evenodd" d="M14 6a2.5 2.5 0 00-4-3 2.5 2.5 0 00-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14zm-1-1.5a1 1 0 01-1 1h-1v-1a1 1 0 112 0zm-6 0a1 1 0 001 1h1v-1a1 1 0 00-2 0z" clip-rule="evenodd" />
                    <path d="M9.25 10.5H3v4.75A2.75 2.75 0 005.75 18h3.5v-7.5zM10.75 18v-7.5H17v4.75A2.75 2.75 0 0114.25 18h-3.5z" />
                  </svg>
                  <div className="text-neutral-300 text-xs font-normal">Gift Card</div>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-rose-500">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>

                  <div className="text-neutral-300 text-xs font-normal">Help Center</div>
                </div>
              </div>

              {/* middle box */}
              <div className=" justify-between flex flex-row items-center space-x-8 hidden sm:flex">
                <div className=" text-neutral-300 text-xs font-normal text-center">Term Of Use</div>
                <div className=" text-neutral-300 text-xs font-normal text-center">Privacy Policy</div>
              </div>

              {/* last box */}
              <div className="w-full sm:w-auto text-center text-neutral-300 text-base sm:text-xs font-normal sm:text-right ">All Rights Reserved by ShopiCart | 2023</div>
            </div>

        </div>
    )
}