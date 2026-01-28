import React from 'react';
import { Nav } from 'react-bootstrap';
import NavbarLayout from '../Layout/NavbarLayout';
import Footer from '../Layout/Footer';
import bgImage from '../assets/dad-hotel-6wg8GbD0UZ0-unsplash.jpg'
import FeaturesSection from './FeaturesSection';
import Service from './Service';
import HaveQuestions from './HaveQuestions';
import Marquee from './Marquee';

const OurServices = () => {
    return (
       <section>
         <div className='h-[60vh] w-screen bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bgImage})`}}
        
        >
           <div
           
           >
             <NavbarLayout />

              <h1 className='text-center font-bold text-4xl py-20 text-white'>Our Service</h1>
           </div>

            
        </div>

        <Service />

        <HaveQuestions />

        <FeaturesSection />
        <Marquee />

        <Footer />
       </section>
        
    );

};

export default OurServices;