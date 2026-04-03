"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-nusa-bg/90 backdrop-blur-md border-b border-nusa-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-white">Nusa</span>
              <span className="text-nusa-accent">Ops</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#how-we-work" className="text-gray-300 hover:text-white transition-colors">
              How We Work
            </Link>
            <Link href="#case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2.5 rounded-md bg-nusa-secondary text-white font-semibold shadow-lg hover:shadow-nusa-secondary/50 transition-shadow"
            >
              Get Free Audit
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nusa-bg border-b border-nusa-primary px-4 pt-2 pb-4 space-y-2">
          <Link href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-nusa-primary rounded-md">
            Services
          </Link>
          <Link href="#how-we-work" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-nusa-primary rounded-md">
            How We Work
          </Link>
          <Link href="#case-studies" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-nusa-primary rounded-md">
            Case Studies
          </Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-nusa-primary rounded-md">
            Pricing
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-white bg-nusa-secondary rounded-md text-center mt-4">
            Get Free Audit
          </Link>
        </div>
      )}
    </nav>
  );
}