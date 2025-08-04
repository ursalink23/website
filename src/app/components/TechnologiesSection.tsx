'use client';
import { TechnologyCard } from "./TechnologyCard";
import { useState } from "react";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Server,
  Zap,
  GitBranch
} from "lucide-react";

export const TechnologiesSection = () => {
  const technologies = [
    {
      icon: <Code className="h-8 w-8 text-corporate-red" />,
      name: "React",
      description: "Biblioteca para interfaces de usuario dinámicas y componentes reutilizables.",
      category: "Frontend"
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      name: "Nodejs",
      description: "Runtime de JavaScript para desarrollo del lado del servidor.",
      category: "Backend"
    },
    {
      icon: <Database className="h-8 w-8 text-corporate-gray" />,
      name: "PostgreSQL",
      description: "Base de datos relacional robusta y de código abierto.",
      category: "Database"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      name: "AWS",
      description: "Servicios de computación en la nube escalables y seguros.",
      category: "Cloud"
    },
    {
      icon: <Code className="h-8 w-8 text-corporate-red" />,
      name: "TypeScript",
      description: "JavaScript tipado para un desarrollo más robusto y mantenible.",
      category: "Language"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      name: "React Native",
      description: "Framework para desarrollo de aplicaciones móviles multiplataforma.",
      category: "Mobile"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      name: "Nextjs",
      description: "Framework de React para aplicaciones web de producción.",
      category: "Frontend"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      name: "MongoDB",
      description: "Base de datos NoSQL flexible y escalable para aplicaciones modernas.",
      category: "Database"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      name: "FastAPI",
      description: "Framework de Python moderno y rápido para APIs.",
      category: "Backend"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      name: "Docker",
      description: "Plataforma de contenedores para desarrollo y despliegue.",
      category: "DevOps"
    },
    {
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      name: "Kubernetes",
      description: "Orquestación de contenedores para aplicaciones escalables.",
      category: "DevOps"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      name: "Python",
      description: "Lenguaje versátil para desarrollo web, IA y automatización.",
      category: "Language"
    }
  ];


  const categories = ["Todos", "Frontend", "Backend", "Database", "Cloud", "Mobile", "DevOps", "Language"];
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredTechnologies = selectedCategory === "Todos"
    ? technologies
    : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="tecnologias" className="py-20 bg-muted-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tecnologías{" "}
            <span className="bg-gradient-corporate bg-clip-text text-transparent">
              Modernas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las últimas tecnologías y frameworks para crear soluciones robustas, escalables y eficientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
                ${selectedCategory === category
                  ? "bg-corporate-red text-white"
                  : "bg-corporate-red-20 text-corporate-red hover:bg-corporate-red-30"}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-full">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="animate-scale-in h-full flex"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-full flex flex-col h-full">
                <TechnologyCard
                  icon={tech.icon}
                  name={tech.name}
                  description={tech.description}
                  category={tech.category}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-card rounded-2xl border border-border shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siempre Actualizados
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Nuestro equipo se mantiene constantemente actualizado con las últimas tendencias y 
              tecnologías del mercado para ofrecerte siempre las mejores soluciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};