import {Navbar} from "./components/Navbar";
import {HeroSection} from "./components/HeroSection";
import {ServicesSection} from "./components/ServicesSection";
import {TechnologiesSection} from "./components/TechnologiesSection";
// import {SuccessCasesSection} from "./components/SuccessCasesSection";
import {ContactSection} from "./components/ContactSection";
import {Footer} from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="tecnologias">
          <TechnologiesSection />
        </section>
        {/* <section id="casos-exito">
          <SuccessCasesSection />
        </section> */}
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
