import { Phone, Mail, Instagram, ArrowRight, ChevronRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, Button, ButtonLink, Card, Badge } from '../components/ui';

export default function ContactPage() {
  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form-block');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--background-primary)] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Fale Conosco | +Seven" 
        description="Entre em contato com nossos especialistas e descubra como a +Seven pode transformar os resultados da sua organização. Atendimento via WhatsApp, e-mail e mais."
      />

      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--brand-cyan)]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell" id="contact-page-main">
        
        {/* ==================================================
            1. HERO DE CONTATO
            ================================================== */}
        <Section id="contact-hero-section" className="py-8 md:py-10 lg:py-12 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="max-w-3xl text-left flex flex-col gap-6">
                <Badge variant="accent" className="max-w-max" id="contact-hero-tag">
                  {siteContent.contactPage.hero.tag}
                </Badge>
                
                <h1 className="text-white type-page-title leading-tight" id="contact-hero-title">
                  Vamos conversar sobre o <span className="text-[var(--brand-cyan)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] to-[#095BFF]">próximo passo?</span>
                </h1>
                
                <p className="text-[var(--gray-secondary)] type-body-large leading-relaxed max-w-2xl" id="contact-hero-description">
                  {siteContent.contactPage.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                  <ButtonLink
                    id="hero-whatsapp-button"
                    href={siteContent.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto text-center shadow-lg shadow-[#095BFF]/15"
                    leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                  >
                    Falar no WhatsApp
                  </ButtonLink>
                  
                  <Button
                    id="hero-scroll-button"
                    onClick={handleScrollToForm}
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto text-center border border-[var(--border-light)] bg-white/5 hover:bg-white/10"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Enviar mensagem
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            2. APRESENTAÇÃO DOS CANAIS OFICIAIS
            ================================================== */}
        <Section id="contact-channels-section" className="py-8 md:py-10 lg:py-12 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="flex flex-col gap-2 text-left mb-8">
                <span className="text-[var(--brand-cyan)] type-eyebrow">CANAIS OFICIAIS</span>
                <h2 className="text-white type-section-title">Como prefere falar conosco?</h2>
              </div>

              {/* 3 Channels responsive grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                
                {/* WhatsApp Card */}
                <a
                  id="whatsapp-channel-card"
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30 transition-all duration-300 p-6 md:p-7"
                  aria-label="Fale conosco via WhatsApp"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] shrink-0">
                      <Phone className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="text-white text-base md:text-lg font-medium mb-1">WhatsApp</h3>
                      <p className="text-[var(--gray-muted)] text-sm leading-relaxed">
                        Para dúvidas rápidas, informações curriculares e agendamento de diagnósticos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-4 mt-6">
                    <span className="text-[var(--brand-cyan)] text-xs font-medium tracking-wider">
                      {siteContent.contact.whatsappDisplay}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] group-hover:bg-[var(--brand-cyan)] group-hover:text-[var(--background-primary)] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>

                {/* E-mail Card */}
                <a
                  id="email-channel-card"
                  href={`mailto:${siteContent.contact.email}`}
                  className="group flex flex-col justify-between h-full w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30 transition-all duration-300 p-6 md:p-7"
                  aria-label="Fale conosco via E-mail"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white text-base md:text-lg font-medium mb-1">E-mail</h3>
                      <p className="text-[var(--gray-muted)] text-sm leading-relaxed">
                        Para propostas comerciais, projetos institucionais, parcerias e envio de materiais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-4 mt-6">
                    <span className="text-[var(--brand-cyan)] text-xs font-medium tracking-wider break-all">
                      {siteContent.contact.email}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] group-hover:bg-[var(--brand-cyan)] group-hover:text-[var(--background-primary)] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>

                {/* Instagram Card */}
                <a
                  id="instagram-channel-card"
                  href={siteContent.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30 transition-all duration-300 p-6 md:p-7"
                  aria-label="Acompanhe nosso Instagram"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white text-base md:text-lg font-medium mb-1">Instagram</h3>
                      <p className="text-[var(--gray-muted)] text-sm leading-relaxed">
                        Para acompanhar novidades pedagógicas, vídeos educativos e conselhos estratégicos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-4 mt-6">
                    <span className="text-[var(--brand-cyan)] text-xs font-medium tracking-wider">
                      {siteContent.contact.instagram}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] group-hover:bg-[var(--brand-cyan)] group-hover:text-[var(--background-primary)] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>

              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            3. SEÇÃO PRINCIPAL COM CONTEXTO E FORMULÁRIO
            ================================================== */}
        <Section id="contact-form-block" className="py-8 md:py-10 lg:py-12 border-b border-[var(--border-subtle)] scroll-mt-24">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                
                {/* Left Column (Context & Clean Photograph) (45%) */}
                <div className="lg:col-span-5 flex flex-col gap-6 text-left" id="contact-context-block">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--brand-cyan)] type-eyebrow">DIAGNÓSTICO INICIAL</span>
                    <h2 className="text-white type-section-title">Inicie sua jornada conosco</h2>
                  </div>

                  <p className="text-[var(--gray-secondary)] type-body leading-relaxed">
                    A +Seven atende escolas públicas, privadas, MEIs e micro e pequenas empresas com foco em soluções eficientes e práticas. Preencha o formulário para entendermos seu cenário e planejarmos o próximo passo com segurança.
                  </p>

                  {/* Clean responsive photograph */}
                  <div className="w-full h-auto overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--surface-primary)] shadow-xl relative mt-4" id="contact-photo-container">
                    <img
                      src={siteImages.contactHero.src}
                      alt={siteImages.contactHero.alt}
                      width={siteImages.contactHero.width}
                      height={siteImages.contactHero.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Right Column (Form Box) (55%) */}
                <div className="lg:col-span-7 w-full min-w-0 flex flex-col gap-4 text-left" id="contact-form-wrapper">
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="text-[var(--brand-cyan)] type-eyebrow">FORMULÁRIO DE CONTATO</span>
                    <h3 className="text-white text-lg font-medium">Envie os detalhes do seu projeto</h3>
                  </div>

                  {/* Single level of card nesting around the form, styled perfectly */}
                  <Card variant="solid" className="w-full min-w-0 p-6 sm:p-8 bg-[var(--surface-secondary)] border border-[var(--border-light)] rounded-2xl shadow-lg" id="contact-form-card">
                    <ContactForm />
                  </Card>
                </div>

              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            4. FECHAMENTO / CTA FINAL
            ================================================== */}
        <Section id="contact-cta-section" className="py-8 md:py-10 lg:py-12">
          <Container size="lg">
            <AnimatedSection>
              <Card variant="solid" className="w-full min-w-0 p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden border border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-3xl shadow-xl" id="contact-cta-card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-cyan)]/5 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/5 blur-3xl rounded-full pointer-events-none" />

                <h2 className="text-white type-section-title mb-4 relative z-10">
                  Mais clareza pedagógica e estratégica.
                </h2>
                
                <p className="text-[var(--gray-secondary)] type-body mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
                  Conecte-se com a +Seven e tenha o suporte que você precisa para alinhar as exigências legislativas, otimizar sua gestão ou estruturar as metas do seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Button
                    id="cta-form-scroll-button"
                    onClick={handleScrollToForm}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto shadow-lg shadow-[#095BFF]/15"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Preencher formulário
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>

      </div>
    </div>
  );
}
