import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div id='about'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image
                        className="w-80 h-80 mb-10 object-cover object-center rounded-full shadow-inner"
                        alt="hero"
                        src={require('../../public/owais pic.png')}
                        width={340} 
                        height={340} 
                    />

                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif hover:underline">
                            About Me 
                        </h1>
                        <p className="mb-7 text-x leading-relaxed hover:text-blue-800">
                            I am Syed Owais, a recent intermediate graduate currently engaged with
                            the IT initiative at Governor House. I have developed a solid foundation in 
                            TypeScript and am keen to enhance my programming skills by learning Python 
                            and other programming languages. Additionally, I have 3 years of experience
                            as a graphic designer, with proficiency in Adobe Photoshop, Adobe Illustrator, 
                            and Adobe After Effects. With a strong interest in programming and graphic design, 
                            I am committed to advancing my technical abilities and am eager to explore 
                            opportunities that allow me to contribute meaningfully in these fields.
                        </p>
                        <div className="flex justify-center">
                            <Link href={'/syed owais cv.jpeg'}>
                                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                    View CV
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
