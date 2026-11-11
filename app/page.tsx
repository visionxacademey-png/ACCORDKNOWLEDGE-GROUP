import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero */}
      <Hero />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. How We Help (Process) */}
      <Process />

      {/* 8. CTA */}
      <CTA />

      {/* 9. Contact */}
      <ContactSection />
    </>
  );
}

