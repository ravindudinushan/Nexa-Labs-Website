import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  useEffect(() => {
    document.title = 'Nexa Labs | Building Next-Gen Digital Solutions';
  }, []);
  return <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>;
}