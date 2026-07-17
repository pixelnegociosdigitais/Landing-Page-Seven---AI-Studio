import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, ArrowUp, Calendar, MapPin } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import BrandLogo from './BrandLogo';
import { Container, ButtonLink } from './ui';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="app-footer"
      className="pt-14 sm:pt-20 pb-0 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <Container size="xl">
        {/* 1. Área Institucional e de Navegação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-11 sm:pb-14">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              to="/"
              className="inline-block self-start focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg p-1 flex items-center"
              aria-label="Ir para a página inicial"
            >
              <BrandLogo
                variant="negative"
                className="w-[175px] sm:w-[195px] lg:w-[220px] h-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-[var(--text-secondary)] type-body-small leading-relaxed max-w-[340px]">
              {siteContent.brand.description} Oferecemos orientações, consultoria estratégica e formações sob medida para o crescimento seguro e com propósito de instituições e empresas.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav className="lg:col-span-2 flex flex-col gap-4" aria-label="Navegação institucional">
            <h4 className="text-[var(--text-primary)] type-footer-title">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/conteudos"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Soluções */}
          <nav className="lg:col-span-3 flex flex-col gap-4" aria-label="Soluções">
            <h4 className="text-[var(--text-primary)] type-footer-title">Soluções</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/solucoes#educacao"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Educação
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes#empresas"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Empresas
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes#formacoes"
                  className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  Formações
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: Contact & Social */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[var(--text-primary)] type-footer-title">Contato Oficial</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 group">
                <Phone className="w-[18px] h-[18px] text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors duration-200 shrink-0" />
                <a
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  {siteContent.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-[18px] h-[18px] text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors duration-200 shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Instagram className="w-[18px] h-[18px] text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors duration-200 shrink-0" />
                <a
                  href={siteContent.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] type-body-small transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1"
                >
                  {siteContent.contact.instagram}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-[18px] h-[18px] text-[var(--text-secondary)] shrink-0" />
                <span className="text-[var(--text-secondary)] type-body-small">
                  {siteContent.contact.address}
                </span>
              </li>
            </ul>
            <div className="mt-2">
              <ButtonLink
                to="/contato"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                rightIcon={<Calendar className="w-4 h-4" />}
              >
                Agendar Atendimento
              </ButtonLink>
            </div>
          </div>

        </div>

        {/* 2. Faixa Inferior Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 type-caption text-[var(--text-muted)] border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{siteContent.brand.copyright}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-right">
            <Link
              to="/politica-de-privacidade"
              className="hover:text-[var(--brand-cyan)] transition-colors duration-200 focus:outline-none focus:text-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)] rounded px-1 underline decoration-transparent hover:decoration-current underline-offset-2"
            >
              Política de Privacidade
            </Link>
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 type-button hover:text-[var(--brand-cyan)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg px-2 py-1"
              aria-label="Voltar para o topo"
            >
              <span>Voltar ao topo</span>
              <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[var(--border-accent)] group-hover:text-[var(--brand-cyan)] flex items-center justify-center transition-all duration-200">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

