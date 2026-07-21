export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContentItem {
  id: string;
  category: 'EDUCAÇÃO' | 'EMPRESAS' | 'FORMAÇÕES' | 'MATERIAIS';
  title: string;
  description: string;
  readTime?: string;
  imageUrl?: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteContent = {
  brand: {
    name: "+Seven",
    tagline: "Orientações Educacionais e Empresariais",
    description: "Educação, gestão e estratégia para transformar realidades.",
    copyright: "© 2026 +Seven. Todos os direitos reservados."
  },
  contact: {
    whatsapp: "5554981112788",
    whatsappLink: "https://wa.me/5554981112788",
    whatsappDisplay: "(54) 98111-2788",
    email: "contato@maisseven.com.br",
    instagram: "@maissevenorientacoes",
    instagramLink: "https://www.instagram.com/maissevenorientacoes/",
    address: "Rio Grande do Sul, Brasil"
  },
  home: {
    hero: {
      tag: "ORIENTAÇÕES EDUCACIONAIS E EMPRESARIAIS",
      title: "Consultoria e formações para escolas, MEIs e MPEs crescerem com clareza, propósito e resultado.",
      highlight: "clareza, propósito e resultado.",
      description: "Educação, gestão e estratégia para transformar realidades, fortalecer pessoas e construir caminhos mais consistentes.",
      ctaPrimary: "Agende seu diagnóstico",
      ctaSecondary: "Conheça nossas soluções"
    },
    educationSection: {
      title: "Educação antirracista com conhecimento, responsabilidade e prática.",
      description: "Formações e materiais para apoiar escolas e educadores na aplicação das Leis 10.639/03 e 11.645/08 de forma consciente, respeitosa e transformadora."
    },
    businessSection: {
      title: "Estratégia para pequenos negócios crescerem com mais segurança.",
      description: "Orientação, planejamento e acompanhamento para MEIs e micro e pequenas empresas organizarem decisões, processos e próximos passos."
    },
    ctaFinal: {
      title: "O próximo passo começa com uma boa conversa."
    }
  },
  solutions: {
    hero: {
      tag: "NOSSAS SOLUÇÕES",
      title: "Soluções para transformar desafios em resultados.",
      highlight: "transformar desafios",
      description: "Educação, gestão e formação desenvolvidas para a realidade de cada instituição ou empresa.",
      ctaPrimary: "Conheça nossas soluções",
      ctaSecondary: "Fale no WhatsApp"
    },
    panel: [
      { id: "diagnostico", title: "Diagnóstico", description: "Análise profunda da realidade atual." },
      { id: "estrategia", title: "Estratégia", description: "Planejamento focado em objetivos." },
      { id: "acompanhamento", title: "Acompanhamento", description: "Suporte contínuo para garantir resultados." }
    ],
    cards: [
      {
        id: "educacao",
        title: "Educação",
        description: "Formações, projetos e materiais para escolas que desejam avançar com inclusão, propósito e qualidade.",
        iconName: "GraduationCap"
      },
      {
        id: "empresas",
        title: "Empresas",
        description: "Orientação, planejamento e organização para MEIs e MPEs crescerem com mais segurança.",
        iconName: "Briefcase"
      },
      {
        id: "formacoes",
        title: "Formações",
        description: "Treinamentos práticos para educadores, gestores, lideranças e equipes.",
        iconName: "Users"
      }
    ] as SolutionCard[],
    process: [
      { step: "1", title: "Entender", description: "Escutamos sua realidade e identificamos desafios." },
      { step: "2", title: "Planejar", description: "Criamos estratégias personalizadas." },
      { step: "3", title: "Aplicar", description: "Colocamos o plano em prática com acompanhamento." },
      { step: "4", title: "Acompanhar", description: "Avaliamos resultados e promovemos melhorias." }
    ],
    cta: {
      title: "Qual solução faz sentido para sua realidade?",
      description: "Converse com a +Seven e receba uma orientação inicial."
    }
  },
  about: {
    hero: {
      tag: "SOBRE A +SEVEN",
      title: "Conhecimento que aproxima. Estratégia que transforma.",
      highlight: "transforma.",
      description: "A +Seven conecta educação, gestão e desenvolvimento para gerar mudanças possíveis e duradouras."
    },
    essence: {
      title: "NOSSA ESSÊNCIA",
      description: "A +Seven nasceu para ajudar pessoas, escolas e negócios a encontrarem direção. Unimos escuta, conhecimento e soluções práticas para transformar desafios em caminhos claros."
    },
    pilares: {
      title: "NOSSOS PILARES",
      items: [
        { title: "Educação antirracista e inclusiva", iconName: "ShieldAlert" },
        { title: "Desenvolvimento humano", iconName: "Heart" },
        { title: "Estratégia com propósito", iconName: "Compass" },
        { title: "Ética e responsabilidade", iconName: "Fingerprint" }
      ]
    },
    howWeAct: {
      title: "NOSSA FORMA DE ATUAR",
      cards: [
        { title: "Escutamos", description: "Entendemos a realidade antes de apresentar soluções.", iconName: "Activity" },
        { title: "Construímos", description: "Cada projeto é desenvolvido conforme o contexto do cliente.", iconName: "Layers" },
        { title: "Acompanhamos", description: "A transformação continua depois da entrega.", iconName: "LineChart" }
      ]
    },
    cta: {
      title: "Mais do que orientar, queremos construir junto.",
      description: "Vamos transformar realidades com propósito e resultados."
    }
  },
  contentPage: {
    hero: {
      tag: "CONTEÚDOS",
      title: "Conteúdos para aprender, aplicar e transformar.",
      highlight: "transformar.",
      description: "Ideias, materiais e orientações sobre educação, gestão e desenvolvimento."
    },
    featured: {
      id: "featured-1",
      category: "EDUCAÇÃO" as const,
      title: "Educação antirracista: da legislação à prática",
      description: "Como aplicar as Leis 10.639/03 e 11.645/08 com clareza, respeito e propósito.",
      readTime: "8 min de leitura"
    },
    recent: [
      {
        id: "recent-1",
        category: "EMPRESAS" as const,
        title: "Planejamento estratégico para pequenos negócios",
        description: "Como definir objetivos claros e organizar os processos para um crescimento sustentável.",
        readTime: "6 min de leitura"
      },
      {
        id: "recent-2",
        category: "EDUCAÇÃO" as const,
        title: "Liderança humanizada nas escolas",
        description: "Práticas de gestão escolar focadas no acolhimento, desenvolvimento de pessoas e empatia.",
        readTime: "6 min de leitura"
      },
      {
        id: "recent-3",
        category: "FORMAÇÕES" as const,
        title: "Gestão escolar eficiente: por onde começar",
        description: "Ferramentas essenciais para coordenadores e diretores organizarem o dia a dia pedagógico.",
        readTime: "7 min de leitura"
      }
    ] as ContentItem[],
    materials: [
      {
        id: "mat-1",
        title: "Guias e e-books",
        description: "Conteúdos práticos para estudar e aplicar.",
        iconName: "BookOpen"
      },
      {
        id: "mat-2",
        title: "Materiais pedagógicos",
        description: "Recursos prontos para educadores e escolas.",
        iconName: "Puzzle"
      },
      {
        id: "mat-3",
        title: "Modelos para empresas",
        description: "Ferramentas que facilitam a gestão do seu negócio.",
        iconName: "Sparkles"
      }
    ],
    newsletter: {
      title: "Receba conteúdos úteis, sem excesso de mensagens.",
      description: "Materiais, artigos e novidades diretamente no seu e-mail."
    }
  },
  contactPage: {
    hero: {
      tag: "CONTATO",
      title: "Vamos conversar sobre o próximo passo?",
      highlight: "próximo passo",
      description: "Conte brevemente o que sua escola, instituição ou empresa precisa. A +Seven entra em contato para entender sua realidade."
    },
    faq: [
      {
        question: "Como funciona o diagnóstico inicial?",
        answer: "É uma conversa inicial para identificar necessidades e avaliar quais soluções fazem sentido para o contexto apresentado."
      },
      {
        question: "As formações podem ser presenciais ou online?",
        answer: "As modalidades e formatos são definidos conforme a proposta e a localização de cada cliente, podendo ser totalmente presenciais, online ou híbridas."
      },
      {
        question: "A +Seven atende escolas públicas e privadas?",
        answer: "Sim. Nossas soluções de orientação, formações e materiais atendem tanto escolas privadas quanto redes públicas, além de empresas de diferentes portes."
      },
      {
        question: "Como solicitar uma proposta?",
        answer: "Você pode preencher o formulário ao lado com suas informações e perfil, ou entrar em contato direto pelo WhatsApp. Responderemos o quanto antes para agendar uma conversa."
      }
    ] as FAQItem[]
  }
};
