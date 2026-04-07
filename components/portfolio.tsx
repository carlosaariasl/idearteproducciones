"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const projects = [
  {
    category: "Musical",
    title: "Himno Nacional de Guatemala",
    description: "Produccion musical del Himno Nacional con arreglos sinfonicos modernos.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=GNa0unBLEAQ",
    featured: true,
  },
  {
    category: "Musical",
    title: "Himno Centroamerica",
    description: "Himno regional con participacion de artistas centroamericanos.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=uxDE_2aU-QQ",
  },
  {
    category: "Musical",
    title: "Carrera Coban",
    description: "Cancion oficial del evento deportivo mas importante de Guatemala.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=8jTWRsjQwUY",
  },
  {
    category: "Visual",
    title: "Campana del Corazon - Merck",
    description: "Video institucional para campana de salud cardiovascular.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=GUjiLKlg8Vs",
    featured: true,
  },
  {
    category: "Visual",
    title: "Video Corporativo Disagro",
    description: "Produccion audiovisual corporativa para empresa agroindustrial.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=QDkhJJEASDM",
  },
  {
    category: "Visual",
    title: "Video Corporativo Olmeca",
    description: "Video institucional para reconocida marca guatemalteca.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=ZjtKJuZSeE8",
  },
  {
    category: "Espectaculos",
    title: "Emisoras Unidas - Mundial 2022",
    description: "Produccion completa de cobertura para el Mundial de Qatar 2022.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=F12S1lGA_wA",
    featured: true,
  },
  {
    category: "Espectaculos",
    title: "Medio Maraton Coban",
    description: "Montaje y produccion del evento deportivo internacional.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://www.youtube.com/watch?v=aw95ZapTZXc",
  },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Nuestro Trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos <span className="text-gradient-gold">Destacados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Hemos trabajado con las marcas e instituciones mas importantes de
            Guatemala y Centroamerica.
          </p>
        </motion.div>

        {/* Featured Projects Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`aspect-video ${
                  index === 0 ? "lg:aspect-[4/3]" : ""
                } bg-secondary`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block font-mono text-xs text-gold mb-2">
                  {project.category}
                </span>
                <h3
                  className={`font-bold text-foreground mb-2 ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-lg"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={16} className="text-accent-foreground" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.slice(3).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-gold/50 transition-all"
            >
              <div className="aspect-video bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-mono text-xs text-gold">
                  {project.category}
                </span>
                <h3 className="font-semibold text-foreground text-sm mt-1">
                  {project.title}
                </h3>
              </div>
              <div className="absolute top-2 right-2 p-2 bg-gold/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={12} className="text-accent-foreground" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
