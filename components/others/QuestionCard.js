import Image from 'next/image'

export default function QuestionCard() {
    return (
        <div className="w-72 h-72 bg-pink-200 rounded-lg flex-col justify-start items-start gap-6 inline-flex hover:shadow-lg  hover:scale-[1.01] ease-in duration-200   hover:cursor-pointer">
          <div className="self-stretch h-24 px-4 pt-4 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-neutral-900 text-2xl font-semibold">Online Payment Queries</div>
            <div className="self-stretch text-neutral-950 text-sm font-medium">See questions that matter </div>
          </div>
          <Image alt='questioncardImg' className="self-stretch h-44 rounded-bl-lg rounded-br-lg" src="/questionImg.png" width={300} height={170} />
        </div>
    )
}