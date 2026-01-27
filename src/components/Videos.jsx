import { Play } from 'lucide-react';
import React, { useState } from 'react';

const Videos = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* video section  */}
            <section className="p-6 max-w-6xl mx-auto">

                <div
                    onClick={() => setOpen(true)}
                    className="relative aspect-video  rounded-4xl bg-cover bg-center cursor-pointer"
                    style={{
                        backgroundImage:
                            "url('https://img.youtube.com/vi/CoZuudNfZS0/maxresdefault.jpg')",
                    }}>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-white text-2xl border-2 border-white rounded-full w-17 h-14 flex items-center justify-center">
                            <Play />
                        </div>
                    </div>
                </div>


        {
            open && (
                <div className="fixed rounded-4xl inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative w-[150%] max-w-4xl aspect-video bg-black rounded-xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-1  p-1 rounded-full  text-white text-xl"
                        >
                            ✕
                        </button>
                        <iframe    className="w-[110%] h-[110%] rounded-xl" src="https://www.youtube.com/embed/CoZuudNfZS0?autoplay=1"  allow="autoplay; fullscreen" 
                           allowFullScreen/>
                    </div>
                </div>
            )
        }
            </section >
        </>
    );
};

export default Videos;