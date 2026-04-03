"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Infinity, BrainCircuit } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <CircleDollarSign className="w-10 h-10 text-electricBlue" />,
      title: "The Cloud Cost Cutter",
      copy: "Stop burning runway on bloated AWS/GCP bills. We audit your architecture and reduce your monthly cloud spend by 20-30%. If we don't save you money, our audit is completely free."
    },
    {
      icon: <Infinity className="w-10 h-10 text-neonPurple" />,
      title: "Zero-to-One CI/CD",
      copy: "Still doing manual, risky deployments? We architect bulletproof, automated Git-to-Production pipelines using GitHub Actions or GitLab so your team can ship code safely and instantly."
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-electricBlue" />,
      title: "Scalable AI & RAG Infra",
      copy: "Everyone wants AI, but hosting it is hard. We build the secure, scalable backend infrastructure (Vector DBs, Kubernetes operators, Cloud Run) you need to run your AI and LLM models efficiently."
    }
  ];

  return (
    <section id="services" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Specialized Engineering Services
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electricBlue to-neonPurple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-charcoal-800 p-8 rounded-xl border border-charcoal-700 hover:border-electricBlue/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] group"
            >
              <div className="mb-6 p-4 bg-charcoal-900 rounded-lg inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}