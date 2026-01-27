import { Link, NavLink } from "react-router-dom";
import ContactLinks from "../components/ContactLinks";
import { MdElectricBolt } from "react-icons/md";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "AboutUs", to: "/about" },
  { label: "Service", to: "/service" },
  { label: "Projects", to: "/projects" },
  { label: "Pages", to: "/pages" },
  { label: "Blog", to: "/blog" },

];

const Navbar = () => {
  return (
    <div className="relative w-full overflow-hidden h-full md:min-h-183 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-black/60"></div>

      <ContactLinks />

      <div className="relative z-10 text-white px-4 sm:px-10 md:px-20 lg:px-40 fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-5 py-5 sm:py-7 rounded-4xl bg-white text-black mt-6">
          <h1 className="font-bold text-3xl md:text-4xl flex items-center gap-1">
            <MdElectricBolt color="#7ED957" /> Solar
          </h1>

          <ul className=" md:flex gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.to} className="cursor-pointer">
                <NavLink
                  to={link.to} className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-[#89EA5F] ${isActive ? "text-[#89EA5F]" : "text-black"
                    }`
                  }>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <button className="btn btn-primary px-4 sm:px-5 py-2 font-bold rounded-2xl">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-28 max-w-3xl text-center md:text-left">
          <h3 className="font-bold text-sm flex items-center justify-center md:justify-start uppercase gap-1">
            <MdElectricBolt color="#7ED957" size={30} /> Welcome to Solar
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Powering the Future With
            <span className="italic font-serif text-[#89EA5F]"> Renewable.</span>
          </h1>

          <p className="mt-3 text-gray-200 text-sm sm:text-base">
            Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit,
            eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus
            feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn btn-primary px-5 py-1 rounded-2xl">
              Our Service
            </button>
            <Link to="/contact">
              <button className="btn btn-primary px-5 py-1 rounded-2xl">
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
