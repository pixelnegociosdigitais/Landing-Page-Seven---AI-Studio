import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 lg:py-20 border-b border-white/5 relative"
      aria-label="Apresentação Principal +Seven"
    >
      
      {/* Dynamic Background Glow for high visual impact */}
      <div className="absolute top-[-10%] right-[10%] w-[450px] h-[450px] bg-[#16BDF0]/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-[#095BFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Left Column: Copywriting and CTAs */}
      <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#16BDF0]/15 to-[#095BFF]/15 border border-[#16BDF0]/20 text-xs text-[#16BDF0] font-bold tracking-[0.15em] uppercase max-w-max animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#16BDF0]" />
          <span>{siteContent.home.hero.tag}</span>
        </div>

        {/* Compelling Headline */}
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
          A educação e a gestão unidas para criar caminhos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] via-[#095BFF] to-purple-400">crescimento real.</span>
        </h1>

        {/* Subheadline detailing the value proposition */}
        <p className="text-[#B6BEC8] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-medium">
          A <strong className="text-white font-bold">+Seven</strong> integra consultoria pedagógica focada em equidade social, reestruturação para MEIs e formação continuada para capacitar pessoas e transformar negócios de ponta a ponta.
        </p>

        {/* Key value pillars in bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 max-w-lg">
          <div className="flex items-center gap-2 text-xs text-[#B6BEC8] font-bold">
            <CheckCircle className="w-4 h-4 text-[#16BDF0] shrink-0" />
            <span>Educação Antirracista Prática</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#B6BEC8] font-bold">
            <CheckCircle className="w-4 h-4 text-[#16BDF0] shrink-0" />
            <span>Estruturação de Caixa & Processos</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#B6BEC8] font-bold">
            <CheckCircle className="w-4 h-4 text-[#16BDF0] shrink-0" />
            <span>Formação Docente Ativa</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#B6BEC8] font-bold">
            <CheckCircle className="w-4 h-4 text-[#16BDF0] shrink-0" />
            <span>Diagnósticos 100% Personalizados</span>
          </div>
        </div>

        {/* Action Buttons (Primary CTA linked directly to Contact Page as requested) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
          <Link
            to="/contato"
            id="hero-primary-cta"
            className="px-8 py-4 text-center font-bold text-white bg-gradient-to-r from-[#095BFF] to-[#16BDF0] hover:brightness-110 rounded-xl shadow-lg shadow-[#095BFF]/25 active:scale-98 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider group"
          >
            <span>Fale com nossa equipe</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/solucoes"
            id="hero-secondary-cta"
            className="px-8 py-4 text-center font-bold text-[#B6BEC8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm uppercase tracking-wider"
          >
            {siteContent.home.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Right Column: Dynamic Vector-Graphic & Portrait Collage */}
      <div className="lg:col-span-5 relative w-full flex items-center justify-center">
        
        {/* Glow behind composition */}
        <div className="absolute w-72 h-72 bg-[#095BFF]/10 blur-3xl rounded-full -z-10" />

        {/* Visual Composition Container */}
        <div className="relative w-full max-w-[400px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[rgba(10,27,48,0.2)] p-6 flex flex-col justify-between">
          
          {/* Header row in mockup frame */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[#16BDF0]/10 flex items-center justify-center text-[#16BDF0]">
                <Zap className="w-3 h-3" />
              </div>
              <span className="text-[10px] text-[#7F8A98] font-bold tracking-widest uppercase">DIAGNÓSTICO EM TEMPO REAL</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]/50" />
            </div>
          </div>

          {/* Portrait Mask Collage */}
          <div className="relative flex-1 my-4 rounded-xl overflow-hidden bg-[#07111F] border border-white/5">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Equipe +Seven trabalhando em conjunto"
                className="w-full h-full object-cover opacity-100"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[#07111F] flex items-center justify-center">
                <span className="text-xs text-[#7F8A98] font-bold">Imagem institucional +Seven</span>
              </div>
            )}
          </div>

          {/* Floating Glassmorphic Pill */}
          <div className="absolute top-[40%] right-[-10px] sm:right-[-20px] glass-panel-strong border-[#16BDF0]/40 py-2.5 px-4 shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#7F8A98] font-bold leading-none uppercase">RESULTADO SEGURO</p>
              <p className="text-white font-bold text-xs">Acompanhamento Ativo</p>
            </div>
          </div>

          {/* Footer Metrics Indicator */}
          <div className="bg-[#050B16] rounded-xl p-3 border border-white/5 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[9px] text-[#7F8A98] font-bold uppercase block mb-0.5">Parceiros Assistidos</span>
              <span className="text-[#16BDF0] text-sm font-bold tracking-tight">+120 Instituições</span>
            </div>
            <span className="text-[10px] bg-[#16BDF0]/10 text-[#16BDF0] border border-[#16BDF0]/20 px-2.5 py-1 rounded-full font-bold">
              100% Prático
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
