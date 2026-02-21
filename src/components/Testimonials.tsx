'use client';

import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const reviews = [
  {
    text: "MyRealProduct made complex AI concepts simple and approachable. Hari's guidance and analogies gave me the confidence to use new tools and actually build products instead of just learning theory.",
    name: 'Praveena Suresh',
    title: 'Senior Data Analyst',
  },
  {
    text: "It's not easy to keep a group motivated and engaged for 4 weeks, especially while staying motivated yourself. I'm really glad I joined this cohort. Before this, I had no idea how to actually apply AI in a meaningful way. But now, I've built an app—something I didn't think I could do before.",
    name: 'Vidyamai Shakkara',
    title: 'Business Data Analyst',
  },
  {
    text: "Being mentored by Hari at MyRealProduct was an incredible experience. He helped us turn our Python code into a real-world product, Expiry Genie. His constant guidance made learning rewarding and teamwork seamless.",
    name: 'Joan Xavier',
    title: 'PhD Candidate',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-primary-900/5 to-dark-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white text-center mb-16"
        >
          What our students think
        </motion.h2>

        {/* Video testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative aspect-[16/10] bg-gradient-to-br from-primary-900/40 to-accent-900/20 rounded-xl overflow-hidden cursor-pointer group border border-white/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Written reviews */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-primary-500/10 hover:border-primary-500/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
