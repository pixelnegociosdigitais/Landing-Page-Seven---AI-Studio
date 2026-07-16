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
    <section className="py-16 border-b border-white/5" id="homepage-faq" aria-label="Dúvidas sobre os serviços da +Seven">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Info */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 py-1.5 rounded-full bg-[#16BDF0]/10 border border-[#16BDF0]/20 text-xs text-[#16BDF0] font-bold tracking-[0.12em] uppercase max-w-max">
            <HelpCircle className="w-3.5 h-3.5 animate-pulse" />
            <span>FAQ • DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            Perguntas comuns sobre nossos <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">serviços e método.</span>
          </h2>
          
          <p className="text-[#B6BEC8] text-sm sm:text-base leading-relaxed font-medium">
            Entenda como funciona nossa consultoria estratégica, como apoiamos escolas e pequenas empresas no dia a dia e como agendar seu diagnóstico inicial sem burocracia.
          </p>

          <div className="mt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus:outline-none"
            >
              <span>Fazer outra pergunta</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#16BDF0]" />
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
                  aria-controls={`faq-item-answer-${index}`}
                >
                  <span className="text-white font-bold text-sm sm:text-base leading-snug tracking-wide">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#16BDF0]">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
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
                      <div className="px-5 pb-5 pt-2 text-[#B6BEC8] text-sm leading-relaxed font-medium text-left border-t border-[rgba(247,248,250,0.06)]">
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
