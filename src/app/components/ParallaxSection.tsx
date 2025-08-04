'use client';
import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  speed?: number;
}

export const ParallaxSection = ({
  children,
  backgroundImage,
  className = "",
  speed = 0.5,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrolled = window.pageYOffset;
      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.backgroundPosition = `center ${yPos}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`relative bg-cover bg-center bg-fixed ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background-80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};