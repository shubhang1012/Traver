import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TraverPrompts from './components/TraverPrompts';
import ProductIntro from './components/ProductIntro';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ContactModal from './components/ContactModal';
import { ContactModalProvider } from './components/ContactModalContext';
// import CareersPage from './pages/CareersPage'; // Hidden for now — re-enable when ready
import VisionPage from './pages/VisionPage';
import HowItWorksPage from './pages/HowItWorksPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <ProductIntro />
        <TraverPrompts />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <BrowserRouter>
        <PageTransition />
        <ContactModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          {/* <Route path="/careers" element={<CareersPage />} /> */}{/* Hidden for now */}
        </Routes>
      </BrowserRouter>
    </ContactModalProvider>
  );
}
