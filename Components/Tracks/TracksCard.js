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
            <div className="relative">
                <style jsx>
                    {`
          .glow{
            position: absolute;
            width: 822px;
            height: 534px;
            left: -147px;
            top: 10px;

            background: rgba(221, 255, 0, 0.23);
            filter: blur(200px);
          }
          @media only screen and (max-width: 541px) {
            .glow {
              width: 250px;
              height: 234px;
              top: 0;
              left: -100px;
              background: rgba(228, 247, 54, 0.90);
          }
        }
        `}
                </style>
                <div className='glow'></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 relative">

                    {arr.map((item) => (
                        <div key={item.name} className='flex items-center justify-center mt-10'>
                            <Card logo={item.logo} name={item.name} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default TracksCard;