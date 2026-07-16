import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full" id="faq-section" aria-label="Perguntas Frequentes">
      <div className="flex items-center gap-2 mb-2 border-l-4 border-[var(--brand-cyan)] pl-3">
        <HelpCircle className="w-5 h-5 text-[var(--brand-cyan)]" />
        <h3 className="text-[var(--text-primary)] type-subsection-title">
          Perguntas Frequentes
        </h3>
      </div>
      
      <div className="flex flex-col gap-3">
        {siteContent.contactPage.faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 bg-[var(--surface-secondary)] ${
                isOpen
                  ? 'border-[var(--border-accent)]'
                  : 'border-[var(--border-subtle)] hover:bg-[var(--surface-elevated)]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-xl cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base leading-snug transition-colors duration-200 group-hover:text-[var(--brand-cyan)]">
                  {item.question}
                </span>
                <span className="shrink-0 text-[var(--brand-cyan)]">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-[var(--border-subtle)] group-hover:border-[var(--border-accent)] transition-colors"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-5 pb-5 pt-2 text-[var(--text-secondary)] type-body-small border-t border-[var(--border-subtle)]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

