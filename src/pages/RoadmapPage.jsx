import Navbar from '../components/Navbar';
import Roadmap from '../components/Roadmap';
import WhyJoinEarly from '../components/WhyJoinEarly';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main id="content" style={{ paddingTop: 'var(--nav-height)' }}>
        <Roadmap />
        <WhyJoinEarly />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
