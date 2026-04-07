"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Inmersion",
    description:
      "Nos sumergimos en tu marca, cultura y objetivos para entender profundamente tus necesidades y vision.",
  },
  {
    number: "2",
    title: "Creacion",
    description:
      "Desarrollamos conceptos creativos y estrategias que comunican tu mensaje de manera impactante.",
  },
  {
    number: "3",
    title: "Impacto",
    description:
      "Entregamos resultados que superan expectativas y generan conexiones memorables con tu audiencia.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Nuestro Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Un proceso que comienza y termina con tu vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-8xl font-bold text-accent/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Conoce mas sobre nuestro proceso
            <span className="text-xl">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
