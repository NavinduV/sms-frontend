import React from 'react'
import Gallery from '../components/Gallery';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function IndexPage() {
  return (
    <div>
      <NavBar />
      <div className='top-[-40rem]'><Hero /></div>
      <Gallery />
      < Contact />
      <Footer />
    </div>
  )
}
