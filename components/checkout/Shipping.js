import { useState } from "react";
import { useUserInfo } from "@/contexts/UserContext";

export default function Shipping({ selectedMethod, setSelectedMethod, setTab}) {
  const { user, updateUserData } = useUserInfo();
  const address = user.shippingInfo.address;
  const country = user.shippingInfo.country;
  const city = user.shippingInfo.city;
  const state = user.shippingInfo.state;
  const zip = user.shippingInfo.zip;
  
  const addressString = `${address}, ${city} ${zip}, ${state}, ${country}`;



  return (
    <div className="space-y-8 text-sm text-neutral-300">
      <div className="p-4 ring-1 ring-neutral-600 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-24 flex  text-neutral-400">Contact:</div>
            <div>{user.email}</div>
          </div>
          {/* <button className="underline text-rose-500 text-xs">Change</button> */}
        </div>
        <div className="border-b border-neutral-700 my-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-24 flex text-neutral-400">ShipAddr:</div>
            <div>{addressString}</div>
          </div>
          {/* <button className="underline text-rose-500 text-xs">Change</button> */}
        </div>
      </div>

      <h2 className="text-lg font-semibold">Shipping method</h2>
      <div className="ring-1 ring-neutral-600 rounded-lg flex flex-col justify-between items-center ">
        <div className={`cursor-pointer flex flex-row w-full   rounded-t-lg px-5 py-4 justify-between ${selectedMethod ==='Economy' ? 'ring-1 ring-rose-600 ':''}`} onClick={() => setSelectedMethod('Economy')}>
          <div className="flex flex-row gap-3 items-center">
            <div className={`ring-2 ${selectedMethod === 'Economy' ? 'ring-rose-600 ' : 'ring-neutral-600'} rounded-full w-4 h-4 items-center flex justify-center`}> 
            </div>
            <div className="flex flex-col">
              <span>Economy</span>
              <span className="text-xs text-neutral-500">5 to 8 business days</span>
            </div>
          </div>
          <div className="flex items-center">$4.90</div>
        </div>
        <div className={`cursor-pointer  flex flex-row w-full  rounded-b-lg px-5 py-4 justify-between ${selectedMethod ==='Standard' ? 'ring-1 ring-rose-600':''}`} onClick={() => setSelectedMethod('Standard')}>
          <div className="flex flex-row gap-3 items-center">
            <div className={`ring-2 ${selectedMethod === 'Standard' ? 'ring-rose-600' : 'ring-neutral-600'} rounded-full w-4 h-4`}></div>
            <div className="flex flex-col">
              <span>Standard</span>
              <span className="text-xs text-neutral-500">3 to 4 business days</span>
            </div>
          </div>
          <div className="flex items-center">$7.70</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className=" text-xs text-rose-600 hover:text-rose-600/80 flex flex-row items-center gap-1 hover:cursor-pointer" onClick={() => setTab("Information")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span>Return to Information</span>
        </div>
        <button className={`ring-1 ring-rose-600 px-5 p-4 bg-rose-900 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-rose-600 text-xs ${selectedMethod ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={() => setTab('Payment')} disabled={!selectedMethod}>Continue to Payment</button>
      </div>
    </div>
  );
}


  