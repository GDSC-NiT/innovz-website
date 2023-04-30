import React from 'react'
import BannerLogo from './BannerLogo';
import BannerText from './BannerText';
import BannerButtons from './BannerButtons';
import BannerImg from './BannerImg';



const Banner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
          <div className='p-4'>

            {/* Banner Logo InnovZ */}
            <BannerLogo/>
            
            {/* Banner text */}
            <BannerText/>

            {/* banner buttons */}
            <BannerButtons/>

          </div>
          <div>

            {/* Banner Image */}
            <BannerImg/>

          </div>
        </div>
      </div>
  )
}

export default Banner;