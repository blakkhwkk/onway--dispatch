export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary">What Our Clients Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded shadow">
                        <p className="mb-2">“Onway Dispatch is the best partner I’ve had in my 20 years of trucking. They handle everything so I can focus on the road.”</p>
                        <div className="font-semibold">— William R. Kennedy</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded shadow">
                        <p className="mb-2">“My dispatcher knows my preferences and always finds the best loads. Highly recommend!”</p>
                        <div className="font-semibold">— Harjot Kaur</div>
                    </div>
                </div>
            </div>
        </section>
    );
} 