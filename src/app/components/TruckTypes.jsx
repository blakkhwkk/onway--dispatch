'use client';
import { useState, useEffect } from 'react';


const truckTypes = [
    {
        name: 'Box Truck',
        image: 'https://logitydispatch.com/wp-content/uploads/2025/02/frame_1984077560-1-scaled.webp',
    },
    {
        name: 'Hotshot',
        image: 'https://logitydispatch.com/wp-content/uploads/2021/04/frame_1984077563-scaled.webp',
    },
    {
        name: 'Power Only',
        image: 'https://logitydispatch.com/wp-content/uploads/2021/02/frame_1984077562-scaled.webp',
    },
    {
        name: 'Flatbed',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Reefer',
        image: 'https://logitydispatch.com/wp-content/uploads/2020/10/frame_1984077561-scaled.webp',
    },
    {
        name: 'Dry Van',
        image: 'https://logitydispatch.com/wp-content/uploads/2020/10/frame_1984077351-4-scaled.webp',
    }

];

export default function TruckTypes() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="trucks" className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Heading, Subheading, CTA */}
                <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-5xl font-extrabold mb-2">
                        Choose your <span className="text-red-500">truck type</span>
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 mt-4 max-w-md">
                        Your trucks will stay loaded, your routes optimized, and your paperwork handled — so you can focus on the road.
                    </p>
                    <a
                        href="https://wa.me/19433009678?text=Hi! I'd like to get a free setup with Onway Dispatch. Can you help me get started?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
                    >
                        Get a free setup
                    </a>
                </div>
                {/* Right Side: Truck Type Grid */}
                <div className="grid grid-cols-2 grid-rows-4 gap-4">
                    {truckTypes.map((type, i) => (
                        <div
                            key={type.name}
                            className={`relative rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${200 + i * 80}ms` }}
                        >
                            <img
                                src={type.image}
                                alt={type.name}
                                className="w-full h-28 object-cover group-hover:scale-110 group-hover:blur-[1px] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-red-700/80 group-hover:via-red-400/30 group-hover:to-black/10 transition-all duration-500" />
                            <span className="absolute left-4 bottom-4 text-lg md:text-xl font-bold text-white drop-shadow-lg group-hover:text-red-300 transition-colors duration-300">
                                {type.name}
                            </span>
                            <span className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-white text-xl transition-opacity duration-300">
                                🚚
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 