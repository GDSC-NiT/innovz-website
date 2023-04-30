import React from 'react'
import Image from 'next/image';

const NavLogo = () => {
    return (
        <a href="#" className="flex items-center ">
            <Image
                className='relative'
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
            />
        </a>
    )
}

export default NavLogo