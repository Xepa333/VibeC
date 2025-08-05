import React from 'react';
import { DigitalLogo } from './ui/Icons.jsx';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-white">
            {/* Background elements are now managed globally in App.tsx */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <DigitalLogo className="h-24" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    Maximizing HCP Engagement Through P2P and Scientific Platforms
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light mb-12" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    Tom & Lena
                </p>

                <div className="absolute bottom-[-10rem] left-1/2 -translate-x-1/2 w-[200%] max-w-[1200px] h-[300px] opacity-20">
                    <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M-100 150 Q 400 -50 900 120" stroke="currentColor" fill="transparent" strokeWidth="3"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;