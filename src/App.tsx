import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContentPage from './pages/ContentPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0D0F14] text-[#F7F8FA] antialiased selection:bg-[#16BDF0]/30 selection:text-white">
        
        {/* Compact Premium Header */}
        <Header />

        {/* Main Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solucoes" element={<SolutionsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/conteudos" element={<ContentPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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
