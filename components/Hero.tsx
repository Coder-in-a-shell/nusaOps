"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-nusa-bg">
      {/* Background subtle elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nusa-accent/10 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nusa-secondary/10 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Scale Your Infrastructure. <br />
              <span className="text-nusa-secondary">Cut Your Cloud Costs.</span> <br />
              Ship Faster.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-nusa-text mb-8 leading-relaxed max-w-xl"
            >
              DevOps consulting for startups that don&apos;t have time to waste. Optimize your cloud, automate deployments, scale confidently.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-nusa-secondary text-white font-bold text-lg hover:bg-[#e55a2b] transition-colors shadow-lg hover:shadow-nusa-secondary/50"
              >
                Get Your Free Cloud Audit
              </Link>
              <Link 
                href="#how-we-work"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-transparent text-nusa-accent border-2 border-nusa-accent font-bold text-lg hover:bg-nusa-accent/10 transition-colors"
              >
                Watch 2-min Demo
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm font-medium text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nusa-success" />
                <span>50+ Startups Trust Us</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nusa-success" />
                <span>₹2Cr+ Saved for Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-nusa-success" />
                <span>Avg. 30% Cost Reduction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Abstract Representation of Cloud/Code) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="w-full h-[500px] bg-nusa-primary/30 border border-nusa-primary rounded-xl relative overflow-hidden flex items-center justify-center backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-nusa-accent/10 to-transparent"></div>
              {/* Abstract grid/dots to simulate tech/nodes */}
              <div className="grid grid-cols-5 gap-4 opacity-50">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-nusa-text" />
                ))}
              </div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-nusa-secondary/20 rounded-lg border border-nusa-secondary backdrop-blur-md flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-nusa-secondary" />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-nusa-accent/20 rounded-full border border-nusa-accent backdrop-blur-md flex items-center justify-center"
              >
                <div className="w-12 h-2 bg-nusa-accent rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}