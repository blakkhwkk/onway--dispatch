'use client';
import Image from "next/image";

export default function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className=" border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-2xl font-extrabold text-red-600 group-hover:text-red-700 transition-colors duration-300">ONWAY</span>
                    <span className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">Dispatch</span>
                </div>
                {/* Language selector */}
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-700">
                    <span className="font-semibold">WE SPEAK</span>
                    <span role="img" aria-label="US" className="hover:scale-110 transition-transform duration-200">🇺🇸</span>
                    <span>and</span>
                    <span role="img" aria-label="ES" className="hover:scale-110 transition-transform duration-200">🇪🇸</span>
                </div>
                {/* Nav links */}
                <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-900">
                    <button
                        onClick={() => scrollToSection('services')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('trucks')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        Trucks
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        How to start
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('testimonials')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        Shippers
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('faq')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('company')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        Company
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-red-600 transition-colors duration-300 relative group"
                    >
                        Contact us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                </nav>
                {/* Call button */}
                <a href="tel:+13025202398" className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                    +1 (943) 300-96-78
                </a>
            </div>
        </header>
    );
} 