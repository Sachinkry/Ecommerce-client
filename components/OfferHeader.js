export default function OfferHeader() {
    return (
        <header>
            <div className="w-full h-[35px] px-16 py-2 bg-rose-500 justify-between items-center gap-[38px] inline-flex text-">
                <div className="justify-center items-center gap-2 flex flex-row ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-white -rotate-90">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div className="text-center text-white text-xs font-normal hidden md:block">+91979816664</div>
                </div>
                <div className="justify-center items-center gap-[18px] flex">
                    <div className="text-center text-white text-xs font-normal">Get 50% Off on Selected Items</div>
                    <div className="w-[17.46px] h-[0px]  -rotate-90 border border-white"></div>
                    <div className="text-center text-white text-xs font-normal">Shop Now</div>
                </div>
                <div className="justify-start items-start gap-[32px] flex">
                    <div className="justify-start items-center gap-1.1 flex hidden md:block">
                    <select class=" h-[19px] text-center bg-rose-500 text-white text-xs font-normal  border-none ease-out duration-200 hover:cursor-pointer">
                      <option value="english" className="border border-rose-400">English</option>
                      <option value="japanese">Japanese</option>
                    </select>
                    
                    </div>
                    <div className="justify-center items-center gap-1.1 flex hidden md:block">
                    <select class=" h-[19px] text-center bg-rose-500 text-white text-xs font-normal  border-none ease-out duration-200 hover:cursor-pointer">
                      <option value="english" className="border border-rose-400">Location</option>
                      <option value="english" className="border border-rose-400">India</option>
                      <option value="japanese">Japan</option>
                      <option value="japanese">USA</option>
                    </select>
                     
                    </div>
                </div>
            </div>
        </header>
    )
}