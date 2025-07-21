'use client';
import { useState, useEffect } from 'react';


const reviews = [
    {
        id: 1,
        name: 'Eddie Cole',
        avatar: 'E',
        avatarColor: 'bg-purple-500',
        timeAgo: '7 months ago',
        rating: 5,
        text: 'Colin Faber is Toni Kukoc & I\'m Scottie Pipen. Together he is the very best team mate when it comes to dispatching loads. He knows the journey that I\'ve been through this year along. He has always had my back when he is away from the office. Best customer service I ever had in my 30 years of trucking. DOUBLE SOLID!!!'
    },
    {
        id: 2,
        name: 'Harjot kaur',
        avatar: 'H',
        avatarColor: 'bg-orange-500',
        timeAgo: '9 months ago',
        rating: 5,
        text: 'I have been with LOGITY for more than 3 years they have been very good, my dispatcher Max Roche is amazing, he goes above and beyond to get me good loads and making sure everything is good with paperwork and brokers.'
    },
    {
        id: 3,
        name: 'C T',
        company: 'Onyachik LLC',
        avatar: 'C',
        avatarColor: 'bg-green-500',
        timeAgo: '10 months ago',
        rating: 5,
        text: 'Logity Dispatch is hands down 5 stars!! Have only been working with Colin for 2 days and never dreamed my owner would find someone like him to be my dispatcher. I cannot say enough good about this company!'
    },
    {
        id: 4,
        name: 'William R. Kennedy',
        avatar: 'W',
        avatarColor: 'bg-blue-500',
        timeAgo: '2 months ago',
        rating: 5,
        text: 'This dispatch company is by far the best I\'ve been associated with in my 50 years of being an independent owner operator. Respect is the number one thing I\'ve noticed between dispatch and truckers!'
    },
    {
        id: 5,
        name: 'Matthew Smith',
        avatar: 'M',
        avatarColor: 'bg-red-500',
        timeAgo: '3 months ago',
        rating: 5,
        text: 'Great experience! My dispatcher Jake Sanchez has been very professional even though he is young he gets the job done and with my utmost respect!'
    }
];

export default function Reviews() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / 2)) % Math.ceil(reviews.length / 2));
    };

    const visibleReviews = reviews.slice(currentSlide * 2, currentSlide * 2 + 2);

    return (
        <section id="testimonials" className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="text-red-500">our customers</span>
                    </h2>
                </div>

                {/* Reviews Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                        →
                    </button>

                    {/* Reviews Grid */}
                    <div className="grid md:grid-cols-3 gap-8 px-16">
                        {/* Company Summary Card */}
                        <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto rounded-full border-2 border-blue-500 flex items-center justify-center mb-4">
                                    <div className="text-center">
                                        <div className="text-blue-600 font-bold text-sm">ONWAY</div>
                                        <div className="text-red-500 font-bold text-xs">Dispatch</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Onway Dispatch</h3>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <span className="text-2xl font-bold">4.6</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-lg ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">Based on 23 reviews</p>
                                <p className="text-gray-500 text-xs mb-4">powered by Google</p>
                                <a
                                    href="https://wa.me/19433009678?text=Hi! I saw the great reviews for Onway Dispatch and would like to learn more. Can you help me?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto"
                                >
                                    review us on
                                    <span className="text-lg">G</span>
                                </a>
                            </div>
                        </div>

                        {/* Individual Review Cards */}
                        {visibleReviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${300 + index * 200}ms` }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-lg`}>
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600">{review.name}</h4>
                                        {review.company && (
                                            <p className="text-sm text-gray-500">{review.company}</p>
                                        )}
                                        <p className="text-sm text-gray-500">{review.timeAgo}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(Math.ceil(reviews.length / 2))].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 