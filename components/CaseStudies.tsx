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
    {
      client: "HealthApp Connect",
      company: "Digital Health Provider",
      challenge: "Scaling AI inference was cost-prohibitive and latency was unacceptable for real-time predictions.",
      solution: "Migrated to optimized Kubernetes cluster with Weaviate and local LLM serving via FastAPI.",
      results: [
        "Inference latency: 1.2s → 200ms",
        "Infra costs: 40% under budget",
        "Zero downtime during migration"
      ],
      quote: "Their expertise in AI infrastructure saved us months of trial and error. We're now serving predictions 5x faster at a fraction of the expected cost."
    },
    {
      client: "FinTech Solutions",
      company: "Payment Gateway",
      challenge: "DevOps turnover left the company without proper incident response or monitoring for critical financial services.",
      solution: "Took over as managed DevOps team, implemented 24/7 monitoring, automated patching, and strict SLAs.",
      results: [
        "Incident response: < 15 mins",
        "Compliance achieved in 2 weeks",
        "100% infrastructure visibility"
      ],
      quote: "Having NusaOps act as our external DevOps team has been a game-changer. We no longer worry about late-night alerts, and our system has never been more stable."
    }
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
              className="bg-nusa-primary/30 p-8 rounded-xl border border-nusa-primary relative hover:border-nusa-secondary/30 transition-colors shadow-lg flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-nusa-primary opacity-40" />
              
              {/* Client Quote */}
              <div className="mb-8 relative z-10 flex-grow">
                <p className="italic text-nusa-text text-base leading-relaxed">
                  &quot;{study.quote}&quot;
                </p>
              </div>

              {/* Key Results */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {study.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-nusa-success flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Info */}
              <div className="border-t border-nusa-primary pt-6 mt-auto">
                <h3 className="text-lg font-bold text-white mb-1">{study.client}</h3>
                <p className="text-nusa-accent text-sm font-medium">{study.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}