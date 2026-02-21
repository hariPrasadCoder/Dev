'use client';

import { motion } from 'framer-motion';

const logos = [
  'The Associated Press',
  'Benzinga',
  'Fox News Media',
  'NBC News',
  'ABC News',
  'United Nations',
];

export default function FeaturedIn() {
  return (
    <section className="relative py-16 bg-dark-900 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-8"
      >
        As Featured In
      </motion.p>

      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-white/50 text-sm md:text-base font-semibold whitespace-nowrap underline underline-offset-4 decoration-white/20">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
