"use client";

import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,255,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase">
            Productora Audiovisual
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            <span className="block">Creamos</span>
            <span className="block text-accent">Experiencias</span>
            <span className="block">Memorables</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Somos expertos en produccion musical, visual y de espectaculos.
            Transformamos ideas en proyectos de alto impacto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="#portafolio"
              className="group flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Ver Portafolio
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
            >
              Contactar
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <span className="font-mono text-xs text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          Guatemala, C.A.
        </span>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <span className="font-mono text-xs text-muted-foreground [writing-mode:vertical-lr]">
          Est. 2010
        </span>
      </div>
    </section>
  );
}
