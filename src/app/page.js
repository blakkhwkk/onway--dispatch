import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TruckTypes from "./components/TruckTypes";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="font-sans bg-background min-h-screen text-gray-900">
      <Header />
      <Hero />
      <Services />
      <TruckTypes />
      <Team />
      <Reviews />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
