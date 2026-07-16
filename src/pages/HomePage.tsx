import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Users, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { motion } from 'motion/react';
import FAQSection from '../components/FAQSection';
import ResultsSection from '../components/ResultsSection';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="+Seven | Soluções Educacionais e Empresariais" 
        description="Potencialize sua instituição de ensino ou empresa com a consultoria estratégica da +Seven. Formações especializadas, gestão de excelência e soluções de alto impacto."
      />

      
      {/* Dynamic Background Blur Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#16BDF0]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-10 w-[400px] h-[400px] bg-[#095BFF]/4 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#16BDF0]/3 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. HERO SECTION (High-impact premium fold)
            ================================================== */}
        <HeroSection />

        {/* ==================================================
            2. TRÊS ÁREAS PRINCIPAIS (Below Hero)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs text-[#16BDF0] font-bold tracking-widest uppercase">ATUAÇÃO CONJUNTA</span>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mt-2">
              Soluções integradas para demandas reais
            </h2>
            <p className="text-[#B6BEC8] text-sm sm:text-base mt-2 font-medium">
              Conectamos escuta qualificada a processos metodológicos claros nas três frentes fundamentais da +Seven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Educação */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(22, 189, 240, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(22, 189, 240, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Educação</h3>
                <p className="text-[#B6BEC8] text-sm leading-relaxed mb-6 font-medium">
                  Formações, projetos pedagógicos e materiais didáticos para escolas que pretendem evoluir com excelência, propósito e inclusão verdadeira.
                </p>
              </div>
              <Link to="/solucoes" className="text-xs font-bold text-[#16BDF0] hover:text-[#16BDF0]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
              className="glass-card p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Empresas</h3>
                <p className="text-[#B6BEC8] text-sm leading-relaxed mb-6 font-medium">
                  Organização estratégica, planejamento e acompanhamento personalizado para MEIs, micro e pequenas empresas pavimentarem um amanhã seguro.
                </p>
              </div>
              <Link to="/solucoes" className="text-xs font-bold text-[#16BDF0] hover:text-[#16BDF0]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
              className="glass-card p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Formações</h3>
                <p className="text-[#B6BEC8] text-sm leading-relaxed mb-6 font-medium">
                  Treinamentos práticos altamente direcionados para o avanço de educadores, gestores, lideranças corporativas e equipes de alta performance.
                </p>
              </div>
              <Link to="/solucoes" className="text-xs font-bold text-[#16BDF0] hover:text-[#16BDF0]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            3. MÉTODO +SEVEN (Timeline)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs text-[#16BDF0] font-bold tracking-widest uppercase">COMO TRABALHAMOS</span>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mt-2">
              Processo claro focado na sua realidade
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Timeline horizontal background path line in desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#16BDF0]/20 via-[#095BFF]/30 to-[#16BDF0]/20 -z-10" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[#07111F] border-2 border-[#16BDF0] flex items-center justify-center text-[#16BDF0] font-bold text-lg shadow-lg shadow-[#16BDF0]/10 mb-4 z-10">
                1
              </div>
              <h4 className="text-white font-bold text-base mb-1.5">Entender</h4>
              <p className="text-[#7F8A98] text-sm leading-relaxed max-w-[200px] font-medium">
                Escutamos com empatia sua realidade e mapeamos os desafios.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[#07111F] border-2 border-[#095BFF] flex items-center justify-center text-[#095BFF] font-bold text-lg shadow-lg shadow-[#095BFF]/10 mb-4 z-10">
                2
              </div>
              <h4 className="text-white font-bold text-base mb-1.5">Planejar</h4>
              <p className="text-[#7F8A98] text-sm leading-relaxed max-w-[200px] font-medium">
                Criamos planos e estratégias totalmente personalizadas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[#07111F] border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-lg shadow-lg shadow-purple-500/10 mb-4 z-10">
                3
              </div>
              <h4 className="text-white font-bold text-base mb-1.5">Aplicar</h4>
              <p className="text-[#7F8A98] text-sm leading-relaxed max-w-[200px] font-medium">
                Executamos o plano com ferramentas práticas no dia a dia.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[#07111F] border-2 border-[#16BDF0] flex items-center justify-center text-[#16BDF0] font-bold text-lg shadow-lg shadow-[#16BDF0]/10 mb-4 z-10">
                4
              </div>
              <h4 className="text-white font-bold text-base mb-1.5">Acompanhar</h4>
              <p className="text-[#7F8A98] text-sm leading-relaxed max-w-[200px] font-medium">
                Analisamos métricas, celebramos resultados e propomos ajustes.
              </p>
            </div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            4. SEÇÃO EDUCAÇÃO ANTIRRACISTA (High contrast split layout)
            ================================================== */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-b border-white/5">
          {/* Left portrait photo - smoothly masked */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden photo-mask shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Aluno negro lendo livro atentamente em sala de aula"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#050B16]/20" />
          </div>

          {/* Right text box */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-xs text-[#16BDF0] font-bold tracking-widest uppercase">EDUCAÇÃO ESPECIALIZADA</span>
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-xl">
              {siteContent.home.educationSection.title}
            </h2>
            <p className="text-[#B6BEC8] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              {siteContent.home.educationSection.description} Auxiliamos coordenações pedagógicas, docentes e instituições de ensino a estruturarem planejamentos curriculares e debates enriquecedores fundamentados na responsabilidade e conformidade legal.
            </p>
            <div className="mt-2">
              <Link
                to="/solucoes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-[#16BDF0] bg-[#16BDF0]/10 border border-[#16BDF0]/25 hover:bg-[#16BDF0]/20 transition-all focus:outline-none"
              >
                <span>Conhecer materiais antirracistas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ==================================================
            5. SEÇÃO EMPRESARIAL
            ================================================== */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-b border-white/5">
          
          {/* Left Text */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-5 text-left">
            <span className="text-xs text-[#16BDF0] font-bold tracking-widest uppercase">GESTÃO E EMPRESAS</span>
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-xl">
              {siteContent.home.businessSection.title}
            </h2>
            <p className="text-[#B6BEC8] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              {siteContent.home.businessSection.description} Desenvolvemos planos de ação estratégicos práticos para guiar o dia a dia administrativo, finanças primárias, posicionamento de mercado e formação continuada para equipes e lideranças em MEIs e pequenas empresas.
            </p>
            <div className="mt-2">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus:outline-none"
              >
                <span>Agendar diagnóstico para minha empresa</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#16BDF0]" />
              </Link>
            </div>
          </div>

          {/* Right portrait photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden photo-mask shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Profissional negra de negócios sorrindo confiante"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#050B16]/20" />
          </div>

        </AnimatedSection>

        {/* ==================================================
            RESULTS & PERFORMANCE METRICS
            ================================================== */}
        <AnimatedSection>
          <ResultsSection />
        </AnimatedSection>

        {/* ==================================================
            FAQ SECTION (addressing common questions)
            ================================================== */}
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>

        {/* ==================================================
            6. CTA FINAL SECTION
            ================================================== */}
        <AnimatedSection className="py-16">
          <div className="glass-panel-strong p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border-[#16BDF0]/20">
            {/* Ambient light ring decorator inside */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#16BDF0]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/10 blur-3xl rounded-full" />

            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4 relative z-10">
              {siteContent.home.ctaFinal.title}
            </h2>
            
            <p className="text-[#B6BEC8] text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium relative z-10 leading-relaxed">
              Descubra caminhos consistentes com o apoio strategic da +Seven. Estamos prontos para entender seu momento e construir soluções personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-[#095BFF] hover:bg-[#095BFF]/95 shadow-lg shadow-[#095BFF]/15 transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Agendar atendimento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={siteContent.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#B6BEC8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm flex items-center justify-center gap-2"
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
