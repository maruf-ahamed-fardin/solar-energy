import { PhoneCall } from "lucide-react";
import { MdElectricBolt } from "react-icons/md";
import HaveQuestions from "./HaveQuestions";

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


            
            

        

            {/* Have Questions? */}
            <HaveQuestions />
        </div>
    );
};

export default ProgressBar;