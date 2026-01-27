import { FaAward, FaHandshakeSimple, FaStar } from "react-icons/fa6";
import { GiSolarPower } from "react-icons/gi";

const Counts = () => {
  return (
    <div className="bg-[#163300] text-white justify-between px-20 sm:px-8 lg:px-40 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


        <div className="flex items-center">
          <GiSolarPower size={50} color="#89EA5F" className="mr-3 shrink-0" />
          <span>
            <h3 className="font-bold text-2xl md:text-3xl">1000+</h3>
            <p className="mt-1 text-sm">Project Done</p>
          </span>

        </div>

        <div className="flex items-center">
          <FaHandshakeSimple size={50} color="#89EA5F" className="mr-3 shrink-0" />
          <span>

            <h3 className="font-bold text-2xl md:text-3xl">2000+</h3>
            <p className="mt-1 text-sm">Happy Clients</p>
          </span>
        </div>

        <div className="flex items-center">
          <FaAward size={50} color="#89EA5F" className="mr-3 shrink-0" />
          <span>
            <h3 className="font-bold text-2xl md:text-3xl">100+</h3>
            <p className="mt-1 text-sm">Awards Winning</p>
          </span>
        </div>

        <div className="flex items-center">

          <FaStar size={50} color="#89EA5F" className="mr-3 shrink-0" />

          <span>
            <h3 className="font-bold text-2xl md:text-3xl">1000+</h3>
            <p className="mt-1 text-sm">Rating Customer</p>
          </span>
        </div>

      </div>



    </div>
  );
};

export default Counts;
