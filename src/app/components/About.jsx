export default function About() {
    return (
        <section id="about" className="py-16 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">About Onway Dispatch</h2>
                <p className="mb-6 max-w-2xl mx-auto">Onway Dispatch is dedicated to supporting truck drivers, owner-operators, and small fleets with professional dispatch services. We tailor our services to fit your unique needs, truck type, and goals.</p>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <div>
                        <div className="text-4xl font-bold text-primary">10+</div>
                        <div>Years of Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary">1B+</div>
                        <div>Lbs Dispatched</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary">$7.5k</div>
                        <div>Avg Gross Revenue</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary">30k+</div>
                        <div>Loads Booked</div>
                    </div>
                </div>
            </div>
        </section>
    );
} 