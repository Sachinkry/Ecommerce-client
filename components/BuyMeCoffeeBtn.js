import { useState, useEffect } from 'react';

export default function BuyMeCoffeeBtn() {
    const [showWidget, setShowWidget] = useState(false);

    // useEffect(() => {
    //   if (showWidget) {
    //     const script = document.createElement('script');
    //     script.setAttribute('data-name', 'BMC-Widget');
    //     script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    //     script.setAttribute('data-id', 'heysachin');
    //     script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    //     script.setAttribute('data-message', '');
    //     script.setAttribute('data-color', '#FF5F5F');
    //     script.setAttribute('data-position', 'Right');
    //     script.setAttribute('data-x_margin', '18');
    //     script.setAttribute('data-y_margin', '18');
    //     script.async = true;
    //     document.getElementById('bmc-wid').appendChild(script);
    //   }
    // }, [showWidget]);
  
    const toggleWidget = () => {
      setShowWidget(!showWidget);
    };

  return (
    <div className="fixed bottom-4 right-4 z-50">
        
        {showWidget && (
            <iframe src="https://www.buymeacoffee.com/widget/page/heysachin" className='w-full sm:w-[350px] h-[400px]  rounded-md  mb-1 ' ></iframe>
        )}
        <div className=' justify-end flex hover:cursor-pointer '>
            <img src='/bmc-logo.svg' onClick={toggleWidget} className="h-12 w-12 sm:h-16 sm:w-16 bg-red-400 text-white p-2 rounded-full "
            />
        </div>
        

    </div>
  );
}
