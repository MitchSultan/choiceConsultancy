import Image from "next/image";

import Navbar from "./components/navbar";
import HeroCarousel from "./components/hero-carousel";
import ServicesSection from "./components/service-section";
import AboutSection from "./components/about-section";
import Footer from "./components/footer";

export default function Home() {
  return (
   <>
   <Navbar/>
    <HeroCarousel />
    <ServicesSection/>
    <AboutSection/>
    <Footer/>
   </>
  );
}
