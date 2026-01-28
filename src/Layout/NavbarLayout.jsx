import { MdElectricBolt } from "react-icons/md";
import { Link, NavLink } from "react-router";
import ContactLinks from "../components/ContactLinks";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/ourservices" },
    
    { label: "Projects", to: "/project" },
    { label: "Blog", to: "/blog" },

];

const NavbarLayout = () => {
    return (
        <section>
            
            <div>
                <ContactLinks />
            </div>
           <div className="md:px-40">
             <div className="flex flex-col   md:flex-row justify-between items-center gap-4 px-4 sm:px-5 py-5 sm:py-7 rounded-4xl bg-white text-black mt-2">

                <h1 className="font-bold text-3xl md:text-4xl flex items-center gap-1">

                    <MdElectricBolt color="#7ED957" />
                    <Link to="/">
                        Solar
                    </Link>
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
                    <button className="btn text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#285713] px-4 sm:px-5 py-1 font-bold rounded-2xl">
                        Contact Us
                    </button>
                </Link>
            </div>
           </div>
        </section>
    );
};

export default NavbarLayout;