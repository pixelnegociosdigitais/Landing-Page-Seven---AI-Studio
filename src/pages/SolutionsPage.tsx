import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Users, Search, Target, TrendingUp, ChevronRight, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, SectionHeading, Button, ButtonLink, Card, CardTitle, CardDescription, Badge } from '../components/ui';

export default function SolutionsPage() {
  const handleScrollToCards = () => {
    const el = document.getElementById('solutions-cards');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Soluções & Serviços Educacionais e Empresariais | +Seven" 
        description="Conheça nossas soluções integradas para educação básica, educação superior, gestão corporativa, MEIs, MPEs e capacitações de alto impacto."
      />

      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#16BDF0]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. SOLUTIONS HERO SECTION
            ================================================== */}
        <AnimatedSection className="border-b border-white/5">
          <Container size="xl" className="py-8 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                <Badge variant="accent" className="max-w-max">
                  {siteContent.solutions.hero.tag}
                </Badge>
                
                <h1 className="text-white type-section-title max-w-2xl">
                  Soluções para <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">transformar desafios</span> em resultados.
                </h1>
                
                <p className="text-[#B6BEC8] type-body-large max-w-xl">
                  {siteContent.solutions.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                  <Button
                    onClick={handleScrollToCards}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto shadow-lg shadow-[#095BFF]/20"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Conhecer nossas soluções
                  </Button>
                  
                  <ButtonLink
                    href={siteContent.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10"
                    leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                  >
                    {siteContent.solutions.hero.ctaSecondary}
                  </ButtonLink>
                </div>
              </div>

              {/* Right Column: Clean Embedded Photograph */}
              <div className="lg:col-span-5 w-full flex justify-center items-center">
                <img
                  src={siteImages.solutionsHero.src}
                  alt={siteImages.solutionsHero.alt}
                  width={siteImages.solutionsHero.width}
                  height={siteImages.solutionsHero.height}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-contain rounded-[28px] border border-white/10 shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* ==================================================
                2. MÉTODO DE ATUAÇÃO (Diagnóstico, Estratégia, Acompanhamento)
                ================================================== */}
            <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Diagnóstico Item */}
              <Card variant="solid" className="p-6 sm:p-8 flex flex-col items-start text-left h-full transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] mb-5 shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <CardTitle as="h3" className="text-white mb-2 font-medium">Diagnóstico</CardTitle>
                <CardDescription className="text-[#B6BEC8] text-sm leading-relaxed">
                  Investigamos a fundo seu cenário atual para clarear os gargalos.
                </CardDescription>
              </Card>

              {/* Estratégia Item */}
              <Card variant="solid" className="p-6 sm:p-8 flex flex-col items-start text-left h-full transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] mb-5 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <CardTitle as="h3" className="text-white mb-2 font-medium">Estratégia</CardTitle>
                <CardDescription className="text-[#B6BEC8] text-sm leading-relaxed">
                  Desenvolvemos planos práticos orientados a propósitos reais.
                </CardDescription>
              </Card>

              {/* Acompanhamento Item */}
              <Card variant="solid" className="p-6 sm:p-8 flex flex-col items-start text-left h-full transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] mb-5 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <CardTitle as="h3" className="text-white mb-2 font-medium">Acompanhamento</CardTitle>
                <CardDescription className="text-[#B6BEC8] text-sm leading-relaxed">
                  Garantimos suporte consultivo contínuo para sustentar a evolução.
                </CardDescription>
              </Card>
            </div>
          </Container>
        </AnimatedSection>

        {/* ==================================================
            3. INTRODUÇÃO ÀS FRENTES
            ================================================== */}
        <Section id="solutions-cards" spacing="compact" className="pt-12 pb-16 border-b border-white/5 scroll-mt-24">
          <Container size="xl">
            <AnimatedSection>
              <SectionHeading
                eyebrow="CONHEÇA AS FRENTES"
                title="Nossas Linhas de Atuação"
                align="center"
                className="mb-6 max-w-2xl mx-auto"
              />
              <p className="text-[#B6BEC8] type-body-large text-center max-w-2xl mx-auto">
                Conectamos conhecimento especializado em educação básica e superior, organização pragmática para pequenos negócios e programas continuados de capacitação.
              </p>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            4. SEÇÃO EDUCAÇÃO
            ================================================== */}
        <Section spacing="default" className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Text and Laws badge */}
                <div className="lg:col-span-6 flex flex-col gap-6 text-left">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">EDUCAÇÃO BÁSICA E SUPERIOR</Badge>
                    <Badge variant="neutral" className="border border-[#16BDF0]/20 text-[#16BDF0] bg-[#16BDF0]/5">
                      Leis 10.639/03 e 11.645/08
                    </Badge>
                  </div>
                  
                  <h2 className="text-white type-section-title">
                    Educação antirracista com conhecimento, responsabilidade e prática.
                  </h2>
                  
                  <p className="text-[#B6BEC8] type-body-large max-w-xl">
                    Formações, projetos e materiais pedagógicos customizados para escolas e redes que desejam avançar com inclusão, propósito, conformidade legal e qualidade pedagógica comprovada.
                  </p>

                  <p className="text-[#7F8A98] type-body max-w-xl">
                    Apoiamos escolas e educadores na aplicação das Leis 10.639/03 e 11.645/08 de forma consciente, respeitosa e transformadora, trazendo soluções metodológicas seguras e prontas para a implementação em sala de aula.
                  </p>

                  <div className="hidden lg:block mt-4">
                    <ButtonLink
                      to="/contato?solution=educacao"
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Solicitar consultoria educacional
                    </ButtonLink>
                  </div>
                </div>

                {/* Right Column: Key Deliverables Cards */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch">
                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Formação Continuada</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Capacitação continuada para docentes sobre práticas antirracistas, pedagogia inclusiva e metodologias ativas.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Adequação Curricular</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Planejamento estruturado para incorporar o ensino de história e cultura afro-brasileira e indígena de modo qualificado.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Materiais Didáticos</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Criação e curadoria de guias pedagógicos, roteiros de aula e materiais de apoio voltados à equidade e à diversidade.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Apoio a Coordenadores</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Mentoria consultiva individualizada para diretores e equipes de coordenação estruturarem processos escolares eficientes.
                    </CardDescription>
                  </Card>
                </div>

                {/* Mobile Button Link - Appears directly under deliverables */}
                <div className="block lg:hidden mt-8 w-full">
                  <ButtonLink
                    to="/contato?solution=educacao"
                    variant="secondary"
                    size="md"
                    className="w-full text-center border border-white/10 bg-white/5 hover:bg-white/10"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Solicitar consultoria educacional
                  </ButtonLink>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            5. SEÇÃO EMPRESAS
            ================================================== */}
        <Section spacing="default" className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Text and Badge (Written first in DOM for correct mobile/screen-reader flow) */}
                <div className="lg:col-span-6 flex flex-col gap-6 text-left order-1 lg:order-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">MICRO E PEQUENAS EMPRESAS</Badge>
                    <Badge variant="neutral" className="border border-[#095BFF]/20 text-[#095BFF] bg-[#095BFF]/5">
                      MEIs e MPEs
                    </Badge>
                  </div>
                  
                  <h2 className="text-white type-section-title">
                    Estratégia para pequenos negócios crescerem com mais segurança.
                  </h2>
                  
                  <p className="text-[#B6BEC8] type-body-large max-w-xl">
                    Orientação pragmática, planejamento estratégico integrado e organização financeira e operacional para MEIs, micro e pequenas empresas pavimentarem crescimento com máxima segurança.
                  </p>

                  <p className="text-[#7F8A98] type-body max-w-xl">
                    Sabemos que a rotina do pequeno empreendedor é desafiadora. Por isso, oferecemos um suporte consultivo descomplicado, livre de termos corporativos complexos, focado puramente em organizar suas decisões e processos operacionais.
                  </p>

                  <div className="hidden lg:block mt-4">
                    <ButtonLink
                      to="/contato?solution=empresas"
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Falar sobre meu negócio
                    </ButtonLink>
                  </div>
                </div>

                {/* Right Column: Key Deliverables Cards (Placed after Text in DOM, but styled to be on the left on Desktop) */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch order-2 lg:order-1">
                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Organização de Processos</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Análise estrutural da sua rotina empresarial para simplificar processos internos e ganhar tempo produtivo diário.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Planejamento Pragmático</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Definição de objetivos de curto e médio prazo com rotas exatas de execução, adequadas à realidade de equipes enxutas.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Estruturação Financeira</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Suporte na clareza de custos, precificação adequada para o mercado e controle básico do fluxo de caixa operacional.
                    </CardDescription>
                  </Card>

                  <Card variant="solid" className="p-5 sm:p-6 flex flex-col gap-3 text-left h-full transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#095BFF]/10 border border-[#095BFF]/20 flex items-center justify-center text-[#095BFF] shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <CardTitle as="h4" className="text-white font-medium text-base">Mentoria de Gestão</CardTitle>
                    <CardDescription className="text-[#7F8A98] text-xs leading-relaxed">
                      Encontros periódicos focados na tomada de decisões estratégicas e na sustentabilidade comercial do pequeno negócio.
                    </CardDescription>
                  </Card>
                </div>

                {/* Mobile Button Link - Appears directly under deliverables */}
                <div className="block lg:hidden mt-8 w-full">
                  <ButtonLink
                    to="/contato?solution=empresas"
                    variant="secondary"
                    size="md"
                    className="w-full text-center border border-white/10 bg-white/5 hover:bg-white/10"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Falar sobre meu negócio
                  </ButtonLink>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            6. SEÇÃO FORMAÇÕES
            ================================================== */}
        <Section spacing="default" className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection>
              <Card variant="solid" className="p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative subtle background elements (safe under constraints) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#16BDF0]/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
                  {/* Left Column: Text content */}
                  <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                    <Badge variant="accent" className="max-w-max">PROGRAMAS TRANSVERSAIS</Badge>
                    <h2 className="text-white type-section-title">
                      Formações de alto impacto para capacitação e aperfeiçoamento.
                    </h2>
                    <p className="text-[#B6BEC8] type-body-large max-w-xl">
                      Treinamentos dinâmicos e palestras corporativas focadas em soluções práticas para capacitação e desenvolvimento de educadores, gestores públicos ou privados, lideranças de equipe e colaboradores.
                    </p>
                    <p className="text-[#7F8A98] type-body max-w-xl">
                      Nossas capacitações e palestras são formatadas sob demanda para atender as necessidades específicas da sua equipe, conectando teoria e prática cotidiana para motivar e orientar transformações duradouras.
                    </p>
                  </div>

                  {/* Right Column: Key Features and Button */}
                  <div className="lg:col-span-5 flex flex-col gap-4 w-full">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 w-full">
                      <div className="w-10 h-10 rounded-lg bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white text-sm font-medium mb-1">Capacitação Pedagógica</h4>
                        <p className="text-[#7F8A98] text-xs leading-relaxed">Treinamentos focados no corpo docente das instituições.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 w-full">
                      <div className="w-10 h-10 rounded-lg bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white text-sm font-medium mb-1">Cultura e Equipes</h4>
                        <p className="text-[#7F8A98] text-xs leading-relaxed">Palestras e workshops para lideranças e colaboradores corporativos.</p>
                      </div>
                    </div>

                    <div className="mt-2 w-full">
                      <ButtonLink
                        to="/contato?solution=formacoes"
                        variant="primary"
                        size="md"
                        className="w-full text-center shadow-lg shadow-[#16BDF0]/10"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Agendar treinamento
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            7. CTA FINAL
            ================================================== */}
        <Section spacing="default">
          <Container size="lg">
            <AnimatedSection>
              <div className="p-8 sm:p-12 max-w-5xl mx-auto rounded-3xl border border-white/5 bg-[#0A1321] shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 text-left">
                  {/* Left Column: Text */}
                  <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                    <h2 className="text-white type-section-title">
                      {siteContent.solutions.cta.title}
                    </h2>
                    
                    <p className="text-[#B6BEC8] type-body max-w-xl">
                      {siteContent.solutions.cta.description} Conte brevemente suas demandas e receberá um retorno personalizado para dar o próximo passo.
                    </p>
                  </div>

                  {/* Right Column: CTA Buttons */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-start lg:justify-center items-stretch sm:items-center lg:items-stretch">
                    <ButtonLink
                      to="/contato"
                      variant="primary"
                      size="md"
                      className="w-full text-center shadow-lg shadow-[#095BFF]/15"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Agende seu diagnóstico
                    </ButtonLink>
                    
                    <ButtonLink
                      href={siteContent.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="md"
                      className="w-full border border-white/10 bg-white/5 hover:bg-white/10 text-center"
                      leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                    >
                      Conversar no WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

      </div>
    </div>
  );
}
