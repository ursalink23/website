import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hablemos de tu{" "}
            <span className="bg-gradient-corporate bg-clip-text text-transparent">
              Proyecto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una idea? ¿Necesitas mejorar tu tecnología actual? 
            Estamos aquí para ayudarte a hacerla realidad.
          </p>
        </div>

        {/* Contact Form */}
        <div className="animate-scale-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};