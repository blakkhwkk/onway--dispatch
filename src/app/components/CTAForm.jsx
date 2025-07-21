export default function CTAForm() {
    return (
        <section id="contact" className="py-16 px-4 bg-primary text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Free Setup</h2>
            <form className="max-w-xl mx-auto grid gap-4">
                <input type="text" placeholder="Your Name" className="p-3 rounded text-gray-900" />
                <input type="email" placeholder="Your Email" className="p-3 rounded text-gray-900" />
                <input type="tel" placeholder="Your Phone" className="p-3 rounded text-gray-900" />
                <button type="button" className="bg-accent text-primary font-semibold px-8 py-3 rounded shadow hover:bg-yellow-300 transition">Submit</button>
            </form>
        </section>
    );
} 