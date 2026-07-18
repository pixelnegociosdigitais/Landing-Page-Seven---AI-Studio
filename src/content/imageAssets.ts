export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    alt: "Equipe +Seven trabalhando em conjunto e planejando soluções",
    width: 1000,
    height: 750,
  },

  homeEducation: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    alt: "Aluno negro lendo livro atentamente em sala de aula de forma dedicada",
    width: 800,
    height: 600,
  },

  homeBusiness: {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    alt: "Profissional negra de negócios sorrindo confiante no escritório",
    width: 800,
    height: 600,
  },

  solutionsHero: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Equipe +Seven planejando soluções estratégicas para o desenvolvimento institucional",
    width: 800,
    height: 600,
  },

  aboutHero: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Reunião de alinhamento estratégico com equipe da +Seven",
    width: 800,
    height: 600,
  },

  contentFeatured: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    alt: "Legislação antirracista na prática educacional e debate pedagógico",
    width: 600,
    height: 450,
  },

  contactHero: {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    alt: "Profissional com headset sorrindo pronta para realizar o atendimento consultivo",
    width: 800,
    height: 600,
  },
} satisfies Record<string, SiteImage>;
