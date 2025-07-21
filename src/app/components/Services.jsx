'use client';
import { useState, useEffect } from 'react';


const services = [
    {
        id: 1,
        title: "Dispatching – Trucking Services",
        subtitle: "Professional dispatch services",
        price: "From 3% of gross →",
        tags: ["NEW", "PROMOTION"],
        icon: "🚛",
        gradient: "from-purple-600 to-blue-600",
        size: "large"
    },
    {
        id: 2,
        title: "IFTA Reporting",
        subtitle: "Tax reporting services",
        icon: "🚛",
        gradient: "from-purple-600 to-blue-600",
        size: "small"
    },
    {
        id: 3,
        title: "Truckers Accounting",
        subtitle: "Financial management",
        icon: "🚛",
        gradient: "from-purple-600 to-blue-600",
        size: "small"
    },
    {
        id: 4,
        title: "Document Dispatch Services",
        subtitle: "Documentation support",
        tags: ["NEW"],
        icon: "🚛",
        gradient: "from-red-600 to-red-700",
        size: "medium"
    },
    {
        id: 5,
        title: "Trucking Paperwork Services",
        subtitle: "Paperwork management",
        icon: "🚛",
        gradient: "from-purple-600 to-blue-600",
        size: "small"
    }
];

const additionalServices = [
    { title: "Freight Factoring", icon: "💰", subtitle: "Dispatch Service" },
    { title: "DOT Compliance Services", icon: "🛡️", subtitle: "Dispatch Service" },
    { title: "Freight Rate Negotiation Services", icon: "🤝", subtitle: "Dispatch Service" },
    { title: "Company Formation Services", icon: "🏢", subtitle: "Dispatch Service" },
    { title: "Trucking Documents & Management Services", icon: "📁", subtitle: "Dispatch Service" },
    { title: "Trucking Invoice Service", icon: "📄", subtitle: "Dispatch Service" },
    { title: "Trucking Accounting", icon: "🧮", subtitle: "Dispatch Service" },
    { title: "All Services", icon: "📋", subtitle: "View complete list", special: true }
];

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="services" className="relative bg-gray-900 py-20 px-4 overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-spin"></div>
                <div className="absolute bottom-40 right-10 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-xl animate-float-delayed"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Discover our <span className="text-red-500">services</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Professional trucking dispatch services designed to maximize your profits and minimize your stress
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {/* Large Main Card */}
                    <div className={`md:col-span-2 lg:col-span-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div
                            className={`relative group cursor-pointer h-full bg-gradient-to-br ${services[0].gradient} rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-red-500/25 hover:shadow-2xl`}
                            onMouseEnter={() => setHoveredCard(1)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => {
                                const message = "Hi! I'm interested in learning more about Onway Dispatch services. Can you help me?";
                                const encodedMessage = encodeURIComponent(message);
                                window.open(`https://wa.me/19433009678?text=${encodedMessage}`, '_blank');
                            }}
                        >
                            {/* Tags */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                {services[0].tags.map((tag, index) => (
                                    <span
                                        key={tag}
                                        className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform transition-all duration-300 hover:scale-110"
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Truck Icon */}
                            <div className="text-center mb-6">
                                <div className={`text-8xl mb-4 transform transition-all duration-500 ${hoveredCard === 1 ? 'scale-110 rotate-12' : ''}`}>
                                    {services[0].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{services[0].title}</h3>
                                <p className="text-white/80">{services[0].subtitle}</p>
                            </div>

                            {/* Price Tag */}
                            <div className="absolute bottom-4 right-4">
                                <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transform transition-all duration-300 hover:scale-110 hover:bg-red-700">
                                    {services[0].price}
                                </span>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Small Cards */}
                    {services.slice(1, 3).map((service, index) => (
                        <div
                            key={service.id}
                            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${300 + index * 200}ms` }}
                        >
                            <div
                                className={`group cursor-pointer h-full bg-gradient-to-br ${service.gradient} rounded-xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25 hover:shadow-2xl`}
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => {
                                    const message = "Hi! I'm interested in learning more about Onway Dispatch services. Can you help me?";
                                    const encodedMessage = encodeURIComponent(message);
                                    window.open(`https://wa.me/19433009678?text=${encodedMessage}`, '_blank');
                                }}
                            >
                                <div className="text-center">
                                    <div className={`text-4xl mb-4 transform transition-all duration-500 ${hoveredCard === service.id ? 'scale-110 rotate-6' : ''}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-white/80 text-sm">{service.subtitle}</p>
                                </div>

                                {/* Arrow */}
                                <div className="absolute bottom-4 right-4 text-red-400 text-xl transform transition-all duration-300 group-hover:translate-x-1">
                                    →
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.slice(3).map((service, index) => (
                        <div
                            key={service.id}
                            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${600 + index * 200}ms` }}
                        >
                            <div
                                className={`group cursor-pointer h-full bg-gradient-to-br ${service.gradient} rounded-xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-red-500/25 hover:shadow-2xl`}
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => {
                                    const message = "Hi! I'm interested in learning more about Onway Dispatch services. Can you help me?";
                                    const encodedMessage = encodeURIComponent(message);
                                    window.open(`https://wa.me/19433009678?text=${encodedMessage}`, '_blank');
                                }}
                            >
                                {/* Tags */}
                                {service.tags && (
                                    <div className="absolute top-4 left-4">
                                        {service.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tag}
                                                className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold transform transition-all duration-300 hover:scale-110"
                                                style={{ animationDelay: `${tagIndex * 200}ms` }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="text-center">
                                    <div className={`text-3xl mb-4 transform transition-all duration-500 ${hoveredCard === service.id ? 'scale-110 rotate-6' : ''}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-white/80 text-sm">{service.subtitle}</p>
                                </div>

                                {/* Arrow */}
                                <div className="absolute bottom-4 right-4 text-red-400 text-xl transform transition-all duration-300 group-hover:translate-x-1">
                                    →
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {additionalServices.map((service, index) => (
                        <div
                            key={service.title}
                            className={`group cursor-pointer bg-gray-800 rounded-lg p-4 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25 hover:shadow-xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${900 + index * 100}ms` }}
                            onClick={() => {
                                const message = "Hi! I'm interested in learning more about Onway Dispatch services. Can you help me?";
                                const encodedMessage = encodeURIComponent(message);
                                window.open(`https://wa.me/19433009678?text=${encodedMessage}`, '_blank');
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`text-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${service.special ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {service.icon}
                                </div>
                                {service.special && (
                                    <div className="text-red-500 text-sm transform transition-all duration-300 group-hover:translate-x-1">
                                        →
                                    </div>
                                )}
                            </div>
                            <h4 className="text-white font-semibold text-sm mb-1">{service.title}</h4>
                            <p className="text-gray-400 text-xs">{service.subtitle}</p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for floating animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
} 