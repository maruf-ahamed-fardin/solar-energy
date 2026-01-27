import { MdElectricBolt } from "react-icons/md";
import { useState } from "react";

const Calculator = () => {


  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent to your email");
  }
  return (
    <section className="px-4 sm:px-8 lg:px-40 py-10 sm:py-16">
      <div className="bg-[#EFF1ED] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-sm flex items-center uppercase gap-1">
            <MdElectricBolt color="#7ED957" size={30} />
            Solar calculator
          </h3>

          <h1 className="mt-4 font-bold leading-tight text-[clamp(2rem,6vw,3.5rem)] break-words">
            Your Solar Savings Calculator
          </h1>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={handleOnSubmit}>
          <select className="w-full p-3 text-[#818181] rounded-2xl bg-white">
             <option value="please">please choose an option</option> 
             <option value="residential">Residential</option> 
             <option value="commercial">Commercial</option> </select>

          <input type="text" className="w-full p-3 rounded-2xl bg-white" placeholder="Name" />

          <input type="email" className="w-full p-3 rounded-2xl bg-white" placeholder="Email" />

          <input type="text" className="w-full p-3 rounded-2xl bg-white" placeholder="Phone" />

          <input type="text" className="w-full p-3 rounded-2xl bg-white" placeholder="Average Monthly Bill" />

          <input  type="text"  className="w-full p-3 rounded-2xl bg-white"  placeholder="Solar Plant Capacity"/>



          <button className="btn btn-primary font-bold rounded-2xl w-full sm:col-span-2 sm:w-auto sm:justify-self-start px-8 py-3">
            Calculate
          </button>



        </form>
      </div>

    </section>
  );
};

export default Calculator;
