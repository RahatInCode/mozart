import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      
      {/* Placeholder for future sections */}
      <section id="about" className="section bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto py-20">
            <h2 className="text-section font-heading font-bold text-neutral-dark mb-6">
              More Sections Coming Soon
            </h2>
            <p className="text-body-lg text-neutral-gray">
              We'll build the Features, Products, Statistics, Testimonials, 
              and Blog sections in the next steps!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

