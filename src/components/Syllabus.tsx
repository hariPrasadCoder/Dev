'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket, Users } from 'lucide-react';

const weeks = [
  {
    number: 1,
    title: 'Problem Identification',
    icon: Lightbulb,
    items: [
      'Which Problem to solve',
      'Competitor Analysis',
      'Market Analysis',
      'Building a landing page',
      'Project Management',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: 2,
    title: 'Building an MVP',
    icon: Code,
    items: [
      'AI Agents',
      'RAG application',
      'Vector Database',
      'Python for product development',
      'LLMs (Gemini, GPT models)',
      'API connection',
      'Streamlit',
      'Github',
      'Supabase SQL',
    ],
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    number: 3,
    title: 'Deployment',
    icon: Rocket,
    items: [
      'CI/CD',
      'AWS S3',
      'AWS EC2',
      'AWS IAM',
      'Domain registration & connection',
      'SSL Certificates',
      'Hosting',
    ],
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    number: 4,
    title: 'Getting your first user',
    icon: Users,
    items: [
      '8 Marketing Framework',
      'Pitch deck creation',
      'Project presentation',
      'Feedback loop',
    ],
    gradient: 'from-yellow-500 to-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const } 
  },
};

export default function Syllabus() {
  return (
    <section id="syllabus" className="relative py-24 bg-gray-50/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/30 to-accent-100/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What you&apos;ll get at this{' '}
            <span className="font-serif italic underline underline-offset-8 decoration-4 decoration-primary-500">
              action-based
            </span>
            {' '}workshop:
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {weeks.map((week) => {
            const Icon = week.icon;
            return (
              <motion.div
                key={week.number}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-primary-100/50 transition-shadow"
              >
                {/* Week number badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${week.gradient} mb-6`}>
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                    Week {week.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${week.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  {week.title}
                </h3>

                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  Things you&apos;ll learn:
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {week.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${week.gradient} mt-1.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-lg font-bold tracking-wide uppercase rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
          >
            I&apos;m Ready to Break into AI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
