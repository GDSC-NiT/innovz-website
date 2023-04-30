import React from 'react'
import Image from 'next/image';

const BannerButtons = () => {
  return (
    <div className="grid grid-cols-2 mt-4">
              <div>
                <Image
                  className='relative mt-8'
                  src="/devfolioBtn.svg"
                  alt="explore"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  className='relative mt-8'
                  src="/exploreBtn.svg"
                  alt="explore"
                  height={200}
                  width={200}
                />
              </div>
            </div>
  )
}

export default BannerButtons