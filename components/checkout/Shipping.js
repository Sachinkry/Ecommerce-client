

export default function Shipping() {
    return (
      <div className="space-y-8 text-sm text-neutral-300">
        <div className="p-4  ring-1 ring-neutral-600 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex sm:flex-row flex-col">
                <div className="w-24 text-neutral-400" >Contact:</div> 
                <div className="">heysach@gmail.com</div>
            </div>
            <button className="underline text-rose-500 text-xs">Change</button>
          </div>
          {/* horizontal line */}
          <div className="border-b border-neutral-700 my-4"></div>
          <div className="flex justify-between items-center">
            <div className="flex sm:flex-row flex-col">
                <div className="w-24 text-neutral-400">Ship to: </div> 
                <div className="">Yadav tola, Sari, katih AL 35405, United States</div>
            </div>
            <button className="underline text-rose-500 text-xs">Change</button>
          </div>
        </div>
  
        <h2 className="text-lg font-semibold">Shipping method</h2>
        <div className="  ring-1 ring-neutral-600 rounded-lg flex justify-between items-center flex-col ">
          <div className="flex flex-row w-full ring-1 ring-neutral-600 rounded-t-lg px-5 py-4 justify-between">
            <div className="flex flex-row gap-5">
                <input className="ring-0 focus:ring-0 select:ring-0" type="radio" name="shipping" id="economy" />
                <div className="flex flex-col">
                    <label htmlFor="economy">Economy</label>
                    <div className="text-xs text-neutral-500">5 to 8 business days</div>
                </div>
            </div>
            <div className="flex items-center ">$4.90</div>
          </div>
            <div className="flex flex-row w-full ring-1 ring-neutral-600 rounded-b-lg px-5 py-4 justify-between">
             <div className="flex flex-row gap-5">
                <input className="ring-0 focus:ring-0" type="radio" name="shipping" id="economy" />
                <div className="flex flex-col">
                    <label htmlFor="economy">Standard</label>
                    <div className="text-xs text-neutral-500">3 to 4 business days</div>
                </div>
             </div>
             <div className="flex items-center ">$7.70</div>
            </div>
  
      </div>
        <div className="flex justify-between">
          <button className="underline">Return to Information</button>
          <button className="p-2 bg-rose-900 rounded-lg text-white">Continue to Payment</button>
        </div>
      </div>
    );
  }
  