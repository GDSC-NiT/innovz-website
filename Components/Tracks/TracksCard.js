import React from 'react'
import Card from './Card';
import Image from 'next/image';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500']
})
const arr = [
    {
        name: 'FINTECH',
        logo: '/fintech.svg',
    },
    {
        name: 'EDUCATION',
        logo: '/education.svg',
    },
    {
        name: 'HEALTH CARE',
        logo: '/healthcare.svg',
    },
    {
        name: 'OPEN-INNOV',
        logo: '/open.svg',
    },
];

const TracksCard = () => {
    return (
        <div className='m-8'>
            <h1 className={`text-white text-4xl pl-16 ${roboto.className} `}>Tracks</h1>
            <Image
                className='mb-14'
                src="/aboutUnderline.svg"
                alt="biglogo"
                width={250}
                height={250}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                {arr.map((item) => (
                    <div key={item.name} className='flex items-center justify-center mt-10'>
                        <Card logo={item.logo} name={item.name} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TracksCard;