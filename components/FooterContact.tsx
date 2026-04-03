"use client";

import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FooterContact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-nusa-bg pt-24 pb-12 border-t border-nusa-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize?
            </h2>
            <p className="text-xl text-nusa-secondary mb-8">
              Let&apos;s schedule a free consultation
            </p>
            <div className="bg-nusa-primary/30 p-6 rounded-xl border border-nusa-primary mb-8">
              <p className="text-nusa-text mb-2"><strong className="text-white">Email:</strong> hello@nusaops.com</p>
              <p className="text-nusa-text"><strong className="text-white">Location:</strong> South East Asia & India</p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-nusa-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageCircle className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-nusa-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Briefcase className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-nusa-accent transition-colors">
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
            className="bg-nusa-primary p-8 rounded-xl border border-nusa-primary/50 shadow-xl"
          >
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-nusa-success/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-nusa-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks!</h3>
                <p className="text-nusa-text">We&apos;ll call you within 24 hours.</p>
                <button onClick={() => setFormStatus("idle")} className="mt-8 text-nusa-accent hover:underline">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                    <input required type="text" id="name" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                    <input required type="text" id="company" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border" placeholder="Acme Corp" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                    <input required type="email" id="email" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone (Optional)</label>
                    <input type="tel" id="phone" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border" placeholder="+91..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service Interested In</label>
                  <select id="service" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border">
                    <option>Cloud Cost Optimization</option>
                    <option>CI/CD Automation</option>
                    <option>AI Infrastructure</option>
                    <option>Managed DevOps</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Budget Range</label>
                  <select id="budget" className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border">
                    <option>&lt; ₹50K</option>
                    <option>₹50K - ₹1L</option>
                    <option>₹1L - ₹5L</option>
                    <option>₹5L+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tell us about your challenge</label>
                  <textarea required id="message" rows={3} className="block w-full rounded-md bg-nusa-bg border-nusa-primary text-white shadow-sm focus:border-nusa-secondary focus:ring-nusa-secondary sm:text-sm p-3 border" placeholder="We are facing issues with..."></textarea>
                </div>
                <button disabled={formStatus === "submitting"} type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-nusa-secondary hover:bg-[#e55a2b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nusa-secondary focus:ring-offset-nusa-bg transition-colors disabled:opacity-70">
                  {formStatus === "submitting" ? "Sending..." : "Schedule Free Call"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
        <div className="border-t border-nusa-primary pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold tracking-tighter mb-4 block">
                <span className="text-white">Nusa</span>
                <span className="text-nusa-accent">Ops</span>
              </span>
              <p className="text-sm text-gray-400">Optimize Infrastructure. Cut Cloud Costs. Ship Faster.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#about" className="hover:text-nusa-accent transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-nusa-accent transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#services" className="hover:text-nusa-accent transition-colors">Cloud Optimization</Link></li>
                <li><Link href="#services" className="hover:text-nusa-accent transition-colors">CI/CD Automation</Link></li>
                <li><Link href="#services" className="hover:text-nusa-accent transition-colors">AI Infrastructure</Link></li>
                <li><Link href="#services" className="hover:text-nusa-accent transition-colors">Managed DevOps</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#case-studies" className="hover:text-nusa-accent transition-colors">Case Studies</Link></li>
                <li><Link href="#pricing" className="hover:text-nusa-accent transition-colors">Pricing</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-nusa-primary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} NusaOps. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}