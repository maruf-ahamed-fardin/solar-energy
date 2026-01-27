import { PhoneCall } from "lucide-react";
import { MdElectricBolt } from "react-icons/md";

const skills = [
    { label: "Solar Panels", value: 95 },
    { label: "Hybrid Energy", value: 80 },
    { label: "Marketing", value: 70 },
];

const ProgressBar = () => {
    return (
        <div>
            {/* Energy progress */}

            <section className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-20 lg:px-50 mt-15 mb-15 gap-10 md:gap-20 left-to-right">
                <div className="mb-10 md:mb-15 text-center md:text-left">
                    <h3 className="font-bold text-sm flex items-center justify-center md:justify-start text-[#7ED957] uppercase gap-1 mb-2">
                        <MdElectricBolt color="#7ED957" size={30} />
                        Energy progress
                    </h3>

                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                        Best Solution For Your
                        <br className="hidden sm:block" />
                        Solar Energy
                    </h1>

                    <p className="text-sm sm:text-base">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>

                {/* progress bar  */}
                <section className="w-full max-w-2xl mx-auto space-y-6 sm:space-y-8 py-2 sm:py-5 left-to-right">
                    {skills.map((s) => (
                        <div key={s.label} className="space-y-2 sm:space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#163300]">
                                    {s.label}
                                </h3>
                                <span className="text-base sm:text-lg md:text-xl font-semibold text-[#89EA5F]">
                                    {s.value}%
                                </span>
                            </div>

                            <div className="h-2 w-full rounded-full bg-[#EFF1ED]">
                                <div
                                    className="h-2 rounded-full bg-[#89EA5F]"
                                    style={{ width: `${s.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </section>




        

    {/* Have Questions?  */ }
    < section className = "mb-15 fade-in" >
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#f3f5ef] rounded-4xl flex flex-col md:flex-row items-stretch md:items-center overflow-hidden relative">
                <div className="relative w-full md:w-1/3">
                    <img
                        src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/cta-image.jpg"
                        alt=""
                        className="w-full h-56 sm:h-64 md:h-full object-cover"
                    />
                    <div className="absolute  transition hover:bg-[#45b316] duration-300 hover:scale-115 right-4 top-4 md:-right-6 md:top-1/2 md:-translate-y-1/2 bg-[#89EA5F] w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <PhoneCall className="text-white w-6 h-6" />
                    </div>
                </div>

                <div className="md:w-1/2 w-full p-6 md:p-8 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#89EA5F]">
                        Have Questions?
                    </h2>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm sm:text-base">
                        It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                </div>
            </div>
        </div>
            </section >

        </div >

    );
};

export default ProgressBar;