"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Rocket, BrainCircuit, Settings } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <CircleDollarSign className="w-8 h-8 text-nusa-secondary" />,
      title: "Cloud Cost Optimization",
      problem: "Your AWS bill is ₹5L/month but feels bloated",
      solution: "We audit your infrastructure, find waste, optimize. Typical results: 20-40% cost reduction.",
      bullets: [
        "Architecture audit",
        "Unused resource identification",
        "Reserved instance optimization",
        "Right-sizing recommendations",
        "Automated cost monitoring setup"
      ],
      meta: "Timeline: 2-4 weeks | Pricing: Free audit, ₹25K-50K implementation",
      guarantee: "If we don't save money, audit is FREE",
      ctaText: "Get Free Audit",
      ctaLink: "#contact"
    },
    {
      icon: <Rocket className="w-8 h-8 text-nusa-accent" />,
      title: "CI/CD & Deployment Automation",
      problem: "Your deploys take 30 mins and require manual steps. You're scared every release.",
      solution: "We build bulletproof, automated pipelines. Push code to production in seconds.",
      bullets: [
        "GitHub Actions / GitLab CI setup",
        "Automated testing integration",
        "Blue-green deployments",
        "Rollback automation",
        "Monitoring/alerting setup"
      ],
      meta: "Timeline: 3-6 weeks | Pricing: ₹1L-1.5L project",
      guarantee: "Zero-downtime deployments",
      ctaText: "Discuss Your Stack",
      ctaLink: "#contact"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-nusa-secondary" />,
      title: "AI/ML Infrastructure",
      problem: "You want to use AI/LLMs but hosting is expensive & complex",
      solution: "We build scalable, cost-effective AI infrastructure.",
      bullets: [
        "Vector database setup (Pinecone, Weaviate)",
        "LLM API integration (OpenAI, local models)",
        "Kubernetes + GPU optimization",
        "Model serving (FastAPI, TorchServe)",
        "Cost optimization for ML"
      ],
      meta: "Timeline: 4-8 weeks | Pricing: ₹1.5L-3L project",
      guarantee: "Achieves your performance targets",
      ctaText: "Get Consultation",
      ctaLink: "#contact"
    },
    {
      icon: <Settings className="w-8 h-8 text-nusa-accent" />,
      title: "Managed DevOps (Retainer)",
      problem: "You don't have a DevOps engineer on staff",
      solution: "We become your external DevOps team.",
      bullets: [
        "24/7 monitoring & alerts",
        "Incident response (<30 mins)",
        "Monthly optimization review",
        "Security patches",
        "Performance tuning",
        "Quarterly strategy calls"
      ],
      meta: "Pricing: ₹25K-50K/month (based on complexity)",
      guarantee: "99.9% uptime SLA",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-nusa-primary p-6 rounded-xl border border-nusa-bg hover:border-nusa-secondary/50 transition-colors shadow-lg flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-nusa-bg rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <div className="mb-6 flex-grow">
                <div className="mb-4">
                  <p className="text-nusa-secondary font-medium mb-1">Problem:</p>
                  <p className="text-nusa-text italic">&quot;{service.problem}&quot;</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-nusa-accent font-medium mb-1">Solution:</p>
                  <p className="text-white mb-2">{service.solution}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-nusa-text text-sm">
                      <span className="text-nusa-accent mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-nusa-bg pt-6">
                <p className="text-sm text-gray-400 mb-2">{service.meta}</p>
                <p className="text-sm text-nusa-success font-medium mb-6">Guarantee: {service.guarantee}</p>
                <Link 
                  href={service.ctaLink}
                  className="inline-block w-full text-center px-6 py-3 rounded-md bg-nusa-bg text-white border border-nusa-secondary hover:bg-nusa-secondary transition-colors font-semibold"
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