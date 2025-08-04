import { Monitor, Smartphone, Cloud, Settings, Database, Shield } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { ParallaxSection } from "./ParallaxSection";
import servicesImage from "@/app/assets/services-bg.jpg";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y responsivas con las últimas tecnologías como React, Nextjs y TypeScript.",
      features: ["SPA y PWA", "E-commerce", "Dashboard administrativos"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android que ofrecen experiencias de usuario excepcionales.",
      features: ["React Native", "Flutter", "Apps nativas"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Computing",
      description: "Soluciones escalables en la nube con AWS, Azure y Google Cloud Platform.",
      features: ["Migración cloud", "Arquitectura serverless", "Microservicios"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "DevOps & CI/CD",
      description: "Automatización de despliegues y optimización de pipelines de desarrollo.",
      features: ["Docker", "Kubernetes", "GitLab CI/CD"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Base de Datos",
      description: "Diseño e implementación de bases de datos escalables y optimizadas.",
      features: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "QA y QC",
      description: "Aseguramiento de calidad con pruebas automatizadas y manuales para garantizar la estabilidad del software.",
      features: ["Pruebas Automatizadas", "Pruebas Manuales", "Seguridad de Aplicaciones"]
    }
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros{" "}
            <span className="bg-gradient-corporate bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos un amplio portafolio de servicios tecnológicos diseñados para cubrir integralmente las necesidades de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative p-6 space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-20 rounded-xl flex items-center justify-center group-hover:bg-primary-30 transition-colors duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>

        {/* Parallax Image Section */}
        <ParallaxSection
          backgroundImage={servicesImage.src}
          className="rounded-2xl overflow-hidden h-96 flex items-center justify-center"
          speed={0.3}
        >
          <div className="w-full flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                ¿Listo para empezar tu proyecto?
              </h3>
              <p className="text-xl text-muted-foreground">
                Contacta con nosotros y hagamos realidad tu visión.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};