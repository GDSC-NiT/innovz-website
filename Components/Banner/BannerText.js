import React from 'react'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500']
})

const BannerText = () => {
    return (
        <div className={`${roboto.className} mb-20` }>
            <p className='text-sm text-white'>A <span className='text-lime-300 '>DIGITAL</span> AND <span className='text-lime-300 '>REALITY</span>  AR READY TO MERGE HACKATHON</p>
            <br />
            <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quasi, enim provident tenetur dolores at molestias
                illum a asperiores aspernatur laboriosam suscipit qui quis,
                hic velit laborum culpa explicabo? Quam, officiis?</p>
        </div>
    )
}

export default BannerText