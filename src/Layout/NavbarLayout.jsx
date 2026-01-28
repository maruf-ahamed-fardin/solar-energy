import { useState } from "react";
import { MdElectricBolt } from "react-icons/md";
import { Link, NavLink } from "react-router";
import ContactLinks from "../components/ContactLinks";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/ourservices" },
  { label: "Projects", to: "/project" },
];

const NavbarLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
     
      <ContactLinks />

      <div className="md:px-40 px-4 sm:px-5">
        <div className="relative">
       
          <div className="flex justify-between items-center gap-4 px-4 sm:px-5 py-5 sm:py-7 rounded-4xl md:bg-white md:text-black mt-2">
            
        
            <h1 className="font-bold text-3xl md:text-4xl flex items-center gap-1">
              <MdElectricBolt className="text-[#7ED957]" />
              <Link to="/">Solar</Link>
            </h1>

            <ul className="hidden md:flex gap-6 font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-colors duration-300 hover:text-[#89EA5F] ${
                        isActive ? "text-[#89EA5F]" : "text-black"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="hidden md:block">
              <button className="text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-4 sm:px-5 py-1 font-bold rounded-2xl">
                Contact Us
              </button>
            </Link>

          
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1">
                <span className="w-5 h-1 bg-black"></span>
                <span className="w-5 h-1 bg-black"></span>
                <span className="w-5 h-1 bg-black"></span>
              </div>
            </button>
          </div>

        
          {open && (
            <div className="md:hidden absolute left-0 right-0 mt-3 bg-white rounded-3xl shadow-xl p-6">
              <ul className="flex flex-col items-center gap-3 font-semibold">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `transition-colors duration-300 hover:text-[#89EA5F] ${
                          isActive ? "text-[#89EA5F]" : "text-black"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex justify-center">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <button className="text-white bg-[#89EA5F] px-6 py-2 font-bold rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavbarLayout;
