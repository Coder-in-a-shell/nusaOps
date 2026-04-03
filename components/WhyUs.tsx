"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      title: "Cross-Border Advantage:",
      desc: "A local business presence in SEA backed by elite engineering talent in India."
    },
    {
      title: "Outcome-Based:",
      desc: "We sell solutions, not hours. You pay for the result, not the time it takes."
    },
    {
      title: "Zero-Downtime Guarantee:",
      desc: "Infrastructure migrations and updates handled securely with zero disruption to your users."
    }
  ];

  return (
    <section id="how-we-work" className="py-24 bg-charcoal-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neonPurple/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Engineering Boutique <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonPurple">
                Built for Startups
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We understand the urgency of early-stage growth. That&apos;s why we focus strictly on outcomes that drive your business forward without the overhead of traditional agencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-electricBlue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}