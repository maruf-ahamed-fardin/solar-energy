import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarLayout from '../Layout/NavbarLayout';
import Footer from '../Layout/Footer';
import Marquee from './Marquee';
import contactUsImage from '../assets/nuno-marques.jpg';

import { MdCall, MdElectricBolt, MdEmail, MdLocationOn, MdShare } from 'react-icons/md';

const cardData = [
  {
    title: "Our Address",
    description: "123, Lorem Ipsum, Street no, City, Country 123456",

      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",

    icon: "MdLocationOn",
  },
  {
    title: "Emails",
    description: "info@domainname.com\nsales@domainname.com",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    icon: "MdEmail",
  },
  {
    title: "Phones",
    description: "(+0) 123 456 789\n(+1) 456 123 789",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    icon: "MdCall",
  },
  {
    title: "Follow Us",
    description: "Facebook • Twitter • LinkedIn • Instagram",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    icon: "MdShare",
  },
];


const iconMap = {
  MdLocationOn: MdLocationOn,
  MdEmail: MdEmail,
  MdCall: MdCall,
  MdShare: MdShare,
};


const ContactUs = () => { 

  const [submit, setSubmit] = useState(false) ;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  }



  return (
    <section>

      <div
        className="w-screen bg-cover bg-center bg-no-repeat h-[60vh]"
        style={{ backgroundImage: `url(${contactUsImage})` }}>
        <NavbarLayout />
        <h1 className="text-white text-4xl font-bold text-center pt-20">Contact Us</h1>
      </div>

      {/* card section */}
      <nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 py-12 md:px-40 gap-6">
          {cardData.map((card, index) => {
            const Icon = iconMap[card.icon];

            return (
              <div
                key={index}
                className="relative rounded-4xl overflow-hidden shadow-lg group">

                <img
                  src={card.image}
                  alt={card.title}
                  className=" w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 " />


                <div className="absolute top-4 right-4 bg-[#89EA5F] p-3 rounded-xl text-white z-10">
                  <Icon size={24} />
                </div>


                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 z-10">
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </nav>

      <div className=' '>
        <div className='items-center justify-center text-center align-middle md:ml-200   '>
          <div className=''>
            <div className=' md:absolute md:mt-25  bg-white rounded-4xl md:w-1/3 mx-auto px-5 py-5'>
              <div className="text-center mb-10 ">
                <h3 className="font-bold text-sm flex items-center justify-center uppercase gap-1 mt-5 text-[#7ED957]">
                  <MdElectricBolt color="#7ED957" size={30} />
                  Contact Now
                </h3>

                <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
                  Get In Touch With Us
                </h1>
              </div>

              <form className=' gap-4 max-w-lg mx-auto mb-0 '>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <input type="text" placeholder='name' className='bg-[#EFF1ED] p-2 rounded-lg' />
                  <input type="email" placeholder='email' className='bg-[#EFF1ED] p-2 rounded-lg' />
                  <input type="text" placeholder='phone' className='bg-[#EFF1ED] p-2 rounded-lg' />
                  <input type="text" placeholder='subject' className='bg-[#EFF1ED] p-2 rounded-lg' />

                </div>
                <textarea rows="4" type="text" placeholder='write a message' className='bg-[#EFF1ED] w-full p-2 rounded-lg' />
                <div>
                  <button onClick={handleOnSubmit} type="submit" className='btn  text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-4 sm:px-5 py-1 font-bold rounded-2xl'>Submit</button></div>

            {
              submit &&
              <p className='text-[#89EA5F] mt-2 font-bold'>
                The message is sent successfully!
              </p>
            }



              </form>
            </div>
          </div>

        </div>
        <div className=' min-200 min-w-screen  mt-10 mb-10 '>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5283185667818!2d90.36689697980225!3d23.799805223553022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f3bba97017%3A0xc0a72d917e86f6ce!2sKazipara%20Metro%20Station!5e0!3m2!1sen!2sbd!4v1769603549391!5m2!1sen!2sbd"
            className='min-w-screen h-[100vh]'
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