import Link from "next/link";
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
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                IDEARTE
              </span>
              <span className="block text-xs font-mono text-accent tracking-widest">
                PRODUCCIONES
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Productora audiovisual especializada en crear experiencias
              memorables que conectan marcas con su audiencia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
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
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="text-[8vw] md:text-[6vw] font-bold text-secondary/50 tracking-tight leading-none text-center select-none">
          IDEARTE
        </div>
      </div>
    </footer>
  );
}
