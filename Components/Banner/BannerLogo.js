import React from 'react'
import Image from 'next/image';


const BannerLogo = () => {
    return (
        <Image
            className='relative mt-8 mb-8'
            src="/Group630.png"
            alt="biglogo"
            width={400}
            height={400}
        />
    )
}

export default BannerLogo