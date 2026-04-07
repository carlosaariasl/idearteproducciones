"use client";

import { motion } from "framer-motion";
import { Building2, Radio, Leaf, Droplets, Ship, Medal } from "lucide-react";

const clients = [
  {
    name: "Merck",
    description: "Empresa de contenedores",
    icon: Ship,
  },
  {
    name: "Disagro",
    description: "Empresa agricola",
    icon: Leaf,
  },
  {
    name: "Olmeca",
    description: "Aceite vegetal",
    icon: Droplets,
  },
  {
    name: "Emisoras Unidas",
    description: "Rumbo al Mundial - Radio Guatemala",
    icon: Radio,
  },
  {
    name: "Media Maraton de Coban",
    description: "Evento deportivo emblematico",
    icon: Medal,
  },
  {
    name: "Banrural",
    description: "Institucion financiera",
    icon: Building2,
  },
];

export function Clients() {
  return (
    <section className="py-20 bg-background border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-mono text-sm tracking-wider uppercase">
            Nuestros Clientes
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Confian en Nosotros
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl border border-gold/10 hover:border-gold/30 hover:bg-muted transition-all cursor-default"
              >
                <div className="p-3 bg-gold/10 rounded-full mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {client.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-tight">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
