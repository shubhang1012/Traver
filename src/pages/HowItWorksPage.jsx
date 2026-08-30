import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import FutureFeatures from '../components/FutureFeatures';
import WhyJoinEarly from '../components/WhyJoinEarly';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main id="content" style={{ paddingTop: 'var(--nav-height)' }}>
        <HowItWorks />
        <FutureFeatures />
        <WhyJoinEarly />
      </main>
      <Footer />
    </>
  );
}
