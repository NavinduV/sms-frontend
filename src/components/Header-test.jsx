import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import ReactLogo from '../assets/logo.svg';

export default function Header() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const {user} = useContext(UserContext);

  return (
    <div>
        <header className='flex justify-between items-center'>
        <Link to={'/'} className='flex items-center'>
          {/* <svg alt="logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg> */}
          <div>
          <img src={ReactLogo} className="w-12 h-12"/>
          </div>
        </Link>

        {/* <ul className="hidden md:flex">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>

        </ul> */}

        <div className='hidden md:flex md:border md:border-gray-300 md:rounded-full md:py-2 md:px-4 md:gap-2 md:shadow-md md:shadow-gray-300 md:items-center'>
          <div className='flex gap-2 '>
            <div>Home</div>
            <div className="border-l border-gray-300"></div>
          </div>
          <div className='flex gap-2'>
            <div>Services</div>
            <div className="border-l border-gray-300"></div>
          </div>
          <div className='flex gap-2'>
            <div>Contact</div>
            <div className="border-l border-gray-300"></div>
          </div>
          <Link  to={user ? '/appointment' : '/login'}>
          <button className='bg-primary text-white rounded-full p-1'>
            <div className='px-2 '>Appointment</div>
          </button>
          </Link>
        </div>

        {!user && (
          <div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? 
            <svg alt="3-strokes" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
         : 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

         }
            
        </div>
        <div className='hidden md:flex md:py-2 md:px-4 md:gap-2 md:items-center'>
          <Link to={'./register'}>
            <button className='bg-primary text-white rounded-full p-1 md:shadow-md md:shadow-gray-300 '>
              <div className='px-2 '>Register</div>
            </button>
          </Link>
          <Link to={'./login'}>
            <button className='bg-primary text-white rounded-full p-1 md:shadow-md md:shadow-gray-300 '>
            <div className='px-2 '>Log in</div>
          </button>
          </Link>
        </div>
        </div>
        )}

        {!!user && (
        <div className='flex items-center border border-gray-300 rounded-full py-2 px-4 gap-2'>
          <div className='md:hidden' onClick={handleClick}>
             {!nav ? 
            <svg alt="3-strokes" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
         : 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

         }
          </div>
          <Link  to={user ? '/account' : '/login'}>
          <div className='bg-gray-500 rounded-full text-white border border-gray-500 overflow-hidden hover:border-white'>
            <svg alt="user-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </Link>
        <Link  to={user ? '/account' : '/login'}>
          {!!user && ( //If User logged in or have cookie
            <div>
              {user.name}
            </div>
          )}
        </Link>
        </div>
        )}

        
        {/* absolute bg-zinc-200 w-full px-8 */}
      </header>
      <ul className={!nav ? "hidden" : "md:hidden z-20 fixed top-0 -left-80 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-100"}>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>Services</li>
          <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
          

        <div className='flex flex-col my-4'>
          <Link to={'./login'} className='text-center'><button className='bg-white w-full text-indigo-600 px-8 py-3 mb-4'>Sign In</button></Link>
          <Link to={'./login'} className='text-center'><button className='bg-white w-full text-indigo-600 px-8 py-3 mb-4'>Sign Up</button></Link>
        </div>

        </ul>
    </div>
  )
}


