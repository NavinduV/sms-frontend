import React from 'react'
import { Outlet } from 'react-router-dom';
// import Header from './components/Header-test';
import NavBar from './components/NavBar';

export default function () {
  return (
    <div className='flex flex-col min-h-screen'>
        {/* <Header /> */}
        <NavBar />
        <Outlet />
    </div>
  )
}
