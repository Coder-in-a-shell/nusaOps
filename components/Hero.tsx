"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electricBlue/20 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Scale Your Infrastructure. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonPurple">
            Cut Your Cloud Costs.
          </span>{" "}
          Ship Faster.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto mb-10 text-balance leading-relaxed"
        >
          We are a boutique Cloud, DevOps, and AI-Infrastructure agency. We don&apos;t bill you for hours; we deliver guaranteed technical outcomes for modern startups.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-electricBlue text-charcoal-900 font-bold text-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all"
          >
            Get Your Free Cloud Cost Audit
          </Link>
          <Link 
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-charcoal-800 text-white font-bold text-lg border border-charcoal-700 hover:bg-charcoal-700 hover:border-gray-600 transition-all"
          >
            See Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}