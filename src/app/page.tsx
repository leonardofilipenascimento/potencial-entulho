import TopBar from "@/components/TopBar/TopBar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import ServiceArea from "@/components/ServiceArea/ServiceArea";
import Faq from "@/components/Faq/Faq";
import CtaStrip from "@/components/CtaStrip/CtaStrip";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <About />
        <Features />
        <ServiceArea />
        <Faq />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
