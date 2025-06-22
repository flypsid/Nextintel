import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Homepage = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <Navbar />
      <main className="scroll-smooth pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("heroDescription")}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              {t("ctaButton")}
            </a>
          </div>
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
};

export default Homepage;
