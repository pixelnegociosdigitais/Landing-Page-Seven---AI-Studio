export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const siteImages = {
  hero: {
    src: "/assets/images/site/hero-home.webp",
    alt: "Equipe +Seven trabalhando em conjunto e planejando soluções",
    width: 1402,
    height: 1122,
  },

  homeEducation: {
    src: "/assets/images/site/home-educacao.webp",
    alt: "Aluno negro lendo livro atentamente em sala de aula de forma dedicada",
    width: 1448,
    height: 1086,
  },

  homeBusiness: {
    src: "/assets/images/site/home-negocios.webp",
    alt: "Profissional negra de negócios sorrindo confiante no escritório",
    width: 1448,
    height: 1086,
  },

  solutionsHero: {
    src: "/assets/images/site/solucoes-hero.webp",
    alt: "Equipe +Seven planejando soluções estratégicas para o desenvolvimento institucional",
    width: 1586,
    height: 992,
  },

  aboutHero: {
    src: "/assets/images/site/sobre-hero.webp",
    alt: "Reunião de alinhamento estratégico com equipe da +Seven",
    width: 1586,
    height: 992,
  },

  contentFeatured: {
    src: "/assets/images/site/conteudos-destaque.webp",
    alt: "Legislação antirracista na prática educacional e debate pedagógico",
    width: 1448,
    height: 1086,
  },

  contactHero: {
    src: "/assets/images/site/contato-hero.webp",
    alt: "Profissional com headset sorrindo pronta para realizar o atendimento consultivo",
    width: 1448,
    height: 1086,
  },
} satisfies Record<string, SiteImage>;
