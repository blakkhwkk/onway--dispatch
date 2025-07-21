'use client';
import { useState, useEffect } from 'react';


const companyLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Services & Pricing', href: '/services' },
    { name: 'Shippers', href: '/shippers' },
    { name: 'Trucks Types', href: '/truck-types' }
];

const servicesColumn1 = [
    { name: 'Dispatching – Trucking Services', href: '/services/dispatching' },
    { name: 'Trucking Documents & Management Services', href: '/services/documents' },
    { name: 'Truckers Accounting', href: '/services/accounting' },
    { name: 'Freight Rate Negotiation Services', href: '/services/negotiation' },
    { name: 'DOT Compliance Services', href: '/services/compliance' },
    { name: 'IFTA Reporting', href: '/services/ifta' }
];

const servicesColumn2 = [
    { name: 'Document Dispatch Services', href: '/services/document-dispatch' },
    { name: 'Trucking Invoice Service', href: '/services/invoice' },
    { name: 'Company Formation Services', href: '/services/formation' },
    { name: 'Freight Factoring', href: '/services/factoring' },
    { name: 'Trucking Paperwork Services', href: '/services/paperwork' },
    { name: 'Trucking Accounting', href: '/services/trucking-accounting' }
];

const faqLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'How to start', href: '/how-to-start' }
];

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background Star Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 text-6xl">⭐</div>
                <div className="absolute top-40 right-20 text-4xl">⭐</div>
                <div className="absolute bottom-20 left-1/4 text-5xl">⭐</div>
                <div className="absolute top-1/2 right-1/3 text-3xl">⭐</div>
                <div className="absolute bottom-40 right-10 text-4xl">⭐</div>
                <div className="absolute top-1/3 left-1/3 text-5xl">⭐</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Company Info & Contact */}
                    <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {/* Logo */}
                        <div className="mb-8">
                            <div className="inline-flex items-center bg-blue-600 px-4 py-2 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">ONWAY</span>
                                <span className="text-white font-semibold text-xl ml-2">Dispatch</span>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 hover:text-white transition-colors duration-300">
                                    +1 (943) 300-9678
                                </span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 hover:text-white transition-colors duration-300">
                                    shery6r@gmail.com
                                </span>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 hover:text-white transition-colors duration-300">
                                    3524 Silverside Rd Ste 35B,<br />
                                    Wilmington, DE 19810, United States
                                </span>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <div>Monday - Friday: 7AM - 5PM</div>
                                    <div>Saturday - Sunday: Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COMPANY Links */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                        <h3 className="text-lg font-bold mb-6 text-white">COMPANY</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                                        style={{ transitionDelay: `${300 + index * 50}ms` }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SERVICES Column 1 */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                        <h3 className="text-lg font-bold mb-6 text-white">SERVICES</h3>
                        <ul className="space-y-3">
                            {servicesColumn1.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block text-sm"
                                        style={{ transitionDelay: `${500 + index * 50}ms` }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SERVICES Column 2 */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                        <h3 className="text-lg font-bold mb-6 text-white">SERVICES</h3>
                        <ul className="space-y-3">
                            {servicesColumn2.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block text-sm"
                                        style={{ transitionDelay: `${700 + index * 50}ms` }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQ Links */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                        <h3 className="text-lg font-bold mb-6 text-white">FAQ</h3>
                        <ul className="space-y-3">
                            {faqLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                                        style={{ transitionDelay: `${900 + index * 50}ms` }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`border-t border-gray-800 mt-12 pt-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © 2024 Onway Dispatch. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Terms of Service
                            </a>
                            <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Contact Button */}
            <div className="fixed bottom-8 left-8 z-50">
                <a
                    href="https://wa.me/19433009678?text=Hi! I'm interested in Onway Dispatch services. Can you help me get started?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                </a>
            </div>
        </footer>
    );
} 