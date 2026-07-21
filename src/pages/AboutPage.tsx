import { ArrowRight, GraduationCap, Briefcase, Target, TrendingUp, Ear, Phone } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, SectionHeading, ButtonLink, Card, CardTitle, CardDescription, Badge } from '../components/ui';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background-primary)] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Quem Somos | +Seven" 
        description="Entenda o compromisso da +Seven em conectar educação, gestão e desenvolvimento para gerar mudanças reais, possíveis e duradouras."
      />

      {/* Background radial glow accents */}
      <div className="absolute top-0 left-10 w-[450px] h-[450px] bg-[var(--brand-cyan)]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[var(--brand-navy)]/3 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. HERO INSTITUCIONAL
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Text Column */}
                <div className="lg:col-span-6 flex flex-col gap-6 text-left">
                  <Badge variant="accent" className="max-w-max">
                    {siteContent.about.hero.tag}
                  </Badge>
                  
                  <h1 className="text-white type-section-title max-w-2xl leading-tight">
                    Conhecimento que aproxima. Estratégia que <span className="text-[var(--brand-cyan)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] to-[#095BFF]">transforma.</span>
                  </h1>
                  
                  <p className="text-[var(--gray-secondary)] type-body-large max-w-[65ch] leading-relaxed">
                    {siteContent.about.hero.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                    <ButtonLink
                      to="/contato"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto shadow-lg shadow-[#095BFF]/20 text-center"
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
                      className="w-full sm:w-auto border border-[var(--border-light)] bg-white/5 hover:bg-white/10 text-center"
                      leftIcon={<Phone className="w-4 h-4 text-[#25D366]" />}
                    >
                      Conversar no WhatsApp
                    </ButtonLink>
                  </div>
                </div>

                {/* Right Column: Clean Embedded Photograph */}
                <div className="lg:col-span-6 w-full flex justify-center items-center">
                  <div className="relative w-full overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-[var(--surface-primary)] shadow-[var(--shadow-deep)] flex items-center justify-center">
                    <img
                      src={siteImages.aboutHero.src}
                      alt={siteImages.aboutHero.alt}
                      width={siteImages.aboutHero.width}
                      height={siteImages.aboutHero.height}
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            2. NOSSA ESSÊNCIA
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
                {/* Left Column: Core Narrative */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <Badge variant="neutral" className="max-w-max border border-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5">
                    {siteContent.about.essence.title}
                  </Badge>
                  
                  <h2 className="text-white type-section-title leading-snug">
                    Ajudar pessoas, escolas e negócios a encontrarem direção clara.
                  </h2>
                  
                  <p className="text-[var(--gray-secondary)] type-body-large leading-relaxed max-w-[65ch]">
                    A +Seven nasceu para desmistificar o suporte consultivo, trazendo orientação prática para onde ela é mais necessária. Acreditamos que o conhecimento especializado só é verdadeiramente transformador quando se traduz em ações viáveis e adaptadas à realidade local.
                  </p>
                  
                  <p className="text-[var(--gray-muted)] type-body leading-relaxed max-w-[65ch]">
                    Nossa atuação é pautada por um compromisso sincero de cooperação. Rejeitamos respostas genéricas e pré-formatadas. Trabalhamos para entender detalhadamente o contexto de cada parceiro, desenhando soluções com excelência técnica e sensibilidade humana.
                  </p>
                </div>

                {/* Right Column: Dynamic Core Summary Accent */}
                <div className="lg:col-span-5 lg:pl-6 w-full">
                  <Card variant="solid" className="p-8 border border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl relative overflow-hidden flex flex-col gap-4 shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-cyan)]/5 blur-3xl rounded-full" />
                    
                    <h3 className="text-[var(--brand-cyan)] type-card-title">Caminhos com Propósito</h3>
                    <p className="text-[var(--gray-secondary)] text-sm leading-relaxed">
                      Unimos escuta atenta, diagnósticos transparentes e processos de acompanhamento consultivo contínuo para desbloquear potencialidades locais e estruturar o amanhã de forma sustentável e segura.
                    </p>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            3. EDUCAÇÃO E NEGÓCIOS COMO CAMPOS CONECTADOS
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <SectionHeading
                eyebrow="CAMPOS CONECTADOS"
                title="Educação e Negócios"
                align="center"
                className="mb-6 max-w-2xl mx-auto"
              />
              <p className="text-[var(--gray-secondary)] type-body-large text-center max-w-[65ch] mx-auto mb-12 leading-relaxed">
                Conectamos orientação estratégica, organização de processos e capacitação de pessoas para integrar de forma harmônica o desenvolvimento humano e a sustentabilidade operacional.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Education Block Card */}
                <Card variant="solid" className="p-8 flex flex-col justify-between h-full text-left transition-all duration-200 border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-white type-section-title text-2xl leading-none">Educação Básica e Superior</h3>
                      <Badge variant="neutral" className="border border-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5">
                        Leis 10.639/03 e 11.645/08
                      </Badge>
                    </div>
                    
                    <p className="text-[var(--gray-secondary)] text-sm leading-relaxed">
                      Assessoramos instituições de ensino, redes educacionais e equipes docentes a implementarem as Leis 10.639/03 e 11.645/08 com profundidade pedagógica e respeito histórico. 
                    </p>
                    
                    <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                      Oferecemos programas de formação continuada de educadores, adequação de matrizes curriculares de forma inclusiva, curadoria de materiais pedagógicos customizados e apoio individualizado para a equipe de coordenação e direção estruturar rotinas escolares de alta qualidade.
                    </p>

                    {/* Integrated Antiracist Block with subtle left border accent */}
                    <div className="mt-4 p-4 rounded-xl border-l-2 border-l-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 text-left">
                      <p className="text-[var(--brand-cyan)] text-xs font-medium mb-1">Educação Antirracista e Equidade</p>
                      <p className="text-[var(--gray-muted)] text-[11px] leading-relaxed">
                        Apoiamos a implementação das Leis 10.639/03 e 11.645/08 com responsabilidade ética e pedagógica, promovendo a valorização das diversidades étnico-raciais na rotina escolar.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--border-light)]">
                    <ButtonLink
                      to="/solucoes"
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto border border-[var(--border-light)] bg-white/5 hover:bg-white/10 text-center"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Ver soluções de educação
                    </ButtonLink>
                  </div>
                </Card>

                {/* Business Block Card */}
                <Card variant="solid" className="p-8 flex flex-col justify-between h-full text-left transition-all duration-200 border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-white type-section-title text-2xl leading-none">MEIs e Pequenas Empresas</h3>
                      <Badge variant="neutral" className="border border-[var(--border-light)] text-[var(--gray-secondary)] bg-white/5">
                        MEIs e MPEs
                      </Badge>
                    </div>
                    
                    <p className="text-[var(--gray-secondary)] text-sm leading-relaxed">
                      Oferecemos suporte consultivo simplificado focado puramente em organizar processos e consolidar decisões estratégicas viáveis para microempreendedores individuais e pequenos negócios.
                    </p>
                    
                    <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                      Estruturamos rotinas internas para otimização do tempo produtivo, auxiliamos na clareza de custos operacionais e precificação de mercado, desenhamos planejamentos pragmáticos e fornecemos mentoria periódica para crescimento sustentável de equipes enxutas.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--border-light)]">
                    <ButtonLink
                      to="/solucoes"
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto border border-[var(--border-light)] bg-white/5 hover:bg-white/10 text-center"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Ver soluções empresariais
                    </ButtonLink>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            4. PRINCÍPIOS QUE ORIENTAM A ATUAÇÃO
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <SectionHeading
                eyebrow="NOSSA CONDUTA"
                title="Princípios que Orientam nossa Atuação"
                align="center"
                className="mb-12 max-w-2xl mx-auto"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                {/* Princípio 1: Escuta Genuína */}
                <Card variant="solid" className="p-6 md:p-8 flex flex-col items-start text-left h-full transition-all duration-200 border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 shrink-0">
                    <Ear className="w-5 h-5" />
                  </div>
                  <CardTitle as="h3" className="text-white mb-2 font-medium type-card-title">Escuta Genuína</CardTitle>
                  <CardDescription className="text-[var(--gray-muted)] type-body-small leading-relaxed">
                    Entendemos as particularidades administrativas, pedagógicas e culturais de cada parceiro antes de propor qualquer rota de trabalho.
                  </CardDescription>
                </Card>

                {/* Princípio 2: Pragmatismo Técnico */}
                <Card variant="solid" className="p-6 md:p-8 flex flex-col items-start text-left h-full transition-all duration-200 border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <CardTitle as="h3" className="text-white mb-2 font-medium type-card-title">Pragmatismo Técnico</CardTitle>
                  <CardDescription className="text-[var(--gray-muted)] type-body-small leading-relaxed">
                    Desenvolvemos soluções funcionais, aplicáveis e livres de burocracias desnecessárias, focando estritamente em simplificar o dia a dia.
                  </CardDescription>
                </Card>

                {/* Princípio 3: Equidade e Inclusão */}
                <Card variant="solid" className="p-6 md:p-8 flex flex-col items-start text-left h-full transition-all duration-200 border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <CardTitle as="h3" className="text-white mb-2 font-medium type-card-title">Equidade e Inclusão</CardTitle>
                  <CardDescription className="text-[var(--gray-muted)] type-body-small leading-relaxed">
                    Atuamos com responsabilidade ética e educacional, promovendo o antirracismo e a valorização das diversidades étnico-raciais.
                  </CardDescription>
                </Card>

                {/* Princípio 4: Presença e Suporte */}
                <Card variant="solid" className="p-6 md:p-8 flex flex-col items-start text-left h-full transition-all duration-200 border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] mb-5 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <CardTitle as="h3" className="text-white mb-2 font-medium type-card-title">Presença e Suporte</CardTitle>
                  <CardDescription className="text-[var(--gray-muted)] type-body-small leading-relaxed">
                    Mantemos apoio consultivo e formativo constante ao longo do projeto, assegurando aderência e solidez na execução prática.
                  </CardDescription>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            5. PARA QUEM A +SEVEN TRABALHA
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <SectionHeading
                eyebrow="PARCEIROS"
                title="Para Quem a +Seven Trabalha"
                align="center"
                className="mb-12 max-w-2xl mx-auto"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Educação Column */}
                <div className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-secondary)] text-left">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-white text-lg font-medium">Ambiente Educacional</h3>
                  </div>
                  
                  <ul className="flex flex-col gap-6">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Instituições de Ensino</h4>
                        <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                          Escolas da educação básica e superior, além de redes de ensino, que necessitam de amparo metodológico para a adequação curricular (Leis 10.639 e 11.645) e desenvolvimento de seus educadores.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Lideranças e Educadores</h4>
                        <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                          Diretores, coordenadores de escolas e educadores que demandam capacitações de alto impacto, palestras temáticas e programas continuados de aperfeiçoamento.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Empresas Column */}
                <div className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-secondary)] text-left">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-white text-lg font-medium">Ambiente Corporativo</h3>
                  </div>
                  
                  <ul className="flex flex-col gap-6">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">MEIs e Pequenos Negócios</h4>
                        <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                          Microempreendedores individuais, microempresas e pequenas empresas que buscam organização operacional de suas tarefas cotidianas, precificação correta de serviços e rotas claras de crescimento.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Gestores e Equipes</h4>
                        <p className="text-[var(--gray-muted)] text-xs leading-relaxed">
                          Proprietários de comércios, líderes empresariais e equipes colaborativas que demandam capacitações de alto impacto, aperfeiçoamento de processos e apoio em gestão prática.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            6. COMO A ATUAÇÃO ACONTECE
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                {/* Left text introduction (58.3%) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <Badge variant="accent" className="max-w-max">METODOLOGIA</Badge>
                  <h2 className="text-white type-section-title leading-snug">Como a Atuação Acontece</h2>
                  <p className="text-[var(--gray-secondary)] type-body leading-relaxed max-w-[65ch]">
                    Acompanhamos sua instituição de forma próxima, estruturando cada etapa para que as melhorias sejam sustentadas com naturalidade pelas pessoas envolvidas.
                  </p>
                </div>

                {/* Right Process description (41.7%) */}
                <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                  <div className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-[var(--border-light)]">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] font-medium text-xs shrink-0">
                      01
                    </div>
                    <div className="text-left">
                      <h4 className="text-white text-sm font-medium mb-1">Diagnóstico e Escuta</h4>
                      <p className="text-[var(--gray-muted)] text-xs leading-relaxed">Análise do cenário atual e escuta profunda das rotinas locais para detectar carências de fluxo ou conformidade.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-[var(--border-light)]">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] font-medium text-xs shrink-0">
                      02
                    </div>
                    <div className="text-left">
                      <h4 className="text-white text-sm font-medium mb-1">Estratégia sob Medida</h4>
                      <p className="text-[var(--gray-muted)] text-xs leading-relaxed">Criação de planejamentos pragmáticos detalhados, formatos de formação e matrizes de processos conforme suas metas.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-[var(--border-light)]">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] font-medium text-xs shrink-0">
                      03
                    </div>
                    <div className="text-left">
                      <h4 className="text-white text-sm font-medium mb-1">Formação e Implementação</h4>
                      <p className="text-[var(--gray-muted)] text-xs leading-relaxed">Realização das capacitações presenciais ou remotas das equipes, orientando e testando na prática cotidiana.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-[var(--border-light)]">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] font-medium text-xs shrink-0">
                      04
                    </div>
                    <div className="text-left">
                      <h4 className="text-white text-sm font-medium mb-1">Apoio Consultivo Próximo</h4>
                      <p className="text-[var(--gray-muted)] text-xs leading-relaxed">Monitoramento contínuo para suporte na tomada de decisões e ajustes operacionais a longo prazo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            7. CTA FINAL
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24">
          <Container size="lg">
            <AnimatedSection>
              <div className="p-8 sm:p-12 max-w-5xl mx-auto rounded-3xl border border-[var(--border-light)] bg-[var(--surface-secondary)] shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 text-left">
                  {/* Left Column: Text */}
                  <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                    <h2 className="text-white type-section-title leading-tight">
                      {siteContent.about.cta.title}
                    </h2>
                    
                    <p className="text-[var(--gray-secondary)] type-body max-w-[65ch] leading-relaxed">
                      {siteContent.about.cta.description} Comece a traçar o amanhã seguro e inovador de sua instituição hoje mesmo.
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
                      className="w-full border border-[var(--border-light)] bg-white/5 hover:bg-white/10 text-center"
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
