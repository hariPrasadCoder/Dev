'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

export default function Philanthropy() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            <Heart className="inline-block w-10 h-10 text-red-500 fill-red-500 mr-2 -mt-2" />
            Give Back While You{' '}
            <span className="font-serif italic text-primary-600">Grow</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/50 to-accent-200/50 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/40 font-medium">
                <div className="text-center">
                  <p>Children holding</p>
                  <p>&ldquo;Thank You&rdquo; slate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Every time you join <strong className="text-gray-900">MyRealProduct</strong>, you&apos;re not just learning AI. You&apos;re changing a life.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              While you learn AI in 4 weeks, a child in India gets to go to school for <strong className="text-gray-900">1 whole year</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through{' '}
              <a
                href="https://www.globalgiving.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold underline underline-offset-4 hover:text-primary-700 transition-colors inline-flex items-center gap-1"
              >
                GlobalGiving – Send a Child in India to School for a Year
                <ExternalLink className="w-4 h-4" />
              </a>
              , for <em>every</em> workshop registration, we donate to help fund 1 child&apos;s education for <em>1 whole year</em>.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl font-serif italic text-gray-500 pt-4"
            >
              &ldquo;When you build your product, you also build a future.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
