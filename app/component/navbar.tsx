import Link from 'next/link';
import React from 'react';
import { IoMdDownload } from 'react-icons/io';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font bg-gradient-to- shadow-lg z-50 sticky top-0 bg-gray-700">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
                
                {/* Logo Section */}
                <Link href="/" className="flex title-font font-medium items-center text- mb-4 md:mb-0">
                    <span className="ml-3 text-2xl font-bold font-serif text-white">Syed Owais</span>
                </Link>

                {/* Centered Navigation Links with Blue Background */}
                <nav className="flex-grow flex items-center justify-center space-x-4">
                    <Link href="/" className="hover:bg-gray-800 text-white px-4 py-1 rounded-full transition duration-300">
                        Home
                    </Link>
                    <Link href={"#about"} className="hover:bg-gray-800 text-white px-4 py-1 rounded-full transition duration-300">
                        About
                    </Link>
                    <Link href={"#skill"} className="hover:bg-gray-800  text-white px-4 py-1 rounded-full transition duration-300">
                        Skills
                    </Link>
                    <Link href={"#project"} className="hover:bg-gray-800 text-white px-4 py-1 rounded-full transition duration-300">
                        Project
                    </Link>
                    <Link href={"#Contact"} className="hover:bg-gray-800 text-white px-4 py-1 rounded-full transition duration-300">
                        Contact
                    </Link>
                </nav>

                {/* Call-to-Action Button */}
                <Link href='/syed owais cv.jpeg'>
                    <button className="inline-flex items-center hover:bg-gray-800 text-white border-0 py-2 px-5 focus:outline-none  rounded-full text-base mt-4 md:mt-0 shadow-md transition duration-300">
                        Download CV 
                        <IoMdDownload className='text-2xl ml-2'/>
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
