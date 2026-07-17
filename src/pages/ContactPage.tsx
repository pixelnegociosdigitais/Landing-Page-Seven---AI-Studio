import { Phone, Mail, Instagram, ArrowRight, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function ContactPage() {
  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form-block');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Fale Conosco | +Seven" 
        description="Entre em contato com nossos especialistas e descubra como a +Seven pode transformar os resultados da sua organização. Atendimento via WhatsApp, e-mail e mais."
      />

      
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#16BDF0]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. CONTACT HERO SECTION (reference-contato.png first fold)
            ================================================== */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-16 border-b border-white/5">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16BDF0]/10 border border-[#16BDF0]/20 text-[#16BDF0] type-eyebrow max-w-max">
              <span>{siteContent.contactPage.hero.tag}</span>
            </div>
            
            <h1 className="text-white type-section-title max-w-2xl">
              Vamos conversar sobre o <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">próximo passo?</span>
            </h1>
            
            <p className="text-[#B6BEC8] type-body-large max-w-xl">
              {siteContent.contactPage.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <a
                href={siteContent.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-center type-button text-white bg-[#095BFF] hover:bg-[#095BFF]/95 rounded-xl shadow-lg shadow-[#095BFF]/20 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
              
              <button
                onClick={handleScrollToForm}
                className="px-6 py-3.5 text-center type-button text-[#B6BEC8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer"
              >
                Outros canais
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Professional Portrait (no screens or generic frames) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden photo-mask shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Profissional com headset sorrindo pronta para atendimento"
              className="w-full h-full object-cover opacity-100"
              referrerPolicy="no-referrer"
            />
            {/* Dark vignette gradient overlay to guarantee soft integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-55" />
          </div>

        </AnimatedSection>

        {/* ==================================================
            2. LOWER WORKSPACE: THREE-COLUMN LAYOUT (Channels, Form, FAQ)
            ================================================== */}
        <AnimatedSection id="contact-form-block" className="py-16 border-b border-white/5 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Column 1: Contact Channels (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 text-left">
              <span className="text-[#16BDF0] type-eyebrow block border-l-4 border-[#16BDF0] pl-3">
                Canais de contato
              </span>
              
              <div className="flex flex-col gap-4">
                
                {/* WhatsApp Channel */}
                <motion.a
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(37, 211, 102, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(37, 211, 102, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0]"
                >
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-white type-card-title">WhatsApp</span>
                  </div>
                  <p className="text-[#B6BEC8] type-body-small">
                    Para dúvidas rápidas, informações curriculares e agendamento de diagnósticos.
                  </p>
                  <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                    {siteContent.contact.whatsappDisplay}
                  </span>
                </motion.a>
                 <motion.a
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(22, 189, 240, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(22, 189, 240, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={`mailto:${siteContent.contact.email}`}
                  className="glass-card p-5 block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0]"
                >
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-white type-card-title">E-mail</span>
                  </div>
                  <p className="text-[#B6BEC8] type-body-small">
                    Para propostas comerciais, projetos institucionais, parcerias e envio de materiais.
                  </p>
                  <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                    {siteContent.contact.email}
                  </span>
                </motion.a>

                 {/* Instagram Channel */}
                 <motion.a
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(236, 72, 153, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(236, 72, 153, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={siteContent.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0]"
                >
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-white type-card-title">Instagram</span>
                  </div>
                  <p className="text-[#B6BEC8] type-body-small">
                    Para acompanhar novidades pedagógicas, vídeos educativos e conselhos estratégicos.
                  </p>
                  <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                    {siteContent.contact.instagram}
                  </span>
                </motion.a>

               </div>
            </div>

            {/* Column 2: Message Form (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <span className="text-[#16BDF0] type-eyebrow block border-l-4 border-[#16BDF0] pl-3">
                Envie sua mensagem
              </span>
              <div className="glass-panel p-6 border-white/5 bg-[rgba(10,27,48,0.35)]">
                <ContactForm />
              </div>
            </div>

            {/* Column 3: FAQ Accordion (lg:col-span-4) */}
            <div className="lg:col-span-4">
              <FAQ />
            </div>

          </div>
        </AnimatedSection>

        {/* ==================================================
            3. CONTACT LOWER CTA
            ================================================== */}
        <AnimatedSection className="py-16">
          <div className="glass-panel-strong p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border-[#16BDF0]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#16BDF0]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/10 blur-3xl rounded-full" />

            <h2 className="text-white type-section-title mb-4 relative z-10">
              Vamos construir o próximo passo juntos?
            </h2>
            
            <p className="text-[#B6BEC8] type-body mb-8 max-w-xl mx-auto relative z-10">
              Entre em contato e conte brevemente o que sua escola, instituição de ensino ou empresa precisa. A equipe +Seven entrará em contato para agendar uma conversa inicial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl type-button text-white bg-[#095BFF] hover:bg-[#095BFF]/95 shadow-lg shadow-[#095BFF]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Preencher formulário</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
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
