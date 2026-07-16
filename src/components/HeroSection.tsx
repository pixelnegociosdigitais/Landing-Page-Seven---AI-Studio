import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 lg:py-20 border-b border-[var(--border-subtle)] relative"
      aria-label="Apresentação Principal +Seven"
    >
      
      {/* Discrete depth background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(circle at 80% 50%, rgba(9, 19, 90, 0.20) 0%, rgba(9, 19, 90, 0) 70%)' }}
      />

      {/* Left Column: Copywriting and CTAs */}
      <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
        
        {/* Sparkle Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-accent)] type-eyebrow text-[var(--brand-cyan)] max-w-max animate-fade-in"
          style={{ backgroundColor: 'rgba(9, 19, 90, 0.30)' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
          <span>{siteContent.home.hero.tag}</span>
        </div>

        {/* Compelling Headline */}
        <h1 className="text-[var(--text-primary)] type-hero-title max-w-2xl">
          A educação e a gestão unidas para criar caminhos de <span className="text-[var(--brand-cyan)]">crescimento real.</span>
        </h1>

        {/* Subheadline detailing the value proposition */}
        <p className="text-[var(--text-secondary)] type-body-large max-w-xl">
          A <strong className="text-[var(--text-primary)] font-bold">+Seven</strong> integra consultoria pedagógica focada em equidade social, reestruturação para MEIs e formação continuada para capacitar pessoas e transformar negócios de ponta a ponta.
        </p>

        {/* Key value pillars in bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 max-w-lg">
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
        </div>

        {/* Action Buttons (Primary CTA linked directly to Contact Page as requested) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
          <Link
            to="/contato"
            id="hero-primary-cta"
            className="px-8 py-4 text-center type-button text-white rounded-xl shadow-sm active:scale-98 hover:-translate-y-[2px] transition-all duration-[180ms] flex items-center justify-center gap-2 group"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span>Fale com nossa equipe</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/solucoes"
            id="hero-secondary-cta"
            className="px-8 py-4 text-center type-button text-[var(--text-primary)] bg-[var(--surface-glass)] hover:bg-[var(--surface-glass)]/90 border border-[var(--border-medium)] hover:border-[var(--border-accent)] rounded-xl transition-all duration-200"
          >
            {siteContent.home.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Right Column: Dynamic Vector-Graphic & Portrait Collage */}
      <div className="lg:col-span-5 relative w-full flex items-center justify-center">

        {/* Visual Composition Container */}
        <div className="relative w-full max-w-[400px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between bg-[var(--surface-glass-strong)] backdrop-blur-[16px] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)]">
          
          {/* Header row in mockup frame */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[var(--border-accent)]/10 flex items-center justify-center text-[var(--brand-cyan)]">
                <Zap className="w-3 h-3" />
              </div>
              <span className="type-eyebrow text-[var(--text-muted)] text-[10px]">DIAGNÓSTICO EM TEMPO REAL</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]/30" />
            </div>
          </div>

          {/* Portrait Mask Collage */}
          <div className="relative flex-1 my-4 rounded-xl overflow-hidden bg-[var(--background-deep)] border border-[var(--border-subtle)]">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Equipe +Seven trabalhando em conjunto"
                className="w-full h-full object-cover opacity-100"
              />
            ) : (
              <div className="w-full h-full bg-[var(--background-deep)] flex items-center justify-center">
                <span className="text-xs text-[var(--text-muted)] font-bold">Imagem institucional +Seven</span>
              </div>
            )}
          </div>

          {/* Floating Glassmorphic Pill */}
          <div className="absolute top-[40%] right-[-10px] sm:right-[-20px] bg-[var(--surface-glass-strong)] backdrop-blur-[12px] border border-[var(--border-subtle)] py-2.5 px-4 shadow-[var(--shadow-soft)] rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--border-accent)]/10 border border-[var(--border-accent)]/20 flex items-center justify-center text-[var(--brand-cyan)]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[var(--text-muted)] font-bold leading-none uppercase">RESULTADO SEGURO</p>
              <p className="text-[var(--text-primary)] font-bold text-xs">Acompanhamento Ativo</p>
            </div>
          </div>

          {/* Footer Metrics Indicator */}
          <div className="bg-[var(--background-deep)] rounded-xl p-3 border border-[var(--border-subtle)] flex items-center justify-between">
            <div className="text-left">
              <span className="text-[9px] text-[var(--text-muted)] font-bold uppercase block mb-0.5">Parceiros Assistidos</span>
              <span className="text-[var(--brand-cyan)] text-sm font-bold tracking-tight">+120 Instituições</span>
            </div>
            <span className="text-[10px] bg-[var(--border-accent)]/10 text-[var(--brand-cyan)] border border-[var(--border-accent)]/20 px-2.5 py-1 rounded-full font-bold">
              100% Prático
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
