import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import ProblemSection from '../components/ProblemSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main id="content" style={{ paddingTop: 'var(--nav-height)' }}>
        <FAQ />
        <ProblemSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
