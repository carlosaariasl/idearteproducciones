"use client";

import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden diamond-pattern"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      
      {/* Decorative Gold Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c0c0c0" />
              <stop offset="50%" stopColor="#d4a853" />
              <stop offset="100%" stopColor="#e8c47a" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#goldGradient)"
            opacity="0.15"
          />
          <path
            d="M0,80 C300,40 600,100 900,60 C1050,40 1150,80 1200,70 L1200,120 L0,120 Z"
            fill="#d4a853"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/images/logo.png"
              alt="IDEARTE Producciones - La Certeza de su Exito"
              width={500}
              height={300}
              className="w-full max-w-md md:max-w-lg"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          >
            <span className="block">Creamos</span>
            <span className="block text-gradient-gold">Experiencias</span>
            <span className="block">Memorables</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Somos expertos en produccion musical, visual y de espectaculos.
            Transformamos ideas en proyectos de alto impacto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#portafolio"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-accent-foreground font-medium rounded-full hover:opacity-90 transition-all"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Ver Portafolio
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 border border-gold text-gold font-medium rounded-full hover:bg-gold/10 transition-colors"
            >
              Contactar
            </Link>
          </motion.div>
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
            <ArrowDown size={24} className="text-gold" />
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
