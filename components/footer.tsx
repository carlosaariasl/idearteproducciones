import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Produccion Musical", href: "#servicios" },
    { label: "Produccion Visual", href: "#servicios" },
    { label: "Produccion de Espectaculos", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-gold/20 diamond-pattern">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="IDEARTE Producciones"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Productora audiovisual especializada en crear experiencias
              memorables que conectan marcas con su audiencia.
            </p>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:info@idearteproducciones.com.gt" 
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                info@idearteproducciones.com.gt
              </a>
              <a 
                href="tel:+50253009050" 
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                +502 5300 9050
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe noticias y actualizaciones de nuestros proyectos.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-accent-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gold/20 gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IDEARTE Producciones. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="text-[8vw] md:text-[6vw] font-bold text-gradient-gold opacity-20 tracking-tight leading-none text-center select-none">
          IDEARTE
        </div>
      </div>
    </footer>
  );
}
