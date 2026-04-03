"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Rocket, LineChart } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-nusa-secondary" />,
      title: "Discovery Call (Free)",
      desc: "30-min call to understand your infrastructure, goals, and pain points. No obligation.",
      duration: ""
    },
    {
      icon: <Search className="w-8 h-8 text-nusa-accent" />,
      title: "Technical Audit",
      desc: "Our engineers analyze your setup. Find optimization opportunities. Calculate ROI.",
      duration: "Duration: 1-2 weeks"
    },
    {
      icon: <FileText className="w-8 h-8 text-nusa-secondary" />,
      title: "Proposal & Agreement",
      desc: "Detailed proposal with specific recommendations, timeline, pricing, and expected results."
    },
    {
      icon: <Rocket className="w-8 h-8 text-nusa-accent" />,
      title: "Implementation",
      desc: "Our team executes the project. Zero downtime. Your team trained."
    },
    {
      icon: <LineChart className="w-8 h-8 text-nusa-secondary" />,
      title: "Monitoring & Support",
      desc: "Ongoing monitoring, optimization, and support included."
    }
  ];

  return (
    <section id="how-we-work" className="py-24 bg-nusa-bg border-t border-nusa-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Process (Simple & Proven)
          </motion.h2>
          <div className="w-24 h-1 bg-nusa-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-nusa-primary/50"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 w-full flex ${index % 2 !== 0 ? 'md:justify-start pl-8' : 'md:justify-end pr-8'} mb-8 md:mb-0`}>
                  <div className="bg-nusa-primary p-8 rounded-xl border border-nusa-primary/50 hover:border-nusa-secondary/30 transition-colors shadow-lg max-w-lg w-full text-left">
                    <div className="text-nusa-accent font-mono text-sm mb-2">STEP {index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-nusa-text">{step.desc}</p>
                    {step.duration && <p className="text-sm text-gray-400 mt-4">{step.duration}</p>}
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-nusa-bg border-4 border-nusa-primary">
                  {step.icon}
                </div>

                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}