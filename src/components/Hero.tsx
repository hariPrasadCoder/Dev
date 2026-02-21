'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary-700">Cohort 4 Starting Soon</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
        >
          Build an End-to-end{' '}
          <span className="relative inline-block">
            <span className="gradient-text">AI</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full origin-left"
            />
          </span>
          <br />
          Product in{' '}
          <span className="relative inline-block">
            <span className="gradient-text">4</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full origin-left"
            />
          </span>
          {' '}weeks.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-12"
        >
          Build Products, Not Just Projects. Learn while you build.
        </motion.p>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-3xl mx-auto mb-12"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-primary-500/30 rounded-3xl blur-2xl pulse-glow" />
          
          {/* Video container */}
          <div className="relative aspect-video bg-gradient-to-br from-dark-900 via-dark-900/95 to-primary-900/30 rounded-2xl overflow-hidden border border-white/10 cursor-pointer group">
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors"
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </motion.div>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/40">
              Video Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Promise text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-gray-500 mb-4">
            Before you make your decision, I want to set some expectations clear.
          </p>
          <p className="text-gray-600">
            I will want your <strong className="text-gray-900 font-semibold">dedication and time</strong>, and I can guarantee you will learn AI and make real progress from where you are now. We have already helped <strong className="text-gray-900 font-semibold">2000+ students</strong> and we can help you too.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-lg font-bold tracking-wide uppercase rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
        >
          I&apos;m Ready to Break into AI
        </motion.a>
      </div>
    </section>
  );
}
