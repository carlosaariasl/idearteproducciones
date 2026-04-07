"use client";

import { motion } from "framer-motion";
import { Music, Video, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Music,
    number: "01",
    title: "Produccion Musical",
    description:
      "Pre/Produccion/Post Produccion completa para himnos institucionales, canciones corporativas, jingles, spots de radio y proyectos musicales de alto impacto.",
    features: [
      "Himnos Institucionales",
      "Canciones Corporativas",
      "Jingles y Spots",
      "Produccion para Lineas Telefonicas",
    ],
  },
  {
    icon: Video,
    number: "02",
    title: "Produccion Visual",
    description:
      "Creamos contenido audiovisual de calidad profesional: videos corporativos, spots de TV, documentales, testimoniales y contenido para redes sociales.",
    features: [
      "Videos Corporativos",
      "Spots de Television",
      "Documentales",
      "Contenido para Redes",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Produccion de Espectaculos",
    description:
      "Montaje completo de eventos corporativos, lanzamientos, celebraciones y convenciones a nivel nacional y regional.",
    features: [
      "Eventos Corporativos",
      "Lanzamientos",
      "Convenciones",
      "Celebraciones",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones Creativas
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ofrecemos un servicio integral de produccion audiovisual que abarca
            desde la conceptualizacion hasta la entrega final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-secondary rounded-xl group-hover:bg-accent/10 transition-colors">
                  <service.icon size={28} className="text-accent" />
                </div>
                <span className="font-mono text-4xl font-bold text-secondary">
                  {service.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all"
              >
                Solicitar Cotizacion
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
