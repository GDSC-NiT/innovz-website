import React from 'react'

import AboutImg from './AboutImg';
import AboutText from './AboutText';


const About = () => {
    return (
        <div className="flex items-center justify-center mx-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8">
                
                {/* About Image */}
                <AboutImg/>

                {/* About Text */}
                <AboutText/>
            </div>
        </div>
    )
}

export default About