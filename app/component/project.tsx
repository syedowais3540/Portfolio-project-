import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Project = () => {
    return(
        <div id='project'>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-xxl text-6xl font-serif title-font mb-4 text-gray-900">
              Projects
            </h1>
           
          </div>
          <div className="flex flex-wrap -m-4">
            {/*Projects*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-6xl"
                  src={require('../../public/web design.jpg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Navbar Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Navbar 
                  </h1>
                  <p className="leading-relaxed">
                  As a beginner web developer, I'm learning how to 
                  create functional and responsive navigation bars
                   using Node.js and Tailwind CSS. 
                  </p>
                  <Link href={"https://github.com/syedowais3540/switch-case"}>
                  <p className="leading-relaxed text-indigo-900 hover:underline">
                  View Project</p> 
                  </Link>
                  
                </div>
              </div>
            </div>
                {/*Projects*/}
                <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-6xl"
                  src={require('../../public/PROJECT IMAGE.jpg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Web Development Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Web Development  
                  </h1>
                  <p className="leading-relaxed">
                  As a beginner web developer, I'm learning how to 
                  create functional and responsive navigation bars
                   using Node.js and Tailwind CSS. 
                  </p>
                  <Link href={"https://github.com/syedowais3540/switch-case"}>
                  <p className="leading-relaxed text-indigo-900 hover:underline">
                  View Project</p> 
                  </Link>
                  
                </div>
              </div>
            </div>
                {/*Projects*/}
                <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-6xl"
                  src={require('../../public/nee project.jpg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Graphic Designing  Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Graphic Designing  
                  </h1>
                  <p className="leading-relaxed">
                  As a beginner web developer, I'm learning how to 
                  create functional and responsive navigation bars
                   using Node.js and Tailwind CSS. 
                  </p>
                  <Link href={"https://github.com/syedowais3540/switch-case"}>
                  <p className="leading-relaxed text-indigo-900 hover:underline">
                  View Project</p> 
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Project;
