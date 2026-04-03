"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      client: "TechStartup Inc", // Placeholder
      company: "SaaS Platform",
      challenge: "AWS bills growing 15% MoM without traffic increase. Manual deploys causing weekly incidents.",
      solution: "Right-sized EC2 instances, moved to reserved capacity. Implemented GitHub Actions CI/CD pipeline.",
      results: [
        "₹1.2L/month cost savings (35%)",
        "Deploy time: 45 mins → 3 mins",
        "Uptime: 99.1% → 99.95%"
      ],
      quote: "NusaOps didn't just cut our bill; they fundamentally improved how our engineering team ships code. Best ROI we've had this year."
    },
    // Add more case studies here easily
  ];

  return (
    <section id="case-studies" className="py-24 bg-nusa-primary/20 border-t border-nusa-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Real Results
          </motion.h2>
          <div className="w-24 h-1 bg-nusa-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-nusa-bg p-8 rounded-xl border border-nusa-primary relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-nusa-primary opacity-50" />
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{study.client}</h3>
                <p className="text-nusa-accent text-sm">{study.company}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Challenge:</p>
                  <p className="text-nusa-text text-sm">&quot;{study.challenge}&quot;</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Solution:</p>
                  <p className="text-nusa-text text-sm">{study.solution}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2 text-nusa-success text-sm font-medium">
                        <span className="mt-1">•</span> {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-nusa-primary pt-6">
                <p className="italic text-nusa-text text-sm">&quot;{study.quote}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}