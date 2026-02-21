'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Ready to start your AI journey?
            </h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-12 py-6 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xl font-bold tracking-wide uppercase rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
            >
              I&apos;m Ready to Break into AI
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="text-xl font-black tracking-tight gradient-text">
              MyRealProduct
            </Link>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MyRealProduct. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="mailto:contact@myrealproduct.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-gray-100">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@myrealproduct.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </footer>
    </>
  );
}
