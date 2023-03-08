import React, { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import ReactLogo from '../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    })
  })

  const [open, setOpen] = useState(false);

  const {user} = useContext(UserContext);

  return (
    <div className="sticky top-0 transition-transform duration-500 z-50">
      <div className={`${isActive ? 'pb-0  rounded-b-lg bg-white opacity-90' : 'pb-2 bg-white'} transition-all duration-300 relative header z-50 border-b-2 border-gray-100 shadow-md`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to={'/'}>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 w-auto sm:h-12"
                  src={ReactLogo}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <button onClick={() => setOpen(!open)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" >
                <span className="sr-only">Open menu</span>
                {/* menu-3Stroke-svg */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>

            </div>

            
            <nav className="hidden md:flex space-x-5 items-center">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900" >
                <span className="nav-link p-3">Home</span>
              </a>
              <HashLink to="#gallery" className="text-base font-medium text-gray-500 hover:text-gray-900">
                <span className="nav-link p-3">Gallery</span>
              </HashLink>
      
              {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900" >
                <span className="nav-link p-3">Services</span>
              </a> */}
              <HashLink to="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                <span className="nav-link p-3">Contact</span>
              </HashLink>
              <Link to={user ? '/account/appointments' : '/login'} className="appointment-btn ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-md">
                
                <div className="pr-2">
                <svg className="flex-shrink-0 h-6 w-6 hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                </svg>
                </div>
 
                <span>Appointment</span>
              </Link>
              
            </nav>

            {!user && (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to={'/login'} className="signin-btn whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link to={'/register'} className="ml-1 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </Link>
            </div>
            )}

            {!!user && (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link to={'/account'} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <div>
                    <svg alt="user-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='pl-3'>
                  {user.name}
                </div>
                </Link>
                </div>
            )}


          </div>
        </div>
        
        <div className={!open ? "hidden" : "md:hidden"}>
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link to={'/'}>
                <div>
                    
                    <img onClick={() => setOpen(!open)} className="h-12 w-auto sm:h-12" src={ReactLogo} alt="Logo"/>
                    
                </div>
                </Link>
                <div className="-mr-2">
                <button onClick={() => setOpen(!open)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-#4f46e5">
                    <span className="sr-only">Close menu</span>
                    {/* close-X-svg */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

            <div className="mt-6">

                <nav className={!open ? "hidden" : "grid gap-y-8"}>
                  <a href="#" onClick={() => setOpen(!open)} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Home-svg */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                  </a>

                  <a href="#" onClick={() => setOpen(!open)} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" >
                    {/* Services-svg */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" aria-hidden="true" >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Gallery</span>
                  </a>

                  <a href="#" onClick={() => setOpen(!open)} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" >
                    {/* Services-svg */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" aria-hidden="true" >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Services</span>
                  </a>

                  <a href="#" onClick={() => setOpen(!open)} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" >
                    {/* Contact-svg */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" aria-hidden="true" >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                  </a>

                  <Link to={user ? '/appointments' : '/login'} onClick={() => setOpen(!open)} className="appointment-btn w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ">
                    {/* Appointment-svg */}
                    <svg className="flex-shrink-0 h-6 w-6 hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                    </svg>
                    <span className="ml-3 text-base font-medium hover:text-indigo-600">Appointment</span>
                    
                  </Link>
                  
                </nav>
            </div>
            </div>
            <div className="py-6 px-5 space-y-6">

              {!user && (
              <div>
                <Link to={'/register'} onClick={() => setOpen(!open)} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer? <br />
                  <Link to={'/login'} onClick={() => setOpen(!open)} className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </p>
              </div>
              )}
            
            {!!user && (
                <Link to={'/account'} onClick={() => setOpen(!open)} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  My Account
                </Link>
            )}

            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};
