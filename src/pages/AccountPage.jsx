import axios from 'axios';
import React from 'react'
import { useContext, useState } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { UserContext } from '../components/UserContext'
import AppointmentPage from './AppointmentPage';

export default function AccountPage() {
    const {ready, user, setUser} = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');       
        setUser(null);
    }

     if (!ready) {
           return 'Loading...'
       }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    

    function linkClasses(type=null) {
        let classes = 'inline-flex py-1 px-4 border-2 border-primary rounded-lg hover:shadow-md';
        if (type === subpage) {
            classes = 'inline-flex py-1 px-4 border-2 border-primary rounded-lg hover:shadow-md text-white bg-primary';
        }
        return classes;
    }
  

    if (redirect) { return <Navigate to={redirect} /> }
    return (
        // <div className='flex justify between'>
        //     My Account
        // <button onClick={logout} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 max-w-sm mt-2">Log out</button>
        // </div>
        <div>
        <nav className="w-full flex justify-center mt-8 gap-2">
            <Link className={linkClasses('profile')} to={'/account'} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                My Profile
                </Link>

            <Link className={linkClasses('appointments')} to={'/account/appointments'} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
                My Appointments
                </Link>
        </nav>

        {subpage === 'profile' && (
            <div className="text-center mt-20 max-w-lg mx-auto">
                <div className='text-xl'>Your Information</div>
                <div className='grid grid-cols-4 mt-5 mb-5'>
                    <span className='text-white bg-primary py-2 px-4 col-span-1 rounded-l-lg'>Name</span>
                    <span className='border py-2 pl-3 pr-10 col-span-3 text-start bg-gray-200 rounded-r-lg'>{user.name}</span>
                </div>
                 <div className='grid grid-cols-4'>
                    <span className='text-white bg-primary py-2 px-4 col-span-1 rounded-l-lg'>Email</span>
                    <span className='border py-2 pl-3 pr-10 col-span-3 text-start bg-gray-200 rounded-r-lg'>{user.email}</span>
                </div>
                <button onClick={logout} className="mt-8 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 max-w-sm">Log out</button>
            </div>
        )}

        {subpage === 'appointments' && (
            < AppointmentPage />
        )}

        </div>
    );
    

  
}
