import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            {/* Logo Container */}
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center">
                {/* Replace with your actual logo */}
                <img 
                  src="/path-to-your-logo.png" 
                  alt="Nexa Labs" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                {/* Fallback logo if image not available */}
                <div className="text-2xl font-bold text-primary group-hover:text-bright-blue transition-colors duration-300">
                  NL
                </div>
              </div>
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-bright-blue/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-md opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              } group-hover:text-bright-blue`}>
                NEXA LABS
              </span>
              <span className={`text-xs leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Digital Innovation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? 'text-primary hover:text-bright-blue' : 'text-white hover:text-bright-blue'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bright-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-bright-blue hover:shadow-bright-blue/25' 
                  : 'bg-white text-primary hover:bg-bright-blue hover:text-white hover:shadow-white/25'
              }`}>
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-primary' : 'bg-white'
              } ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-primary' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-primary' : 'bg-white'
              } ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-primary hover:text-bright-blue' : 'text-white hover:text-bright-blue'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <button className={`w-full px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary text-white hover:bg-bright-blue' 
                    : 'bg-white text-primary hover:bg-bright-blue hover:text-white'
                }`}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;