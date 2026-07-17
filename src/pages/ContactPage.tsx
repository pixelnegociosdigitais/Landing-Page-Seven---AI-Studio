import { Phone, Mail, Instagram, ArrowRight, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import ContactForm from '../components/ContactForm';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, Button, ButtonLink, Card, CardTitle, CardDescription, Badge } from '../components/ui';

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
        <Section className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-16">
              
              {/* Left Text Column */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                <Badge variant="accent" className="max-w-max">
                  {siteContent.contactPage.hero.tag}
                </Badge>
                
                <h1 className="text-white type-section-title max-w-2xl">
                  Vamos conversar sobre o <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">próximo passo?</span>
                </h1>
                
                <p className="text-[#B6BEC8] type-body-large max-w-xl">
                  {siteContent.contactPage.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                  <ButtonLink
                    href={siteContent.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="shadow-lg shadow-[#095BFF]/20"
                    leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                  >
                    Falar no WhatsApp
                  </ButtonLink>
                  
                  <Button
                    onClick={handleScrollToForm}
                    variant="secondary"
                    size="lg"
                    className="border border-white/10"
                  >
                    Outros canais
                  </Button>
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
          </Container>
        </Section>

        {/* ==================================================
            2. LOWER WORKSPACE: TWO-COLUMN LAYOUT (Channels, Form)
            ================================================== */}
        <Section id="contact-form-block" className="border-b border-white/5 scroll-mt-24">
          <Container size="xl">
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
              
              {/* Column 1: Contact Channels (lg:col-span-2) */}
              <div className="lg:col-span-2 flex flex-col gap-6 text-left">
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
                    className="block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0] rounded-xl"
                  >
                    <Card variant="soft" className="p-5 border-inherit transition-colors duration-300">
                      <div className="flex items-center gap-3.5 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                          <Phone className="w-5 h-5" />
                        </div>
                        <CardTitle as="h3">WhatsApp</CardTitle>
                      </div>
                      <CardDescription>
                        Para dúvidas rápidas, informações curriculares e agendamento de diagnósticos.
                      </CardDescription>
                      <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                        {siteContent.contact.whatsappDisplay}
                      </span>
                    </Card>
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
                    className="block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0] rounded-xl"
                  >
                    <Card variant="soft" className="p-5 border-inherit transition-colors duration-300">
                      <div className="flex items-center gap-3.5 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <CardTitle as="h3">E-mail</CardTitle>
                      </div>
                      <CardDescription>
                        Para propostas comerciais, projetos institucionais, parcerias e envio de materiais.
                      </CardDescription>
                      <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                        {siteContent.contact.email}
                      </span>
                    </Card>
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
                    className="block group focus:outline-none focus:ring-2 focus:ring-[#16BDF0] rounded-xl"
                  >
                    <Card variant="soft" className="p-5 border-inherit transition-colors duration-300">
                      <div className="flex items-center gap-3.5 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                          <Instagram className="w-5 h-5" />
                        </div>
                        <CardTitle as="h3">Instagram</CardTitle>
                      </div>
                      <CardDescription>
                        Para acompanhar novidades pedagógicas, vídeos educativos e conselhos estratégicos.
                      </CardDescription>
                      <span className="text-[#16BDF0] type-caption block mt-3 underline decoration-transparent group-hover:decoration-current transition-all">
                        {siteContent.contact.instagram}
                      </span>
                    </Card>
                  </motion.a>

                 </div>
              </div>

              {/* Column 2: Message Form (lg:col-span-3) */}
              <div className="lg:col-span-3 flex flex-col gap-6 text-left">
                <span className="text-[#16BDF0] type-eyebrow block border-l-4 border-[#16BDF0] pl-3">
                  Envie sua mensagem
                </span>
                <Card variant="soft" className="p-6">
                  <ContactForm />
                </Card>
              </div>

            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            3. CONTACT LOWER CTA
            ================================================== */}
        <Section className="py-16">
          <Container size="lg">
            <AnimatedSection>
              <Card variant="soft" className="p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border-[#16BDF0]/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#16BDF0]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/10 blur-3xl rounded-full" />

                <CardTitle as="h2" className="text-white type-section-title mb-4 relative z-10">
                  Vamos construir o próximo passo juntos?
                </CardTitle>
                
                <CardDescription className="text-[#B6BEC8] type-body mb-8 max-w-xl mx-auto relative z-10">
                  Entre em contato e conte brevemente o que sua escola, instituição de ensino ou empresa precisa. A equipe +Seven entrará em contato para agendar uma conversa inicial.
                </CardDescription>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Button
                    onClick={handleScrollToForm}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto shadow-lg shadow-[#095BFF]/15"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Preencher formulário
                  </Button>
                  
                  <ButtonLink
                    href={siteContent.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto border border-white/10"
                    leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                  >
                    Conversar no WhatsApp
                  </ButtonLink>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>

      </div>
    </div>
  );
}
