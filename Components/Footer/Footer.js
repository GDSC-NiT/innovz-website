import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black pt-10 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                {/* Company */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Company
                    </div>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#about-us">
                        About Us
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#why-choose-us">
                        Why Choose Us
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#pricing">
                        Pricing
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#testimonial">
                        Testimonial
                    </a>
                </div>

                {/* Resources */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Resources
                    </div>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#privacy">
                        Privacy
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#terms-and-conditions">
                        Terms and Conditions
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#blog">
                        Blog
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#contact-us">
                        Contact Us
                    </a>
                </div>

                {/* Product */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Product
                    </div>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#project-management">
                        Project Management
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#time-tracker">
                        Time Tracker
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#time-scheduled">
                        Time Scheduled
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#lead-generate">
                        Lead Generate
                    </a>
                    <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#remote-collaboration">
                        Remote Collaboration
                    </a>
                </div>

                {/* Social Icons */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Follow Us
                    </div>
                    <div className="flex">
                        <a className="my-3 mr-4 block text-gray-300:text-gray-100 text-lg duration-700 animate-pulse" href="https://twitter.com">
                            <FaTwitter className="text-white" />
                        </a>
                        <a className="my-3 mr-4 block text-gray-300 hover:text-gray-100 text-lg duration-700 animate-pulse" href="https://instagram.com">
                            <FaInstagram className="text-white" />
                        </a>
                        <a className="my-3 mr-4 block text-gray-300 hover:text-gray-100 text-lg duration-700 animate-pulse" href="https://linkedin.com">
                            <FaLinkedin className="text-white" />
                        </a>
                        <a className="my-3 mr-4 block text-gray-300 hover:text-gray-100 text-lg duration-700 animate-pulse" href="https://discord.com">
                            <FaDiscord className="text-white" />
                        </a>
                        <a className="my-3 mr-4 block text-gray-300 hover:text-gray-100 text-lg duration-700 animate-pulse" href="https://youtube.com">
                            <FaYoutube className="text-white" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        © 2023 NextTail —
                        <a href="#" className="text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">@NextTail</a>
                    </div>
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="https://facebook.com" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://youtube.com" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="https://linkedin.com" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://instagram.com" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
