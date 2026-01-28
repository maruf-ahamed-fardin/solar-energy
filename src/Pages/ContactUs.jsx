import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarLayout from '../Layout/NavbarLayout';
import Footer from '../Layout/Footer';
import Marquee from './Marquee';

import { MdElectricBolt } from 'react-icons/md';

const ContactUs = () => {
  return (
    <section>

      <NavbarLayout />
      <div>
        <div>
          <div className="text-center mb-10">
            <h3 className="font-bold text-sm flex items-center justify-center uppercase gap-1 mt-5 text-[#7ED957]">
              <MdElectricBolt color="#7ED957" size={30} />
              Contact Now
            </h3>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Get In Touch With Us
            </h1>
          </div>

          <form className=' gap-4 max-w-lg mx-auto mb-20 '>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <input type="text" placeholder='name' className='bg-[#EFF1ED] p-2 rounded-lg' />
            <input type="email" placeholder='email' className='bg-[#EFF1ED] p-2 rounded-lg' />
            <input type="text" placeholder='phone' className='bg-[#EFF1ED] p-2 rounded-lg' />
            <input type="text" placeholder='subject' className='bg-[#EFF1ED] p-2 rounded-lg' />
            
            </div>
            <textarea rows="4" type="text" placeholder='write a message' className='bg-[#EFF1ED] w-full p-2 rounded-lg' />
            <div>
              <button type="submit" className='btn  text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-4 sm:px-5 py-1 font-bold rounded-2xl'>Submit</button></div>

          </form>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5283185667818!2d90.36689697980225!3d23.799805223553022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f3bba97017%3A0xc0a72d917e86f6ce!2sKazipara%20Metro%20Station!5e0!3m2!1sen!2sbd!4v1769603549391!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </div>
      <Marquee />
      <Footer />
    </section>
  );
};

export default ContactUs;