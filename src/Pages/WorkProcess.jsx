
import { Lightbulb, Link, NotebookPen, PhoneCall, Play, SolarPanel } from 'lucide-react';

import { GiArchiveResearch, GiSolarPower } from 'react-icons/gi';
import { MdElectricBolt } from 'react-icons/md';



const WorkProcess = () => {
    // const [open, setOpen] = useState(false);



    return (
        <div>
            {/* Work Process */}
            <section className="px-4 sm:px-10 md:px-20 lg:px-30 mt-15">
                <div className="text-center mb-10">
                    <h3 className="font-bold text-sm flex items-center justify-center uppercase gap-1 mt-5 text-[#7ED957]">
                        <MdElectricBolt color="#7ED957" size={30} />
                        Our latest process
                    </h3>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Our Work Process
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <NotebookPen size={100} color="white" className="p-6 bg-[#89EA5F] rounded-3xl" />
                        </div>
                        <h1 className="font-bold text-xl mb-2 font-serif">
                            Project Planning
                        </h1>
                        <p className="px-4 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur ab distinctio odio unde. Iusto, voluptates!
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <GiArchiveResearch size={100} color="white" className="p-6 bg-[#89EA5F] rounded-3xl" />
                        </div>
                        <h1 className="font-bold text-xl mb-2 font-serif">
                            Research & Analysis
                        </h1>
                        <p className="px-4 text-sm sm:text-base">

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. at nostrum esse animi molestias tenetur vitae qui tempora culpa.
                            </p>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <GiSolarPower size={100} color="white" className="p-6 bg-[#89EA5F] rounded-3xl" /> </div>
                        <h1 className="font-bold text-xl mb-2 font-serif">
                            Solar Installation
                        </h1>
                        <p className="px-4 text-sm sm:text-base mb-10">
                           
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. at nostrum esse animi molestias tenetur vitae qui tempora culpa.
                        </p>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default WorkProcess;