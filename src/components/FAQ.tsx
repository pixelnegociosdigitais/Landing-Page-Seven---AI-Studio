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
      <div className="flex items-center gap-2 mb-2 border-l-4 border-[#16BDF0] pl-3">
        <HelpCircle className="w-5 h-5 text-[#16BDF0] animate-pulse" />
        <h3 className="text-white font-bold text-lg tracking-wide uppercase">
          Perguntas Frequentes
        </h3>
      </div>
      
      <div className="flex flex-col gap-3">
        {siteContent.contactPage.faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'bg-[rgba(10,27,48,0.92)] border-[#16BDF0] shadow-lg shadow-[#16BDF0]/5'
                  : 'bg-[rgba(10,27,48,0.35)] border-white/5 hover:border-[rgba(22,189,240,0.25)]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#16BDF0] rounded-xl cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-bold text-sm sm:text-base leading-snug tracking-wide transition-colors duration-200 group-hover:text-[#16BDF0]">
                  {item.question}
                </span>
                <span className="shrink-0 text-[#16BDF0]">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-5 h-5 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#16BDF0]/30 w-8 h-8"
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
                    <div className="px-5 pb-5 pt-2 text-[#B6BEC8] text-sm leading-relaxed font-medium border-t border-[rgba(247,248,250,0.06)]">
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

