import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext';

export default function CartProductCard({product, calculateTotalPrice}) {
    // const productInfo = product.product;
    const [quantity, setQuantity] = useState(1)
    const [priceInCart, setPriceInCart] = useState(0)
    const { updateCart } = useCart();
    

    const removeProductFromCart = () => {
        // remove the product from myCart
        console.log('Remove from cart clicked');
        const myCart = localStorage.getItem('myCart');
        let myCartArray = JSON.parse(myCart);
        if (!myCartArray) {
            myCartArray = [];
        }
        const newCartArray = myCartArray.filter((prod) => prod._id !== product._id);
        localStorage.setItem('myCart', JSON.stringify(newCartArray));
        updateCart(newCartArray); // Update cart using context
        calculateTotalPrice();
    }



    const increaseQuantity = () => {
        // update the quantity & price in myCart
        const myCart = localStorage.getItem('myCart');
        let myCartArray = JSON.parse(myCart);
        if (!myCartArray) {
            myCartArray = [];
        }
        const newCartArray = myCartArray.map((prod) => {
            if (prod._id === product._id) {
              const updatedQuantity = prod.quantity + 1;
              const updatedPriceInCart = prod.price * updatedQuantity;
              setQuantity(updatedQuantity); // Update the quantity state
              setPriceInCart(updatedPriceInCart); // Update the priceInCart state
              return { ...prod, quantity: updatedQuantity, priceInCart: updatedPriceInCart };
            }
            return prod;
          });
        localStorage.setItem('myCart', JSON.stringify(newCartArray));
        updateCart(newCartArray); // Update cart using context
        calculateTotalPrice();

    }

  const decreaseQuantity = () => {
    if (quantity > 1) {
        // update the quantity & price in myCart
        const myCart = localStorage.getItem('myCart');  
        let myCartArray = JSON.parse(myCart);
        if (!myCartArray) {
            myCartArray = [];
        }
        const newCartArray = myCartArray.map((prod) => {
            if (prod._id === product._id) {
              const updatedQuantity = prod.quantity - 1;
              const updatedPriceInCart = prod.price * updatedQuantity;
              setQuantity(updatedQuantity); // Update the quantity state
              setPriceInCart(updatedPriceInCart); // Update the priceInCart state
              return { ...prod, quantity: updatedQuantity, priceInCart: updatedPriceInCart };
            }
            return prod;
          });
        localStorage.setItem('myCart', JSON.stringify(newCartArray));
        updateCart(newCartArray); // Update cart using context
        calculateTotalPrice();
    }
  }

  useEffect(() => {
    setQuantity(product.quantity);
    setPriceInCart(product.priceInCart);
    
    }, []);

    return (
        <div className="flex flex-col gap-3 ">
            <div className="flex flex-row  justify-between w-full px-1">
                <div className="flex items-center relative">
                    <img src={product.imageUrl || 'https://fakeimg.pl/'} className="aspect-square object-contain w-12 ring-1 ring-neutral-600  rounded-md " />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 absolute top-0 right-[-4px] bg-neutral-800 rounded-xl hover:cursor-pointer" onClick={() => removeProductFromCart()} >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>


                </div>
                <div className="name gap-2 flex flex-col mt-1">
                    <div className="text-sm w-40  sm:w-32 font-semibold text-neutral-200 ">{product.name || 'Product Name'}</div>
                    <div className="text-xs text-neutral-600">
                        <span className="text-xs">1.5 </span> /
                        <span className="text-xs"> B</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm  text-neutral-200 uppercase text-end mt-1">${priceInCart || '00.0'} usd</div>
                    <div className="flex flex-row gap-3 px-2 py-1 bg-neutral-800 rounded-3xl ring-1 ring-neutral-600 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-neutral-500 hover:cursor-pointer" onClick={()=> decreaseQuantity()}>
                          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                        </svg>
                        <span className="text-sm text-neutral-400">{quantity}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-neutral-500 hover:cursor-pointer" onClick={()=>  increaseQuantity()}>
                          <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* horizontal line */}
            <div className="border-b border-neutral-700"></div>
        </div>
    )
}