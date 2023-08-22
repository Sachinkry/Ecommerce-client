import Image from 'next/image'

export default function TopPicksCard() {
    return (
        <div className="flex flex-col p-3 rounded-md  space-y-1 hover:shadow-md  hover:scale-[1.03] ease-out duration-200   hover:cursor-pointer">
          <div className="text-sm font-medium">Home & Kitchen Under $20</div>
          <Image src='/Kitchen.png' alt="home kitchen" width={220} height={200} className="" />
        </div>
    )
}