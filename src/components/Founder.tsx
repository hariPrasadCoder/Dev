'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] mb-4">
              I&apos;m Hari
              <br />
              Prasad
            </h2>
            
            <p className="text-gray-500 mb-8">
              Ivy League Grad | TedX Speaker | AI Engineer
            </p>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I&apos;ll be the instructor for this cohort. A fellow Data Scientist turned into an AI Engineer. I&apos;ve worked with 5+ early-stage startups to launch their first AI-powered products. I&apos;ve helped founders go from concept to live product.
              </p>
              <p>
                At MyRealProduct, I bring those same lessons to ambitious professionals who want to learn AI the right way — by building, shipping, and solving real problems.
              </p>
              <p className="font-semibold text-gray-900">
                My mission: To help my peers become an AI Engineer in 4 weeks.
              </p>
            </div>

            {/* Logos/Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {['TEDx', 'LinkedIn', 'BBC'].map((logo) => (
                <span
                  key={logo}
                  className="text-xl font-black text-gray-400 tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/25"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-200 to-accent-200 rounded-[3rem] blur-2xl opacity-50" />
            
            {/* Image container */}
            <div className="relative aspect-[4/5] max-w-md mx-auto bg-gradient-to-br from-primary-100 via-accent-50 to-primary-100 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Hari Prasad</p>
                  <p className="text-gray-400 text-sm">Headshot</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-80 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-60 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
