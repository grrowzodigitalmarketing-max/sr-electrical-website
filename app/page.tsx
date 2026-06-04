import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Projects from "@/components/home/Projects";
import Clients from "@/components/home/Clients";
import Certifications from "@/components/home/Certifications";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <Certifications />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}