import { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Quais são os principais serviços de consultoria da +Seven?",
      answer: "Atuamos em três frentes principais: Educação (desenvolvimento de materiais didáticos e apoio na aplicação de leis de equidade racial), Empresas (organização estratégica, finanças básicas e processos para MEIs e pequenas empresas) e Formações (treinamento continuado para equipes, educadores e lideranças)."
    },
    {
      question: "Como funciona o processo de consultoria e acompanhamento?",
      answer: "Nosso método é dividido em 4 etapas claras: 1) Entender (escuta profunda dos seus desafios), 2) Planejar (elaboração de estratégias personalizadas), 3) Aplicar (execução com ferramentas práticas no dia a dia) e 4) Acompanhar (análise periódica de resultados e ajustes contínuos)."
    },
    {
      question: "A consultoria é voltada apenas para escolas ou atende outros setores?",
      answer: "Atendemos tanto instituições de ensino (públicas e privadas, diretores e coordenadores pedagógicos) quanto microempreendedores (MEIs) e micro e pequenas empresas (MPEs) de diferentes segmentos que buscam organização administrativa e crescimento seguro."
    },
    {
      question: "Como funcionam as formações continuadas e treinamentos?",
      answer: "As formações são práticas e personalizadas conforme os objetivos da sua instituição ou empresa. Elas podem ser realizadas em formato presencial, híbrido ou totalmente online, utilizando dinâmicas ativas e focando no desenvolvimento humano e resolução de problemas reais."
    },
    {
      question: "Como posso iniciar um diagnóstico com a +Seven?",
      answer: "O ponto de partida é um diagnóstico inicial gratuito. Você pode agendar uma conversa clicando em nosso botão de WhatsApp ou preenchendo o formulário na página de contato. Retornaremos rapidamente para agendarmos o melhor horário."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 border-b border-[var(--border-subtle)]" id="homepage-faq" aria-label="Dúvidas sobre os serviços da +Seven">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Info */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--border-accent)] border border-[var(--border-accent)] type-eyebrow text-[var(--brand-cyan)] max-w-max">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ • DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="text-[var(--text-primary)] type-section-title">
            Perguntas comuns sobre nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-navy)] to-[var(--brand-cyan)]">serviços e método.</span>
          </h2>
          
          <p className="text-[var(--text-secondary)] type-body">
            Entenda como funciona nossa consultoria estratégica, como apoiamos escolas e pequenas empresas no dia a dia e como agendar seu diagnóstico inicial sem burocracia.
          </p>

          <div className="mt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg type-button text-[var(--text-primary)] bg-white/5 hover:bg-white/10 border border-[var(--border-subtle)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
            >
              <span>Fazer outra pergunta</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
            </Link>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">
          {faqItems.map((item, index) => {
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
                  aria-controls={`faq-item-answer-${index}`}
                >
                  <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base leading-snug transition-colors group-hover:text-[var(--brand-cyan)]">
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
                      id={`faq-item-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-5 pt-2 text-[var(--text-secondary)] type-body-small text-left border-t border-[var(--border-subtle)]">
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
    </section>
  );
}
