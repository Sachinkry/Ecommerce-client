import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BuyMeCoffeeBtn() {
    const [showWidget, setShowWidget] = useState(false);
  
    const toggleWidget = () => {
      setShowWidget(!showWidget);
    };

  return (
    <div className="fixed bottom-4 right-4 z-50">
        
        {showWidget && (
            <iframe src="https://www.buymeacoffee.com/widget/page/heysachin" className="w-full sm:w-[350px] h-[400px]  rounded-md  mb-1 " ></iframe>
        )}
        <div className="justify-end flex hover:cursor-pointer ">
            <Image src="/bmc-logo.svg" onClick={toggleWidget} className="h-12 w-12 sm:h-16 sm:w-16 bg-red-400 text-white p-2 rounded-full "
            width={20}
            height={20}
            />
        </div>
        

    </div>
  );
}
