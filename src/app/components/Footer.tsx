'use client';
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { MouseEvent } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll suave para los enlaces rápidos
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.74 104.96"
              style={{ display: 'block' }}
              className="h-12 w-auto object-contain"
            >
              <text transform="translate(103.99 83.54)" fontFamily="Square" fontSize="90">
                <tspan x="0" y="0" fill="#e9484b">URS</tspan>
                <tspan x="156.36" y="0" fill="#e9484b">A</tspan>
                <tspan x="208.48" y="0" fill="#444746">LINK</tspan>
              </text>
              <polygon points="97.09 104.46 96.78 104.46 72.5 104.36 72.45 104.22 65.71 84.2 59.14 90.6 63.18 104.43 42.92 104.42 33.46 81.22 21.87 104.36 21.74 104.36 .64 104.46 7.04 78 5.94 64.7 6.03 64.63 39.58 37.63 24.91 11.41 24.94 11.32 28.21 .66 28.42 .74 64.53 14.53 60.16 17.75 82.5 43.28 82.51 43.34 85.4 63.76 85.91 76.45 97.09 104.46" fill="none" stroke="#444746" strokeMiterlimit="10"/>
              <polygon points="6.38 64.89 7.47 78.03 7.46 78.07 1.18 104.03 21.61 103.94 33.5 80.19 43.2 104 62.62 104.01 58.66 90.47 58.75 90.39 65.9 83.42 72.81 103.94 96.46 104.03 85.49 76.5 84.97 63.8 82.09 43.46 59.53 17.68 63.65 14.65 28.49 1.22 25.37 11.36 40.13 37.74 39.99 37.85 6.38 64.89" fill="none"/>
              <polygon points="31.23 104.46 28.13 90.92 28.16 90.85 33.5 80.19 43.38 104.42 31.23 104.46" fill="#444746"/>
              <polygon points="28.57 90.97 31.56 104.03 42.74 104 33.46 81.22 28.57 90.97" fill="#444746" stroke="#444746" strokeMiterlimit="10"/>
              <polygon points="10.77 104.41 29.33 73.91 34.58 51.78 33.67 80.8 21.87 104.36 10.77 104.41" fill="#444746"/>
              <polygon points="34.02 55.96 29.71 74.1 11.53 103.98 21.61 103.94 33.27 80.65 34.02 55.96" fill="#444746"/>
              <polygon points="58.79 90.93 56.6 83.82 56.61 83.78 60.57 58.77 66.04 83.88 58.79 90.93" fill="#444746"/>
              <polygon points="57.04 83.79 59 90.14 65.57 83.74 60.64 61.07 57.04 83.79" fill="#444746"/>
              <polygon points="53.86 67.11 39.66 37.78 25.49 12.06 50.75 31.92 43.07 29.5 55.89 41.14 47.6 40.42 53.86 67.11" fill="#444746"/>
              <polygon points="26.87 13.69 40.04 37.58 52.57 63.47 47.05 39.94 54.67 40.61 41.35 28.51 48.65 30.81 26.87 13.69" fill="#444746"/>
            </svg>
            </div>
            <p className="text-muted-foreground">
              Desarrollo de software innovador con tecnologías de vanguardia.
              Transformamos ideas en soluciones digitales exitosas.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-corporate-red cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-corporate-red cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-corporate-red cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Tecnologías", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-corporate-red transition-colors duration-200"
                    onClick={e => handleSmoothScroll(e, `#${item.toLowerCase().replace('í', 'i').replace(/\s+/g, "-")}`)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Desarrollo Web",
                "Aplicaciones Móviles",
                "Cloud Computing",
                "DevOps",
                "Consultoría IT"
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-corporate-red" />
                <span className="text-muted-foreground">contacto@ursalink.com.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-corporate-red" />
                <span className="text-muted-foreground">Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {currentYear} UrsaLink. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-corporate-red transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-corporate-red transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};