import { Link, NavLink } from "react-router-dom";
import ContactLinks from "../components/ContactLinks";
import { MdElectricBolt } from "react-icons/md";
import NavbarLayout from "../Layout/NavbarLayout";



const Navbar = () => {
  return (
    <div className="relative w-full overflow-hidden h-full md:max-h-screen   md:pb-100 p-2  pb-20  bg-black/50">
      <div className="absolute inset-0  "></div>

     

      <div className="relative z-10 text-white px-4 sm:px-10  fade-in">

        <NavbarLayout />
        <div className="mt-16 sm:mt-20 md:mt-28 max-w-4xl md:px-40 text-center md:text-left">
          <h3 className="font-bold text-sm flex items-center justify-center md:justify-start uppercase gap-1">
            <MdElectricBolt color="#7ED957" size={30} /> Welcome to Solar
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Powering the Future With
            <span className="italic font-serif text- text-[#89EA5F]"> Renewable.</span>
          </h1>

          <p className="mt-3 text-gray-200 text-sm sm:text-base">
            Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit,
            eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus
            feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"> 
            <Link to="/ourservices">
              <button className="btn text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-5 py-1 rounded-2xl">
                Our Service
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-5 py-1 rounded-2xl">
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
