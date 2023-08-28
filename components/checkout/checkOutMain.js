

export default function CheckOutMain() {
    return (
        <div className="lg:p-4 rounded-lg lg:w-1/2 lg:bg-neutral-900 h-full space-y-8">
          {/* Email Address */}
          <div className="flex flex-col space-y-4">
            <input type="email" placeholder="Email Address" className="w-full p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
            <label className="flex items-center text-xs text-neutral-500 hover:cursor-pointer">
              <input type="checkbox" className="mr-2 " />
              Receive email updates for latest products or news
            </label>
          </div>

          {/* Shipping Address Form */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <div className="flex flex-col space-y-4">
              <input type="text" placeholder="Country" className="p-2 rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <input type="text" placeholder="First Name" className="p-2  rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <input type="text" placeholder="Last Name" className="p-2  rounded-lg bg-neutral-800 ring-1 ring-neutral-600" />
              <div className="relative ">
                <input type="text" placeholder="Address" className="p-2  rounded-lg bg-neutral-800 pl-10 ring-1 ring-neutral-600" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21H3a1 1 0 01-1-1V3a1 1 0 011-1h7l1 1h9a1 1 0 011 1v16a1 1 0 01-1 1zM11 12h10m-10-4h10m-7 8h7" />
                </svg>
              </div>
              <input type="text" placeholder="City" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <input type="text" placeholder="State" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <input type="text" placeholder="Zip Code" className="p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" />
              <label className="flex items-center text-neutral-500 text-xs hover:cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Save this information
              </label>
            </div>
          </div>

          {/* Continue to Shipping Button */}
          <button className="w-full p-4 ring-1 ring-rose-600 bg-rose-900 hover:ring-2 hover:text-rose-600 hover:bg-neutral-900 text-white rounded-lg">Continue to Shipping</button>
        </div>
    )
}