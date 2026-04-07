"use client";

import { motion } from "framer-motion";

const clients = [
  "Banrural",
  "Disagro",
  "Olmeca",
  "Emisoras Unidas",
  "Merck",
  "Carrera Coban",
];

export function Clients() {
  return (
    <section className="py-20 bg-background border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gold mb-10"
        >
          Confian en nosotros
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-gold/30 hover:text-gold transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
