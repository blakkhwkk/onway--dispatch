'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import next/image


// Import images
import geoffreyImage from '../../app/assests/geoffrey.jpeg';
import sarmadImage from '../../app/assests/down.jpg';
import sherazImage from '../../app/assests/sheraz.jpg';

const teamMembers = [
    {
        name: 'Geoffrey Taylor',
        position: 'CEO',
        src: geoffreyImage,
        description: 'Leading Onway Dispatch with strategic vision and industry expertise.',
    },
    {
        name: 'Sarmad Khalid',
        position: 'Operations Manager',
        src: sarmadImage,
        description: 'Overseeing day-to-day operations and ensuring smooth service delivery.',
    },
    {
        name: 'Muhammad Sheraz',
        position: 'Dispatch Team Head',
        src: sherazImage,
        description: 'Managing our dispatch team and optimizing load assignments.',
    },
];

export default function Team() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="company" className="bg-gray-900 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Meet Our <span className="text-red-500">Team</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The dedicated professionals behind Onway Dispatch's success
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className={`text-center group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${300 + index * 200}ms` }}
                        >
                            {/* Round Image Container */}
                            <div className="relative mb-6">
                                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:shadow-red-500/25 transition-all duration-500 group-hover:scale-105">
                                    <Image
                                        src={member.src}
                                        alt={member.name}
                                        width={192} // Match w-48 (48 * 4 = 192px)
                                        height={192} // Match h-48
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 rounded-full bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-2xl">🚚</span>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold group-hover:text-red-400 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-red-400 font-semibold text-lg">{member.position}</p>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                                    {member.description}
                                </p>
                            </div>

                            {/* Social/Contact Icons */}
                            <div className="flex justify-center gap-4 mt-6">
                                <a
                                    href="https://wa.me/19433009678?text=Hi! I'd like to contact Onway Dispatch about your services. Can you help me?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <span className="text-lg">📧</span>
                                </a>
                                <a
                                    href="https://wa.me/19433009678?text=Hi! I'd like to work with the Onway Dispatch team. Can you help me get started?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <span className="text-lg">💼</span>
                                </a>
                                <a
                                    href="https://wa.me/19433009678?text=Hi! I'd like to contact Onway Dispatch about your services. Can you help me?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <span className="text-lg">📱</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div
                    className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <p className="text-gray-300 mb-6">Ready to work with our experienced team?</p>
                    <a
                        href="https://wa.me/19433009678?text=Hi! I'd like to work with the Onway Dispatch team. Can you help me get started?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
}