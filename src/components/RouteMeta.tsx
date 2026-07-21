import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteData {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: string;
  ogLocale: string;
  ogSiteName: string;
  ogUrl: string;
  ogImage: string;
  ogImageWidth: string;
  ogImageHeight: string;
  ogImageType: string;
  ogImageAlt: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterImageAlt: string;
}

const routesConfig: Record<string, RouteData> = {
  '/': {
    title: '+Seven | Orientações Educacionais e Empresariais',
    description: 'Consultoria, orientações e formações para escolas, instituições, MEIs e pequenas empresas, com foco em educação, gestão e desenvolvimento responsável.',
    canonical: 'https://www.maisseven.com.br/',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
    ogImageWidth: '1402',
    ogImageHeight: '1122',
    ogImageType: 'image/webp',
    ogImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções',
    twitterCard: 'summary_large_image',
    twitterTitle: '+Seven | Orientações Educacionais e Empresariais',
    twitterDescription: 'Consultoria, orientações e formações para escolas, instituições, MEIs e pequenas empresas, com foco em educação, gestão e desenvolvimento responsável.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
    twitterImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções'
  },
  '/solucoes': {
    title: 'Soluções em Educação e Gestão | +Seven',
    description: 'Conheça as soluções da +Seven para educação, empresas e formações, com diagnóstico, estratégia e acompanhamento conforme cada realidade.',
    canonical: 'https://www.maisseven.com.br/solucoes',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/solucoes',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/solucoes-hero.webp',
    ogImageWidth: '1586',
    ogImageHeight: '992',
    ogImageType: 'image/webp',
    ogImageAlt: 'Equipe +Seven planejando soluções estratégicas para o desenvolvimento institucional',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Soluções em Educação e Gestão | +Seven',
    twitterDescription: 'Conheça as soluções da +Seven para educação, empresas e formações, com diagnóstico, estratégia e acompanhamento conforme cada realidade.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/solucoes-hero.webp',
    twitterImageAlt: 'Equipe +Seven planejando soluções estratégicas para o desenvolvimento institucional'
  },
  '/sobre': {
    title: 'Sobre a +Seven | Educação, Gestão e Formação',
    description: 'Conheça a atuação da +Seven na conexão entre educação, gestão, formação continuada, equidade racial e desenvolvimento de pequenos negócios.',
    canonical: 'https://www.maisseven.com.br/sobre',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/sobre',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/sobre-hero.webp',
    ogImageWidth: '1586',
    ogImageHeight: '992',
    ogImageType: 'image/webp',
    ogImageAlt: 'Reunião de alinhamento estratégico com equipe da +Seven',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Sobre a +Seven | Educação, Gestão e Formação',
    twitterDescription: 'Conheça a atuação da +Seven na conexão entre educação, gestão, formação continuada, equidade racial e desenvolvimento de pequenos negócios.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/sobre-hero.webp',
    twitterImageAlt: 'Reunião de alinhamento estratégico com equipe da +Seven'
  },
  '/conteudos': {
    title: 'Conteúdos sobre Educação e Gestão | +Seven',
    description: 'Acesse conteúdos da +Seven sobre educação, formação, gestão, processos, equidade racial e desenvolvimento de escolas e pequenos negócios.',
    canonical: 'https://www.maisseven.com.br/conteudos',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/conteudos',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/conteudos-destaque.webp',
    ogImageWidth: '1448',
    ogImageHeight: '1086',
    ogImageType: 'image/webp',
    ogImageAlt: 'Legislação antirracista na prática educacional e debate pedagógico',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Conteúdos sobre Educação e Gestão | +Seven',
    twitterDescription: 'Acesse conteúdos da +Seven sobre educação, formação, gestão, processos, equidade racial e desenvolvimento de escolas e pequenos negócios.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/conteudos-destaque.webp',
    twitterImageAlt: 'Legislação antirracista na prática educacional e debate pedagógico'
  },
  '/contato': {
    title: 'Contato | +Seven',
    description: 'Fale com a +Seven pelo WhatsApp, e-mail ou formulário para apresentar as necessidades da sua escola, instituição ou empresa.',
    canonical: 'https://www.maisseven.com.br/contato',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/contato',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/contato-hero.webp',
    ogImageWidth: '1448',
    ogImageHeight: '1086',
    ogImageType: 'image/webp',
    ogImageAlt: 'Profissional com headset sorrindo pronta para realizar o atendimento consultivo',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contato | +Seven',
    twitterDescription: 'Fale com a +Seven pelo WhatsApp, e-mail ou formulário para apresentar as necessidades da sua escola, instituição ou empresa.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/contato-hero.webp',
    twitterImageAlt: 'Profissional com headset sorrindo pronta para realizar o atendimento consultivo'
  },
  '/politica-de-privacidade': {
    title: 'Política de Privacidade | +Seven',
    description: 'Saiba como a +Seven lida com a segurança dos seus dados pessoais em conformidade com as diretrizes da LGPD.',
    canonical: 'https://www.maisseven.com.br/politica-de-privacidade',
    robots: 'index,follow',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: '+Seven',
    ogUrl: 'https://www.maisseven.com.br/politica-de-privacidade',
    ogImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
    ogImageWidth: '1402',
    ogImageHeight: '1122',
    ogImageType: 'image/webp',
    ogImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Política de Privacidade | +Seven',
    twitterDescription: 'Saiba como a +Seven lida com a segurança dos seus dados pessoais em conformidade com as diretrizes da LGPD.',
    twitterImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
    twitterImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções'
  }
};

const defaultFallback: RouteData = {
  title: 'Página não encontrada | +Seven',
  description: 'A página que você está procurando não foi encontrada ou não existe.',
  canonical: '',
  robots: 'noindex,nofollow',
  ogType: 'website',
  ogLocale: 'pt_BR',
  ogSiteName: '+Seven',
  ogUrl: '',
  ogImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
  ogImageWidth: '1402',
  ogImageHeight: '1122',
  ogImageType: 'image/webp',
  ogImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Página não encontrada | +Seven',
  twitterDescription: 'A página que você está procurando não foi encontrada ou não existe.',
  twitterImage: 'https://www.maisseven.com.br/assets/images/site/hero-home.webp',
  twitterImageAlt: 'Equipe +Seven trabalhando em conjunto e planejando soluções'
};

const ensureMetaByName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const ensureMetaByProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const ensureCanonical = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  if (href) {
    element.setAttribute('href', href);
  } else {
    element.removeAttribute('href');
  }
};

export default function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const data = routesConfig[pathname] || {
      ...defaultFallback,
      canonical: window.location.origin + pathname,
      ogUrl: window.location.origin + pathname
    };

    // Update title
    document.title = data.title;

    // Update names
    ensureMetaByName('description', data.description);
    ensureMetaByName('robots', data.robots);
    ensureMetaByName('twitter:card', data.twitterCard);
    ensureMetaByName('twitter:title', data.twitterTitle);
    ensureMetaByName('twitter:description', data.twitterDescription);
    ensureMetaByName('twitter:image', data.twitterImage);
    ensureMetaByName('twitter:image:alt', data.twitterImageAlt);

    // Update link
    ensureCanonical(data.canonical);

    // Update properties
    ensureMetaByProperty('og:type', data.ogType);
    ensureMetaByProperty('og:locale', data.ogLocale);
    ensureMetaByProperty('og:site_name', data.ogSiteName);
    ensureMetaByProperty('og:title', data.title);
    ensureMetaByProperty('og:description', data.description);
    ensureMetaByProperty('og:url', data.ogUrl || window.location.origin + pathname);
    ensureMetaByProperty('og:image', data.ogImage);
    ensureMetaByProperty('og:image:width', data.ogImageWidth);
    ensureMetaByProperty('og:image:height', data.ogImageHeight);
    ensureMetaByProperty('og:image:type', data.ogImageType);
    ensureMetaByProperty('og:image:alt', data.ogImageAlt);
  }, [location.pathname]);

  return null;
}
