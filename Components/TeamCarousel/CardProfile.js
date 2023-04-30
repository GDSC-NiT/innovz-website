import React from 'react'
import Image from "next/image";
const CardProfile = () => {
    return (
        <div className="relative mb-12 ">
            <Image
                className="absolute pl-3"
                src="/roundborder.png"
                alt="logo"
                width={160}
                height={160}
            />
            <Image
                className=' rounded-full pl-3'
                src="/profile.png"
                alt="logo"
                width={150}
                height={150}
            />
        </div>
    )
}

export default CardProfile