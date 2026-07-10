import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTraverExists from './components/WhyTraverExists';
import TraverPrompts from './components/TraverPrompts';
import ProductIntro from './components/ProductIntro';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import FutureFeatures from './components/FutureFeatures';
import WhyJoinEarly from './components/WhyJoinEarly';
import VisionSection from './components/VisionSection';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CareersPage from './pages/CareersPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <ProductIntro />
        <WhyTraverExists />
        <TraverPrompts />
        <ProblemSection />
        <HowItWorks />
        <FutureFeatures />
        <WhyJoinEarly />
        <VisionSection />
        <Roadmap />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
