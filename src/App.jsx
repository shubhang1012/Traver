import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTraverExists from './components/WhyTraverExists';
import ProductIntro from './components/ProductIntro';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import FutureFeatures from './components/FutureFeatures';
import WhyJoinEarly from './components/WhyJoinEarly';
import VisionSection from './components/VisionSection';
import FounderStory from './components/FounderStory';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <ProductIntro />
        <WhyTraverExists />
        <ProblemSection />
        <HowItWorks />
        <FutureFeatures />
        <WhyJoinEarly />
        <VisionSection />
        <FounderStory />
        <Roadmap />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
