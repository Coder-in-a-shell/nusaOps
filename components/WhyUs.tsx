"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    "Founded by cloud engineers (not MBAs)",
    "Outcome-based pricing (not hourly billing)",
    "24/7 support included",
    "Zero vendor lock-in"
  ];

  return (
    <section id="about" className="py-24 bg-nusa-bg relative overflow-hidden border-t border-nusa-primary">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-nusa-accent/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Why NusaOps?
            </h2>
            <div className="w-20 h-1 bg-nusa-secondary mb-8"></div>
            <p className="text-xl text-nusa-text mb-6">
              We&apos;re engineers, not salespeople. <br className="hidden md:block" />
              Local presence in South East Asia. Elite engineering in India.
            </p>
            <p className="text-xl text-nusa-text font-semibold text-nusa-accent">
              We optimize YOUR stack, not push unnecessary tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-nusa-primary p-8 rounded-2xl border border-nusa-primary/50 shadow-xl"
          >
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-nusa-success" />
                  </div>
                  <h4 className="text-lg font-medium text-white">{point}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}