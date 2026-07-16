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
    <div className="relative min-h-screen bg-[var(--background-primary)] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="+Seven | Soluções Educacionais e Empresariais" 
        description="Potencialize sua instituição de ensino ou empresa com a consultoria estratégica da +Seven. Formações especializadas, gestão de excelência e soluções de alto impacto."
      />

      
      {/* Dynamic Background Blur Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--brand-cyan)]/3 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-10 w-[400px] h-[400px] bg-[var(--brand-navy)]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[var(--brand-cyan)]/2 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. HERO SECTION (High-impact premium fold)
            ================================================== */}
        <HeroSection />

        {/* ==================================================
            2. TRÊS ÁREAS PRINCIPAIS (Below Hero)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-[var(--border-subtle)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="type-eyebrow text-[var(--brand-cyan)]">ATUAÇÃO CONJUNTA</span>
            <h2 className="text-[var(--text-primary)] type-section-title mt-2">
              Soluções integradas para demandas reais
            </h2>
            <p className="text-[var(--text-secondary)] type-body-large mt-2">
              Conectamos escuta qualificada a processos metodológicos claros nas três frentes fundamentais da +Seven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Educação */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] p-6 rounded-xl flex flex-col justify-between group cursor-pointer transition-all duration-200 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--border-accent)]/10 border border-[var(--border-accent)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-[var(--text-primary)] type-card-title mb-2">Educação</h3>
                <p className="text-[var(--text-secondary)] type-body mb-6">
                  Formações, projetos pedagógicos e materiais didáticos para escolas que pretendem evoluir com excelência, propósito e inclusão verdadeira.
                </p>
              </div>
              <Link to="/solucoes" className="type-button text-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[var(--brand-cyan)]" />
              </Link>
            </motion.div>

            {/* Empresas */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] p-6 rounded-xl flex flex-col justify-between group cursor-pointer transition-all duration-200 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--border-accent)]/10 border border-[var(--border-accent)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-[var(--text-primary)] type-card-title mb-2">Empresas</h3>
                <p className="text-[var(--text-secondary)] type-body mb-6">
                  Organização estratégica, planejamento e acompanhamento personalizado para MEIs, micro e pequenas empresas pavimentarem um amanhã seguro.
                </p>
              </div>
              <Link to="/solucoes" className="type-button text-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[var(--brand-cyan)]" />
              </Link>
            </motion.div>

            {/* Formações */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[var(--surface-primary)] border border-[var(--border-subtle)] p-6 rounded-xl flex flex-col justify-between group cursor-pointer transition-all duration-200 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--border-accent)]/10 border border-[var(--border-accent)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-[var(--text-primary)] type-card-title mb-2">Formações</h3>
                <p className="text-[var(--text-secondary)] type-body mb-6">
                  Treinamentos práticos altamente direcionados para o avanço de educadores, gestores, lideranças corporativas e equipes de alta performance.
                </p>
              </div>
              <Link to="/solucoes" className="type-button text-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]/90 inline-flex items-center gap-1.5 focus:outline-none">
                <span>Ver detalhes</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[var(--brand-cyan)]" />
              </Link>
            </motion.div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            3. MÉTODO +SEVEN (Timeline)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-[var(--border-subtle)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="type-eyebrow text-[var(--brand-cyan)]">COMO TRABALHAMOS</span>
            <h2 className="text-[var(--text-primary)] type-section-title mt-2">
              Processo claro focado na sua realidade
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Timeline horizontal background path line in desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-[var(--border-medium)] -z-10" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[var(--background-deep)] border-2 border-[var(--brand-cyan)] flex items-center justify-center text-[var(--brand-cyan)] font-bold text-lg mb-4 z-10">
                1
              </div>
              <h4 className="text-[var(--text-primary)] type-card-title mb-1.5">Entender</h4>
              <p className="text-[var(--text-secondary)] type-body-small max-w-[200px]">
                Escutamos com empatia sua realidade e mapeamos os desafios.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[var(--background-deep)] border-2 border-[var(--brand-cyan)] flex items-center justify-center text-[var(--brand-cyan)] font-bold text-lg mb-4 z-10">
                2
              </div>
              <h4 className="text-[var(--text-primary)] type-card-title mb-1.5">Planejar</h4>
              <p className="text-[var(--text-secondary)] type-body-small max-w-[200px]">
                Criamos planos e estratégias totalmente personalizadas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[var(--background-deep)] border-2 border-[var(--brand-cyan)] flex items-center justify-center text-[var(--brand-cyan)] font-bold text-lg mb-4 z-10">
                3
              </div>
              <h4 className="text-[var(--text-primary)] type-card-title mb-1.5">Aplicar</h4>
              <p className="text-[var(--text-secondary)] type-body-small max-w-[200px]">
                Executamos o plano com ferramentas práticas no dia a dia.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[var(--background-deep)] border-2 border-[var(--brand-cyan)] flex items-center justify-center text-[var(--brand-cyan)] font-bold text-lg mb-4 z-10">
                4
              </div>
              <h4 className="text-[var(--text-primary)] type-card-title mb-1.5">Acompanhar</h4>
              <p className="text-[var(--text-secondary)] type-body-small max-w-[200px]">
                Analisamos métricas, celebramos resultados e propomos ajustes.
              </p>
            </div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            4. SEÇÃO EDUCAÇÃO ANTIRRACISTA (High contrast split layout)
            ================================================== */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-b border-[var(--border-subtle)] bg-[var(--background-primary)]">
          {/* Left portrait photo - smoothly masked */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden photo-mask shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Aluno negro lendo livro atentamente em sala de aula"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[var(--background-deep)]/20" />
          </div>

          {/* Right text box */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="type-eyebrow text-[var(--brand-cyan)]">EDUCAÇÃO ESPECIALIZADA</span>
            <h2 className="text-white type-section-title max-w-xl">
              {siteContent.home.educationSection.title}
            </h2>
            <p className="text-[var(--brand-gray)] type-body max-w-xl">
              {siteContent.home.educationSection.description} Auxiliamos coordenações pedagógicas, docentes e instituições de ensino a estruturarem planejamentos curriculares e debates enriquecedores fundamentados na responsabilidade e conformidade legal.
            </p>
            <div className="mt-2">
              <Link
                to="/solucoes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg type-button text-[var(--brand-cyan)] bg-[var(--border-accent)]/10 border border-[var(--border-accent)]/25 hover:bg-[var(--border-accent)]/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
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
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-b border-[var(--border-subtle)] bg-[var(--background-secondary)]">
          
          {/* Left Text */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-5 text-left">
            <span className="type-eyebrow text-[var(--brand-cyan)]">GESTÃO E EMPRESAS</span>
            <h2 className="text-[var(--text-primary)] type-section-title max-w-xl">
              {siteContent.home.businessSection.title}
            </h2>
            <p className="text-[var(--text-secondary)] type-body max-w-xl">
              {siteContent.home.businessSection.description} Desenvolvemos planos de ação estratégicos práticos para guiar o dia a dia administrativo, finanças primárias, posicionamento de mercado e formação continuada para equipes e lideranças em MEIs e pequenas empresas.
            </p>
            <div className="mt-2">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg type-button text-[var(--text-primary)] bg-white/5 hover:bg-white/10 border border-[var(--border-subtle)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
              >
                <span>Agendar diagnóstico para minha empresa</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
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
            <div className="absolute inset-0 bg-[var(--background-deep)]/20" />
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
          <div 
            className="p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border border-[var(--border-subtle)] rounded-2xl shadow-[var(--shadow-soft)] bg-[var(--brand-navy)]"
            style={{ background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--background-deep) 100%)' }}
          >
            {/* Subtle ciano accent detail */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--brand-cyan)]/10 blur-2xl rounded-full" />

            <h2 className="text-white type-section-title mb-4 relative z-10">
              {siteContent.home.ctaFinal.title}
            </h2>
            
            <p className="text-[var(--text-secondary)] type-body mb-8 max-w-xl mx-auto relative z-10">
              Descubra caminhos consistentes com o apoio strategic da +Seven. Estamos prontos para entender seu momento e construir soluções personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl type-button text-white shadow-md hover:-translate-y-[2px] transition-all duration-[180ms] flex items-center justify-center gap-2"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span>Agendar atendimento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={siteContent.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl type-button text-[var(--text-primary)] bg-[var(--background-deep)] hover:bg-[var(--background-deep)]/80 border border-[var(--border-subtle)] transition-all duration-200 flex items-center justify-center gap-2"
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
