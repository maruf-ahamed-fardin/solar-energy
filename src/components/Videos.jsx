import { Play, X } from "lucide-react";
import { useState } from "react";

const Videos = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative max-w-6xl mx-auto p-6">

            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-neutral-800 shadow-2xl">

                <div
                    className="absolute inset-0 bg-cover bg-center scale-125 saturate-125 contrast-125"
                    style={{
                        backgroundImage:
                            "url('https://img.youtube.com/vi/k6veDQ6nWUQ/maxresdefault.jpg')",
                    }}
                />



                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />


                <button
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                >
                    <span className="relative flex items-center justify-center w-24 h-24 rounded-full
                           bg-white/10 backdrop-blur-md border border-white/30
                           group-hover:scale-110 transition duration-300
                           shadow-[0_0_60px_rgba(255,255,255,0.35)]">
                        <Play className="text-white w-10 h-10 ml-1" />
                    </span>
                </button>
            </div>


            {open && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-5xl aspect-video animate-scaleIn">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-12 right-0 text-white opacity-70 hover:opacity-100"
                        >
                            <X size={28} />
                        </button>

                        <iframe
                            className="w-full h-full rounded-2xl shadow-2xl"
                            src="https://www.youtube.com/embed/k6veDQ6nWUQ?autoplay=1"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Videos;
