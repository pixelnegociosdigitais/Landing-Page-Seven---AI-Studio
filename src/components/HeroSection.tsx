import { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { siteContent } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import { Container, ButtonLink } from './ui';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section 
      className="pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24 border-b border-[var(--border-subtle)] relative bg-[var(--background-primary)]"
      aria-label="Apresentação Principal +Seven"
    >
      
      {/* Discrete depth background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(circle at 78% 40%, rgba(9, 19, 90, 0.24), transparent 40%)' }}
      />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Copywriting and CTAs */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 text-left relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Sparkle Eyebrow */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-[var(--border-accent)]/10 text-[var(--brand-cyan)] border border-[var(--border-accent)]/20 self-start"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteContent.home.hero.tag}</span>
            </motion.div>

            {/* Compelling Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-[var(--text-primary)] type-hero-title max-w-2xl"
            >
              A educação e a gestão unidas para criar caminhos de <span className="text-[var(--brand-cyan)]">crescimento real.</span>
            </motion.h1>

            {/* Subheadline detailing the value proposition */}
            <motion.p 
              variants={itemVariants}
              className="text-[var(--text-secondary)] type-body-large max-w-xl"
            >
              A <strong className="text-[var(--text-primary)] font-bold">+Seven</strong> integra consultoria pedagógica focada em equidade social, reestruturação para MEIs e formação continuada para capacitar pessoas e transformar negócios de ponta a ponta.
            </motion.p>

            {/* Key value pillars in bullets */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 max-w-lg"
            >
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-bold">
                <CheckCircle className="w-4 h-4 text-[var(--brand-cyan)] shrink-0" />
                <span>Educação Antirracista Prática</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-bold">
                <CheckCircle className="w-4 h-4 text-[var(--brand-cyan)] shrink-0" />
                <span>Estruturação de Caixa & Processos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-bold">
                <CheckCircle className="w-4 h-4 text-[var(--brand-cyan)] shrink-0" />
                <span>Formação Docente Ativa</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-bold">
                <CheckCircle className="w-4 h-4 text-[var(--brand-cyan)] shrink-0" />
                <span>Diagnósticos 100% Personalizados</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
            >
              <ButtonLink
                to="/contato"
                variant="primary"
                size="lg"
                id="hero-primary-cta"
                className="group"
                rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              >
                Fale com nossa equipe
              </ButtonLink>
              
              <ButtonLink
                to="/solucoes"
                variant="secondary"
                size="lg"
                id="hero-secondary-cta"
              >
                {siteContent.home.hero.ctaSecondary}
              </ButtonLink>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Editorial Photograph representation */}
          <div className="lg:col-span-6 xl:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
            <motion.figure 
              className="w-full min-w-0 max-w-[640px] lg:ml-auto rounded-[22px] md:rounded-[28px] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-deep)] bg-[var(--surface-primary)] aspect-[4/3] lg:aspect-[5/4] lg:min-h-[520px] xl:min-h-[580px] relative"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              {!imgError ? (
                <img
                  src={siteImages.hero.src}
                  alt={siteImages.hero.alt}
                  width={siteImages.hero.width}
                  height={siteImages.hero.height}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-[var(--background-deep)] flex items-center justify-center p-8">
                  <span className="text-xs text-[var(--text-muted)] font-bold">Imagem institucional +Seven</span>
                </div>
              )}
            </motion.figure>
          </div>
        </div>
      </Container>

    </section>
  );
}
