"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, Music, Video, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-muted diamond-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gold/10">
              <Image
                src="/images/studio-recording.png"
                alt="Estudio de grabacion IDEARTE Producciones"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl pointer-events-none" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-accent-foreground px-6 py-4 rounded-xl shadow-lg"
            >
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Anos de Experiencia</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-gold font-mono text-sm tracking-wider uppercase">
              Quienes Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Construimos Ideas{" "}
              <span className="text-gradient-gold">Creativas</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En IDEARTE Producciones somos una empresa guatemalteca dedicada a la
              produccion musical, visual y de espectaculos. Contamos con un equipo
              de profesionales creativos comprometidos con la excelencia y la
              innovacion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro objetivo es transformar las ideas de nuestros clientes en
              proyectos memorables que generen impacto y conexion emocional con
              sus audiencias.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-gold/10">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Music size={24} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Produccion Musical</p>
                  <p className="text-sm text-muted-foreground">Himnos y jingles</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-gold/10">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Video size={24} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Produccion Visual</p>
                  <p className="text-sm text-muted-foreground">Videos y spots</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-gold/10">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Sparkles size={24} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Espectaculos</p>
                  <p className="text-sm text-muted-foreground">Eventos en vivo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-gold/10">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Lightbulb size={24} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Creatividad</p>
                  <p className="text-sm text-muted-foreground">Ideas innovadoras</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
