export default function Features() {
    return (
        <section id="features" className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">End-to-End Service</h3>
                        <p>From freight sourcing and rate negotiation to invoicing and reporting — we’ve got your back.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Dedicated Dispatcher</h3>
                        <p>Your personal dispatcher is available 24/7 to handle problems, paperwork, or route changes.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Nationwide Reach</h3>
                        <p>Whether you're doing regional hauls or nationwide runs, we’re with you every mile.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 