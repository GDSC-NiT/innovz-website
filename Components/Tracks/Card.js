import React from 'react'
import Image from 'next/image'

const Card = ({name,logo}) => {
    return (
        <div className="w-96 h-60 bg-gray-900 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="grid grid-cols-3">
                <div>
                    <Image
                        className='mt-20'
                        src="/ellipse-38.svg"
                        alt='sd'
                        height={40}
                        width={40}
                    />
                </div>
                <div>
                    <Image
                        className='mt-4'
                        src={logo}
                        alt='sd'
                        height={120}
                        width={120}
                    />
                    <h1 className='text-white text-2xl mt-4'>{name}</h1>
                </div>

                <div className='ml-2'>
                    <Image
                        className='mt-4'
                        src="/ellipse-36.svg"
                        alt='sd'
                        height={120}
                        width={120}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card