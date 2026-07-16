import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] flex items-center justify-center py-20 overflow-hidden">
      <SEO 
        title="Página Não Encontrada | +Seven" 
        description="A página que você está procurando não foi encontrada ou não existe."
      />

      
      {/* Background glow decorator */}
      <div className="absolute w-[400px] h-[400px] bg-[#095BFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell max-w-md text-center flex flex-col items-center gap-6">
        
        {/* Warning Badge */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-lg shadow-amber-500/5 animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
            Página não encontrada.
          </h1>
          <p className="text-[#B6BEC8] text-sm leading-relaxed font-medium">
            O endereço informado não existe ou foi alterado. Por favor, verifique a URL digitada ou retorne à página inicial.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#095BFF] hover:bg-[#095BFF]/95 shadow-lg shadow-[#095BFF]/20 active:scale-98 transition-all text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao início</span>
        </Link>

      </div>
    </div>
  );
}
