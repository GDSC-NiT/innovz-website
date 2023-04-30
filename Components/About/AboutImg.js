import React from 'react'
import Image from 'next/image';

const AboutImg = () => {
  return (
    <div className='relative'>
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
      {/* <div className=" absolute -inset-1 bg-yellow-200 blur-3xl h-60 w-60 mt-8 ml-10"></div> */}
      <div className='glow'></div>
      <Image
        className='relative mb-6'
        src="/About.png"
        alt="biglogo"
        width={500}
        height={500}
      />

    </div>
  )
}

export default AboutImg