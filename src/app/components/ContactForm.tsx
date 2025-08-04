'use client';
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Usar variables de entorno definidas en .env.local
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      toast.success("¡Mensaje enviado correctamente! Te contactaremos pronto.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            <span className="bg-gradient-corporate bg-clip-text text-transparent">
              En{" "}<strong style={{ fontFamily: "SquareFont" }}>UrsaLink</strong>
            </span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Estamos listos para ayudarte a convertir tus ideas en soluciones reales.
            Contáctanos y descubre cómo podemos hacer crecer tu negocio.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-20 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-muted-foreground">contacto@ursalink.com.pe</p>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-20 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Teléfono</h4>
              <p className="text-muted-foreground">+34 123 456 789</p>
            </div>
          </div> */}

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-20 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Ubicación</h4>
              <p className="text-muted-foreground">Perú</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Card className="border-border shadow-elegant">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Envíanos un mensaje</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                required
                rows={6}
                className="bg-background border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-corporate hover:shadow-corporate"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};