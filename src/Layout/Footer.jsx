import { MapPinned, PhoneCall } from "lucide-react";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdElectricBolt, MdSupportAgent } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <section className="bg-[#163300] text-white px-4 sm:px-8 lg:px-40 py-6">

            <div className=" flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">

                <div className="flex items-start">
                    <MdSupportAgent size={40} color="#89EA5F" className="mr-2 shrink-0" />
                    <span>
                        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                            Support & Email
                        </h3>
                        <p className="mt-1 text-sm">
                            <a href="mailto:marufahamedfardin7@gmail.com">
                                marufahamedfardin7@gmail.com
                            </a>
                        </p>
                    </span>
                </div>

                <div className="flex items-start">
                    <PhoneCall size={40} color="#89EA5F" className="mr-2 shrink-0" />
                    <span>
                        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                            Customer Support
                        </h3>
                        <p className="mt-1 text-sm">
                            <a href="tel:+8801939666135">+8801939666135</a>
                        </p>
                    </span>
                </div>

                <div className="flex items-start">
                    <MapPinned size={40} color="#89EA5F" className="mr-2 shrink-0" />
                    <span>
                        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                            Our Location
                        </h3>
                        <p className="mt-1 text-sm">
                            street no, City, Country 1234
                        </p>
                    </span>
                </div>

            </div>

            <hr className="border-green-700 my-6" />

            <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

                <nav>
                    <h1 className="font-bold text-4xl flex items-center gap-1 mb-3">
                        <MdElectricBolt color="#7ED957" /> Solar
                    </h1>
                    <p className="text-sm mr-5">
                        Green Energy is a long reader will be distracted by the readable content of a page when.
                    </p>

                    <div className="flex items-center  gap-4 mt-4">
                        <a href="https://github.com/maruf-ahamed-fardin">
                            <PiGithubLogoFill size={20} className="bg-[#89EA5F]  rounded-md p-1 opacity-80" color="black" />
                        </a>
                        <a href="https://www.linkedin.com/in/maruf-ahamed-fardin-36a941215">
                            <FaLinkedin size={20} className="bg-[#89EA5F] rounded-md p-1 opacity-80" color="black" />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagramSquare size={20} className="bg-[#89EA5F] rounded-md p-1 opacity-80" color="black" />
                        </a>
                    </div>
                </nav>

                <nav className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>

            <button className="h-12 md:h-17 w-full bg-[#89EA5F] text-black rounded-full text-xs sm:text-sm md:text-base font-medium flex items-center justify-center shadow-lg mt-10 px-4 text-center">
                Copyright © 2026 Solar. All rights reserved.
            </button>

        </section>
    );
};

export default Footer;
