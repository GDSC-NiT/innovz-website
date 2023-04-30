import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500']
})
const roboto2 = Roboto({
    subsets: ['latin'],
    weight: ['300']
})


const AboutText = () => {
    return (
        <div className={roboto.className} >
            <div className='text-white'>
                <h1 className='text-4xl mr-4'>About</h1>
                <Image
                    className='mb-6'
                    src="/aboutUnderline.svg"
                    alt="biglogo"
                    width={250}
                    height={250}
                />
                <div className={`${roboto2.className} text-base`}>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi, enim provident tenetur dolores at molestias
                        illum a asperiores aspernatur laboriosam suscipit qui quis,
                        hic velit laborum culpa explicabo? Quam, officiis?</p>
                    <br />
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi, enim provident tenetur dolores at molestias
                        illum a asperiores aspernatur laboriosam suscipit qui quis,
                        hic velit laborum culpa explicabo? Quam, officiis?</p>
                </div>

            </div>
        </div>
    )
}

export default AboutText