import React from 'react';
import './index.css';

// Components
import FloatingDockNavbar from './components/FloatingDockNavbar';
import MeteorEffect from './components/MeteorEffect';
import FeatureCards from './components/FeatureCards';
import CardStack from './components/CardStack';
import Footer from './components/Footer';
// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TrainersSection from './sections/TrainersSection';
import PricingSection from './sections/PricingSection';
import GallerySection from './sections/GallerySection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <MeteorEffect />
      
      {/* Navigation */}
      <FloatingDockNavbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Feature Cards */}
        <FeatureCards />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Trainers Section */}
        <TrainersSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Gallery Section */}
        <GallerySection />
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <CardStack />
        </section>
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
