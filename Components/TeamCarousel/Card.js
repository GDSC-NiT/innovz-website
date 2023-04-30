import Image from "next/image"
import { Roboto } from 'next/font/google';
import CardSocials from "./CardSocials";
import CardProfile from "./CardProfile";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500']
})

export default function Card() {
  return (
    <div>
      <style jsx>
        {`
        .pc{
          background-color: #1b1b1c
        }
      `}
      </style>
      <div className="pc w-70 max-w-sm rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2 pt-4 px-4">
        <div className="flex flex-col items-center pb-10">

          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-2">
              <Image
                src="/side.png"
                alt="logo"
                width={20}
                height={10}
              />
            </div>

            <div className={`col-start-2 col-span-4 px-2 ${roboto.className}`}>
              {/* profile picture on card */}
              <CardProfile/>

              <h5 className="mb-1 text-xl font-medium text-white dark:text-white">team Member 1</h5>

              <span className="text-sm text-white dark:text-gray-400 px-5">@google GDSC lead | full stack developer</span></div>

            <div>
              <Image
                src="/side.png"
                alt="logo"
                width={20}
                height={10}
              />
            </div>

          </div>



          {/*  */}
          <CardSocials/>

        </div>
      </div>

    </div>
  )
}
