import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Heart, Compass, Fingerprint, Ear, Hammer, LineChart, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Quem Somos | +Seven" 
        description="Entenda nosso propósito, metodologia e o compromisso da +Seven em escutar, construir e acompanhar cada projeto com excelência técnica e humana."
      />

      
      {/* Background radial glow accents */}
      <div className="absolute top-0 left-10 w-[450px] h-[450px] bg-[#16BDF0]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#095BFF]/3 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. ABOUT HERO SECTION (Matches layout of reference-sobre.png)
            ================================================== */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-16 border-b border-white/5">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16BDF0]/10 border border-[#16BDF0]/20 text-[#16BDF0] type-eyebrow max-w-max">
              <span>{siteContent.about.hero.tag}</span>
            </div>
            
            <h1 className="text-white type-section-title max-w-2xl">
              Conhecimento que aproxima. Estratégia que <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">transforma.</span>
            </h1>
            
            <p className="text-[#B6BEC8] type-body-large max-w-xl">
              {siteContent.about.hero.description}
            </p>
          </div>

          {/* Right Column: Wide Embedded Photo */}
          <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden photo-mask shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Reunião de alinhamento estratégico +Seven"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-70" />
          </div>

        </AnimatedSection>

        {/* ==================================================
            2. ESSÊNCIA E PILARES
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Nossa Essência */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <h2 className="text-[#16BDF0] border-l-4 border-[#16BDF0] pl-3 type-eyebrow">
              {siteContent.about.essence.title}
            </h2>
            <p className="text-white type-subsection-title">
              Ajudar pessoas, escolas e negócios a encontrarem direção clara.
            </p>
            <p className="text-[#B6BEC8] type-body">
              {siteContent.about.essence.description} Acreditamos em diagnósticos transparentes, processos enxutos e cooperação sincera para desbloquear potencialidades locais.
            </p>
          </div>

          {/* Right Block: Nossos Pilares (4 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h2 className="text-[#16BDF0] border-l-4 border-[#16BDF0] pl-3 type-eyebrow">
              {siteContent.about.pilares.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
              
              {/* Pilar 1 */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#16BDF0]/30 bg-[#07111F] flex items-center justify-center text-[#16BDF0] shadow-sm">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="text-white type-card-title">
                  Educação antirracista e inclusiva
                </h4>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#095BFF]/30 bg-[#07111F] flex items-center justify-center text-[#095BFF] shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-white type-card-title">
                  Desenvolvimento humano
                </h4>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-[#07111F] flex items-center justify-center text-purple-400 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-white type-card-title">
                  Estratégia com propósito
                </h4>
              </div>

              {/* Pilar 4 */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-[#07111F] flex items-center justify-center text-emerald-400 shadow-sm">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <h4 className="text-white type-card-title">
                  Ética e responsabilidade
                </h4>
              </div>

            </div>
          </div>

        </AnimatedSection>

        {/* ==================================================
            3. NOSSA FORMA DE ATUAR (3 Row / Cards)
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#16BDF0] type-eyebrow">MÉTODO DE PARCERIA</span>
            <h2 className="text-white type-section-title mt-2">
              Nossa Forma de Atuar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Escutamos */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(22, 189, 240, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(22, 189, 240, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] mb-5 transition-transform duration-300 group-hover:scale-105">
                <Ear className="w-5 h-5" />
              </div>
              <h3 className="text-white type-card-title mb-3">Escutamos</h3>
              <p className="text-[#B6BEC8] type-body">
                {siteContent.about.howWeAct.cards[0].description} Entendemos cada particularidade, cultura local e dores administrativas antes de esboçar qualquer desenho de proposta técnica.
              </p>
            </motion.div>

            {/* Card 2: Construímos */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(9, 91, 255, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(9, 91, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] mb-5 transition-transform duration-300 group-hover:scale-105">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-white type-card-title mb-3">Construímos</h3>
              <p className="text-[#B6BEC8] type-body">
                {siteContent.about.howWeAct.cards[1].description} Rejeitamos receitas genéricas pré-formatadas. Moldamos caminhos pedagógicos ou corporativos adaptáveis que façam pleno sentido operacional.
              </p>
            </motion.div>

            {/* Card 3: Acompanhamos */}
            <motion.div 
              whileHover={{ 
                scale: 1.025, 
                y: -5,
                borderColor: "rgba(168, 85, 247, 0.48)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(168, 85, 247, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 transition-transform duration-300 group-hover:scale-105">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-white type-card-title mb-3">Acompanhamos</h3>
              <p className="text-[#B6BEC8] type-body">
                {siteContent.about.howWeAct.cards[2].description} Permanecemos lado a lado para monitorar a aderência aos processos, qualificar as lideranças e apoiar nas correções necessárias.
              </p>
            </motion.div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            FAQ SECTION
            ================================================== */}
        <AnimatedSection className="py-16 border-b border-white/5">
          <div className="max-w-3xl mx-auto">
            <FAQ />
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
              {siteContent.about.cta.title}
            </h2>
            
            <p className="text-[#B6BEC8] type-body mb-8 max-w-xl mx-auto relative z-10">
              {siteContent.about.cta.description} Comece a traçar o amanhã seguro e inovador de sua instituição hoje mesmo.
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
