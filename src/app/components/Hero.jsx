'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroTruck from '../assests/HeroTruck.jpg';


export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-gray-900 overflow-hidden">
            {/* Background image with parallax effect */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={HeroTruck}
                    alt="Red Semi Truck"
                    fill
                    className="object-cover opacity-80 animate-pulse"
                    style={{
                        animation: 'pulse 4s ease-in-out infinite',
                    }}
                    priority
                />
                {/* Animated overlay - more transparent with truck colors */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-red-800/30 to-gray-900/50 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block transform hover:scale-105 transition-transform duration-300">
                        1000+ LOADS BOOKED | 500000 LBS DISPATCHED
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                    Don't drive{' '}
                    <span className="text-red-400 hover:text-red-300 transition-colors duration-300">empty</span>
                    <br />
                    Drive with{' '}
                    <span className="text-red-400 hover:text-red-300 transition-colors duration-300">Onway</span>
                </h1>

                {/* Subheadline */}
                <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                    We'll help you earn more — and stress less
                </p>

                {/* CTA Button */}
                <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                    <a
                        href="https://wa.me/19433009678?text=Hi! I'd like to get a free setup with Onway Dispatch. Can you help me get started?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform inline-block"
                    >
                        Get your free setup
                    </a>
                </div>

                {/* Rating */}
                <div className={`flex items-center justify-center gap-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                    </div>
                    <span className="text-gray-300 text-sm">4.3/5 from 500+ reviews</span>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}></div>
                <div className={`absolute bottom-20 right-10 w-6 h-6 bg-blue-500 rounded-full animate-bounce transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1400ms' }}></div>
                <div className={`absolute top-1/2 left-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1600ms' }}></div>
            </div>
        </section>
    );
} 