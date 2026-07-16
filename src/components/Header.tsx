import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll handler for translucent glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct values
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Listen to location changes to recalculate on route switches

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on navigation path change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Conteúdos', path: '/conteudos' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: 'rgba(13, 15, 20, 0.92)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(22, 189, 240, 0.12)'
        }}
      >
        <div className="page-shell flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg p-1 flex items-center"
            aria-label="Ir para a página inicial"
          >
            <BrandLogo
              variant="negative"
              className="w-[140px] md:w-[165px] lg:w-[195px] h-auto"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu Principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 type-navigation transition-colors duration-200 hover:text-[var(--text-primary)] focus:outline-none focus:text-[var(--text-primary)] ${
                    isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--brand-cyan)] rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contato"
              className="relative overflow-hidden group px-5 py-2.5 rounded-lg type-button text-white border border-[var(--border-subtle)] transition-all duration-200 hover:-translate-y-[2px] active:scale-98 flex items-center gap-2 shadow-md shadow-black/20 hover:shadow-lg"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span>Agende seu diagnóstico</span>
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-30 md:hidden bg-[var(--surface-glass-strong)] backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 ease-out border-l border-[var(--border-subtle)] ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6" aria-label="Menu Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `type-navigation transition-all py-2 focus:outline-none focus:text-[var(--brand-cyan)] ${
                  isActive ? 'text-[var(--text-primary)] border-b-2 border-[var(--brand-cyan)]' : 'text-[var(--text-secondary)] border-b border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Call to Action at Bottom */}
        <div className="flex flex-col gap-4">
          <Link
            to="/contato"
            className="w-full py-4 rounded-xl text-center type-button text-white border border-[var(--border-subtle)] transition-all duration-200 hover:-translate-y-[2px] flex items-center justify-center gap-2 shadow-md shadow-black/20"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span>Agende seu diagnóstico</span>
            <Calendar className="w-5 h-5" />
          </Link>
          <p className="text-center text-xs text-[var(--text-muted)] mt-2 font-medium">
            {siteContent.brand.name} • {siteContent.brand.tagline}
          </p>
        </div>
      </div>
    </>
  );
}
