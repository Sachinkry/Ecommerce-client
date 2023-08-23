import { useRouter } from 'next/router'

export default function CartBilling() {
    const router = useRouter();

    const gotoCheckout = () => {
        router.push('/checkout/1')
    }

    return (
        <div className="flex flex-col gap-1 w-full ">
            <div className="flex flex-row justify-between items-center px-1">
                <div className="text-sm text-neutral-500">Taxes</div>
                <div className="text-base text-neutral-300 uppercase">$0.00 usd</div>
            </div>
            <div className="border-b border-neutral-700"></div>

            <div className="flex flex-row justify-between items-center px-1">
                <div className="text-sm text-neutral-500">Shipping</div>
                <div className="text-sm text-neutral-500 ">Calculated at checkout</div>
            </div>
            <div className="border-b border-neutral-700"></div>
            <div className="flex flex-row justify-between items-center px-1">
                <div className="text-sm text-neutral-500">Total</div>
                <div className="text-base text-neutral-300 uppercase">$300.00 usd</div>
            </div>
            <div className="border-b border-neutral-700"></div>
            {/* checkout button */}
            <div className='py-2 text-center text-sm py-2 bg-rose-800 rounded-lg mx-1 mb-1 mt-4 text-neutral-300 hover:bg-neutral-900 hover:text-rose-600 hover:cursor-pointer ring-1  ring-rose-600' onClick={() => gotoCheckout()} >
                Proceed To Checkout
            </div>
        </div>
    )
}