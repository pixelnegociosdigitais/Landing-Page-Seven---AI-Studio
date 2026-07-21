import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import RouteMeta from './components/RouteMeta';

// Pages
import HomePage from './pages/HomePage';

// Lazy-loaded pages
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteFallback() {
  return (
    <div
      className="
        flex
        min-h-[50vh]
        items-center
        justify-center
        bg-[var(--background-primary)]
        px-5
      "
    >
      <p
        role="status"
        aria-live="polite"
        className="type-body-small text-[var(--text-secondary)]"
      >
        Carregando página…
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <RouteMeta />
      <div className="flex flex-col min-h-screen bg-[#0D0F14] text-[#F7F8FA] antialiased selection:bg-[#16BDF0]/30 selection:text-white">
        
        {/* Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brand-cyan)] focus:text-[#0D0F14] focus:font-medium focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Pular para o conteúdo
        </a>

        {/* Compact Premium Header */}
        <Header />

        {/* Main Routed Content */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solucoes" element={<SolutionsPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/conteudos" element={<ContentPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Floating WhatsApp Action Trigger */}
        <WhatsAppButton />

        {/* Floating Scroll to Top button */}
        <ScrollToTop />

        {/* Brand Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
