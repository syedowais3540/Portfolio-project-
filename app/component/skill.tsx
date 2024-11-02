'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaVideo, FaCode, FaLaptopCode, FaHtml5, FaReact } from 'react-icons/fa';

const Skill = () => {
    return (
        <div id='skill'>
            <section 
                className="text-gray-200 body-font bg-fixed bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url("/path/to/your/background-image.jpg")',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 opacity-90"></div>
                <div className="container px-5 py-24 mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4 font-serif">
                            My Skills
                        </h1>
                        <p className="text-gray-400 leading-relaxed font-serif">
                            Here are some of the skills I've honed over the years in both web development and design.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {[
                            { skill: 'Graphic Designing', icon: <FaPaintBrush /> },
                            { skill: 'Video Editing', icon: <FaVideo /> },
                            { skill: 'Web Development', icon: <FaCode /> },
                            { skill: 'Social Media Post Design', icon: <FaLaptopCode /> },
                            { skill: 'HTML & CSS', icon: <FaHtml5 /> },
                            { skill: 'Next.js', icon: <FaReact /> },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-2 sm:w-1/2 w-full"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out rounded flex p-4 h-full items-center border border-gray-700 shadow-lg">
                                    <div className="text-indigo-400 w-8 h-8 flex-shrink-0 mr-4">
                                        {item.icon}
                                    </div>
                                    <span className="title-font font-medium text-gray-100">
                                        {item.skill}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skill;
