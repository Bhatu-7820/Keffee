import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FramedWindow from './components/FramedWindow';
import FullWidthBanner from './components/FullWidthBanner';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FramedWindow />
        <FullWidthBanner />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <BookingSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Global mobile responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          :root {
            --section-pad-desktop: 60px;
            --container-pad: 20px;
          }
          .section-header {
            margin-bottom: 40px !important;
          }
        }
        @media (max-width: 480px) {
          :root {
            --section-pad-desktop: 52px;
          }
        }
      `}</style>
    </>
  );
}
