"use client";

import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code } from "lucide-react";
import Link from "next/link";

export default function FooterContact() {
  return (
    <footer id="contact" className="bg-charcoal-900 pt-24 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to optimize your stack?
            </h2>
            <p className="text-xl text-electricBlue mb-8">
              Let&apos;s talk about your current bottlenecks.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageCircle className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Briefcase className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Code className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-charcoal-800 p-8 rounded-xl border border-charcoal-700"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md bg-charcoal-900 border-charcoal-700 text-white shadow-sm focus:border-electricBlue focus:ring-electricBlue sm:text-sm p-3 border" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Company Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md bg-charcoal-900 border-charcoal-700 text-white shadow-sm focus:border-electricBlue focus:ring-electricBlue sm:text-sm p-3 border" placeholder="john@startup.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">How can we help?</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md bg-charcoal-900 border-charcoal-700 text-white shadow-sm focus:border-electricBlue focus:ring-electricBlue sm:text-sm p-3 border" placeholder="Tell us about your infrastructure goals..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-charcoal-900 bg-electricBlue hover:bg-[#00d0e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electricBlue focus:ring-offset-charcoal-900 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NusaOps. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}