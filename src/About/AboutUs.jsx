import { MdCheckCircle, MdElectricBolt } from 'react-icons/md';
import { RxDragHandleDots1 } from 'react-icons/rx';

const AboutUs = () => {
    return (
        
        <section className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-10 md:p-10 lg:p-10 lg:px-40 gap-10 items-center">
            <div className="relative sm:py-20 right-to-left flex justify-center md:justify-start h-full w-full">
                <img
                    className="rounded-4xl relative h-64 sm:h-80 md:h-100 md:w-[80%] object-cover"
                    src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/about-1.jpg"/>

                <img
                    className="rounded-4xl   mt-20 absolute right-4 sm:right-10 md:right-0 md:mt-40 border-white border-6 h-40 sm:h-48 md:h-60 top-1/2 z-10 -translate-y-1/2 object-cover"
                    src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/about-2.jpg"/>
 
                {/* <RxDragHandleDots1 size={140} color="gray" className="relative md:h-60 md:w-70 strecp top-10 md:top-20 left-0 md:left-0 opacity-30"
                />
                <RxDragHandleDots1 size={140} color="gray" 
                 className="relative md:h-40 md:w-50 top-10 md:top-0 left-0 md:left-0 opacity-30" /> */}
            </div>

            <div className="mx-auto left-to-right text-center md:text-left">
                <h3 className="font-bold text-sm flex items-center justify-center md:justify-start uppercase gap-1 mb-2 text-[#7ED957]">
                    <MdElectricBolt color="#7ED957" size={30} />
                    About us
                </h3>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-1">
                    About Green Energy Solar
                </h1>

                <p className="mt-6 sm:mt-8 text-sm sm:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    <br />
                    <br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 md:mt-10 text-left">
                    <p className="text-sm flex items-center gap-1">
                        <MdCheckCircle color="#7ED957" size={24} /> Solar Inverter Setup
                    </p>
                    <p className="text-sm flex items-center gap-1">
                        <MdCheckCircle color="#7ED957" size={24} /> 
                        Battery Storage Solutions
                    </p>

                    <p className="text-sm flex items-center gap-1">
                        <MdCheckCircle color="#7ED957" size={24} /> 
                        Solar Material Financing

                    </p>

                    <p
                     className="text-sm flex items-center gap-1">
                        <MdCheckCircle color="#7ED957" size={24} />
                         24 X 7 Call & Chat Support
                    </p>

                </div>

                <div className="flex justify-center md:justify-start">
                    <button className="btn btn-primary px-5 py-1 rounded-2xl mt-6">
                        More About
                    </button>
                </div>
            </div>




        </section>

    );
};

export default AboutUs;