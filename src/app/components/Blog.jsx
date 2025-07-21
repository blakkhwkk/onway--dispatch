export default function Blog() {
    return (
        <section id="blog" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary">Latest News & Insights</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">How to Choose the Right Truck Dispatch Service</h3>
                        <p>Learn what to look for when selecting a dispatch partner for your fleet.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">5 Key Benefits of Using a Truck Dispatch Service</h3>
                        <p>Discover how dispatch services can boost your profitability and reduce stress.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Scaling from Owner-Operator to Fleet Owner</h3>
                        <p>Tips and strategies for growing your trucking business with confidence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 