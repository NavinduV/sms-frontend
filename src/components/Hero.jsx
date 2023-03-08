import React, {useContext} from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../motions/variants';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
        },
    },
};

export default function Hero() {

    const {user} = useContext(UserContext);
    return (
        <div className="bg-[url('https://i.imgur.com/N0JvLfg.jpg')] hero bg-cover bg-center z-0 mb-8">
        <img className="texture-1 w-full max-h-screen z-20" src='https://i.imgur.com/qCA9OEP.png' />
        <img className="texture-1 w-full max-h-screen z-20" src='https://i.imgur.com/8QCanIk.png' />
        <img className="texture-1 w-full max-h-screen z-20" src='https://i.imgur.com/5VKFQcq.png' />
        {/* <div className="w-full"><img className="fixed z-10 hero-img" src='https://i.imgur.com/VqAR98Q.png' /></div> */}

        <div className="w-full max-h-screen flex flex-col justify-between">
            <div className="w-full h-screen flex flex-col justify-between hero-overlay">
            <motion.div variants={container} initial='hidden' whileInView={'show'} className="grid md:grid-col-2 max-w-[1240px] mx-auto md:ml-32 my-auto text-left">
                <motion.div variants={fadeIn('down')} className='text-center md:text-left z-40 hero-text'>
                    <div className="mb-4"><span className='text-4xl text-white font-secondary font-bold'>WELCOME TO</span></div>
                    <div className="mb-4"><h1 className='text-6xl md:text-7xl font-bold text-indigo-600'>TATTOO STUDIO</h1></div>
                    <p className='text-2xl md:text-2xl mb-4 text-white'>Meet the new style perfection</p>
                    <Link to={user ? '/appointment' : '/login'} className="appointment-btn whitespace-nowrap inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-white!important">
                        <div className="pr-2">
                        <svg className="flex-shrink-0 h-6 w-6 hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                        </svg>
                        </div>
                        <span className='pr-2'>Make an Appointment</span>
                        <div className="pr-2 mt-1">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        </div>

                    </Link>
                </motion.div>
            </motion.div>
            </div>
        </div>
        
        </div>
    )
}