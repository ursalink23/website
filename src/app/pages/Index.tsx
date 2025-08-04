import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "@/app/components/HeroSection";
import { ServicesSection } from "@/app/components/ServicesSection";
import { TechnologiesSection } from "@/app/components/TechnologiesSection";
// import { SuccessCasesSection } from "@/app/components/SuccessCasesSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <ServicesSection />
        <TechnologiesSection />
        {/* <SuccessCasesSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;