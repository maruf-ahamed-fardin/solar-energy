import React from 'react';
import backgroundImage from '../assets/solar-bg.jpg';
import { MdElectricBolt } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import ContactLinks from '../components/ContactLinks';
import AboutUs from './AboutUs';
import FeaturesSection from '../Pages/FeaturesSection';
import Footer from '../Layout/Footer';
import BlogSection from '../Pages/RecentArticles';
import NavbarLayout from '../Layout/NavbarLayout';
import WorkProcess from '../Pages/WorkProcess';




const BackgroundComponent = () => {
    return (
        <div> 
            <div
                className="h-[60vh] w-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
            <div className='  '>
                <NavbarLayout />
                
                <h1 className='text-center font-bold text-4xl py-20 text-white'>About Us</h1>
            </div>
            </div>
            

            <AboutUs />

            <FeaturesSection />
        <WorkProcess />
            <BlogSection />

            

            <Footer />
        </div>
    );
};

export default BackgroundComponent;
