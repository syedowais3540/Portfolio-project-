'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div>
            <section className="text-gray-200 body-font bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-fixed bg-cover bg-opacity-90">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif">
                            I am
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-300 font-serif text-xl">
                            I am Syed Owais, a recent intermediate graduate currently engaged
                            with the IT initiative at Governor House. I have 3 years of experience
                            as a graphic designer, with proficiency in Adobe Photoshop, Adobe Illustrator.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#Contact">
                                <button className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-full text-lg shadow-md">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                    <motion.div
                        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            className="object-cover object-center rounded-full mx-auto w-[18rem] h-[18rem] shadow-xl border-4 border-gray-200 ring-4 ring-blue-500 ring-offset-4"
                            alt="hero"
                            width={500}
                            height={500}
                            src={require("../../public/owais pic.png")}
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
