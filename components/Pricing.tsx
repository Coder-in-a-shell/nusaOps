"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-nusa-bg border-t border-nusa-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Transparent Pricing (No Surprises)
          </motion.h2>
          <p className="text-xl text-nusa-text mb-6">Choose what works for you</p>
          <div className="w-24 h-1 bg-nusa-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-nusa-primary p-8 rounded-2xl border border-nusa-primary/50 shadow-xl flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Free Audit</h3>
            <p className="text-nusa-accent text-sm mb-6">Cloud Cost Optimization Audit</p>
            <div className="text-4xl font-extrabold text-white mb-6">FREE</div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-success" /> Architecture analysis</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-success" /> Cost breakdown report</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-success" /> Savings recommendations</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-success" /> ROI calculation</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-success" /> Implementation roadmap</li>
            </ul>
            <p className="text-sm text-gray-400 mb-6">Timeline: 1-2 weeks</p>
            <Link href="#contact" className="w-full py-3 px-4 bg-nusa-bg border-2 border-nusa-secondary text-white rounded-md text-center font-bold hover:bg-nusa-secondary transition-colors">
              Schedule Audit
            </Link>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-nusa-primary to-nusa-bg p-8 rounded-2xl border-2 border-nusa-secondary shadow-[0_0_30px_rgba(255,107,53,0.15)] flex flex-col relative"
          >
            <div className="absolute top-0 right-0 bg-nusa-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">POPULAR</div>
            <h3 className="text-2xl font-bold text-white mb-2">Project-Based</h3>
            <p className="text-nusa-accent text-sm mb-6">One-Time Implementation</p>
            <div className="text-lg text-white mb-6 space-y-2">
              <div className="flex justify-between border-b border-nusa-primary pb-2"><span className="text-gray-400 text-sm">Cloud Opt.</span> <span className="font-semibold">₹25K - ₹50K</span></div>
              <div className="flex justify-between border-b border-nusa-primary pb-2"><span className="text-gray-400 text-sm">CI/CD Setup</span> <span className="font-semibold">₹1L - ₹1.5L</span></div>
              <div className="flex justify-between border-b border-nusa-primary pb-2"><span className="text-gray-400 text-sm">AI Infra</span> <span className="font-semibold">₹1.5L - ₹3L</span></div>
              <div className="flex justify-between"><span className="text-gray-400 text-sm">DB Migration</span> <span className="font-semibold">₹50K - ₹1.5L</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-secondary" /> Full implementation</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-secondary" /> Team training</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-secondary" /> Documentation</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-secondary" /> 30-day support</li>
            </ul>
            <p className="text-sm text-gray-400 mb-6">Timeline: 2-8 weeks</p>
            <Link href="#contact" className="w-full py-3 px-4 bg-nusa-secondary text-white rounded-md text-center font-bold hover:bg-[#e55a2b] transition-colors shadow-lg">
              Get Custom Quote
            </Link>
          </motion.div>

          {/* Option 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-nusa-primary p-8 rounded-2xl border border-nusa-primary/50 shadow-xl flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Monthly Retainer</h3>
            <p className="text-nusa-accent text-sm mb-6">Managed DevOps Service</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-extrabold text-white">₹25K - 50K</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> 24/7 monitoring & alerts</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> Incident response (&lt;30 mins)</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> Monthly optimization review</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> Security patch management</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> Performance tuning</li>
              <li className="flex items-center gap-3 text-nusa-text"><CheckCircle2 className="w-5 h-5 text-nusa-accent" /> 99.9% uptime SLA</li>
            </ul>
            <Link href="#contact" className="w-full py-3 px-4 bg-nusa-bg border-2 border-nusa-accent text-white rounded-md text-center font-bold hover:bg-nusa-accent hover:text-nusa-bg transition-colors">
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}