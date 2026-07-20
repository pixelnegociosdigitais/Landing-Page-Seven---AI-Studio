import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { Container, ButtonLink } from './ui';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
  }, []);

  // Close mobile menu on escape key and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Scroll to top and close menu on navigation path change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize back to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        className="fixed top-0 left-0 w-full z-40 transition-all duration-300 flex items-center h-[70px] md:h-[78px] lg:h-[86px] border-b border-[var(--border-subtle)]"
        style={{
          background: isScrolled ? 'rgba(13, 15, 20, 0.96)' : 'rgba(13, 15, 20, 0.84)',
          backdropFilter: 'blur(17px)',
          WebkitBackdropFilter: 'blur(17px)',
          boxShadow: isScrolled ? '0 10px 32px rgba(0, 0, 0, 0.22)' : 'none'
        }}
      >
        <Container size="xl" className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg p-1 flex items-center shrink-0"
            aria-label="Ir para a página inicial"
          >
            <BrandLogo
              variant="negative"
              className="w-[145px] md:w-[170px] lg:w-[195px] h-auto object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu Principal">
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
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--brand-cyan)] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center shrink-0">
            <ButtonLink
              to="/contato"
              variant="primary"
              size="sm"
              className="group"
              rightIcon={<Calendar className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Agende seu diagnóstico
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 bg-[var(--surface-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] text-[var(--text-primary)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </header>
 
      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-navigation"
        className={`fixed top-[70px] md:top-[78px] left-0 w-full z-30 lg:hidden bg-[var(--surface-glass-strong)] backdrop-blur-lg border-b border-[var(--border-subtle)] shadow-[0_10px_32px_rgba(0,0,0,0.22)] py-6 px-6 flex flex-col gap-5 transition-all duration-300 ease-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2" aria-label="Menu Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full min-h-[48px] flex items-center px-4 type-navigation transition-colors duration-200 focus:outline-none focus:text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--brand-cyan)] rounded-lg relative ${
                  isActive
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-[var(--brand-cyan)] rounded-full" />
                  )}
                  <span>{link.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="pt-2">
          <ButtonLink
            to="/contato"
            variant="primary"
            size="md"
            fullWidth
            onClick={() => setIsMobileMenuOpen(false)}
            rightIcon={<Calendar className="w-5 h-5" />}
          >
            Agende seu diagnóstico
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
