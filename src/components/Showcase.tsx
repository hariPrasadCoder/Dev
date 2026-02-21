'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const apps = [
  { name: 'Expiry Genie', gradient: 'from-pink-500 to-rose-500' },
  { name: 'AI Resume Builder', gradient: 'from-purple-500 to-indigo-500' },
  { name: 'StudyMate AI', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Code Reviewer', gradient: 'from-green-500 to-emerald-500' },
  { name: 'Recipe Generator', gradient: 'from-orange-500 to-amber-500' },
  { name: 'Finance Tracker', gradient: 'from-red-500 to-pink-500' },
  { name: 'Health Assistant', gradient: 'from-teal-500 to-green-500' },
  { name: 'Content Planner', gradient: 'from-violet-500 to-purple-500' },
];

export default function Showcase() {
  return (
    <section className="relative py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Still not able to make your mind?
            <br />
            Look at what our students built!!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Remember, all of them came in with basic python skills, learnt & built these applications in just 4 weeks. You can do it too!
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative mt-16">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />

        {/* Track */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          className="flex gap-6"
        >
          {[...apps, ...apps].map((app, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 w-80"
            >
              <div className={`relative h-56 bg-gradient-to-br ${app.gradient} rounded-2xl overflow-hidden cursor-pointer group`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold mb-2">{app.name}</span>
                  <span className="text-sm text-white/70">Student Project</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="#"
          className="text-gray-600 font-semibold underline underline-offset-4 hover:text-primary-600 transition-colors"
        >
          Check their work
        </a>
      </motion.div>
    </section>
  );
}
