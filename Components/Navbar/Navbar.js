import React from 'react'
import {Black_Ops_One} from 'next/font/google';
import NavLogo from './NavLogo';

// font style
const blackopsone = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  })


const Navbar = () => {
    return (
        <>
            <nav className={`bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${blackopsone.className}`}>
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
                    {/* NavBar logo */}
                    <NavLogo/>

                    {/* collapse button */}
                    <button data-collapse-toggle="navbar-dropdown" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul
                            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-black">
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-lime-300 rounded md:bg-transparent md:text-lime-300 md:p-0 md:dark:text-lime-300 dark:bg-lime-300 md:dark:bg-transparent"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:white md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Sponsors</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:white md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">About
                                    us</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:white md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:white md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;