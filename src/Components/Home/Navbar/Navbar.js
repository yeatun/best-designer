import React from 'react';
import { Link } from 'react-router-dom';
import designer from '../../../UI/logo_white.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav
      className='navbar flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        <img src={designer} alt="" />
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block text-white hidden'  >
        <Link to='/' className='p-4'>
         Home
        </Link>
        <Link to='/portfolio' className='p-4'>
         Portfolio
        </Link>
        <Link to='/about' className='p-4'>
         <button class=" md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Hire Me</button>
        </Link>
       
      </div>
    </nav>
  );
};

export default Navbar;