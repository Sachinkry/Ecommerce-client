import Image from "next/image";

export default function SaveDollarCard() {
    return (
        <div className="w-48 h-64 pt-2 bg-orange-100 rounded-lg flex-col justify-center items-start gap-3 inline-flex">
          <div className="self-stretch h-20 px-6 flex-col justify-center items-start gap-1 flex mt-1.5">
            <div className="flex-col justify-center items-start flex ">
              <div className="text-stone-900 text-lg font-bold leading-3">Save </div>
              <div className="text-stone-500 text-3xl font-bold">$100</div>
            </div>
            <div className="self-stretch text-stone-800 text-xs font-normal ">On Our Furnitures and Furnishing Range</div>
          </div>
          <Image className="self-stretch grow shrink basis-0 rounded-bl-lg rounded-br-lg" src="/SaveDollarImg.png" width={200} height={164} quality={100}/>
        </div>
    )
}