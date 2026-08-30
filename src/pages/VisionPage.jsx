import Navbar from '../components/Navbar';
import VisionSection from '../components/VisionSection';
import WhyTraverExists from '../components/WhyTraverExists';
import FounderStory from '../components/FounderStory';
import Footer from '../components/Footer';

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main id="content" style={{ paddingTop: 'var(--nav-height)' }}>
        <VisionSection />
        <WhyTraverExists />
        <FounderStory />
      </main>
      <Footer />
    </>
  );
}
