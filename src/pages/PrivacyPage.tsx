import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] pt-32 pb-20 overflow-hidden">
      <SEO 
        title="Política de Privacidade | +Seven" 
        description="Saiba como a +Seven lida com a segurança dos seus dados pessoais em conformidade com as diretrizes da LGPD."
      />

      
      {/* Glow backgrounds */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#16BDF0]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <AnimatedSection className="page-shell max-w-4xl">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#16BDF0] hover:text-white transition-colors mb-8 group type-caption"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar ao início</span>
        </Link>

        {/* Header Title */}
        <div className="flex items-center gap-4 mb-8 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0]">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white type-page-title">
              Política de Privacidade
            </h1>
            <p className="text-[#7F8A98] mt-1.5 type-caption">
              Última atualização: Julho de 2026
            </p>
          </div>
        </div>

        {/* Content Box */}
        <div className="glass-panel p-6 sm:p-10 border-white/5 bg-[rgba(10,27,48,0.45)] text-left flex flex-col gap-6 text-[#B6BEC8] type-body">
          
          <div className="border-b border-white/5 pb-4">
            <span className="text-[#16BDF0] type-eyebrow block mb-2">Aviso Legal Importante</span>
            <p className="text-[#7F8A98] italic type-body-small">
              Esta política serve como modelo institucional e deve ser revisada por consultores jurídicos especializados antes da publicação ou divulgação comercial oficial sob a marca +Seven.
            </p>
          </div>

          <div>
            <h3 className="text-white type-card-title mb-2">1. Dados Coletados</h3>
            <p>
              Coletamos informações fornecidas ativamente por você no preenchimento de nossos formulários de contato e inscrições de newsletter. Estes dados incluem seu nome completo, endereço de e-mail válido, número de WhatsApp para contato imediato e perfil de atuação selecionado.
            </p>
          </div>

          <div>
            <h3 className="text-white type-card-title mb-2">2. Finalidade do Contato</h3>
            <p>
              Os dados coletados são utilizados unicamente para viabilizar o retorno de atendimento de nossa equipe estratégica. Desta forma, podemos propor reuniões de diagnóstico consistentes com as necessidades de sua instituição, escola ou pequena empresa.
            </p>
          </div>

          <div>
            <h3 className="text-white type-card-title mb-2">3. Armazenamento e Segurança</h3>
            <p>
              Adotamos medidas técnicas rígidas para proteger os dados armazenados temporariamente. Os dados fornecidos não são compartilhados com parceiros comerciais externos ou qualquer empresa terceira sem o seu consentimento livre e prévio por escrito.
            </p>
          </div>

          <div>
            <h3 className="text-white type-card-title mb-2">4. Direitos do Titular</h3>
            <p>
              Em conformidade com as diretrizes da Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento a consulta, correção, bloqueio ou eliminação definitiva dos seus dados de nosso banco de contatos. Para isso, basta nos enviar uma mensagem formal através do e-mail <a href="mailto:contato@maisseven.com.br" className="text-[#16BDF0] hover:underline type-body-small">contato@maisseven.com.br</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white type-card-title mb-2">5. Cookies</h3>
            <p>
              Utilizamos cookies estritamente necessários para otimizar os tempos de carregamento de páginas e a experiência geral de navegação em nosso website institucional.
            </p>
          </div>

        </div>

      </AnimatedSection>
    </div>
  );
}
