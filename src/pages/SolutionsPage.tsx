import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Users, Search, Target, TrendingUp, ChevronRight, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function SolutionsPage() {
  const handleScrollToCards = () => {
    const el = document.getElementById('solutions-cards');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Soluções & Serviços | +Seven" 
        description="Conheça nossas soluções integradas para educação básica, educação superior, gestão corporativa e capacitações de alto impacto."
      />

      
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#16BDF0]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. SOLUTIONS HERO SECTION (Matches layout of reference-solucoes.png)
            ================================================== */}
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-16 border-b border-white/5">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16BDF0]/10 border border-[#16BDF0]/20 text-[#16BDF0] type-eyebrow max-w-max">
                <span>{siteContent.solutions.hero.tag}</span>
              </div>
              
              <h1 className="text-white type-section-title max-w-2xl">
                Soluções para <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">transformar desafios</span> em resultados.
              </h1>
              
              <p className="text-[#B6BEC8] type-body-large max-w-xl">
                {siteContent.solutions.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                <button
                  onClick={handleScrollToCards}
                  className="px-6 py-3.5 text-center type-button text-white bg-[#095BFF] hover:bg-[#095BFF]/95 rounded-xl shadow-lg shadow-[#095BFF]/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Conhecer nossas soluções</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-center type-button text-[#B6BEC8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>{siteContent.solutions.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Photograph with glassmorphic pillars container overlay */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden photo-mask shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipe +Seven planejando soluções estratégicas"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-80" />
              
              {/* Floating Glassmorphic Container (from reference-solucoes.png right side overlay) */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel border-[#16BDF0]/20 flex flex-col gap-4">
                
                {/* Diagnóstico Item */}
                <div className="flex items-start gap-3.5 group/item">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 h-8 rounded-lg bg-[#16BDF0]/15 flex items-center justify-center text-[#16BDF0] shrink-0 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h4 className="text-white type-card-title transition-colors group-hover/item:text-[#16BDF0]">Diagnóstico</h4>
                    <p className="text-[#B6BEC8] type-body-small">Investigamos a fundo seu cenário atual para clarear os gargalos.</p>
                  </div>
                </div>

                {/* Estratégia Item */}
                <div className="flex items-start gap-3.5 group/item">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 h-8 rounded-lg bg-[#095BFF]/15 flex items-center justify-center text-[#095BFF] shrink-0 cursor-pointer"
                  >
                    <Target className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h4 className="text-white type-card-title transition-colors group-hover/item:text-[#095BFF]">Estratégia</h4>
                    <p className="text-[#B6BEC8] type-body-small">Desenvolvemos planos práticos orientados a propósitos reais.</p>
                  </div>
                </div>

                {/* Acompanhamento Item */}
                <div className="flex items-start gap-3.5 group/item">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-[#25D366] shrink-0 cursor-pointer"
                  >
                    <TrendingUp className="w-4 h-4" />
                  </motion.div>
                  <div>
                    <h4 className="text-white type-card-title transition-colors group-hover/item:text-[#25D366]">Acompanhamento</h4>
                    <p className="text-[#B6BEC8] type-body-small">Garantimos suporte consultivo contínuo para sustentar a evolução.</p>
                  </div>
                </div>

              </div>
            </div>

          </AnimatedSection>

        {/* ==================================================
            2. SOLUTIONS CARDS SECTION (3 Pillars from reference)
            ================================================== */}
        <AnimatedSection id="solutions-cards" className="py-16 border-b border-white/5 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#16BDF0] type-eyebrow">CONHEÇA AS FRENTES</span>
            <h2 className="text-white type-section-title mt-2">
              Nossas Linhas de Atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Educação */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(22, 189, 240, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(22, 189, 240, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-[#07111F] border border-[#16BDF0]/30 flex items-center justify-center text-[#16BDF0] mb-6 transition-all duration-300 group-hover:border-[#16BDF0]/60 group-hover:bg-[#16BDF0]/5"
                >
                  <GraduationCap className="w-7 h-7" />
                </motion.div>
                <h3 className="text-white type-card-title mb-3">Educação</h3>
                <p className="text-[#B6BEC8] type-body mb-6">
                  Formações, projetos e materiais pedagógicos customizados para escolas e redes que desejam avançar com inclusão, propósito, conformidade legal e qualidade pedagógica comprovada.
                </p>
              </div>
              <Link
                to="/contato?solution=educacao"
                className="type-button text-[#16BDF0] hover:text-white inline-flex items-center gap-1.5 focus:outline-none transition-colors border-t border-[rgba(247,248,250,0.06)] pt-5 w-full mt-2"
              >
                <span>Ver detalhes</span>
                <ChevronRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Empresas */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(9, 91, 255, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(9, 91, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-[#07111F] border border-[#095BFF]/30 flex items-center justify-center text-[#095BFF] mb-6 transition-all duration-300 group-hover:border-[#095BFF]/60 group-hover:bg-[#095BFF]/5"
                >
                  <Briefcase className="w-7 h-7" />
                </motion.div>
                <h3 className="text-white type-card-title mb-3">Empresas</h3>
                <p className="text-[#B6BEC8] type-body mb-6">
                  Orientação pragmática, planejamento estratégico integrado e organization financeira e operacional para MEIs, micro e pequenas empresas pavimentarem crescimento com máxima segurança.
                </p>
              </div>
              <Link
                to="/contato?solution=empresas"
                className="type-button text-[#16BDF0] hover:text-white inline-flex items-center gap-1.5 focus:outline-none transition-colors border-t border-[rgba(247,248,250,0.06)] pt-5 w-full mt-2"
              >
                <span>Ver detalhes</span>
                <ChevronRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Formações */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(168, 85, 247, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(168, 85, 247, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-[#07111F] border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 transition-all duration-300 group-hover:border-purple-500/60 group-hover:bg-purple-500/5"
                >
                  <Users className="w-7 h-7" />
                </motion.div>
                <h3 className="text-white type-card-title mb-3">Formações</h3>
                <p className="text-[#B6BEC8] type-body mb-6">
                  Treinamentos dinâmicos e palestras corporativas focadas em soluções práticas para capacitação e aperfeiçoamento de educadores, gestores públicos ou privados, lideranças de equipe e colaboradores.
                </p>
              </div>
              <Link
                to="/contato?solution=formacoes"
                className="type-button text-[#16BDF0] hover:text-white inline-flex items-center gap-1.5 focus:outline-none transition-colors border-t border-[rgba(247,248,250,0.06)] pt-5 w-full mt-2"
              >
                <span>Ver detalhes</span>
                <ChevronRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            3. COMO TRABALHAMOS (Horizontal Process Timeline)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#16BDF0] type-eyebrow">MÉTODO COMPROVADO</span>
            <h2 className="text-white type-section-title mt-2">
              Como trabalhamos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Timeline connector line on desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#16BDF0]/20 via-[#095BFF]/35 to-[#16BDF0]/20 -z-10" />

            {siteContent.solutions.process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-full bg-[#07111F] border-2 border-[#16BDF0] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#16BDF0]/10 mb-4 z-10 cursor-pointer"
                >
                  {step.step}
                </motion.div>
                <h4 className="text-white type-card-title mb-1.5">{step.title}</h4>
                <p className="text-[#7F8A98] type-body max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ==================================================
            4. LOWER CTA
            ================================================== */}
        <AnimatedSection className="py-16">
          <div className="glass-panel-strong p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border-[#16BDF0]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#16BDF0]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/10 blur-3xl rounded-full" />

            <h2 className="text-white type-section-title mb-4 relative z-10">
              {siteContent.solutions.cta.title}
            </h2>
            
            <p className="text-[#B6BEC8] type-body mb-8 max-w-xl mx-auto relative z-10">
              {siteContent.solutions.cta.description} Conte brevemente suas demandas e receberá um retorno personalizado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl type-button text-white bg-[#095BFF] hover:bg-[#095BFF]/95 shadow-lg shadow-[#095BFF]/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Agende seu diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={siteContent.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl type-button text-[#B6BEC8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
