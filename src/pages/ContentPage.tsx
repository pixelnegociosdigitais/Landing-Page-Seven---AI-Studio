import { useState } from 'react';
import { Search, BookOpen, Puzzle, Sparkles, ArrowRight, Play, FileText, CheckCircle, AlertCircle, X, ChevronRight } from 'lucide-react';
import { siteContent, ContentItem } from '../content/siteContent';
import { siteImages } from '../content/imageAssets';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Container, Section, SectionHeading, Button, ButtonLink, Card, CardTitle, CardDescription, Badge } from '../components/ui';

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'TODOS' | 'EDUCAÇÃO' | 'EMPRESAS' | 'FORMAÇÕES' | 'MATERIAIS'>('TODOS');
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Reading Modal state
  const [activeArticle, setActiveArticle] = useState<{ title: string; category: string; body: string } | null>(null);

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
    if (!newsletterEmail.trim()) {
      setNewsletterStatus({ type: 'error', message: 'Por favor, digite o seu e-mail.' });
      return;
    }
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterStatus({ type: 'error', message: 'Insira um formato de e-mail válido.' });
      return;
    }

    setNewsletterStatus({
      type: 'success',
      message: 'Inscrição validada! A integração do serviço de envio SMTP será conectada posteriormente.'
    });
    setNewsletterEmail('');
  };

  const handleOpenArticle = (item: any) => {
    // Inject rich simulated content body for reading experience
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
    <div className="relative min-h-screen bg-[#050B16] pt-24 pb-12 overflow-hidden">
      <SEO 
        title="Conteúdos & Recursos | +Seven" 
        description="Explore nossos guias livres, artigos de especialistas e materiais exclusivos sobre legislação educacional, gestão escolar e inovação corporativa."
      />
      
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#16BDF0]/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#095BFF]/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="page-shell">
        
        {/* ==================================================
            1. INTEGRATED SEARCH AND HERO HEADER (reference-conteudos.png)
            ================================================== */}
        <AnimatedSection className="border-b border-white/5">
          <Container size="xl" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-16">
            
            {/* Left Text and Search Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <Badge variant="accent" className="max-w-max">
                {siteContent.contentPage.hero.tag}
              </Badge>
              
              <h1 className="text-white type-section-title max-w-2xl">
                Conteúdos para aprender, aplicar e <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">transformar.</span>
              </h1>
              
              <p className="text-[#B6BEC8] type-body-large max-w-lg">
                {siteContent.contentPage.hero.description} Explore guias, artigos reflexivos e modelos práticos construídos para impulsionar sua realidade.
              </p>

              {/* Live Search Input Bar */}
              <div className="relative w-full max-w-md mt-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O que você procura?"
                  className="w-full pl-12 pr-4 py-3.5 glass-input text-sm text-white font-normal"
                  aria-label="Buscar conteúdos"
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#7F8A98]" />
              </div>

              {/* Filter Pills Category Grid */}
              <div className="flex flex-wrap items-center gap-2.5 mt-1">
                {(['TODOS', 'EDUCAÇÃO', 'EMPRESAS', 'FORMAÇÕES', 'MATERIAIS'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full border transition-all cursor-pointer type-eyebrow ${
                      selectedCategory === cat
                        ? 'bg-[#095BFF] border-[#095BFF] text-white shadow-md shadow-[#095BFF]/15'
                        : 'bg-white/5 border-white/10 text-[#B6BEC8] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat === 'TODOS' ? 'Todos' : cat.charAt(0) + cat.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Tablet Vector Graphic Composition */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              {/* Ambient circle glow */}
              <div className="absolute w-72 h-72 bg-[#16BDF0]/10 blur-3xl rounded-full" />
              
              {/* Interactive glassmorphic screen representing content options */}
              <div className="relative w-full max-w-[340px] aspect-[4/3] glass-panel-strong border-[#16BDF0]/30 p-6 flex flex-col justify-between shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#16BDF0] type-eyebrow text-[10px]">CONHECIMENTO DIGITAL</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-[#25D366]/50" />
                  </div>
                </div>

                {/* Grid of vector icons */}
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#16BDF0]/20 transition-all text-[#16BDF0]">
                    <BookOpen className="w-6 h-6 mb-1.5" />
                    <span className="text-[9px] text-[#B6BEC8] font-bold">Livros</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#16BDF0]/20 transition-all text-[#095BFF]">
                    <Play className="w-6 h-6 mb-1.5" />
                    <span className="text-[9px] text-[#B6BEC8] font-bold">Vídeos</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#16BDF0]/20 transition-all text-purple-400">
                    <FileText className="w-6 h-6 mb-1.5" />
                    <span className="text-[9px] text-[#B6BEC8] font-bold">Modelos</span>
                  </div>
                </div>

                <div className="bg-[#050B16] rounded-lg p-2.5 border border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-[#7F8A98] font-medium">Estudos ativos de caso:</span>
                  <span className="text-[10px] text-[#16BDF0] font-bold">+15 guias livres</span>
                </div>
              </div>
            </div>

          </Container>
        </AnimatedSection>

        {/* ==================================================
            2. FEATURED POST ROW (Visually matches reference hero highlight)
            ================================================== */}
        {selectedCategory === 'TODOS' && searchQuery === '' && (
          <Section spacing="compact" className="border-b border-white/5">
            <Container size="xl">
              <AnimatedSection>
                <span className="text-[#16BDF0] type-eyebrow block mb-6">CONTEÚDO EM DESTAQUE</span>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07111F]/60 border border-[rgba(22,189,240,0.15)] rounded-2xl p-6 sm:p-8 hover:border-[#16BDF0]/45 transition-all duration-300">
                  
                  {/* Left Column Text */}
                  <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                    <div className="text-[#16BDF0] type-eyebrow">
                      {siteContent.contentPage.featured.category}
                    </div>
                    <h3 className="text-white type-subsection-title leading-snug">
                      {siteContent.contentPage.featured.title}
                    </h3>
                    <p className="text-[#B6BEC8] type-body-small">
                      {siteContent.contentPage.featured.description} Compreenda como estruturar de maneira responsável os currículos e dinâmicas pedagógicas voltadas à equidade racial nas redes escolares.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Button
                        onClick={() => handleOpenArticle(siteContent.contentPage.featured)}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Ler conteúdo
                      </Button>
                      <span className="text-[#7F8A98] type-caption">{siteContent.contentPage.featured.readTime}</span>
                    </div>
                  </div>

                  {/* Right Column Masked Illustration/Photo */}
                  <div className="lg:col-span-5 relative h-[220px] sm:h-[260px] rounded-xl overflow-hidden photo-mask">
                    <img
                      src={siteImages.contentFeatured.src}
                      alt={siteImages.contentFeatured.alt}
                      width={siteImages.contentFeatured.width}
                      height={siteImages.contentFeatured.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-55" />
                  </div>

                </div>
              </AnimatedSection>
            </Container>
          </Section>
        )}

        {/* ==================================================
            3. CARDS FILTERED / RECENT LIST
            ================================================== */}
        <Section spacing="compact" className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white type-subsection-title">
                  {searchQuery || selectedCategory !== 'TODOS' ? 'Resultados da busca' : 'Conteúdos recentes'}
                </h3>
                {filteredContents.length > 0 && (
                  <span className="text-[#7F8A98] type-caption">
                    Exibindo {filteredContents.length} de {allContents.length} conteúdos
                  </span>
                )}
              </div>

              {filteredContents.length === 0 ? (
                <div className="text-center py-12 glass-panel border-dashed max-w-lg mx-auto">
                  <AlertCircle className="w-10 h-10 text-[#7F8A98] mx-auto mb-3" />
                  <p className="text-white type-subsection-title mb-1">Nenhum conteúdo encontrado</p>
                  <p className="text-[#7F8A98] type-body-small">Experimente limpar a busca ou mudar o filtro selecionado.</p>
                  <Button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('TODOS'); }}
                    variant="secondary"
                    size="sm"
                    className="mt-4 border border-white/10 bg-white/5 hover:bg-white/10 text-[#B6BEC8] hover:text-white"
                  >
                    Limpar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredContents.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenArticle(item)}
                      className="flex flex-col h-full cursor-pointer group"
                    >
                      <Card
                        variant="solid"
                        interactive
                        className="p-6 flex flex-col justify-between h-full group-hover:border-[#16BDF0]/40 transition-colors duration-300"
                      >
                        <div>
                          <span className="text-[#16BDF0] type-eyebrow block mb-3">
                            {item.category}
                          </span>
                          <CardTitle as="h4" className="mb-2 group-hover:text-[#16BDF0] transition-colors">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="mb-6 line-clamp-3">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center justify-between border-t border-[rgba(247,248,250,0.06)] pt-4 mt-2">
                          <span className="text-[#7F8A98] type-caption">{item.readTime || '5 min de leitura'}</span>
                          <span className="w-7 h-7 rounded-full bg-[#16BDF0]/10 group-hover:bg-[#16BDF0] text-[#16BDF0] group-hover:text-[#050B16] flex items-center justify-center transition-all">
                            <ChevronRight className="w-4.5 h-4.5" />
                          </span>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            4. RESOURCE MATERIALS DOWNLOAD ROW (3 Cards horizontais)
            ================================================== */}
        <Section spacing="compact" className="border-b border-white/5">
          <Container size="xl">
            <AnimatedSection>
              <SectionHeading
                eyebrow="RECURSOS DE SUPORTE"
                title="Materiais e Ferramentas Prontas"
                align="center"
                className="mb-10 max-w-2xl mx-auto"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Row 1: Guias e e-books */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(22, 189, 240, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(22, 189, 240, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col h-full cursor-pointer"
                >
                  <Card variant="solid" className="p-6 flex items-center justify-between h-full group border-inherit transition-colors duration-300">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-[#16BDF0]/10 border border-[#16BDF0]/20 flex items-center justify-center text-[#16BDF0] shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle as="h4" className="mb-0.5">{siteContent.contentPage.materials[0].title}</CardTitle>
                        <CardDescription>{siteContent.contentPage.materials[0].description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#7F8A98] group-hover:text-white transition-colors" />
                  </Card>
                </motion.div>

                {/* Row 2: Materiais pedagógicos */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(37, 211, 102, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(37, 211, 102, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col h-full cursor-pointer"
                >
                  <Card variant="solid" className="p-6 flex items-center justify-between h-full group border-inherit transition-colors duration-300">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#25D366] shrink-0">
                        <Puzzle className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle as="h4" className="mb-0.5">{siteContent.contentPage.materials[1].title}</CardTitle>
                        <CardDescription>{siteContent.contentPage.materials[1].description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#7F8A98] group-hover:text-white transition-colors" />
                  </Card>
                </motion.div>

                {/* Row 3: Modelos para empresas */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.025, 
                    y: -4,
                    borderColor: "rgba(168, 85, 247, 0.48)",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 25px rgba(168, 85, 247, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col h-full cursor-pointer"
                >
                  <Card variant="solid" className="p-6 flex items-center justify-between h-full group border-inherit transition-colors duration-300">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle as="h4" className="mb-0.5">{siteContent.contentPage.materials[2].title}</CardTitle>
                        <CardDescription>{siteContent.contentPage.materials[2].description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#7F8A98] group-hover:text-white transition-colors" />
                  </Card>
                </motion.div>

              </div>
            </AnimatedSection>
          </Container>
        </Section>

        {/* ==================================================
            5. NEWSLETTER BOX SECTION (reference-conteudos.png bottom)
            ================================================== */}
        <Section spacing="compact">
          <Container size="lg">
            <AnimatedSection>
              <Card variant="glass" className="w-full min-w-0 p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden border-[#16BDF0]/20 text-left bg-opacity-95 bg-[#08111D]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#16BDF0]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#095BFF]/10 blur-3xl rounded-full" />

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,1fr)] gap-8 items-center relative z-10 w-full min-w-0">
                  
                  <div className="min-w-0 flex flex-col gap-3">
                    <CardTitle as="h3">
                      {siteContent.contentPage.newsletter.title}
                    </CardTitle>
                    <CardDescription>
                      {siteContent.contentPage.newsletter.description} Enviaremos apenas materiais selecionados, artigos e atualizações estratégicas.
                    </CardDescription>
                  </div>

                  <div className="min-w-0 w-full">
                    <form onSubmit={handleNewsletterSubmit} className="w-full min-w-0 flex flex-col gap-3">
                      <div className="flex flex-col xl:flex-row gap-2 w-full min-w-0">
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => {
                            setNewsletterEmail(e.target.value);
                            if (newsletterStatus.type) setNewsletterStatus({ type: null, message: '' });
                          }}
                          placeholder="Seu melhor e-mail"
                          className="w-full min-w-0 flex-1 px-4 py-3 text-sm glass-input font-normal"
                        />
                        <Button
                          type="submit"
                          variant="primary"
                          size="md"
                          className="w-full xl:w-auto shrink-0 whitespace-nowrap"
                        >
                          Quero receber
                        </Button>
                      </div>
                      
                      {newsletterStatus.type === 'success' && (
                        <span className="text-xs text-[#25D366] flex items-center gap-1.5 font-semibold mt-1">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>{newsletterStatus.message}</span>
                        </span>
                      )}
                      {newsletterStatus.type === 'error' && (
                        <span className="text-xs text-red-400 flex items-center gap-1.5 font-semibold mt-1">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{newsletterStatus.message}</span>
                        </span>
                      )}
                    </form>
                  </div>

                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>

      </div>

      {/* ==================================================
          6. DETAILED SIMULATED ARTICLE READER MODAL
          ================================================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B16]/85 backdrop-blur-md animate-fade-in">
          <Card variant="solid" className="w-full max-w-2xl border-[#16BDF0]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[#16BDF0] type-eyebrow text-[10px]">
                  {activeArticle.category}
                </span>
                <CardTitle as="h3">
                  {activeArticle.title}
                </CardTitle>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-[#7F8A98] hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto pr-2 text-left flex-1">
              {activeArticle.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#B6BEC8] type-body mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Footer actions */}
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between">
              <span className="text-[#7F8A98] type-caption">Leitura continuada • +Seven</span>
              <ButtonLink
                to="/contato"
                variant="primary"
                size="md"
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
