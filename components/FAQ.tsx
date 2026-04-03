"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What if your optimization doesn't save money?",
      a: "Our audit is completely free. You pay only if you implement. And we guarantee 20%+ savings in most cases."
    },
    {
      q: "How long does implementation take?",
      a: "Depends on scope. Cost optimization: 2-4 weeks. CI/CD: 3-6 weeks. AI infra: 4-8 weeks."
    },
    {
      q: "Will there be downtime?",
      a: "No. We use blue-green deployments and zero-downtime migration patterns."
    },
    {
      q: "Do you use specific technologies?",
      a: "We're cloud-agnostic. AWS, GCP, Azure, DigitalOcean - we optimize whatever you're using."
    },
    {
      q: "Can you help with Kubernetes?",
      a: "Yes. K8s optimization, operators, scaling, monitoring - we handle it all."
    },
    {
      q: "What about security?",
      a: "Security-first approach. All configs reviewed, secrets managed, compliance checked."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-nusa-primary/20 border-t border-nusa-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-24 h-1 bg-nusa-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-nusa-bg border border-nusa-primary rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-nusa-secondary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-nusa-accent" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-nusa-text"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}