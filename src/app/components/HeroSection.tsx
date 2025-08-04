'use client';
import { Button } from "@/app/components/ui/button";
import { ParallaxSection } from "./ParallaxSection";
import heroImage from "@/app/assets/hero-bg.jpg";
import { MouseEvent } from "react";

export const HeroSection = () => {
  // Scroll suave al hacer clic en el botón
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ParallaxSection
      backgroundImage={heroImage.src}
      className="min-h-screen items-center"
      speed={0.5}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-1 items-center justify-center min-h-screen">
        <div className="text-center space-y-8 animate-fade-in w-full">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Convertimos tus procesos en soluciones digitales escalables
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Usando tecnología innovadora que impulsa el crecimiento de tu
              negocio.
            </p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { number: "5+", label: "Años de Experiencia" },
              { number: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-corporate-red">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-corporate-red text-corporate-red hover:bg-corporate-red-10 text-lg px-8 py-8"
            >
              <a href="#contacto" onClick={e => handleSmoothScroll(e, '#contacto')}>Comenzar Proyecto</a>
            </Button>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};
