import React, { useMemo, useState } from "react";
import { MdElectricBolt } from "react-icons/md";
import { MdHome, MdBusinessCenter, MdBuild, MdBatteryChargingFull, MdLightbulb, MdChevronLeft, MdChevronRight,} from "react-icons/md";

const cardData = [
  {
    title: "Residential Solar Installation",
    description:
      "Affordable and efficient rooftop solar systems designed to reduce electricity bills and provide clean energy for homes.",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-1.jpg",
    icon: "MdHome",
  },
  {
    title: "Commercial Solar Solutions",
    description:
      "Customized solar power plants for businesses to cut operational costs and achieve sustainability goals.",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-2.jpg",
    icon: "MdBusinessCenter",
  },
  {
    title: "Solar Panel Maintenance",
    description:
      "Professional inspection, cleaning, and repair services to ensure maximum efficiency and long system life.",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-3.jpg",
    icon: "MdBuild",
  },
  {
    title: "Solar Battery Storage",
    description:
      "Advanced battery systems to store excess solar energy and provide backup power during outages.",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-4.jpg",
    icon: "MdBatteryChargingFull",
  },
  {
    title: "Solar Energy Consultation",
    description:
      "Expert guidance to plan, design, and optimize solar projects for maximum return on investment.",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-5.jpg",
    icon: "MdLightbulb",
  },
];

const iconMap = {MdHome,MdBusinessCenter,MdBuild,MdBatteryChargingFull,MdLightbulb,
};

const ServiceCard = ({ title, description, image, icon }) => {
  const Icon = iconMap[icon];

  return (
    <div className="group relative h-[420px] w-full overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center  transition hover:bg-[#45b316] duration-300 hover:scale-115 rounded-2xl bg-[#7ED957] shadow-md">
        {Icon ? <Icon className="text-3xl  text-white" /> : null}
      </div>

      <div className="absolute left-6 right-6 bottom-6 rounded-[22px] bg-white px-6 py-4 text-left shadow-lg transition-all duration-300 ease-out group-hover:bottom-8">
        <h3 className="text-lg font-extrabold text-green-950">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-snug text-gray-600">
          {description}
        </p>

        <div className="mt-3">
          <button
            type="button"
            className="rounded-full text-white bg-[#89EA5F] transition duration-300 hover:scale-110 hover:bg-[#378b10] px-5 py-2 text-sm font-semibold text-green-950 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:brightness-95"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const Dots = ({ total, active, onChange }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} type="button" onClick={() => onChange(i)} className={[ "h-3 rounded-full transition-all duration-300", i === active   ? "w-8 bg-[#7ED957]"   : "w-3 bg-gray-300 hover:bg-gray-400",
          ].join(" ")}
        />
      ))}
    </div>
  );
};

const Service = () => {
  const [index, setIndex] = useState(0);

  const perView = 3;
  const totalSlides = useMemo(
    () => Math.max(1, cardData.length - perView + 1),
    []
  );

  const next = () => setIndex((i) => (i + 1) % totalSlides);
  const prev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides);

  return (
    <section className="bg-[#F4F6F3] py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h3 className="font-bold text-sm flex items-center uppercase gap-1 sm:flex text-center md:mx-auto md:ml-115">
          <MdElectricBolt  color="#7ED957" size={30} /> Our services
        </h3>

        <h1 className="mt-4 text-3xl font-extrabold text-green-950 sm:text-4xl md:text-5xl">
          Best Offer For Renewable Energy
        </h1>

        <div className="relative mt-12">
          <button onClick={prev} className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-md ring-1 ring-black/5 transition hover:shadow-lg lg:block"
          >
            <MdChevronLeft className="text-2xl text-green-950" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-md ring-1 ring-black/5 transition hover:shadow-lg lg:block"
          >
            <MdChevronRight className="text-2xl text-green-950" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
            >
              {cardData.map((service) => (
                <div
                  key={service.title}
                  className="w-full  shrink-0 lg:w-1/3"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          <Dots
            total={totalSlides}
            active={index}
            onChange={setIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
