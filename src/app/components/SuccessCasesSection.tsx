import { Button } from "@/app/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ParallaxSection } from "./ParallaxSection";
import successImage from "@/app/assets/success-bg.jpg";
import teamImage from "@/app/assets/team-work.jpg";

export const SuccessCasesSection = () => {
  const cases = [
    {
      title: "E-commerce Avanzado",
      client: "TechRetail",
      description: "Plataforma de comercio electrónico con más de 10,000 productos y sistema de recomendaciones basado en IA.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: [
        "300% aumento en ventas",
        "50% reducción en tiempo de carga",
        "95% satisfacción del cliente"
      ],
      image: teamImage
    },
    {
      title: "App de Gestión Empresarial",
      client: "BusinessFlow",
      description: "Sistema integral de gestión empresarial con módulos de CRM, inventario y facturación.",
      technologies: ["React Native", "FastAPI", "MongoDB", "Docker"],
      results: [
        "80% reducción en tiempo de procesos",
        "200+ empresas activas",
        "99.9% uptime garantizado"
      ],
      image: successImage
    },
    {
      title: "Plataforma de Streaming",
      client: "StreamVision",
      description: "Plataforma de video streaming con capacidad para 100,000 usuarios concurrentes.",
      technologies: ["Next.js", "Kubernetes", "Redis", "CDN"],
      results: [
        "1M+ usuarios registrados",
        "4K streaming sin interrupciones",
        "Multi-región deployment"
      ],
      image: teamImage
    }
  ];

  return (
    <section id="casos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Casos de{" "}
            <span className="bg-gradient-corporate bg-clip-text text-transparent">
              Éxito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proyectos que han transformado negocios y han generado resultados excepcionales para nuestros clientes.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-20">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 animate-slide-in ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary-20 text-primary text-sm font-medium rounded-full">
                    {caseItem.client}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {caseItem.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Resultados:</h4>
                  <ul className="space-y-2">
                    {caseItem.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-corporate-red mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="bg-gradient-corporate hover:shadow-corporate">
                  Ver Proyecto Completo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <ParallaxSection
                  backgroundImage={caseItem.image.src}
                  className="h-96 rounded-2xl overflow-hidden shadow-elegant"
                  speed={0.2}
                >
                  <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                </ParallaxSection>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <ParallaxSection
            backgroundImage={successImage.src}
            className="rounded-2xl overflow-hidden"
            speed={0.3}
          >
            <div className="py-20 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ¿Quieres ser nuestro próximo caso de éxito?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trabajemos juntos para crear algo extraordinario que impulse tu negocio hacia el siguiente nivel.
              </p>
              <Button size="lg" className="bg-gradient-corporate hover:shadow-corporate text-lg px-8 py-6">
                Iniciar Conversación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};