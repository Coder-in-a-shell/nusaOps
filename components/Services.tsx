"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, BrainCircuit, Settings, Check } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <CircleDollarSign className="w-10 h-10 text-nusa-secondary" />,
      title: "Cloud Cost Optimization",
      problem: "Your cloud bill is too high and feels bloated.",
      solution: "We audit and optimize your infrastructure. Save 20-40%.",
      bullets: [
        "Architecture & resource audit",
        "Right-sizing recommendations",
        "Automated cost monitoring"
      ],
      timeline: "2-4 weeks",
      ctaText: "Get Free Audit",
      ctaLink: "#contact"
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-nusa-secondary" />,
      title: "AI/ML Infrastructure",
      problem: "Hosting AI models is expensive and complex.",
      solution: "We build scalable, cost-effective AI backends.",
      bullets: [
        "Vector database setup",
        "LLM API integration",
        "GPU cost optimization"
      ],
      timeline: "4-8 weeks",
      ctaText: "Get Consultation",
      ctaLink: "#contact"
    },
    {
      icon: <Settings className="w-10 h-10 text-nusa-accent" />,
      title: "Managed DevOps",
      problem: "You don't have a DevOps engineer on staff.",
      solution: "We become your reliable external DevOps team.",
      bullets: [
        "24/7 monitoring & alerts",
        "Incident response (<30m)",
        "99.9% uptime SLA"
      ],
      timeline: "Monthly retainer",
      ctaText: "Start Managed Service",
      ctaLink: "#contact"
    }
  ];

  return (
    <section id="services" className="py-24 bg-nusa-primary/20">
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
          <div className="w-24 h-1 bg-gradient-to-r from-nusa-secondary to-nusa-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-nusa-primary p-6 rounded-xl border border-nusa-primary/50 hover:border-nusa-secondary/50 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col"
            >
              {/* Icon at top, centered */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-nusa-bg rounded-full">
                  {service.icon}
                </div>
              </div>
              
              {/* Service Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-4">{service.title}</h3>
              
              {/* Content body */}
              <div className="flex-grow flex flex-col gap-3">
                {/* Problem Statement */}
                <p className="text-nusa-secondary italic text-sm text-center">
                  &quot;{service.problem}&quot;
                </p>
                
                {/* Solution */}
                <p className="text-white text-sm text-center font-medium">
                  {service.solution}
                </p>

                <div className="my-2 border-t border-nusa-bg/50"></div>

                {/* Key Benefits */}
                <ul className="flex flex-col gap-2 mb-4">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-nusa-text text-sm">
                      <Check className="w-4 h-4 text-nusa-success flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & CTA */}
              <div className="mt-auto pt-4 flex flex-col gap-3 border-t border-nusa-bg/50">
                <p className="text-xs text-gray-400 text-center uppercase tracking-wider font-semibold">
                  Timeline: {service.timeline}
                </p>
                <Link 
                  href={service.ctaLink}
                  className="w-full text-center px-4 py-2.5 rounded-md bg-nusa-bg text-white border border-nusa-secondary hover:bg-nusa-secondary transition-colors font-semibold text-sm"
                >
                  {service.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}