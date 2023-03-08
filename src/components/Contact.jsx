import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="text-gray-700 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe className='iframe' title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.390958209163!2d79.95561171459089!3d6.598238195228297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae237785fb50017%3A0x11530c14de6add45!2sDineshtattoo!5e0!3m2!1sen!2slk!4v1675845909550!5m2!1sen!2slk"></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
      <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
      <button className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">Send</button>
      <p className="text-xs text-gray-500 mt-3"></p>
    </div>
  </div>
</section>
  );
}
