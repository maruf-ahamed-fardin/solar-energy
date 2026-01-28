import React from 'react';
import projectBg from '../assets/project.jpg';
import NavbarLayout from '../Layout/NavbarLayout';
import Footer from '../Layout/Footer';
import Marquee from './Marquee';


const solarData = [
    {
        title: "Photon Fusion",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg",
    },
    {
        title: "LuxSolar Dynamics",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    },
    {
        title: "Solarburst Ventures",
        category: "Solar Power",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    },
    {
        title: "Sunworks Initiative",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
    },
    {
        title: "HelioHarbor Dynamics",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
        title: "SolarLoom Energy",
        category: "Solar Power",
        image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
    },
    {
        title: "EcoHarbor",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    },
    {
        title: "GreenVista Homes",
        category: "Solar Power",
        image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    },
    {
        title: "SunPeak Solutions",
        category: "Solar Power",
        image: "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg",
    },
    {
        title: "EcoRay Systems",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/433204/pexels-photo-433204.jpeg",
    },
    {
        title: "BrightHorizon Energy",
        category: "Solar Power",
        image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
    },
    {
        title: "TerraVolt Innovations",
        category: "Geothermal Energy",
        image: "https://images.pexels.com/photos/9875451/pexels-photo-9875451.jpeg",
    },
];


const Projects = () => {
    return (
        <div>
            <div className='w-screen bg-cover bg-center bg-no-repeat h-[60vh]'
                style={{ backgroundImage: `url(${projectBg})` }}
            >
                <NavbarLayout />
                <h1 className='text-center font-bold text-4xl py-20 text-white'>Our Projects</h1>
            </div>

            {/* card section  */}
            <nav>
                <h1 className="text-3xl font-bold mb-6 text-center text-[#89EA5F] mt-4">All Projects </h1>
                
                <div className="grid  grid-cols-1 py-10 md:px-40 px-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solarData.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group shadow-md" >
                        
                            <img
                                src={item.image}
                                alt={item.title}
                                className=" w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 " />

                         
                            <div
                                className=" absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />

                           
                            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 z-10">
                                <h3 className="font-semibold text-lg text-[#89EA5F]">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </nav>
            <Marquee />
            <Footer />
        </div>
    );
};

export default Projects;