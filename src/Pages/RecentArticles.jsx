import { MdDateRange, MdElectricBolt, MdLocalOffer } from "react-icons/md";

const blogData = [
  {
    title: "Exploring the Latest Innovations in Solar Technology",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-1.jpg",
  },
  {
    title: "Solar Solutions for a Sustainable Tomorrow",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-2.jpg",
  },
  {
    title: "Advancements and Breakthroughs in Renewable Power",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-3.jpg",
  },
];

export default function BlogSection() {
  return (

    <section className="bg-white py-14 left-to-right">
      <div className="text-center justify-center">
        <h3 className="font-bold text-sm flex items-center ml-160 text-[#7ED957] uppercase gap-1 mb-2">
          <MdElectricBolt  color="#7ED957" size={30} /> Energy progress</h3>
        <h1 className='font-bold text-4xl mb-6'>Best Solution For Your
          Solar Energy</h1>
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="group  relative h-[380px] overflow-hidden rounded-[32px] shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div
                className=" absolute bottom-5 left-5 right-5 rounded-2xl bg-white px-6 py-5 transition-all duration-300 group-hover:py-7"
              >

                <h3
                  className=" text-[18px] font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#89EA5F]
                  ">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <MdDateRange className="text-[#89EA5F]" />
                    March 19, 2024
                  </span>

                  <span className="flex items-center gap-2">
                    <MdLocalOffer className="text-[#89EA5F]" />
                    Uncategorized
                  </span>
                </div>


                <div
                  className=" mt-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="rounded-full bg-[#89EA5F] px-6 py-2 text-sm font-semibold text-white hover:bg-[#89EA5F]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
