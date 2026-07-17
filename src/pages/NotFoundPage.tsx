import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, Section, ButtonLink } from '../components/ui';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] flex items-center justify-center py-20 overflow-hidden">
      <SEO 
        title="Página Não Encontrada | +Seven" 
        description="A página que você está procurando não foi encontrada ou não existe."
      />

      
      {/* Background glow decorator */}
      <div className="absolute w-[400px] h-[400px] bg-[#095BFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Section className="page-shell">
        <Container size="sm" className="text-center flex flex-col items-center gap-6">
          
          {/* Warning Badge */}
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-lg shadow-amber-500/5 animate-bounce">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-white type-section-title">
              Página não encontrada.
            </h1>
            <p className="text-[#B6BEC8] type-body-small">
              O endereço informado não existe ou foi alterado. Por favor, verifique a URL digitada ou retorne à página inicial.
            </p>
          </div>

          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            className="shadow-lg shadow-[#095BFF]/20"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Voltar ao início
          </ButtonLink>

        </Container>
      </Section>
    </div>
  );
}
