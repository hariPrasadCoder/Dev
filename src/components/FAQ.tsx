'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the prerequisites to join?',
    answer: 'Only basic Python knowledge. Everything else, including AI tools, product frameworks, and deployment, will be taught during the workshop.',
  },
  {
    question: 'What is the MyRealProduct workshop?',
    answer: "It's a 4-week live, cohort-based program where you work in small teams to brainstorm, validate, and launch a real AI product from scratch.",
  },
  {
    question: 'Who is this program for?',
    answer: 'Students, job seekers, and professionals who want hands-on experience building AI products, instead of just adding theory or toy projects to their resume. Data Analysts & Data Scientists got the best experience out of the previous cohorts.',
  },
  {
    question: 'How much time do I need to commit per week?',
    answer: 'Expect 6–7 hours weekly maximum, including live mentor sessions, team collaboration, and self-work.',
  },
  {
    question: 'Do we pick our own product ideas?',
    answer: 'Yes. Every team brainstorms, validates, and decides on their own idea, with mentors guiding the process.',
  },
  {
    question: 'How will this help in my career?',
    answer: "You'll finish with a live product demo and practical skills that stand out in job applications. Past participants have used their projects to land interviews, and internships.",
  },
  {
    question: 'What happens if I miss a live session?',
    answer: 'Recordings will be shared so you can catch up anytime. Your team and mentors will also help you stay on track.',
  },
  {
    question: 'Is there a refund policy?',
    answer: "Yes, if you feel the program isn't right for you after Week 1 session, you can request a refund. We'll refund you everything excluding the transaction fee (10%). But we are proud to say that not even single person has asked for a refund till now.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-white font-semibold pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white/50 flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary-500/30 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-white/70" />
              <span className="text-sm font-medium text-white/70">FAQs</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frequently asked{' '}
              <span className="font-serif italic text-primary-400">questions</span>
            </h2>

            <p className="text-white/50 mb-8">
              Some of the most common questions. Can&apos;t find the right answer? Book an info call with us.
            </p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold tracking-wide uppercase rounded-xl shadow-xl shadow-primary-500/25"
            >
              Book a Call
            </motion.a>
          </motion.div>

          {/* Right side - FAQ list */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
