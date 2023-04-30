import React from 'react'
import Image from 'next/image'
const BannerImg = () => {
    return (
        <div className='p4'>
            <Image
                className='relative pr-2'
                src="/Group632.png"
                alt="biglogo"
                width={650}
                height={650}
            />

        </div>
    )
}

export default BannerImg