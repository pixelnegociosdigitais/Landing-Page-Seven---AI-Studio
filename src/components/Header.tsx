import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { siteContent } from '../content/siteContent';

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

  // Logo component using the high-quality uncorrupted images from public stacked vertically
  const Logo = () => {
    return (
      <div className="flex flex-col items-center justify-center py-1">
        <img
          src="/assets/brand/Numero 7 logo +Seven.png"
          alt="+Seven Icon"
          className="h-10 sm:h-12 w-auto object-contain block"
          referrerPolicy="no-referrer"
        />
        <img
          src="/assets/brand/Texto 3D +Seven.png"
          alt="+Seven Text"
          className="h-5 sm:h-6 w-auto object-contain block -mt-1.5"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#050B16]/85 backdrop-blur-md border-[rgba(22,189,240,0.15)] py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="page-shell flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#16BDF0] rounded-lg p-1" aria-label="+Seven Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu Principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#16BDF0] focus:outline-none focus:text-[#16BDF0] ${
                    isActive ? 'text-white' : 'text-[#B6BEC8]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#16BDF0] rounded-full animate-fade-in" />
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
              className="relative overflow-hidden group px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#095BFF] hover:bg-[#095BFF]/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#095BFF]/20 hover:shadow-[#095BFF]/35 active:scale-98"
            >
              <span>Agende seu diagnóstico</span>
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#B6BEC8] hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#16BDF0]"
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
        className={`fixed inset-0 z-30 md:hidden bg-[#050B16] flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/50 to-transparent -z-10 pointer-events-none" />
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6" aria-label="Menu Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-2xl font-bold tracking-wide transition-colors py-2 border-b border-[rgba(247,248,250,0.06)] focus:outline-none focus:text-[#16BDF0] ${
                  isActive ? 'text-[#16BDF0]' : 'text-[#B6BEC8] hover:text-white'
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
            className="w-full py-4 rounded-xl text-center font-bold text-white bg-[#095BFF] hover:bg-[#095BFF]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#095BFF]/15"
          >
            <span>Agende seu diagnóstico</span>
            <Calendar className="w-5 h-5" />
          </Link>
          <p className="text-center text-xs text-[#7F8A98] mt-2 font-medium">
            {siteContent.brand.name} • {siteContent.brand.tagline}
          </p>
        </div>
      </div>
    </>
  );
}
