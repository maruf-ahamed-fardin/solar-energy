import { PhoneCall } from 'lucide-react';
import React from 'react';

const HaveQuestions = () => {
    return (
        <section className="mb-15 fade-in">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-[#f3f5ef] rounded-4xl flex flex-col md:flex-row items-stretch md:items-center overflow-hidden relative">
                        <div className="relative w-full md:w-1/3">
                            <img
                                src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/cta-image.jpg"
                                alt=""
                                className="w-full h-56 sm:h-64 md:h-full object-cover"
                            />
                            <div className="absolute transition hover:bg-[#45b316] duration-300 hover:scale-115 right-4 top-4 md:-right-6 md:top-1/2 md:-translate-y-1/2 bg-[#89EA5F] w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
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
            </section>
    );
};

export default HaveQuestions;