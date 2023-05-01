import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sponsors = [
    {
        name: 'Polygon',
        logo: 'https://polygon.technology/assets/images/polygon-logo.png',
        website: 'https://polygon.technology/',
    },
    {
        name: 'Filecoin',
        logo: 'https://filecoin.io/images/filecoin-symbol-color.png',
        website: 'https://filecoin.io/',
    },
    {
        name: 'Replit',
        logo: 'https://replit.com/public/images/logo512.png',
        website: 'https://replit.com/',
    },
    {
        name: 'Solana',
        logo: 'https://solana.com/static/811f164d8bd7d7d5d7d7d5d7d7d5d7d/9d5d9/solana-logo-gradient.svg',
        website: 'https://solana.com/',
    },
];

const Sponsor = ({ name, logo, website }) => {
    const colors = [
        'text-red-500',
        'text-yellow-500',
        'text-green-500',
        'text-blue-500',
        'text-indigo-500',
        'text-purple-500',
        'text-pink-500',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <a href={website} target="_blank" rel="noopener noreferrer">
            <div
                className={`relative rounded-lg overflow-hidden transform hover:scale-110 transition duration-500 ease-in-out`}
                style={{ height: '300px', boxShadow: `0 0 20px ${randomColor}` }}
            >
                <img
                    src={logo}
                    alt={name}
                    className="mx-auto w-48 h-48 object-contain transition duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className={`text-center text-white text-2xl font-NexaBlack tracking-wider uppercase`}>
                        <span className="text-pink-500"></span><span className="text-white"></span>{name}
                    </h2>
                </div>
            </div>
        </a>
    );
};

const Sponsors = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-4xl mx-auto">
            <style jsx>
                {`
                    .glow{
                        position: absolute;
                        width: 522px;
                        height: 596px;
                        right: -10px;

                        background: rgba(217, 246, 38, 0.16);
                        filter: blur(200px);
                    }
                    @media only screen and (max-width: 541px) {
                        .glow {
                          background: rgba(221, 255, 0, 0.23);
                      }
                `}
            </style>
            <div className="px-4 py-2 flex justify-start items-center">
                <h3 className="text-gray-800 text-5xl font-NexaBlack tracking-wider uppercase animate-pulse mr-4">
                    <span className="text-pink-500">S</span><span className="text-white">P</span>onsors
                </h3>
            </div>
            <div className="px-4 py-2 relative" style={{ height: '400px' }}>
                <div className='glow'></div>
                <Slider {...settings}>
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name}>
                            <Sponsor {...sponsor} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Sponsors;
