"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal-900/80 backdrop-blur-md border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-white">Nusa</span>
              <span className="text-electricBlue">Ops</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#how-we-work" className="text-gray-300 hover:text-white transition-colors">
              How We Work
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2.5 rounded-md bg-electricBlue text-charcoal-900 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-shadow"
            >
              Book a Free Audit
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}