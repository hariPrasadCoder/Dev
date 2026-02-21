'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight gradient-text">
          MyRealProduct
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#syllabus" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Curriculum
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Reviews
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            FAQs
          </Link>
        </div>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-bold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
        >
          Join Cohort
        </motion.a>
      </div>
    </motion.nav>
  );
}
