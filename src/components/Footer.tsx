import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, ArrowUp, Calendar } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="app-footer"
      className="pt-16 pb-8 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >

      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link
              to="/"
              className="inline-block self-start focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg p-1 flex items-center"
              aria-label="Ir para a página inicial"
            >
              <BrandLogo
                variant="negative"
                className="w-[160px] lg:w-[210px] h-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">
              {siteContent.brand.description} Oferecemos orientações, consultoria estratégica e formações sob medida para o crescimento seguro e com propósito de instituições e empresas.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={siteContent.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--border-accent)] hover:text-[var(--brand-cyan)] flex items-center justify-center text-[var(--text-secondary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--border-accent)] hover:text-[var(--brand-cyan)] flex items-center justify-center text-[var(--text-secondary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={siteContent.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--border-accent)] hover:text-[var(--brand-cyan)] flex items-center justify-center text-[var(--text-secondary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]">Início</Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]">Soluções</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/conteudos" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]">Conteúdos</Link>
              </li>
              <li>
                <Link to="/contato" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & quick action */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider">Contato Oficial</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors" />
                <a
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]"
                >
                  {siteContent.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Instagram className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors" />
                <a
                  href={siteContent.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] text-sm font-medium transition-colors focus:outline-none focus:text-[var(--brand-cyan)]"
                >
                  {siteContent.contact.instagram}
                </a>
              </li>
            </ul>
            <div className="mt-2">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] bg-white/5 hover:bg-white/10 border border-[var(--border-subtle)] rounded-lg px-4 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] group"
              >
                <Calendar className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] transition-colors" />
                <span>Agendar Atendimento</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="font-medium">{siteContent.brand.copyright}</span>
            <span className="hidden md:inline text-white/10">|</span>
            <Link
              to="/politica-de-privacidade"
              className="hover:text-[var(--brand-cyan)] font-medium transition-colors focus:outline-none underline decoration-transparent hover:decoration-current underline-offset-2"
            >
              Política de Privacidade
            </Link>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 font-semibold hover:text-[var(--brand-cyan)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg px-2 py-1"
            aria-label="Voltar para o topo"
          >
            <span>Voltar ao topo</span>
            <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[var(--border-accent)] group-hover:text-[var(--brand-cyan)] flex items-center justify-center transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
