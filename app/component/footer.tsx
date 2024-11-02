import Link from 'next/link';
import react from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-gray-600'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
  
      <span className="ml-3 text-xl font-serif text-white">Syed Owais</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 SyedOwais — @gmail.com
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href={'https://www.facebook.com/profile.php?id=100060947366366'} className="text-gray-500">
      <FaFacebook className='text-2xl text-white hover:text-[#316FF6]' />
      </Link>
      <a className="ml-3 text-gray-500">
      <Link 
      target='_blank'
      href={'https://www.instagram.com/owais_2005/'} className="text-gray-500">
      <FaInstagram className='text-2xl text-white hover:text-[#8a3ab9]' />
      </Link>
      </a>
      <a className="ml-3 text-gray-500">
      <Link 
      target='_blank'
      href={'https://www.linkedin.com/in/syed-owais-b28488253/'} className="text-gray-500">
      <FaLinkedin className='text-2xl text-white hover:text-[#0077B5]' />
      </Link>
      </a>
    </span>
  </div>
</footer>

        </div>
    );
};

export default Footer;