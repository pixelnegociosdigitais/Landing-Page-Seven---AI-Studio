import { useState, useEffect } from 'react';
import { Search, BookOpen, Puzzle, Sparkles, ArrowRight, CheckCircle, AlertCircle, X, ChevronRight } from 'lucide-react';
import { siteContent, ContentItem } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, Button, ButtonLink, Card, Badge } from '../components/ui';

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'TODOS' | 'EDUCAÇÃO' | 'EMPRESAS' | 'FORMAÇÕES'>('TODOS');
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Reading Modal state
  const [activeArticle, setActiveArticle] = useState<{ title: string; category: string; body: string } | null>(null);

  // Close modal on escape key for keyboard accessibility
  useEffect(() => {
    if (!activeArticle) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArticle]);

  // Combine featured and recent content into a single searchable list
  const allContents: ContentItem[] = [
    {
      id: siteContent.contentPage.featured.id,
      category: siteContent.contentPage.featured.category,
      title: siteContent.contentPage.featured.title,
      description: siteContent.contentPage.featured.description,
      readTime: siteContent.contentPage.featured.readTime
    },
    ...siteContent.contentPage.recent
  ];

  // Filter logic
  const filteredContents = allContents.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'TODOS' ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const trimmedEmail = newsletterEmail.trim();
    if (!trimmedEmail) {
      setNewsletterStatus({ type: 'error', message: 'Por favor, digite o seu e-mail.' });
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setNewsletterStatus({ type: 'error', message: 'Insira um formato de e-mail válido.' });
      return;
    }

    setNewsletterStatus({
      type: 'success',
      message: 'Inscrição validada! A integração do serviço de envio SMTP será conectada posteriormente.'
    });
    // Honest submission: do NOT clear the email input as there is no backend storage active yet
  };

  const handleOpenArticle = (item: any) => {
    let bodyText = '';
    if (item.category === 'EDUCAÇÃO') {
      bodyText = `A implementação das Leis 10.639/03 e 11.645/08 representa um marco fundamental para o avanço de uma educação verdadeiramente democrática, inclusiva e integradora no Brasil.\n\n` +
                 `Ao tornar obrigatório o ensino da história e cultura afro-brasileira e indígena nas redes públicas e privadas, a legislação impõe não apenas uma adequação de grade, mas convoca os educadores a reverem profundamente suas abordagens bibliográficas e referências teóricas cotidianas.\n\n` +
                 `Na +Seven, defendemos que a educação antirracista não se resume a datas comemorativas estanques ou palestras isoladas de calendário. Ela exige planejamento continuado, curadoria crítica de materiais e metodologias que incentivem a empatia, o respeito integral e o reconhecimento das diversas matrizes de conhecimento que erguem nossa nação.`;
    } else if (item.category === 'EMPRESAS') {
      bodyText = `O planejamento estratégico costuma ser visto erroneamente como um privilégio exclusivo de grandes corporações mundiais.\n\n` +
                 `Contudo, para Microempreendedores Individuais (MEIs) e Micro e Pequenas Empresas (MPEs), definir objetivos realistas e estruturar processos internos básicos é o principal escudo contra mortalidade comercial precoce.\n\n` +
                 `Organizar fluxos de caixa simples, diagnosticar o perfil do cliente ideal de maneira recorrente e documentar processos de venda primários poupam tempo e capital, permitindo que a liderança tome decisões de crescimento com previsibilidade e segurança robusta.`;
    } else {
      bodyText = `A liderança eficaz em sistemas de ensino modernos passa obrigatoriamente pelo desenvolvimento humano e acolhimento das equipes docentes.\n\n` +
                 `Gestores escolares que promovem espaços colaborativos autênticos, realizam escutas empáticas sistemáticas e apoiam a formação profissional continuada das suas equipes colhem resultados de aprendizagem muito mais sustentáveis.\n\n` +
                 `A +Seven constrói programas específicos para coordenadores e diretores escolares estabelecerem canais de mediação saudáveis, otimizando o clima institucional e reduzindo expressivamente os níveis de estresse pedagógico acumulado.`;
    }

    setActiveArticle({
      title: item.title,
      category: item.category,
      body: bodyText
    });
  };

  return (
    <div className="relative min-h-screen bg-[var(--background-primary)] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Conteúdos & Recursos | +Seven" 
        description="Explore nossos guias livres, artigos de especialistas e materiais exclusivos sobre legislação educacional, gestão escolar e inovação corporativa."
      />
      
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--brand-cyan)]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="page-shell">
        
        {/* ==================================================
            1. HERO EDITORIAL
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                {/* Left Text Column */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <Badge variant="accent" className="max-w-max">
                    {siteContent.contentPage.hero.tag}
                  </Badge>
                  
                  <h1 className="text-white type-page-title max-w-2xl leading-tight">
                    Conteúdos para aprender, aplicar e <span className="text-[var(--brand-cyan)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] to-[#095BFF]">transformar.</span>
                  </h1>
                  
                  <p className="text-[var(--gray-secondary)] type-body-large max-w-xl leading-relaxed">
                    {siteContent.contentPage.hero.description} Explore guias, artigos reflexivos e modelos práticos construídos para impulsionar sua realidade.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
                    <ButtonLink
                      to="/contato"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto text-center shadow-lg shadow-[#095BFF]/15"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Agende seu diagnóstico
                    </ButtonLink>
                  </div>
                </div>

                {/* Right Column: Premium Editorial Visual Accent */}
                <div className="lg:col-span-5 flex items-center justify-center relative">
                  <div className="absolute w-72 h-72 bg-[var(--brand-cyan)]/10 blur-3xl rounded-full" />
                  
                  <div className="relative w-full max-w-[340px] aspect-[4/3] glass-panel-strong border-[var(--brand-cyan)]/20 p-6 flex flex-col justify-between shadow-2xl rounded-2xl text-left bg-[var(--surface-secondary)]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-[var(--brand-cyan)] type-eyebrow text-[10px]">CONHECIMENTO DIGITAL</span>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--gray-muted)]/40" />
                        <div className="w-2 h-2 rounded-full bg-[var(--gray-muted)]/40" />
                        <div className="w-2 h-2 rounded-full bg-[var(--gray-muted)]/40" />
                      </div>
                    </div>

                    {/* Clean editorial item representations */}
                    <div className="flex flex-col gap-3 my-4">
                      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-7 h-7 rounded bg-[var(--brand-cyan)]/10 flex items-center justify-center text-[var(--brand-cyan)]">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-[var(--gray-secondary)]">Guias e Artigos Temáticos</span>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-7 h-7 rounded bg-[var(--brand-cyan)]/10 flex items-center justify-center text-[var(--brand-cyan)]">
                          <Puzzle className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-[var(--gray-secondary)]">Materiais de Apoio Pedagógico</span>
                      </div>
                    </div>

                    <div className="bg-[var(--background-primary)] rounded-lg p-2.5 border border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-[var(--gray-muted)]">Acesso livre a soluções:</span>
                      <span className="text-[10px] text-[var(--brand-cyan)] font-bold">Recursos Gratuitos</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            2. CONTEÚDO EM DESTAQUE
            ================================================== */}
        {selectedCategory === 'TODOS' && searchQuery === '' && (
          <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
            <Container size="xl">
              <AnimatedSection>
                <div className="flex flex-col gap-2 text-left mb-8">
                  <span className="text-[var(--brand-cyan)] type-eyebrow">Destaque Editorial</span>
                  <h2 className="text-white type-section-title">Leitura Recomendada</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl border border-[var(--border-light)] bg-[var(--surface-secondary)] p-6 sm:p-8 shadow-xl">
                  
                  {/* Left Column Text (50%) - order-2 for mobile (shows after photo) */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-6 text-left order-2 lg:order-1 h-full">
                    <div className="flex flex-col gap-4">
                      <Badge variant="neutral" className="max-w-max border border-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5">
                        {siteContent.contentPage.featured.category}
                      </Badge>
                      
                      <h3 className="text-white type-section-title text-2xl lg:text-3xl leading-snug">
                        {siteContent.contentPage.featured.title}
                      </h3>
                      
                      <p className="text-[var(--gray-secondary)] type-body leading-relaxed">
                        {siteContent.contentPage.featured.description} Compreenda como estruturar de maneira responsável os currículos e dinâmicas pedagógicas voltadas à equidade racial nas redes escolares.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-light)]">
                      <Button
                        onClick={() => handleOpenArticle(siteContent.contentPage.featured)}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Ler conteúdo completo
                      </Button>
                      <span className="text-[var(--gray-muted)] type-caption">{siteContent.contentPage.featured.readTime}</span>
                    </div>
                  </div>

                  {/* Right Column Photograph (50%) - order-1 for mobile (shows first) */}
                  <div className="lg:col-span-6 w-full flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full h-auto overflow-hidden rounded-[20px] border border-[var(--border-light)] bg-[var(--surface-primary)] flex items-center justify-center aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto">
                      <img
                        src={siteImages.contentFeatured.src}
                        alt={siteImages.contentFeatured.alt}
                        width={siteImages.contentFeatured.width}
                        height={siteImages.contentFeatured.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] object-cover rounded-[20px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            </Container>
          </Section>
        )}

        {/* ==================================================
            3. FILTROS E CATEGORIAS REAIS + 4. GRADE DE CONTEÚDOS
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              
              {/* Header with integrated Live Search */}
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-[var(--border-subtle)] text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-[var(--brand-cyan)] type-eyebrow">EXPLORE NOSSO ACERVO</span>
                  <h2 className="text-white type-section-title">Artigos e Orientações</h2>
                </div>
                
                {/* Accessible Search Input */}
                <div className="relative w-full max-w-sm shrink-0">
                  <label htmlFor="search-input" className="sr-only">Buscar artigos</label>
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="O que você procura?"
                    className="w-full pl-12 pr-4 py-3 glass-input text-sm text-white font-normal bg-[var(--surface-primary)]/50 focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] outline-none rounded-xl"
                  />
                  <Search className="absolute left-4 top-3 w-5 h-5 text-[var(--gray-muted)]" />
                </div>
              </div>

              {/* Filter pills navigation block */}
              <div className="flex flex-wrap items-center gap-2 mb-10 text-left">
                {(['TODOS', 'EDUCAÇÃO', 'EMPRESAS', 'FORMAÇÕES'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={selectedCategory === cat}
                    className={`px-4 py-2 rounded-full border text-xs transition-all cursor-pointer type-eyebrow outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] ${
                      selectedCategory === cat
                        ? 'bg-[var(--brand-cyan)]/10 border-[var(--brand-cyan)] text-[var(--brand-cyan)] shadow-sm'
                        : 'bg-white/5 border-[var(--border-light)] text-[var(--gray-secondary)] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat === 'TODOS' ? 'Todos os artigos' : cat.charAt(0) + cat.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>

              {/* Grid or Empty State rendering */}
              {filteredContents.length === 0 ? (
                <div role="status" className="text-center py-12 border border-dashed border-[var(--border-light)] rounded-2xl max-w-md mx-auto bg-[var(--surface-secondary)]">
                  <AlertCircle className="w-8 h-8 text-[var(--gray-muted)] mx-auto mb-3" />
                  <p className="text-white text-base font-medium mb-1">Nenhum conteúdo disponível nesta categoria</p>
                  <p className="text-[var(--gray-muted)] type-body-small px-4">Experimente ajustar sua busca ou selecionar outra categoria.</p>
                  <Button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('TODOS'); }}
                    variant="secondary"
                    size="sm"
                    className="mt-4 border border-[var(--border-light)] bg-white/5 hover:bg-white/10"
                  >
                    Limpar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {/* Smartly prevent duplicating featured post when showing general recent cards */}
                  {(searchQuery === '' && selectedCategory === 'TODOS'
                    ? siteContent.contentPage.recent
                    : filteredContents
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOpenArticle(item)}
                      className="flex flex-col h-full w-full text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-light)] hover:border-[var(--brand-cyan)]/30 transition-all duration-300 p-5 sm:p-6 md:p-7"
                      aria-label={`Ler artigo: ${item.title}`}
                    >
                      <div className="flex flex-col gap-4 text-left h-full justify-between w-full">
                        <div className="flex flex-col gap-3">
                          <span className="text-[var(--brand-cyan)] type-eyebrow text-xs">
                            {item.category}
                          </span>
                          <span className="text-white text-base md:text-lg font-medium leading-snug group-hover:text-[var(--brand-cyan)] transition-colors block">
                            {item.title}
                          </span>
                          <p className="text-[var(--gray-muted)] text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-4 mt-6 w-full">
                          <span className="text-[var(--gray-muted)] type-caption">{item.readTime}</span>
                          <span className="w-8 h-8 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] group-hover:bg-[var(--brand-cyan)] group-hover:text-[var(--background-primary)] flex items-center justify-center transition-all duration-300 shrink-0">
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            5. RECURSOS DE SUPORTE (3 Cards Horizontais)
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24 border-b border-[var(--border-subtle)]">
          <Container size="xl">
            <AnimatedSection>
              <div className="flex flex-col gap-2 text-center mb-10 max-w-2xl mx-auto">
                <span className="text-[var(--brand-cyan)] type-eyebrow">RECURSOS DE SUPORTE</span>
                <h2 className="text-white type-section-title">Materiais e Ferramentas Prontas</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {siteContent.contentPage.materials.map((mat, idx) => {
                  const Icon = idx === 0 ? BookOpen : idx === 1 ? Puzzle : Sparkles;
                  return (
                    <Card 
                      key={mat.id}
                      variant="solid" 
                      className="p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full border-[var(--border-light)] bg-[var(--surface-secondary)] rounded-2xl text-left hover:border-[var(--brand-cyan)]/30 transition-all duration-200"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 flex items-center justify-center text-[var(--brand-cyan)] shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-white text-base font-medium mb-1">{mat.title}</h4>
                          <p className="text-[var(--gray-muted)] text-sm leading-relaxed">{mat.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-[var(--border-light)] flex justify-end">
                        <ButtonLink
                          to="/contato"
                          variant="secondary"
                          size="sm"
                          className="w-full sm:w-auto border border-[var(--border-light)] bg-white/5 hover:bg-white/10 text-center"
                          rightIcon={<ChevronRight className="w-4 h-4" />}
                        >
                          Solicitar acesso
                        </ButtonLink>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            6. NEWSLETTER
            ================================================== */}
        <Section className="py-14 md:py-20 lg:py-24">
          <Container size="lg">
            <AnimatedSection>
              <Card variant="glass" className="w-full min-w-0 p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto relative overflow-hidden border-[var(--border-light)] bg-[var(--surface-secondary)] shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-cyan)]/5 blur-3xl rounded-full" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full min-w-0 text-left">
                  
                  {/* Left content description */}
                  <div className="lg:col-span-6 min-w-0 flex flex-col gap-3">
                    <h3 className="text-white text-xl lg:text-2xl font-medium">
                      {siteContent.contentPage.newsletter.title}
                    </h3>
                    <p className="text-[var(--gray-muted)] text-sm leading-relaxed">
                      {siteContent.contentPage.newsletter.description} Enviaremos apenas materiais selecionados, artigos e atualizações estratégicas diretamente para você.
                    </p>
                  </div>

                  {/* Right Input field form */}
                  <div className="lg:col-span-6 min-w-0 w-full">
                    <form onSubmit={handleNewsletterSubmit} className="w-full min-w-0 flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 w-full min-w-0">
                        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                          <label htmlFor="newsletter-email" className="sr-only">Seu e-mail</label>
                          <input
                            id="newsletter-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              if (newsletterStatus.type) setNewsletterStatus({ type: null, message: '' });
                            }}
                            placeholder="Seu melhor e-mail"
                            className="w-full px-4 py-3 text-sm glass-input font-normal bg-[var(--surface-primary)]/50 focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] outline-none rounded-xl border border-[var(--border-light)] text-white placeholder-[var(--gray-muted)]"
                            required
                            aria-describedby={
                              newsletterStatus.type === 'error'
                                ? 'newsletter-error'
                                : newsletterStatus.type === 'success'
                                ? 'newsletter-success'
                                : undefined
                            }
                          />
                          
                          {newsletterStatus.type === 'error' && (
                            <span id="newsletter-error" role="alert" className="text-xs text-red-400 flex items-center gap-1.5 font-medium mt-1">
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              <span>{newsletterStatus.message}</span>
                            </span>
                          )}
                          
                          {newsletterStatus.type === 'success' && (
                            <span id="newsletter-success" role="status" className="text-xs text-[var(--brand-cyan)] flex items-center gap-1.5 font-medium mt-1">
                              <CheckCircle className="w-4 h-4 shrink-0" />
                              <span>{newsletterStatus.message}</span>
                            </span>
                          )}
                        </div>
                        
                        <Button
                          type="submit"
                          variant="primary"
                          size="md"
                          className="w-full sm:w-auto shrink-0 whitespace-nowrap shadow-lg shadow-[#095BFF]/15"
                        >
                          Quero receber
                        </Button>
                      </div>
                    </form>
                  </div>

                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>

      </main>

      {/* ==================================================
          7. DETAILED ARTICLE READER MODAL
          ================================================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <Card variant="solid" className="w-full max-w-2xl border-[var(--border-light)] p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh] bg-[var(--surface-secondary)] rounded-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[var(--brand-cyan)] type-eyebrow text-[10px]">
                  {activeArticle.category}
                </span>
                <h3 className="text-white text-xl font-medium leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-[var(--gray-muted)] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--brand-cyan)]"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto pr-2 text-left flex-1 scrollbar-thin">
              {activeArticle.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-[var(--gray-secondary)] type-body mb-4 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Footer actions */}
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between">
              <span className="text-[var(--gray-muted)] type-caption">Leitura continuada • +Seven</span>
              <ButtonLink
                to="/contato"
                variant="primary"
                size="md"
                onClick={() => setActiveArticle(null)}
              >
                Agendar diagnóstico
              </ButtonLink>
            </div>

          </Card>
        </div>
      )}

    </div>
  );
}
