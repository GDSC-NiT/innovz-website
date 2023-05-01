import React from 'react'
import Image from 'next/image'

const CountItems = ({title, limit}) => {
  return (
    <div className='flex items-center justify-center flex-col   mx-2'>
            <h1 className='text-white text-2xl mb-4'>{title}</h1>

                <div className='relative'>
                    <h1 className='absolute text-white text-5xl top-16 left-14 font-bold' >
                        {limit}+
                    </h1>
                    <Image
                        src='/roundborder.png'
                        alt='bg'
                        width={200}
                        height={200}
                    />
                </div>

        </div>
  )
}

export default CountItems