import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { PiSolarRoof } from "react-icons/pi";

const features = [
  {
    title: "Efficiency & Power",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: (

      <PiSolarRoof size={40} />
    ),

    bg: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Trust & Warranty",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: (
      <FaAward size={40} />
    ),
    bg: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "High Quality Work",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: (
      <GiStarsStack size={40} />
    ),
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "24*7 Support",
    desc: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
    icon: (
      <BiSupport size={40} />
    ),
    bg: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=60",
  },
];




const FeatureCard = ({ title, desc, icon, bg }) => {
  return (
    <section>

      <div>
        <div className="group relative overflow-hidden  rounded-[28px] bg-white px-8 py-10 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center",
            }}
          />


          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />


          <div className="relative z-10">
            <div className="mb-4 text-lime-500 transition-colors duration-300 group-hover:text-lime-400">
              {icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-white/85">
              {desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-[#f3f5f2] py-12 fade-in">
      <div className="mb-10 text-center">
        <h3 className="font-bold text-sm flex items-center uppercase gap-1 justify-center mb-2">
          <MdElectricBolt color="#7ED957" size={30} />WHY CHOOSE US
        </h3> 
        <h1 className='text-5xl font-bold'>Providing Solar Energy Solutions</h1>

      </div>

      <div className="mx-auto max-w-6xl px-4 ">
        <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
