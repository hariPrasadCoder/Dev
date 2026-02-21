'use client';

import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary-100/50 to-accent-100/50 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-black italic text-gray-900 leading-tight mb-8">
            &ldquo;The way to get started is to quit talking and begin doing!&rdquo;
          </p>
          <motion.footer
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 font-serif italic"
          >
            — Walt Disney
          </motion.footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
